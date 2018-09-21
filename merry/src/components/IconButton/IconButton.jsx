import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Button } from 'components';

import styles from './IconButton.scss';

const boundStyles = classNames.bind(styles);

const IconButton = props => {
  const { customClass, icon, size, inverted, ...other } = props;

  const iconStyles = boundStyles({
    icon: true,
    inverted,
  });

  return (
    <Button
      customClass={classNames(styles.button, customClass)}
      customStyle={{
        minWidth: size,
        minHeight: size,
      }}
      inheritOriginalStyles={false}
      {...other}
    >
      <img alt="icon" src={icon} className={iconStyles} />
    </Button>
  );
};

IconButton.propTypes = {
  customClass: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  inverted: PropTypes.bool,
};

IconButton.defaultProps = {
  customClass: '',
  size: 50,
  inverted: false,
};

export default IconButton;
