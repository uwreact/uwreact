/* eslint-disable new-cap */

import Importable from 'importable';

const Fuse = new Importable(
  import('fuse.js'),
  async () => {},
  async modules => {
    const [FuseJS] = modules;

    return (options, fuseOptions) =>
      new FuseJS.default(options, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        ...fuseOptions,
      });
  },
);

export default Fuse;
