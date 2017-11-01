import mongoose from 'mongoose';

class Data {
  production;

  constructor(production) {
    this.production;

    mongoose.connect('mongodb://localhost/uwri3d');
    mongoose.Promise = global.Promise;
  }
}

export default Data;