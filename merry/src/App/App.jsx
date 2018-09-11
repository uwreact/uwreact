import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import DashboardView from './Dashboard';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={DashboardView} />
  </Switch>
);

export default App;
