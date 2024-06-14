import { Size } from 'src/interface';
import { Configuration } from '@cheese-grinder/stencil-component-config';

export class Config {
  private config = new Map<keyof PoppyConfig, any>();

  reset(config: PoppyConfig): void {
    this.config = new Map(Object.entries(config) as any);
  }

  set<Conf extends keyof PoppyConfig>(key: Conf, value: PoppyConfig[Conf]): void {
    this.config.set(key, value);
  }

  get<Conf extends keyof PoppyConfig>(key: Conf, fallback?: PoppyConfig[Conf]): PoppyConfig[Conf] {
    return this.config.get(key) ?? fallback;
  }
}

export const config = new Config();

export interface PoppyUserConfig {
  components?: Configuration.ComponentsConfig;

  defaultSize?: Size;
}

export type PoppyConfig = {
  _ael?: (el: any, name: string, cb: any, opts: any) => any;
  _rel?: (el: any, name: string, cb: any, opts: any) => any;
  _ce?: (eventName: string, opts: any) => any;
} & PoppyUserConfig;
