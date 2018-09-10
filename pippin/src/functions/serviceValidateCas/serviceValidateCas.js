import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import axios from 'axios';
import { xml2js } from 'xml-js';
import { path } from 'ramda';

const getUid = path(['auth', 'uid']);
const getCasName = path(['elements', 0, 'elements', 0, 'elements', 0, 'elements', 0, 'text']);

const onCall = (data, context) => {
  const uid = getUid(context);

  if (!uid) {
    throw new functions.https.HttpsError('unauthenticated');
  }

  const { service, ticket } = data;

  if (!service || typeof service !== 'string' || !ticket || typeof ticket !== 'string') {
    throw new functions.https.HttpsError('invalid-argument');
  }

  return axios
    .get(`${process.env.CAS_URL}/serviceValidate`, {
      params: {
        service,
        ticket,
      },
    })
    .then(res => {
      const casName = getCasName(xml2js(res.data));

      if (casName) {
        return admin
          .firestore()
          .collection('users')
          .doc(uid)
          .update({ casName })
          .then(() => 'cas:authenticationSuccess')
          .catch(() => 'cas:authenticationFailure');
      }

      return 'cas:authenticationFailure';
    });
};

const serviceValidateCas = functions.https.onCall(onCall);

export { onCall };

export default serviceValidateCas;
