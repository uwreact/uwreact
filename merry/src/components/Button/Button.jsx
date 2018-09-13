/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const boundStyles = classNames.bind(styles);

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

const Button = props => {
  const {
    customClass,
    customStyle,
    inheritOriginalStyles,
    inverted,
    disabled,
    form,
    onClick,
    children,
  } = props;

  const buttonStyles = boundStyles({
    button: inheritOriginalStyles,
    inverted,
  });

  return (
    <button
      className={classNames(buttonStyles, customClass)}
      style={customStyle}
      disabled={disabled}
      onClick={onClick ? () => onClick() : undefined}
      type={form ? 'submit' : 'button'}
      form={form}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string,
  customStyle: PropTypes.objectOf(PropTypes.any),
  inheritOriginalStyles: PropTypes.bool,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  form: eitherFormOrOnClick,
  onClick: eitherFormOrOnClick,
  children: PropTypes.node,
};

Button.defaultProps = {
  customClass: '',
  customStyle: undefined,
  inheritOriginalStyles: true,
  inverted: false,
  disabled: false,
  form: undefined,
  onClick: undefined,
  children: undefined,
};

export default Button;
