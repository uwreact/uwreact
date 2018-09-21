import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';
import produce from 'immer';

import { Button, Input, LinkButton } from 'components';
import { Firebase } from 'importables';
import { login } from 'restatables';

import logo from 'resources/svg/logo/react-horizontal.svg';

import styles from './Login.scss';

const boundStyles = classNames.bind(styles);

/**
 * TODO:

 https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize
 ?client_id=350d760d-cf3a-4aa5-b663-71ad2946ea67
 &response_type=id_token+token
 &redirect_uri=https://uwreact.ca/dashboard
 &scope=openid
 &response_mode=fragment
 &state=12345
 &nonce=678910
 &prompt=consent

 */

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      signUp: false,
    };
    login.connect(this);
  }

  componentWillUnmount() {
    login.disconnect(this);
  }

  onSubmit = async event => {
    const { email, password, signUp } = this.state;

    event.preventDefault();

    const firebase = await Firebase.import();

    try {
      await (signUp
        ? firebase.auth().createUserWithEmailAndPassword(email, password)
        : firebase.auth().signInWithEmailAndPassword(email, password));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  onChangeEmail = email => {
    this.setState({ email, error: '' });
  };

  onChangePassword = password => {
    this.setState({ password, error: '' });
  };

  onChangeConfirmPassword = confirmPassword => {
    this.setState({ confirmPassword, error: '' });
  };

  switchForm = () => {
    this.setState(
      produce(draft => {
        draft.signUp = !draft.signUp;
      }),
    );
  };

  render() {
    const { loaded, user, email, password, confirmPassword, error, signUp } = this.state;

    const formCardStyles = boundStyles({
      card: true,
      formCard: true,
      extendedFormCard: signUp,
    });

    return (
      loaded &&
      (user ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className={styles.login}>
          <div className={formCardStyles}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span className={styles.prompt}>
              {signUp ? 'Create a UW REACT account' : 'Log in with your UW REACT account'}
            </span>
            <form className={styles.form} id="login" onSubmit={this.onSubmit}>
              <Input
                value={email}
                onChange={this.onChangeEmail}
                form="login"
                placeholder="Email"
                type="email"
              />
              <Input
                value={password}
                onChange={this.onChangePassword}
                form="login"
                placeholder="Password"
                type="password"
              />
              {signUp && (
                <Input
                  value={confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                  form="login"
                  placeholder="Confirm your password"
                  type="password"
                />
              )}
              <Button
                disabled={
                  !email ||
                  !password ||
                  (signUp && (!confirmPassword || password !== confirmPassword)) ||
                  !!error
                }
                form="login"
              >
                {signUp ? 'Sign Up' : 'Log In'}
              </Button>
            </form>
            <span className={styles.error}>{error}</span>
          </div>
          <div className={classNames(styles.card, styles.switchCard)}>
            <span>{signUp ? 'Already have an account? ' : "Don't have an account? "}</span>
            <LinkButton onClick={this.switchForm}>{signUp ? 'Log In' : 'Sign Up'}</LinkButton>
          </div>
        </div>
      ))
    );
  }
}

export default Login;
