import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Modal.scss';

class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    originNodes: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    onClickOutside: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    originNodes: [],
    className: '',
    onClickOutside: () => ({}),
  };

  constructor(props) {
    super(props);
    this.modal = createRef();
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = event => {
    const { visible, originNodes, onClickOutside } = this.props;

    if (
      visible &&
      !this.modal.current.contains(event.target) &&
      originNodes.every(node => !node || !node.current.contains(event.target))
    ) {
      onClickOutside();
    }
  };

  render() {
    const { visible, className, children } = this.props;

    return (
      visible && (
        <div className={classNames(styles.modal, className)} ref={this.modal}>
          {children}
        </div>
      )
    );
  }
}

export default Modal;
