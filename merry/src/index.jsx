/* eslint "no-underscore-dangle": "off" */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';

import 'main.scss';

import { AppView } from 'App';
import appReducer from 'App/state';

const development = process.env.NODE_ENV === 'development';

if (!development) {
  import('offline-plugin/runtime').then(OfflinePluginRuntime => OfflinePluginRuntime.install());

  import('raven-js').then(Raven =>
    Raven.default
      .config(process.env.SENTRY_URL, {
        release: process.env.NPM_PACKAGE_VERSION,
        environment: process.env.NODE_ENV,
      })
      .install(),
  );
}

const history = createBrowserHistory();

const reducer = connectRouter(history)(appReducer);

const epicMiddleware = createEpicMiddleware();
const historyMiddleware = routerMiddleware(history);
const combinedMiddleware = applyMiddleware(epicMiddleware, historyMiddleware);

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeWithDevTools(combinedMiddleware);

const store = createStore(reducer, middleware);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppView />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('App'),
);
