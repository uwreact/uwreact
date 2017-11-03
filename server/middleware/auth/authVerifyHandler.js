import Account from '../../app/models/account';

const authNewHandler = async (req, res, next) => {
  const verify = req.query.uri;
  if (verify !== 'verified') {
    const accounts = await Account.find({verify}, (err, accounts) => accounts).catch(err => []);

    if (accounts[0] !== undefined) {
      accounts[0].verify = 'verified';
      accounts[0].save();
      res.status(200).send('Account Verified. Continue to <a href="https://uwri3d.com/">https://uwri3d.com/</a>');
    } else {
      res.status(400).send('Error. Continue to <a href="https://uwri3d.com/">https://uwri3d.com/</a>');
    }
  } else {
    res.status(400).send('Error. Continue to <a href="https://uwri3d.com/">https://uwri3d.com/</a>');
  }
};

export default authNewHandler;