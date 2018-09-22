import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { BlankButton } from 'components';

import styles from './IconButton.scss';

const boundStyles = classNames.bind(styles);

const IconButton = props => {
  const { className, icon, inverted, ...other } = props;

  const Icon = icon;

  const iconStyles = boundStyles({
    icon: true,
    inverted,
  });

  return (
    <BlankButton className={styles.button} {...other}>
      <Icon className={classNames(iconStyles, className)} />
    </BlankButton>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
};

IconButton.defaultProps = {
  className: '',
  inverted: false,
};

export default IconButton;
