import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Icon.scss';

const boundStyles = classNames.bind(styles);

const Icon = props => {
  const { className, icon, inverted } = props;

  const ParsedIcon = icon;

  const iconStyles = boundStyles({
    icon: true,
    inverted,
  });

  return (
    <div className={styles.wrapper}>
      <ParsedIcon className={classNames(iconStyles, className)} />
    </div>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
};

Icon.defaultProps = {
  className: '',
  inverted: false,
};

export default Icon;
