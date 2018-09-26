import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { BlankButton } from 'components';

import styles from './TextButton.scss';

const TextButton = props => {
  const { className, children, ...other } = props;

  return (
    <BlankButton className={classNames(styles.button, className)} {...other}>
      {children}
    </BlankButton>
  );
};

TextButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TextButton.defaultProps = {
  className: '',
};

export default TextButton;
