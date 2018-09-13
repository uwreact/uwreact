import { create } from 'reworm';

import { Firebase } from 'loadables';

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
  const firebase = await new Firebase().load();

  firebase.auth().onAuthStateChanged(onAuthStateChanged);
};

initialize();

export { get, set, select };
