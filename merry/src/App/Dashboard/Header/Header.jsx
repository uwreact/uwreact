import React, { Component, createRef } from 'react';

import { IconButton } from 'components';

import bars from 'resources/svg/icons/bars.svg';
import bell from 'resources/svg/icons/bell.svg';
import user from 'resources/svg/icons/user.svg';

import { drawer } from '../state';

import styles from './Header.scss';

class Header extends Component {
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
        <div className={styles.drawerContainer}>
          <IconButton onClick={() => this.setState(state => ({ open: !state.open }))} icon={bars} />
        </div>
        <div className={styles.alertContainer}>
          <IconButton icon={bell} />
        </div>
        <div className={styles.userContainer} ref={this.userIcon}>
          <IconButton icon={user} />
        </div>
      </div>
    );
  }
}

export default Header;
