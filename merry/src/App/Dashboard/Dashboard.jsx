import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from 'components';
import { login } from 'state';

import Login from './Login';

import Drawer from './Drawer';
import Header from './Header';

import Home from './Home';
import Apply from './Apply';
import Verify from './Verify';

import styles from './Dashboard.scss';

const Dashboard = props => {
  const { match } = props;

  return login.get(
    state =>
      state.loaded &&
      (state.user ? (
        <div className={styles.dashboard}>
          <Drawer />
          <Header />
          <Switch>
            <Route exact path={match.url} component={Home} />
            <Route exact path={`${match.url}/apply`} component={Apply} />
            <Route exact path={`${match.url}/verify`} component={Verify} />
            <Route component={NotFound} />
          </Switch>
        </div>
      ) : (
        <Login />
      )),
  );
};

Dashboard.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dashboard;
