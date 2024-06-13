import { PoppyConfig, componentConfig, config } from '#config';
import type { Poppy } from 'src/interface';

export const initialize = (frameworkConfig?: PoppyConfig): void => {
  const win = window;
  const Poppy = (win.Poppy = win.Poppy || ({} as Poppy));

  componentConfig.reset(frameworkConfig?.components ?? {});
  delete frameworkConfig?.components;

  config.reset(frameworkConfig ?? {});

  Poppy.components = componentConfig;
};

export default initialize;
