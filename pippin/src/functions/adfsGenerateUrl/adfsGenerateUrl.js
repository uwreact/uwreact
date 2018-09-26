import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { httpsErrors } from 'dictionaries';
import { id } from 'utilities';

const studentVerificationUrl = (redirect, state, nonce) =>
  `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=${
    process.env.ADFS_CLIENT_ID
  }&response_type=id_token+token&redirect_uri=${redirect}&scope=openid&response_mode=fragment&state=${state}&nonce=${nonce}&prompt=consent`;

const onCall = async (data, context) => {
  const uid = context && context.auth && context.auth.uid;

  if (!uid) {
    throw new functions.https.HttpsError(httpsErrors.UNAUTHENTICATED);
  }

  const { redirect } = data;

  if (!redirect || typeof redirect !== 'string') {
    throw new functions.https.HttpsError(httpsErrors.INVALID_ARGUMENT);
  }

  const state = id();
  const nonce = id();

  await admin
    .firestore()
    .collection('verifications')
    .doc(uid)
    .set({ state, nonce });

  return { url: studentVerificationUrl(redirect, state, nonce) };
};

const adfsGenerateUrl = functions.https.onCall(onCall);

export { onCall };

export default adfsGenerateUrl;
