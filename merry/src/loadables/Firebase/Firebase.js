import Loadable from '../Loadable';

class Firebase extends Loadable {
  static instance;

  constructor() {
    if (!Firebase.instance) {
      super(
        import('firebase/app'),
        import('firebase/auth'),
        import('firebase/firestore'),
        import('firebase/functions'),
      );

      Firebase.instance = this;
    }

    return Firebase.instance;
  }

  load = async () => {
    const [firebase] = await this.loadModules();

    return firebase;
  };

  initialize = async modules => {
    const [firebase] = modules;

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
  };
}

export default Firebase;
