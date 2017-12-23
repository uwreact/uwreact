import fs from 'fs';
import path from 'path';
import moment from 'moment';
import morgan from 'morgan';

const logger = () => {
  if (process.env.NODE_ENV === 'production') {
    const dir = path.join(__dirname, 'log');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const stream = fs.createWriteStream(`${dir}/morgan-${moment().format()}.log`, {flags: 'a'});

    return morgan('combined', stream);
  }

  return morgan('dev');
};

export default logger;
