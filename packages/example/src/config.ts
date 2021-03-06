export class Config {
  vars: { [key: string]: string | undefined } = {};

  fromEnv(name: string, defaultVal?: string) {
    const val = process.env[name];
    if (!val && !defaultVal) {
      throw new Error(`Could not load var from env: ${name}`);
    }
    return val;
  }

  load(pairs: { [name: string]: string }) {
    for (let key in pairs) {
      this.vars[key] = this.fromEnv(pairs[key]);
    }
  }

  get(name: string) {
    if (!name) throw new Error(`Non-existant config val: ${name}`);
    return this.vars[name];
  }
}
