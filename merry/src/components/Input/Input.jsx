import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.scss';

const boundStyles = classNames.bind(styles);

const Input = props => {
  const { className, override, value, onChange, type, ...other } = props;

  const inputStyles = boundStyles({
    input: !override,
  });

  return (
    <input
      className={classNames(inputStyles, className)}
      value={value}
      onChange={event => onChange(event.target.value)}
      type={type}
      aria-label={type}
      {...other}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  override: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
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
  className: '',
  override: false,
  type: 'text',
};

export default Input;
