import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { BlankButton, Icon } from 'components';

import styles from './IconButton.scss';

const boundStyles = classNames.bind(styles);

const IconButton = props => {
  const { className, icon, inverted, ...other } = props;

  const iconStyles = boundStyles({
    icon: true,
    inverted,
  });

  return (
    <BlankButton className={styles.button} {...other}>
      <Icon icon={icon} className={classNames(iconStyles, className)} inverted={inverted} />
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
