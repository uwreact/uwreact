import React, { PureComponent, createRef } from 'react';

import { drawer } from '../state';

import styles from './Header.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.userIcon = createRef();
    drawer.connect(this);
  }

  componentWillUnmount() {
    drawer.disconnect(this);
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.drawerContainer} />
        <div className={styles.alertContainer} />
        <div className={styles.userContainer} ref={this.userIcon} />
      </div>
    );
  }
}

export default Header;
