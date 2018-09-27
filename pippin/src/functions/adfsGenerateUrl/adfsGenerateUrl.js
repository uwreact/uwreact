import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { httpsErrors } from 'dictionaries';
import { ensureAuthenticated, id, validateArguments } from 'utilities';

const studentVerificationUrl = (redirect, state, nonce) =>
  `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=${
    process.env.ADFS_CLIENT_ID
  }&response_type=id_token+token&redirect_uri=${redirect}&scope=openid&response_mode=fragment&state=${state}&nonce=${nonce}&prompt=consent`;

const onCall = async (data, context) => {
  const uid = ensureAuthenticated(context);
  validateArguments(data, { redirect: 'string' });

  const userDoc = admin
    .firestore()
    .collection('users')
    .doc(uid);

  const user = await userDoc.get();
  const userData = user.data();

  if (userData.verification) {
    const verification = await userData.verification.get();

    if (verification.exists) {
      throw new functions.https.HttpsError(httpsErrors.ALREADY_EXISTS);
    }
  }

  const state = id();
  const nonce = id();

  const pendingDoc = admin
    .firestore()
    .collection('verifications')
    .doc(uid);

  await pendingDoc.set({ state, nonce, createdAt: admin.firestore.FieldValue.serverTimestamp() });

  return { url: studentVerificationUrl(data.redirect, state, nonce) };
};

const adfsGenerateUrl = functions.https.onCall(onCall);

export { onCall };

export default adfsGenerateUrl;
