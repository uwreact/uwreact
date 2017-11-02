import {startsWith} from 'lodash';
import bcrypt from 'bcrypt';
import Account from '../../data/models/account';

const authNewHandler = async (req, res, next) => {
  const errors = [];
  const success = [];
  const header = req.get('Authorization');

  if (header !== undefined && startsWith(header, 'Basic')) {
    const credentialsString = Buffer(header.substring(6), 'base64').toString('utf8');

    if ((credentialsString.match(/:/g) || []).length === 3) {
      const credentials = credentialsString.split(':');

      if (!Account.find({email: credentials[0]}, (err, accounts) => accounts.length <= 0)) {
        let newUser = new Account({
          email: credentials[0],
          passwordHash: await bcrypt.hash(credentials[1], 10),
          firstName: credentials[2],
          lastName: credentials[3],
        });
        newUser.save();

        success.push({message: 'Success: Signed up'});
      } else {
        errors.push({message: 'SignUpError: Already signed up'});
      }
    } else {
      errors.push({message: 'SignUpError: Credentials malformed'});
    }
  } else {
    errors.push({message: 'SignUpError: Credentials missing.'});
  }

  res.set('Content-Type', 'application/json');
  if (success.length > 0) {
    res.status(401).send(JSON.stringify({success}));
  } else {
    res.status(401).send(JSON.stringify({errors}));
  }
};

export default authNewHandler;