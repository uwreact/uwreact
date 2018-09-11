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

import('firebase/app').then(async firebase => {
  await import('firebase/auth');
  await import('firebase/firestore');
  await import('firebase/functions');

  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  });

  firebase.firestore().settings({ timestampsInSnapshots: true });

  firebase.firestore().enablePersistence();

  firebase.functions();
});

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('App'),
);
