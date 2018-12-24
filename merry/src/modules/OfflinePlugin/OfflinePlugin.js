import Importable from 'importable';

const OfflinePlugin = new Importable(
  import('offline-plugin/runtime'),
  async modules => {
    const [offlinePluginRuntime] = modules;

    offlinePluginRuntime.install({
      onUpdateReady: () => {
        offlinePluginRuntime.applyUpdate();
      },
      onUpdated: () => {
        window.location.reload();
      },
    });
  },
  async modules => {
    const [offlinePluginRuntime] = modules;

    return offlinePluginRuntime;
  },
);

export default OfflinePlugin;
