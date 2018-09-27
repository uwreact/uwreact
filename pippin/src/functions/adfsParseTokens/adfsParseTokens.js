import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import { path } from 'ramda';

import { httpsErrors } from 'dictionaries';
import { ensureAuthenticated, validateArguments } from 'utilities';

const jwksUri = 'https://login.microsoftonline.com/common/discovery/v2.0/keys';

const kidPath = path(['header', 'kid']);

const uwaterlooRegex = /uwaterloo.ca$/i;

const verifyToken = async token => {
  const decodedToken = jwt.decode(token, { complete: true });
  const kid = kidPath(decodedToken);
  const res = await axios.get(jwksUri);
  const keys = res.data.keys.filter(key => key.kid === kid);
  const [jwk] = keys.length ? keys : [undefined];
  return jwt.verify(token, jwkToPem(jwk));
};

const onCall = async (data, context) => {
  const uid = ensureAuthenticated(context);
  validateArguments(data, { access_token: 'string', id_token: 'string', state: 'string' });

  const idToken = await verifyToken(data.id_token);

  const accessToken = jwt.decode(data.access_token, { complete: true });

  if (!accessToken.payload) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  const schoolEmail = accessToken.payload.upn;

  if (!schoolEmail || !uwaterlooRegex.test(schoolEmail)) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  const verificationDoc = admin
    .firestore()
    .collection('verifications')
    .doc(schoolEmail);

  const verification = await verificationDoc.get();

  if (verification.exists) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  const pendingDoc = admin
    .firestore()
    .collection('verifications')
    .doc(uid);

  const pending = await pendingDoc.get();
  const pendingData = pending.data();

  if (!pendingData || pendingData.state !== data.state || pendingData.nonce !== idToken.nonce) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  await pendingDoc.delete();

  const firstName = accessToken.payload.given_name;
  const lastName = accessToken.payload.family_name;

  const userDoc = admin
    .firestore()
    .collection('users')
    .doc(uid);

  await verificationDoc.set({
    firstName,
    lastName,
    user: userDoc,
  });

  await userDoc.update({
    firstName,
    lastName,
    schoolEmail,
    student: true,
    verification: verificationDoc,
  });
};

const adfsParseTokens = functions.https.onCall(onCall);

export { onCall };

export default adfsParseTokens;
