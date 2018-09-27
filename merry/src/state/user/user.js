import Restatable from 'restatable';

import { Firebase } from 'modules';

const user = new Restatable({
  loaded: false,
  auth: undefined,
  details: undefined,
});

const initialize = async () => {
  const firebase = await Firebase.import();

  firebase.auth().onAuthStateChanged(auth => {
    if (auth && auth.uid) {
      firebase
        .firestore()
        .collection('users')
        .doc(auth.uid)
        .onSnapshot(doc => user.setState({ details: doc.data() }));
    }

    user.setState({ loaded: true, auth });
  });
};

initialize();

export default user;
