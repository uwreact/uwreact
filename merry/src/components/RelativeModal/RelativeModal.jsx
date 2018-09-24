import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Modal } from 'components';

import styles from './RelativeModal.scss';

const RelativeModal = props => {
  const { className, children, ...other } = props;

  return (
    <Modal className={classNames(styles.modal, className)} {...other}>
      {children}
    </Modal>
  );
};

RelativeModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RelativeModal.defaultProps = {
  className: '',
};

export default RelativeModal;
