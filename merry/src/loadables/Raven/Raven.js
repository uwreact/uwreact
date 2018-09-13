import Loadable from '../Loadable';

class Raven extends Loadable {
  static instance;

  constructor() {
    if (!Raven.instance) {
      super(import('raven-js'));

      Raven.instance = this;
    }

    return Raven.instance;
  }

  load = async () => {
    const [raven] = await this.loadModules();

    return raven.default;
  };

  initialize = async modules => {
    const [raven] = modules;

    raven.default
      .config(process.env.SENTRY_URL, {
        release: process.env.NPM_PACKAGE_VERSION,
        environment: process.env.NODE_ENV,
      })
      .install();
  };
}

export default Raven;
