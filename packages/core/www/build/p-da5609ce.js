class t {
  constructor() {
    this.config = new Map;
  }
  reset(t) {
    this.config = new Map(Object.entries(t));
  }
  set(t, s) {
    this.config.set(t, s);
  }
  get(t, s = {}) {
    return this.config.get(t) ?? s;
  }
  apply(t, s, e) {
    const n = this.get(s);
    const c = new Set([ ...Object.keys(n), ...Object.keys(e) ]);
    [ ...c ].forEach((s => t[s] ??= n[s] ?? e[s]));
  }
  setProp(t, s, e) {
    const n = this.get(t);
    this.config.set(t, {
      ...n,
      [s]: e
    });
  }
  getProp(t, s, e) {
    const n = this.get(t);
    return n[s] ?? e;
  }
}

const s = new t;

class e {
  constructor() {
    this.config = new Map;
  }
  reset(t) {
    this.config = new Map(Object.entries(t));
  }
  set(t, s) {
    this.config.set(t, s);
  }
  get(t, s) {
    return this.config.get(t) ?? s;
  }
}

const n = new e;

export { n as a, s as c };
//# sourceMappingURL=p-da5609ce.js.map