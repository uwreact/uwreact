import * as functions from 'firebase-functions';

const onCall = (data, context) => {
  const uid = context && context.auth && context.auth.uid;

  if (!uid) {
    throw new functions.https.HttpsError('unauthenticated');
  }

  const { accessToken, idToken } = data;

  if (!accessToken || typeof accessToken !== 'string' || !idToken || typeof idToken !== 'string') {
    throw new functions.https.HttpsError('invalid-argument');
  }

  return {};
};

const adfsParseTokens = functions.https.onCall(onCall);

export { onCall };

export default adfsParseTokens;
