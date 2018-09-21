import Restatable from 'restatable';

import { Firebase } from 'importables';

const login = new Restatable({
  loaded: false,
  user: undefined,
});

const initialize = async () => {
  const firebase = await Firebase.import();

  firebase.auth().onAuthStateChanged(user => login.setState({ loaded: true, user }));
};

initialize();

export default login;
