import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { httpsErrors } from 'dictionaries';

const onCall = async (data, context) => {
  const uid = context && context.auth && context.auth.uid;

  if (!uid) {
    throw new functions.https.HttpsError(httpsErrors.UNAUTHENTICATED);
  }

  const { accessToken, idToken, state } = data;

  if (
    !accessToken ||
    typeof accessToken !== 'string' ||
    !idToken ||
    typeof idToken !== 'string' ||
    !state ||
    typeof state !== 'string'
  ) {
    throw new functions.https.HttpsError(httpsErrors.INVALID_ARGUMENT);
  }

  const verificationDoc = await admin
    .firestore()
    .collection('verifications')
    .doc(uid)
    .get();

  const verification = verificationDoc.data();

  return { verification };
};

const adfsParseTokens = functions.https.onCall(onCall);

export { onCall };

export default adfsParseTokens;
