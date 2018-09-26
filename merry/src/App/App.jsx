import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Email from './Email';
import Apply from './Apply';
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/email" component={Email} />
    <Route path="/apply" component={Apply} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
