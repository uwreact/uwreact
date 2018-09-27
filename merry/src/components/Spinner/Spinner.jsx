import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { times } from 'ramda';

import styles from './Spinner.scss';

const Spinner = props => {
  const { className } = props;

  return (
    <div className={classNames(styles.spinner, className)}>
      {times(
        key => (
          <div key={key} />
        ),
        4,
      )}
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
