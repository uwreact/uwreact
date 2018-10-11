import React from 'react';
import classNames from 'classnames/bind';

import horizontalLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalLogo from 'resources/svg/logos/react-vertical.svg';

import Menu from './Menu';

import styles from './Home.scss';

const Home = () => (
  <div className={styles.home}>
    <Menu />
    <div className={styles.content}>
      <div className={classNames(styles.primary, styles.heroText)}>
        WE BUILD FULLY AUTONOMOUS FIRST ROBOTS.
      </div>
      <div className={classNames(styles.white, styles.contentLogo)}>
        <img src={horizontalLogo} alt="UW REACT Logo" />
      </div>
      <div className={classNames(styles.white, styles.written)}>
        <div className={styles.header}>WHO WE ARE</div>
        The University of Waterloo Robotics Engineering and Autonomous Controls Team (UW REACT) is a
        student design team composed primarily of undergraduate students at the University of
        Waterloo.
      </div>
    </div>
    <div className={styles.side}>
      <div className={styles.sideLogo}>
        <img src={verticalLogo} alt="UW REACT Logo" />
      </div>
    </div>
  </div>
);

export default Home;
