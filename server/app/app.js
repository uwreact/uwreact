import env from 'dotenv';
import express from 'express';

import Middleware from './middleware';

class App {
  instance;
  server;
  middleware;

  constructor() {
    if (this.instance !== undefined) {
      return this.instance;
    }

    env.config();

    this.server = express();

    this.middleware = new Middleware();
    this.middleware.bind(this.server);

    this.instance = this;
    Object.freeze(this.instance);
  }

  start() {
    this.server.listen(process.env.PORT);
  }
}

export default App;
