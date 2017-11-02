import express from 'express';
import config from 'dotenv';
import helmet from 'helmet';
import Logger from '../middleware/logger';
import Auth from '../middleware/auth';
import Data from '../data';
import Mail from '../utilities/mail';

class App {
  instance;

  port;

  server;

  logger;

  auth;

  data;

  mail;

  constructor() {
    if (App.instance !== undefined) {
      return App.instance;
    }

    config.config();
    this.port = process.env.PORT;
    const production = (process.env.NODE_ENV === 'production');
    const dbURI = process.env.DB_URI;
    const jwtSecret = process.env.JWT_SECRET;
    const jwtExpiry = process.env.JWT_EXPIRY;

    this.server = express();

    this.server.use(helmet());

    this.logger = new Logger(production);
    this.server.use(this.logger.log());

    this.auth = new Auth(jwtSecret, jwtExpiry);
    this.server.use(this.auth.protectAllRoutesExcept([
      '/api/signIn', '/api/signUp', '/api/signedIn'
    ]));
    this.server.use(this.auth.handleAuthErrors());
    this.server.use('/api/signIn', this.auth.handleAuthRequests());
    this.server.use('/api/signUp', this.auth.handleAuthNew());

    this.data = new Data(production, dbURI);

    App.instance = this;
    Object.freeze(App.instance);
  }

  start() {
    this.server.listen(this.port);
  }
}

export default App;
