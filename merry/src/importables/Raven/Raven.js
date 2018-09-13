import Importable from 'importable';

const Raven = new Importable(
  import('raven-js'),
  async modules => {
    const [raven] = modules;

    raven.default
      .config(process.env.SENTRY_URL, {
        release: process.env.NPM_PACKAGE_VERSION,
        environment: process.env.NODE_ENV,
      })
      .install();
  },
  async modules => {
    const [raven] = modules;

    return raven.default;
  },
);

export default Raven;
