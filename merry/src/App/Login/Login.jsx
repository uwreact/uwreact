import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import qs from 'qs';

import { Button, Input, TextButton } from 'components';
import { Firebase } from 'modules';
import { user } from 'state';
import { trimQuery } from 'utilities';

import logo from 'resources/svg/logos/react-horizontal.svg';

import styles from './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      signUp: false,
      redirect: '/dashboard',
    };
    user.connect(
      this,
      ['loaded', 'auth'],
    );
  }

  componentDidMount() {
    const { location } = this.props;

    const { signUp, redirect } = qs.parse(trimQuery(location.search));

    this.setState({ ...(signUp ? { signUp } : {}), ...(redirect ? { redirect } : {}) });
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

  render() {
    const { loaded, auth, email, password, confirmPassword, error, signUp, redirect } = this.state;

    return (
      loaded &&
      (auth ? (
        <Redirect to={redirect} />
      ) : (
        <div className={styles.login}>
          <div className={styles.card}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span className={styles.prompt}>
              {signUp ? 'Create a UW REACT account' : 'Log in with your UW REACT account'}
            </span>
            <form className={styles.form} id="login" onSubmit={this.onSubmit}>
              <Input
                className={styles.spacing}
                value={email}
                onChange={value => this.setState({ email: value, error: '' })}
                form="login"
                placeholder="Email"
                type="email"
              />
              <Input
                className={styles.spacing}
                value={password}
                onChange={value => this.setState({ password: value, error: '' })}
                form="login"
                placeholder="Password"
                type="password"
              />
              {signUp && (
                <Input
                  className={styles.spacing}
                  value={confirmPassword}
                  onChange={value => this.setState({ confirmPassword: value, error: '' })}
                  form="login"
                  placeholder="Confirm your password"
                  type="password"
                />
              )}
              <Button
                className={styles.spacing}
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
            {error && <span className={styles.error}>{error}</span>}
          </div>
          <div className={styles.switchCard}>
            <span>{signUp ? 'Already have an account? ' : "Don't have an account? "}</span>
            <TextButton
              className={styles.switchButton}
              onClick={() => this.setState(state => ({ signUp: !state.signUp }))}
            >
              {signUp ? 'Log In' : 'Sign Up'}
            </TextButton>
          </div>
        </div>
      ))
    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Login;
