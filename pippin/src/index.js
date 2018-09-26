import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

admin.firestore().settings({ timestampsInSnapshots: true });

export * from 'functions';
