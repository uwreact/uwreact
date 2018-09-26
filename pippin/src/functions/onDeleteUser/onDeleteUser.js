import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const onDelete = user =>
  admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .delete();

const onDeleteUser = functions.auth.user().onDelete(onDelete);

export { onDelete };

export default onDeleteUser;
