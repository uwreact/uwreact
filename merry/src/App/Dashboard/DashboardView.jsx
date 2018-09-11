import React from 'react';

import Drawer from './Drawer';
import Header from './Header';

import styles from './Dashboard.scss';

const DashboardView = () => (
  <div className={styles.dashboard}>
    <Drawer />
    <Header />
  </div>
);

export default DashboardView;
