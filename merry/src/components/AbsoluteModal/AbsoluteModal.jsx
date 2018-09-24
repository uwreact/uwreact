import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Modal } from 'components';

import styles from './AbsoluteModal.scss';

const AbsoluteModal = props => {
  const { className, children, ...other } = props;

  return (
    <Modal className={classNames(styles.modal, className)} {...other}>
      {children}
    </Modal>
  );
};

AbsoluteModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AbsoluteModal.defaultProps = {
  className: '',
};

export default AbsoluteModal;
