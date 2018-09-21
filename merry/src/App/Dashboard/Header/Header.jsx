import React from 'react';

import { IconButton } from 'components';

import userCircle from 'resources/svg/icon/user-circle.svg';

import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <IconButton icon={userCircle} />
  </div>
);

export default Header;
