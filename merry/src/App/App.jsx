import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Apply from './Apply';
import Dashboard from './Dashboard';
import Email from './Email';
import Home from './Home';
import Loading from './Loading';
import Login from './Login';
import NotFound from './NotFound';

const App = () => (
  <React.Fragment>
    <Loading />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/email" component={Email} />
      <Route path="/apply" component={Apply} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default App;
