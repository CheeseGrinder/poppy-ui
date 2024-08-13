import type { Configuration } from 'src/components-config';

type Options = Configuration.ComponentsConfig;

export class ComponentConfig {
  private config = new Map<keyof Options, any>();

  reset(Components: Options): void {
    this.config = new Map(Object.entries(Components) as any);
  }

  set<Tag extends keyof Options>(component: Tag, config: Options[Tag]): void {
    this.config.set(component, config);
  }

  get<Tag extends keyof Options>(component: Tag, fallback: Options[Tag] = {} as Options[Tag]): Options[Tag] {
    return this.config.get(component) ?? fallback;
  }

  apply<Tag extends keyof Options>(ref: any, tag: Tag, defaultValue: Options[Tag] & Record<string, any>): void {
    const component = this.get(tag);
    const uniqueKeys = new Set([...Object.keys(component), ...Object.keys(defaultValue)]);

    [...uniqueKeys].forEach(key => (ref[key] ??= component[key] ?? defaultValue[key]));
  }

  setProp<Tag extends keyof Options, Prop extends keyof Options[Tag]>(
    component: Tag,
    prop: Prop,
    value: Options[Tag][Prop],
  ): void {
    const config = this.get(component);
    this.config.set(component, {
      ...(config as object),
      [prop]: value,
    });
  }

  getProp<Tag extends keyof Options, Prop extends keyof Options[Tag]>(
    component: Tag,
    prop: Prop,
    fallback?: Options[Tag][Prop],
  ): Options[Tag][Prop] {
    const config = this.get(component);
    return config[prop] ?? (fallback as Options[Tag][Prop]);
  }
}

export const componentConfig = new ComponentConfig();
