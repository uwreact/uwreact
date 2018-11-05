import Importable from 'importable';

const OfflinePlugin = new Importable(
  import('offline-plugin/runtime'),
  async modules => {
    const [offlinePluginRuntime] = modules;

    offlinePluginRuntime.install({
      onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        offlinePluginRuntime.applyUpdate();
      },
      onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        window.location.reload();
      },
      onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
      },
    });
  },
  async modules => {
    const [offlinePluginRuntime] = modules;

    return offlinePluginRuntime;
  },
);

export default OfflinePlugin;
