import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import logger from './logger';

class Middleware {
  helmet;
  cors;
  logger;

  constructor() {
    this.helmet = helmet();
    this.cors = cors({
      origin: process.env.NODE_ENV === 'production' ? 'https://uwri3d.com/' : 'http://localhost:3000',
      credentials: true,
    });
    this.logger = logger();
  }

  bind(server) {
    server.use(this.helmet);

    server.use(this.cors);

    server.use(this.logger);
  }
}

export default Middleware;
