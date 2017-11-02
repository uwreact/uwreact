import mongoose from 'mongoose';
import dataGetAccountHandler from './dataGetAccountHandler';

class Data {
  production;

  dataGetAccountHandler = dataGetAccountHandler;

  constructor(production, uri) {
    this.production;

    mongoose.connect(uri, {useMongoClient: true});
    mongoose.Promise = global.Promise;
  }

  handleGetAccount() {
    return this.dataGetAccountHandler;
  }
}

export default Data;