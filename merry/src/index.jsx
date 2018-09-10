import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'main.scss';

import App from 'App';

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

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('App'),
);
