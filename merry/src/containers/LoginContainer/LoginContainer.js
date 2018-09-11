import { Container } from 'unstated';

class LoginContainer extends Container {
  state = {
    loaded: false,
    loggedIn: false,
    email: '',
  };

  initialize = async () => {
    const firebase = await import('firebase/app');

    firebase
      .auth()
      .onAuthStateChanged(user =>
        this.setState({ loaded: true, loggedIn: !!user, email: user ? user.email : '' }),
      );
  };
}

export default LoginContainer;
