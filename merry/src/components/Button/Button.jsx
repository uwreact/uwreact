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
  const { className, override, inverted, form, onClick, children, ...other } = props;

  const buttonStyles = boundStyles({
    button: !override,
    inverted: !override && inverted,
  });

  return (
    <button
      className={classNames(buttonStyles, className)}
      onClick={onClick ? () => onClick() : undefined}
      type={form ? 'submit' : 'button'}
      form={form}
      {...other}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  override: PropTypes.bool,
  inverted: PropTypes.bool,
  form: eitherFormOrOnClick,
  onClick: eitherFormOrOnClick,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  override: false,
  inverted: false,
  form: undefined,
  onClick: undefined,
  children: undefined,
};

export default Button;
