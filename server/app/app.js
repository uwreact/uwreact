import express from 'express';
import config from 'dotenv';
import helmet from 'helmet';
import Logger from '../middleware/logger/index';

class App {
  instance;

  production;

  port;

  server;

  logger;

  constructor() {
    if (App.instance !== undefined) {
      return App.instance;
    }

    config.config();
    this.production = (process.env.NODE_ENV === 'production');
    this.port = process.env.PORT;

    this.server = express();

    this.server.use(helmet());

    this.logger = new Logger(this.production);
    this.server.use(this.logger.log());

    App.instance = this;
    Object.freeze(App.instance);
  }

  start() {
    this.server.listen(this.port);
  }
}

export default App;
