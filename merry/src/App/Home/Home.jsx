import React from 'react';
import classNames from 'classnames/bind';

import horizontalLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalLogo from 'resources/svg/logos/react-vertical.svg';

import styles from './Home.scss';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.content}>
      <div className={classNames(styles.primary, styles.heroText)}>
        WE BUILD FULLY AUTONOMOUS FIRST ROBOTS.
      </div>
      <div className={styles.white}>
        <div className={styles.contentLogo}>
          <img src={horizontalLogo} alt="UW REACT Logo" />
        </div>
      </div>
    </div>
    <div className={styles.menu}>
      <div className={styles.menuLogo}>
        <img src={verticalLogo} alt="UW REACT Logo" />
      </div>
    </div>
  </div>
);

export default Home;
