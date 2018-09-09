import * as functions from 'firebase-functions';

import axios from 'axios';
import convert from 'xml-js';

const onCall = data =>
  axios
    .get(`${process.env.CAS_URL}/serviceValidate`, {
      params: {
        ...data,
      },
    })
    .then(res => convert.xml2json(res.data));

const serviceValidateCAS = functions.https.onCall(onCall);

export { onCall };

export default serviceValidateCAS;
