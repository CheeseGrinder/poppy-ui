import { ComponentOptions as Components } from 'src/component-config';

export class ComponentConfig {
  private config = new Map<keyof Components, any>();

  reset(Components: Components): void {
    this.config = new Map(Object.entries(Components) as any);
  }

  set<Tag extends keyof Components>(component: Tag, config: Components[Tag]): void {
    this.config.set(component, config);
  }

  get<Tag extends keyof Components>(
    component: Tag,
    fallback: Components[Tag] = {} as Components[Tag],
  ): Components[Tag] {
    return this.config.get(component) ?? fallback;
  }

  apply<Tag extends keyof Components>(ref: any, tag: Tag, defaultValue: Components[Tag]): void {
    Object.entries(
      {...this.get(tag, {}), ...defaultValue}
    ).forEach(([key, value]) => ref[key] ??= value);
  }

  setProp<Tag extends keyof Components, Prop extends keyof Components[Tag]>(
    component: Tag,
    prop: Prop,
    value: Components[Tag][Prop],
  ): void {
    const config = this.get(component, {} as Components[Tag]);
    this.config.set(component, {
      ...config,
      [prop]: value,
    });
  }

  getProp<Tag extends keyof Components, Prop extends keyof Components[Tag]>(
    component: Tag,
    prop: Prop,
    fallback?: Components[Tag][Prop],
  ): Components[Tag][Prop] {
    const config = this.get(component, {} as Components[Tag]);
    return config[prop] ?? fallback;
  }
}

export const componentConfig = new ComponentConfig();
