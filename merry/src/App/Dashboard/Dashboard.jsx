import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NotFound } from 'components';
import { login } from 'restatables';

import Drawer from './Drawer';
import Header from './Header';

import Home from './Home';

import styles from './Dashboard.scss';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    login.connect(this);
  }

  componentWillUnmount() {
    login.disconnect(this);
  }

  render() {
    const { loaded, user } = this.state;
    const { match } = this.props;

    return (
      loaded &&
      (user ? (
        <div className={styles.dashboard}>
          <Drawer />
          <Header />
          <Switch>
            <Route exact path={match.url} component={Home} />
            <Route component={NotFound} />
          </Switch>
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
