import * as functions from 'firebase-functions';

import { id } from 'utilities';

const studentVerificationUrl = (redirect, state, nonce) =>
  `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=${
    process.env.ADFS_CLIENT_ID
  }&response_type=id_token+token&redirect_uri=${redirect}&scope=openid&response_mode=fragment&state=${state}&nonce=${nonce}&prompt=consent`;

const onCall = (data, context) => {
  const uid = context && context.auth && context.auth.uid;

  if (!uid) {
    throw new functions.https.HttpsError('unauthenticated');
  }

  const { redirect } = data;

  if (!redirect || typeof redirect !== 'string') {
    throw new functions.https.HttpsError('invalid-argument');
  }

  return { url: studentVerificationUrl(redirect, id(), id()) };
};

const adfsGenerateUrl = functions.https.onCall(onCall);

export { onCall };

export default adfsGenerateUrl;
