import express from 'express';
import config from 'dotenv';
import helmet from 'helmet';
import Logger from '../middleware/logger';
import Data from '../data';
import Mail from '../utilities/mail';

class App {
  instance;

  port;

  server;

  logger;

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

    this.server = express();

    this.server.use(helmet());

    this.logger = new Logger(production);
    this.server.use(this.logger.log());

    this.data = new Data(production, dbURI);

    App.instance = this;
    Object.freeze(App.instance);
  }

  start() {
    this.server.listen(this.port);
  }
}

export default App;
