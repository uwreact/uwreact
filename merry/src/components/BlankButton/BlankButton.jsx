import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Button } from 'components';

import styles from './BlankButton.scss';

const BlankButton = props => {
  const { className, children, ...other } = props;

  return (
    <Button override className={classNames(styles.button, className)} {...other}>
      {children}
    </Button>
  );
};

BlankButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BlankButton.defaultProps = {
  className: '',
  children: '',
};

export default BlankButton;
