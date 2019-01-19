/* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Field.scss';

const Field = props => {
  const { className, label, children, ...other } = props;

  return (
    <label className={classNames(styles.label, className)} {...other}>
      <span>{label}</span>
      {children}
    </label>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Field.defaultProps = {
  className: '',
};

export default Field;
