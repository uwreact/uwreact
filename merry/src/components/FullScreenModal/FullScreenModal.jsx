import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Modal } from 'components';

import styles from './FullScreenModal.scss';

const FullScreenModal = props => {
  const { className, children, ...other } = props;

  return (
    <Modal className={styles.modal} {...other}>
      <div className={classNames(styles.card, className)}>{children}</div>
    </Modal>
  );
};

FullScreenModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullScreenModal.defaultProps = {
  className: '',
};

export default FullScreenModal;
