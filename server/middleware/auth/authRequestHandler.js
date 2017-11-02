import {startsWith} from 'lodash';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import Auth from './auth';

const authRequestHandler = async (req, res, next) => {
  const errors = [];
  const success = [];
  const header = req.get('Authorization');

  if (header !== undefined && startsWith(header, 'Basic')) {
    const credentialsString = Buffer(header.substring(6), 'base64').toString('utf8');

    if ((credentialsString.match(/:/g) || []).length === 1) {
      const credentials = credentialsString.split(':');

      if (await Auth.authorizeUserAccount(...credentials)) {
        const token = jwt.sign({
          name: credentials[0],
          exp: moment().clone().add(this.expiry, 's').unix(),
        }, this.secret);

        res.set('Authorization', `Bearer ${token}`);

        success.push({message: 'Success: Authorization token issued'});
      } else {
        errors.push({message: 'AuthorizationError: Credentials incorrect'});
      }
    } else {
      errors.push({message: 'AuthorizationError: Credentials malformed'});
    }
  } else {
    errors.push({message: 'AuthorizationError: Credentials missing.'});
  }

  res.set('Content-Type', 'application/json');
  if (success.length > 0) {
    res.status(401).send(JSON.stringify({success}));
  } else {
    res.status(401).send(JSON.stringify({errors}));
  }
};

export default authRequestHandler;