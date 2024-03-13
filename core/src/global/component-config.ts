import { ComponentsOption } from 'src/interfaces';

export class ComponentConfig {
  private config = new Map<keyof ComponentsOption, any>();

  reset(components: ComponentsOption): void {
    this.config = new Map(Object.entries(components) as any);
  }

  set<Comp extends keyof ComponentsOption>(component: Comp, config: ComponentsOption[Comp]): void {
    debugger;
    this.config.set(component, config);
  }

  get<Comp extends keyof ComponentsOption>(
    component: Comp,
    fallback: ComponentsOption[Comp] = {} as ComponentsOption[Comp],
  ): ComponentsOption[Comp] {
    return this.config.get(component) ?? fallback;
  }

  setProp<Comp extends keyof ComponentsOption, Prop extends keyof ComponentsOption[Comp]>(
    component: Comp,
    prop: Prop,
    value: ComponentsOption[Comp][Prop],
  ): void {
    const config = this.get(component, {} as ComponentsOption[Comp]);
    this.config.set(component, {
      ...config,
      [prop]: value,
    });
  }

  getProp<Comp extends keyof ComponentsOption, Prop extends keyof ComponentsOption[Comp]>(
    component: Comp,
    prop: Prop,
    fallback?: ComponentsOption[Comp][Prop],
  ): ComponentsOption[Comp][Prop] {
    const config = this.get(component, {} as ComponentsOption[Comp]);
    return config[prop] ?? fallback;
  }
}

export const componentConfig = new ComponentConfig();
