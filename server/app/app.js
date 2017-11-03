import env from 'dotenv';
import express from 'express';

import Middleware from './middleware';
import Auth from '../middleware/auth';
import Data from '../data';

class App {
  instance;
  server;
  middleware;

  auth;

  data;

  constructor() {
    if (this.instance !== undefined) {
      return this.instance;
    }

    env.config();

    this.server = express();

    this.middleware = new Middleware();
    this.middleware.bind(this.server);

    this.auth = new Auth(process.env.JWT_SECRET, process.env.JWT_EXPIRY);
    this.server.use(this.auth.handleAuthErrors());
    this.server.use('/api/signIn', this.auth.handleAuthRequests());
    this.server.use('/api/signUp', this.auth.handleAuthNew());
    this.server.use('/api/verify', this.auth.handleAuthVerify());

    this.data = new Data(process.env.NODE_ENV === 'production', process.env.DB_URI);
    this.server.use('/api/getAccount', this.data.handleGetAccount());
    this.server.use('/api/updateAccount', this.data.handleUpdateAccount());

    this.instance = this;
    Object.freeze(this.instance);
  }

  start() {
    this.server.listen(process.env.PORT);
  }
}

export default App;
