import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import logger from './logger';

class Middleware {
  helmet;
  cors;
  graphql;
  graphiql;
  logger;

  constructor() {
    this.helmet = helmet();
    this.cors = cors({
      origin: process.env.NODE_ENV === 'production' ? 'https://uwri3d.com/' : 'http://localhost:3000',
      credentials: true,
    });
    // this.graphql = graphqlExpress({ schema });
    // this.graphiql = graphiqlExpress({ endpointURL: 'graphql' });
    this.logger = logger();
  }

  bind(server) {
    server.use(this.helmet);

    server.use(this.cors);

    // server.use('/graphql', bodyParser.json(), this.graphql);
    // if (!(process.env.NODE_ENV === 'production')) {
    //   server.get('/graphiql', this.graphiql);
    // }

    server.use(this.logger);
  }
}

export default Middleware;
