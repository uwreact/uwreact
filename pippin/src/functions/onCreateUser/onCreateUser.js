import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const onCreate = user =>
  admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set({ email: user.email });

const onCreateUser = functions.auth.user().onCreate(onCreate);

export { onCreate };

export default onCreateUser;
