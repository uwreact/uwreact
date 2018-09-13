class Importable {
  modules;

  initialized;

  initialization;

  constructor(modules, initialize, map) {
    this.modules = Array.isArray(modules) ? modules : [modules];
    this.initialize = initialize;
    this.map = map;
  }

  import = async () => {
    const modules = await Promise.all(this.modules);

    if (!this.initialized) {
      if (!this.initialization) {
        this.initialization = new Promise(() => {
          this.initialized = true;
        });

        await this.initialize(modules);

        this.initialization.then();
      } else {
        await this.initialization;
      }
    }

    return this.map(modules);
  };
}

const create = (modules, initialize, map) => {
  const importable = new Importable(modules, initialize, map);

  return { import: async () => importable.import() };
};

export { create };
