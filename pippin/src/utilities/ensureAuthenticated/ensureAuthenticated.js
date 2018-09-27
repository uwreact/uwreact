import * as functions from 'firebase-functions';
import { path } from 'ramda';

import { httpsErrors } from 'dictionaries';

const uidPath = path(['auth', 'uid']);

const ensureAuthenticated = context => {
  const uid = uidPath(context);

  if (!uid) {
    throw new functions.https.HttpsError(httpsErrors.UNAUTHENTICATED);
  }

  return uid;
};

export default ensureAuthenticated;
