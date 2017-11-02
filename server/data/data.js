import mongoose from 'mongoose';
import Account from './models/account';

class Data {
  production;

  constructor(production, uri) {
    this.production;

    mongoose.connect(uri, {useMongoClient: true});
    mongoose.Promise = global.Promise;
  }
}

export default Data;