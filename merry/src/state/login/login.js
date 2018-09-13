import { create } from 'reworm';

import { Firebase } from 'importables';

const { get, set, select } = create({
  loaded: false,
  user: undefined,
});

const onAuthStateChanged = user =>
  set({
    loaded: true,
    user,
  });

const initialize = async () => {
  const firebase = await Firebase.import();

  firebase.auth().onAuthStateChanged(onAuthStateChanged);
};

initialize();

export { get, set, select };
