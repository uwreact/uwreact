import React from 'react';

import horizontalLogo from 'resources/svg/react-horizontal.svg';
import verticalLogo from 'resources/svg/react-vertical.svg';

import styles from './App.scss';

const AppView = () => (
  <div className={styles.app}>
    <div className={styles.fullHeight}>
      <div className={styles.big}>
        <span>WE BUILD FULLY AUTONOMOUS FIRST ROBOTS</span>
      </div>
      <div className={styles.small}>
        <img src={horizontalLogo} alt="Logo" className={styles.horizontalLogo} />
        <img src={verticalLogo} alt="Logo" className={styles.verticalLogo} />
      </div>
    </div>
  </div>
);

export default AppView;
