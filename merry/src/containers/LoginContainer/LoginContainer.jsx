import React from 'react';
import PropTypes from 'prop-types';
import { Provider, Subscribe, Container } from 'unstated';

class LoginContainer extends Container {
  constructor() {
    super();
    this.state = {
      loaded: false,
      loggedIn: false,
      email: '',
    };

    (async () => {
      const firebase = await import('firebase/app');

      firebase.auth().onAuthStateChanged(user => {
        this.setState({ loaded: true, loggedIn: !!user, email: user ? user.email : '' });
      });
    })();
  }
}

const Login = new LoginContainer();

const LoginProvider = props => {
  const { inject, children } = props;

  return <Provider inject={inject}>{children}</Provider>;
};

LoginProvider.propTypes = {
  inject: PropTypes.arrayOf(PropTypes.instanceOf(Container)),
  children: PropTypes.node.isRequired,
};

LoginProvider.defaultProps = {
  inject: [Login],
};

const LoginSubscribe = props => {
  const { to, children } = props;

  return <Subscribe to={to}>{children}</Subscribe>;
};

LoginSubscribe.propTypes = {
  to: PropTypes.arrayOf(PropTypes.instanceOf(Container)),
  children: PropTypes.func.isRequired,
};

LoginSubscribe.defaultProps = {
  to: [Login],
};

export default LoginContainer;
