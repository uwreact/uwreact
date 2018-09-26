import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Modal } from 'components';

import styles from './FullScreenModal.scss';

const FullScreenModal = props => {
  const { visible, className, children, ...other } = props;

  return (
    <React.Fragment>
      <Modal visible={visible} className={classNames(styles.modal, className)} {...other}>
        {children}
      </Modal>
      {visible && <div className={styles.overlay} />}
    </React.Fragment>
  );
};

FullScreenModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullScreenModal.defaultProps = {
  className: '',
};

export default FullScreenModal;
