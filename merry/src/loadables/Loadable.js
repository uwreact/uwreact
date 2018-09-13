class Loadable {
  modules = [];

  initialized = false;

  initialization;

  constructor(...modules) {
    this.modules = modules;
  }

  loadModules = async () => {
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

    return modules;
  };

  initialize = async () => {};
}

export default Loadable;
