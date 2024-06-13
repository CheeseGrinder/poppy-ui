class ComponentConfig {
    constructor() {
        this.config = new Map();
    }
    reset(Components) {
        this.config = new Map(Object.entries(Components));
    }
    set(component, config) {
        this.config.set(component, config);
    }
    get(component, fallback = {}) {
        return this.config.get(component) ?? fallback;
    }
    apply(ref, tag, defaultValue) {
        const component = this.get(tag);
        const uniqueKeys = new Set([...Object.keys(component), ...Object.keys(defaultValue)]);
        [...uniqueKeys].forEach(key => (ref[key] ??= component[key] ?? defaultValue[key]));
    }
    setProp(component, prop, value) {
        const config = this.get(component);
        this.config.set(component, {
            ...config,
            [prop]: value,
        });
    }
    getProp(component, prop, fallback) {
        const config = this.get(component);
        return config[prop] ?? fallback;
    }
}
const componentConfig = new ComponentConfig();

class Config {
    constructor() {
        this.config = new Map();
    }
    reset(config) {
        this.config = new Map(Object.entries(config));
    }
    set(key, value) {
        this.config.set(key, value);
    }
    get(key, fallback) {
        return this.config.get(key) ?? fallback;
    }
}
const config = new Config();

export { config as a, componentConfig as c };

//# sourceMappingURL=config.js.map