import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { OfflinePlugin, Raven } from 'loadables';

import 'main.scss';

import App from 'App';

const development = process.env.NODE_ENV === 'development';

if (!development) {
  new OfflinePlugin().load();
  new Raven().load();
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('App'),
);
