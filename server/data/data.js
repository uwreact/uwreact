import mongoose from 'mongoose';
import dataGetAccountHandler from './dataGetAccountHandler';
import dataUpdateAccountHandler from './dataUpdateAccountHandler';

class Data {
  production;

  dataGetAccountHandler = dataGetAccountHandler;

  dataUpdateAccountHandler = dataUpdateAccountHandler;

  constructor(production, uri) {
    this.production = production;

    mongoose.connect(uri, {useMongoClient: true});
    mongoose.Promise = global.Promise;
  }

  handleGetAccount() {
    return this.dataGetAccountHandler;
  }

  handleUpdateAccount() {
    return this.dataUpdateAccountHandler;
  }
}

export default Data;