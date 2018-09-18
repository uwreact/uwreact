import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Button } from 'components';

import styles from './LinkButton.scss';

const eitherFormOrOnClick = (props, propName, componentName) => {
  const { form, onClick } = props;

  if (!form && !onClick) {
    return new Error(`One of 'form' or 'onClick' is required by <${componentName} />`);
  }
  if (form && onClick) {
    return new Error(`Both 'form' and 'onClick' cannot be provided to <${componentName} />`);
  }
  return null;
};

const IconButton = props => {
  const { customClass, size, disabled, form, onClick, children } = props;

  return (
    <Button
      customClass={classNames(styles.link, customClass)}
      customStyle={{
        fontSize: size,
      }}
      inheritOriginalStyles={false}
      disabled={disabled}
      onClick={onClick}
      form={form}
    >
      {children}
    </Button>
  );
};

IconButton.propTypes = {
  customClass: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  form: eitherFormOrOnClick,
  onClick: eitherFormOrOnClick,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  customClass: '',
  size: 15,
  disabled: false,
  form: undefined,
  onClick: undefined,
};

export default IconButton;
