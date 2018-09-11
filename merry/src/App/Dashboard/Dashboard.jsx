import React from 'react';

import Drawer from './Drawer';
import Header from './Header';

import styles from './Dashboard.scss';

const Dashboard = () => (
  <div className={styles.dashboard}>
    <Drawer />
    <Header />
  </div>
);

export default Dashboard;
