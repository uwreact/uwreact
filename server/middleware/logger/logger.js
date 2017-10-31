import fs from 'fs';
import path from 'path';
import moment from 'moment';
import morgan from 'morgan';

class Logger {
  production;

  constructor(production) {
    this.production = production;
  }

  log() {
    if (this.production) {
      const dir = path.join(__dirname, 'log');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      const stream = fs.createWriteStream(`${dir}/morgan-${moment().format()}.log`, {flags: 'a'});

      return morgan('combined', stream);
    }

    return morgan('dev');
  }
}

export default Logger;
