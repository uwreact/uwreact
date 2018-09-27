import Restatable from 'restatable';

import { Firebase } from 'modules';
import { debounce } from 'utilities';

const user = new Restatable({
  loaded: false,
  auth: undefined,
  details: undefined,
  fromFirebase: true,
});

user.subscribe(
  debounce(async affectedState => {
    if (affectedState.details && !affectedState.fromFirebase && user.state.auth) {
      const firebase = await Firebase.import();
      await firebase
        .firestore()
        .collection('users')
        .doc(user.state.auth.uid)
        .update({ ...user.state.details });
    }
  }, 3000),
);

const initialize = async () => {
  const firebase = await Firebase.import();

  firebase.auth().onAuthStateChanged(auth => {
    if (auth && auth.uid) {
      firebase
        .firestore()
        .collection('users')
        .doc(auth.uid)
        .onSnapshot(doc => user.setState({ details: doc.data(), fromFirebase: true }));
    }

    user.setState({ loaded: true, auth });
  });
};

initialize();

export default user;
