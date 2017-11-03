import helmet from 'helmet';
import cors from 'cors'
import bodyParser from 'body-parser';
import jwtProtect from 'express-jwt';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

import schema from '../graphql';
import logger from './logger';

class Middleware {
  bind(server) {
    server.use(helmet());

    server.use(cors({
      origin: process.env.NODE_ENV === 'production' ? 'https://uwri3d.com/' : 'http://localhost:3000',
      credentials: true,
    }));

    server.use(jwtProtect({secret: process.env.JWT_SECRET}));

    server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
    if (!(process.env.NODE_END === 'production'))
      server.get('/graphiql', graphiqlExpress({endpointURL: 'graphql'}));

    server.use(logger());
  }
}

export default Middleware;