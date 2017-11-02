import jwt from 'jsonwebtoken';
import jwtProtect from 'express-jwt';
import bcrypt from 'bcrypt';
import authErrorHandler from './authErrorHandler';
import authRequestHandler from './authRequestHandler';
import authNewHandler from './authNewHandler';
import authVerifyHandler from './authVerifyHandler';
import Account from '../../data/models/account';

class Auth {
  secret;

  expiry;

  authErrorHandler = authErrorHandler;

  authRequestHandler = authRequestHandler;

  authNewHandler = authNewHandler;

  authVerifyHandler = authVerifyHandler;

  constructor(secret, expiry) {
    this.secret = secret;
    this.expiry = expiry;
  }

  static verifyAsync(tokenToVerify, secret) {
    return new Promise((resolve, reject) => {
      jwt.verify(tokenToVerify, secret, (err, decoded) => {
        if (decoded !== undefined) {
          resolve(decoded);
        } else {
          reject(err);
        }
      });
    });
  }

  protectAllRoutesExcept(pathsToExclude) {
    return jwtProtect({secret: this.secret}).unless({path: pathsToExclude});
  }

  handleAuthErrors() {
    return this.authErrorHandler;
  }

  handleAuthRequests() {
    return this.authRequestHandler;
  }

  handleAuthNew() {
    return this.authNewHandler;
  }

  handleAuthVerify() {
    return this.authVerifyHandler;
  }
}

export default Auth;