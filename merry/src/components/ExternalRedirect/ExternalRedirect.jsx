import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

const ExternalRedirect = props => {
  const { from, to, ...other } = props;

  return <Route path={from} component={() => (window.location.href = to)} {...other} />;
};

ExternalRedirect.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ExternalRedirect;
