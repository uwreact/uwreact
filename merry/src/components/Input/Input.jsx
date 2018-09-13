import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.scss';

const boundStyles = classNames.bind(styles);

const Input = props => {
  const {
    customClass,
    inheritOriginalStyles,
    value,
    onChange,
    onFocus,
    onBlur,
    form,
    disabled,
    placeholder,
    type,
  } = props;

  const inputStyles = boundStyles({
    input: inheritOriginalStyles,
    disabled,
  });

  return (
    <input
      className={classNames(inputStyles, customClass)}
      value={value}
      onChange={event => onChange(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      form={form}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      aria-label={type}
    />
  );
};

Input.propTypes = {
  customClass: PropTypes.string,
  inheritOriginalStyles: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  form: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

Input.defaultProps = {
  customClass: '',
  inheritOriginalStyles: true,
  onFocus: () => ({}),
  onBlur: () => ({}),
  form: undefined,
  disabled: false,
  placeholder: undefined,
  type: 'text',
};

export default Input;
