import {startsWith, upperFirst} from 'lodash';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import App from '../../app';
import Auth from './auth';

const authErrorHandler = async (err, req, res, next) => {
  let response = {};

  if (err.name === 'UnauthorizedError') {
    const header = req.get('Authorization');

    if (header !== undefined && startsWith(header, 'Bearer')) {
      const tokenToVerify = header.substring(7);

      await Auth.verifyAsync(tokenToVerify, new App().auth.secret).catch((jwtErr) => {
        if (jwtErr.name === 'TokenExpiredError') {
          const token = jwt.decode(tokenToVerify);

          if (token.iat > 0) {
            const renewedToken = jwt.sign({
              name: token.name,
              exp: moment().clone().add(new App().auth.expiry, 's').unix(),
            }, new App().auth.secret);

            response = {type: 'error', message: 'Token renewed.', token: renewedToken};
          } else {
            response = {type: 'error', message: 'Reauthentication required.'};
          }
        } else {
          response = {type: 'error', message: upperFirst(jwtErr.message)};
        }
      });
    } else {
      response = {type: 'error', message: 'Jwt missing.'};
    }
  }

  res.set('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(response));
};

export default authErrorHandler;