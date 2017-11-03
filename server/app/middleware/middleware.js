import helmet from 'helmet';
import cors from 'cors'
import bodyParser from 'body-parser';
import jwtProtect from 'express-jwt';

import logger from './logger';

class Middleware {
  bind(server) {
    server.use(helmet());

    server.use(cors({
      origin: process.env.NODE_ENV === 'production' ? 'https://uwri3d.com/' : 'http://localhost:3000',
      credentials: true,
    }));

    server.use(bodyParser.json());

    server.use(jwtProtect({secret: process.env.JWT_SECRET}).unless({
      path: [
        '/api/signIn', '/api/signUp', '/api/verify',
      ],
    }));

    server.use(logger());
  }
}

export default Middleware;