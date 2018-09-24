import React, { Component, createRef } from 'react';

import { IconButton, SelectModal } from 'components';
import { Firebase } from 'modules';

import bars from 'resources/svg/icons/bars.svg';
import bell from 'resources/svg/icons/bell.svg';
import user from 'resources/svg/icons/user.svg';

import { drawer } from '../state';

import styles from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userModalOpen: false,
    };
    this.userModalOptions = [
      {
        label: 'Log Out',
        onClick: this.closeModalAnd(async () => {
          const firebase = await Firebase.import();
          await firebase.auth().signOut();
        }),
      },
    ];
    this.userIcon = createRef();
  }

  closeModalAnd = also => () => {
    this.setState({ userModalOpen: false });
    also();
  };

  render() {
    const { userModalOpen } = this.state;

    return (
      <div className={styles.header}>
        <div className={styles.drawerContainer}>
          <IconButton icon={bars} onClick={() => drawer.setState({ open: true })} />
        </div>
        <div className={styles.alertContainer}>
          <IconButton icon={bell} />
        </div>
        <div className={styles.userContainer} ref={this.userIcon}>
          <IconButton
            icon={user}
            onClick={() => this.setState(state => ({ userModalOpen: !state.userModalOpen }))}
          />
          <SelectModal
            visible={userModalOpen}
            originNodes={[this.userIcon]}
            className={styles.userModal}
            onClickOutside={() => this.setState({ userModalOpen: false })}
            options={this.userModalOptions}
          />
        </div>
      </div>
    );
  }
}

export default Header;
