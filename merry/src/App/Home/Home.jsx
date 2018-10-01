import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import horizontalLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalLogo from 'resources/svg/logos/react-vertical.svg';

import styles from './Home.scss';

const bigSmall = classNames(styles.fullScreen, styles.bigSmall);

const bigYellow = classNames(styles.big, styles.yellow);
const smallWhite = classNames(styles.small, styles.white);

const Home = () => (
  <div className={styles.home}>
    <div className={bigSmall}>
      <div className={classNames(bigYellow, styles.heroText)}>
        WE BUILD FULLY AUTONOMOUS FIRST ROBOTS.
      </div>
      <div className={classNames(smallWhite, styles.heroLogo)}>
        <img src={horizontalLogo} alt="Logo" className={styles.horizontalLogo} />
        <img src={verticalLogo} alt="Logo" className={styles.verticalLogo} />
      </div>
    </div>
    <Link className={styles.interested} to="/apply">
      INTERESTED? APPLY NOW!
    </Link>
  </div>
);

export default Home;
