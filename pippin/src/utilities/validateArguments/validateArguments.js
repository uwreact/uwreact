/* eslint-disable valid-typeof */

import * as functions from 'firebase-functions';

import { httpsErrors } from 'dictionaries';

const validateArguments = (data, args) => {
  Object.keys(args).forEach(key => {
    if (!data[key] || typeof data[key] !== args[key]) {
      throw new functions.https.HttpsError(httpsErrors.INVALID_ARGUMENT);
    }
  });
};

export default validateArguments;
