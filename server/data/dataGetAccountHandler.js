import Account from './models/account';

const dataGetAccountHandler = async (req, res, next) => {
  Account.find({email: req.user.name}, (err, accounts) => {
    const account = JSON.parse(JSON.stringify(accounts[0]));
    account.passwordHash = '';
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(account));
  });
};

export default dataGetAccountHandler;