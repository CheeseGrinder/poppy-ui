import { Configuration } from 'src/components-config';

type Config = Configuration.ComponentsConfig;

export class ComponentConfig {
  private config = new Map<keyof Config, any>();

  reset(Components: Config): void {
    this.config = new Map(Object.entries(Components) as any);
  }

  set<Tag extends keyof Config>(component: Tag, config: Config[Tag]): void {
    this.config.set(component, config);
  }

  get<Tag extends keyof Config>(component: Tag, fallback: Config[Tag] = {} as Config[Tag]): Config[Tag] {
    return this.config.get(component) ?? fallback;
  }

  apply(ref: any, tag: string, defaultValue: Record<string, any>): void;
  apply<Tag extends keyof Config>(ref: any, tag: Tag, defaultValue: Config[Tag] & Record<string, any>): void {
    const component = this.get(tag);
    const uniqueKeys = new Set([...Object.keys(component!), ...Object.keys(defaultValue)]);

    [...uniqueKeys].forEach(key => (ref[key] ??= component![key] ?? defaultValue[key]));
  }

  setProp<Tag extends keyof Config, Prop extends keyof Config[Tag]>(
    component: Tag,
    prop: Prop,
    value: Config[Tag][Prop],
  ): void {
    const config = this.get(component);
    this.config.set(component, {
      ...(config as object),
      [prop]: value,
    });
  }

  getProp<Tag extends keyof Config, Prop extends keyof Config[Tag]>(
    component: Tag,
    prop: Prop,
    fallback?: Config[Tag][Prop],
  ): Config[Tag][Prop] {
    const config = this.get(component);
    return config![prop] ?? (fallback as Config[Tag][Prop]);
  }
}

export const componentConfig = new ComponentConfig();
