import {startsWith, toLower} from 'lodash';
import bcrypt from 'bcrypt';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import App from '../../app';
import Auth from './auth';
import Account from '../../data/models/account';

const authRequestHandler = async (req, res, next) => {
  let response = {};
  const header = req.get('Authorization');

  if (header !== undefined && startsWith(header, 'Basic')) {
    const credentialsString = Buffer(header.substring(6), 'base64').toString('utf8');

    if ((credentialsString.match(/:/g) || []).length === 1) {
      const credentials = credentialsString.split(':');
      const email = toLower(credentials[0]);

      const accounts = await Account.find({email}, async (err, accounts) => accounts);
      let correctCredentials = false;
      if (accounts[0] !== undefined)
        correctCredentials = await bcrypt.compare(credentials[1], accounts[0].passwordHash);

      if (correctCredentials) {
        if (accounts[0].verify === 'verified') {
          const token = jwt.sign({
            name: email,
            exp: moment().clone().add(new App().auth.expiry, 's').unix(),
          }, new App().auth.secret);

          response = {type: 'success', message: 'Signed in!', token};
        } else {
          response = {type: 'error', message: 'Account Unverified. Please check your junk mail.'};
        }
      } else {
        response = {type: 'error', message: 'Credentials incorrect.'};
      }
    } else {
      response = {type: 'error', message: 'Credentials malformed.'};
    }
  } else {
    response = {type: 'error', message: 'Credentials missing.'};
  }

  res.set('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(response));
};

export default authRequestHandler;