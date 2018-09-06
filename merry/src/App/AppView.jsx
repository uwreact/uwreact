import React from 'react';

import logo from 'resources/svg/full-size-transparent.svg';

import styles from './App.scss';

const AppView = () => (
  <div className={styles.app}>
    <div className={styles.fullHeight}>
      <div className={styles.big}>
        <span>WE BUILD FULLY AUTONOMOUS FIRST ROBOTS</span>
      </div>
      <div className={styles.small}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </div>
  </div>
);

export default AppView;
