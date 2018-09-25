import Importable from 'importable';

const Firebase = new Importable(
  import('fuse.js'),
  async () => {},
  async modules => {
    const [FuseJS] = modules;

    return (options, fuseOptions) =>
      new FuseJS(
        options,
        fuseOptions || {
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
        },
      );
  },
);

export default Firebase;
