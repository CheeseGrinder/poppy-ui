import { Size } from 'src/interfaces';
import { Configuration } from '@cheese-grinder/stencil-component-config';


export class Config {
  private config = new Map<keyof FrameworkConfig, any>();

  reset(config: FrameworkConfig): void {
    this.config = new Map(Object.entries(config) as any);
  }

  set<Conf extends keyof FrameworkConfig>(key: Conf, value: FrameworkConfig[Conf]): void {
    this.config.set(key, value);
  }

  get<Conf extends keyof FrameworkConfig>(
    key: Conf,
    fallback?: FrameworkConfig[Conf],
  ): FrameworkConfig[Conf] {
    return this.config.get(key) ?? fallback;
  }
}

export const config = new Config();


export interface FrameworkConfig {
  defaultSize?: Size;
}

export type PoppyConfigInit = {
  components?: Configuration.ComponentsConfig;
} & FrameworkConfig;