import Account from './models/account';

const dataUpdateAccountHandler = async (req, res, next) => {
  const account = req.body.account;
  const accounts = await Account.find({email: req.user.name}, (err, accounts) => accounts);
  if (accounts[0] !== undefined) {
    accounts[0].information = account.information;
    accounts[0].buildTeamApplication = account.buildTeamApplication;
    accounts[0].save();
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({type: 'success', message: 'Application Saved!'}));
  } else {
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({type: 'error', message: 'Account missing.'}));
  }
};

export default dataUpdateAccountHandler;