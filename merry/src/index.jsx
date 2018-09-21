import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { OfflinePlugin, Raven } from 'modules';

import 'main.scss';

import App from 'App';

const development = process.env.NODE_ENV === 'development';

if (!development) {
  OfflinePlugin.import();
  Raven.import();
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('App'),
);
