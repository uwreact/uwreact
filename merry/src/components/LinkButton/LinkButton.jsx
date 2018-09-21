import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Button } from 'components';

import styles from './LinkButton.scss';

const LinkButton = props => {
  const { customClass, size, children, ...other } = props;

  return (
    <Button
      customClass={classNames(styles.link, customClass)}
      customStyle={{
        fontSize: size,
      }}
      inheritOriginalStyles={false}
      {...other}
    >
      {children}
    </Button>
  );
};

LinkButton.propTypes = {
  customClass: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  customClass: '',
  size: 15,
};

export default LinkButton;
