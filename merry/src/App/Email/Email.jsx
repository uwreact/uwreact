import PropTypes from 'prop-types';
import qs from 'qs';

import { Firebase } from 'modules';
import { user } from 'state';
import { trimQuery } from 'utilities';

const verifyEmail = async (oobCode, history, path) => {
  const firebase = await Firebase.import();

  try {
    await firebase.auth().applyActionCode(oobCode);

    if (user.state.auth) {
      await user.state.auth.reload();
    }
  } finally {
    history.push(path);
  }
};

const Email = props => {
  const { history, location } = props;

  const { mode, oobCode, continueUrl } = qs.parse(trimQuery(location.search));

  const pathRegex = /(\/[A-Za-z/]+)$/g;
  const [path] = continueUrl ? continueUrl.match(pathRegex) : ['/'];

  switch (mode) {
    case 'verifyEmail':
      verifyEmail(oobCode, history, path);
      break;
    default:
      history.push(path);
      break;
  }

  return null;
};

Email.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Email;
