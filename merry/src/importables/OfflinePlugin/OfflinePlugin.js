import { create } from '../importable';

const OfflinePlugin = create(
  import('offline-plugin/runtime'),
  async modules => {
    const [offlinePluginRuntime] = modules;

    offlinePluginRuntime.install();
  },
  async modules => {
    const [offlinePluginRuntime] = modules;

    return offlinePluginRuntime;
  },
);

export default OfflinePlugin;
