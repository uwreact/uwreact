import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from 'components';

import Home from './Home';
import Apply from './Apply';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/apply" component={Apply} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
