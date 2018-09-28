import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TextArea.scss';

const boundStyles = classNames.bind(styles);

const TextArea = props => {
  const { className, override, value, onChange, ...other } = props;

  const textAreaStyles = boundStyles({
    textArea: !override,
  });

  return (
    <textarea
      className={classNames(textAreaStyles, className)}
      value={value}
      onChange={event => onChange(event.target.value)}
      {...other}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  override: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  className: '',
  override: false,
  value: '',
};

export default TextArea;
