import Loadable from '../Loadable';

class OfflinePlugin extends Loadable {
  static instance;

  constructor() {
    if (!OfflinePlugin.instance) {
      super(import('offline-plugin/runtime'));

      OfflinePlugin.instance = this;
    }

    return OfflinePlugin.instance;
  }

  load = async () => {
    const [offlinePluginRuntime] = await this.loadModules();

    return offlinePluginRuntime;
  };

  initialize = async modules => {
    const [offlinePluginRuntime] = modules;

    offlinePluginRuntime.install();
  };
}

export default OfflinePlugin;
