import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { login } from 'state';

import Drawer from './Drawer';
import Header from './Header';

import Home from './Home';
import Apply from '../Apply';
import NotFound from '../NotFound';

import styles from './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    login.connect(this);
  }

  componentWillUnmount() {
    login.disconnect(this);
  }

  render() {
    const { loaded, user } = this.state;

    return (
      loaded &&
      (user ? (
        <div className={styles.dashboard}>
          <Drawer />
          <Header />
          <div className={styles.content}>
            <Switch>
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/dashboard/apply" component={Apply} />
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

Dashboard.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dashboard;
