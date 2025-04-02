import type { Configuration } from 'src/components-config';
import type { Size } from 'src/interface';

export class Config {
  private config = new Map<keyof FrameworkConfig, any>();

  reset(config: FrameworkConfig): void {
    this.config = new Map(Object.entries(config) as any);
  }

  set<Conf extends keyof FrameworkConfig>(key: Conf, value: FrameworkConfig[Conf]): void {
    this.config.set(key, value);
  }

  get<Conf extends keyof FrameworkConfig>(key: Conf, fallback?: FrameworkConfig[Conf]): FrameworkConfig[Conf] {
    return this.config.get(key) ?? fallback;
  }
}

export const config = new Config();

interface FrameworkConfig {
  defaultSize?: Size;
  debug?: boolean;
}

interface HelperConfig {
  ael?: (el: any, name: string, cb: any, opts: any) => any;
  rel?: (el: any, name: string, cb: any, opts: any) => any;
  ce?: (eventName: string, opts: any) => any;
}

export interface PoppyUserConfig {
  components?: Configuration.ComponentsConfig;
  config?: FrameworkConfig;
}

export type PoppyConfig = {
  helpers?: HelperConfig;
} & PoppyUserConfig;
