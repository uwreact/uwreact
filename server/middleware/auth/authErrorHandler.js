import {startsWith, upperFirst} from 'lodash';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import Auth from './auth';

const authErrorHandler = async (err, req, res, next) => {
  const errors = [];

  if (err.name === 'UnauthorizedError') {
    const header = req.get('Authorization');

    if (header !== undefined && startsWith(header, 'Bearer')) {
      const tokenToVerify = header.substring(7);

      await Auth.verifyAsync(tokenToVerify, this.secret).catch((jwtErr) => {
        if (jwtErr.name === 'TokenExpiredError') {
          const token = jwt.decode(tokenToVerify);

          if (token.iat > 0) {
            const renewedToken = jwt.sign({
              name: token.name,
              exp: moment().clone().add(30, 'm').unix()
            }, this.secret);

            res.set('Authorization', `Bearer ${renewedToken}`);
            errors.push({message: `${err.name}->${jwtErr.name}: Token renewed.`});
          } else {
            errors.push({message: `${err.name}->${jwtErr.name}: Reauthorization required.`});
          }
        } else {
          errors.push({
            message: `${err.name}->${jwtErr.name}: ${upperFirst(jwtErr.message)}`
          });
        }
      });
    } else {
      errors.push({message: `${err.name}: Jwt missing.`});
    }
  }

  res.set('Content-Type', 'application/json');
  res.status(401).send(JSON.stringify({errors}));
};

export default authErrorHandler;