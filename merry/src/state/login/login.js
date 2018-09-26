import Restatable from 'restatable';

import { Firebase } from 'modules';

const login = new Restatable({
  loaded: false,
  user: undefined,
  details: undefined,
});

const initialize = async () => {
  const firebase = await Firebase.import();

  firebase.auth().onAuthStateChanged(user => {
    if (user && user.uid) {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(doc => login.setState({ details: doc.data() }));
    }

    login.setState({ loaded: true, user });
  });
};

initialize();

export default login;
