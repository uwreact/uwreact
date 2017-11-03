import Account from '../app/models/account';

const dataGetAccountHandler = async (req, res, next) => {
  const accounts = await Account.find({email: req.user.name}, (err, accounts) => accounts);
  if (accounts[0] !== undefined) {
    const account = accounts[0];
    account.passwordHash = '';
    account.verify = '';
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({account}));
  } else {
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({type: 'error', message: 'Account missing.'}));
  }
};

export default dataGetAccountHandler;
