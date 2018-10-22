import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { user } from 'state';

import Drawer from './Drawer';
import Header from './Header';

import Apply from '../Apply';
import NotFound from '../NotFound';

import styles from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    user.connect(
      this,
      ['loaded', 'auth'],
    );
  }

  render() {
    const { loaded, auth } = this.state;

    return (
      loaded &&
      (auth ? (
        <div className={styles.dashboard}>
          <Drawer />
          <Header />
          <div className={styles.content}>
            <Switch>
              <Route path="/dashboard/apply" component={Apply} />
              <Route exact path="/dashboard" component={() => <div>Home</div>} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      ))
    );
  }
}

export default Dashboard;
