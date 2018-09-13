import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from 'components';

import Drawer from './Drawer';
import Header from './Header';

import styles from './Dashboard.scss';

const Dashboard = () => (
  <div className={styles.dashboard}>
    <Drawer />
    <Header />
    <Switch>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Dashboard;
