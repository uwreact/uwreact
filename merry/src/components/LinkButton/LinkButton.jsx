import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { BlankButton } from 'components';

import styles from './LinkButton.scss';

const LinkButton = props => {
  const { className, children, ...other } = props;

  return (
    <BlankButton className={classNames(styles.link, className)} {...other}>
      {children}
    </BlankButton>
  );
};

LinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  className: '',
};

export default LinkButton;
