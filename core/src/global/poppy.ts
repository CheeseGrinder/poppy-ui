import { PoppyConfigInit, componentConfig, config } from '#config';
import type { Poppy } from 'src/interfaces';

export const initialize = (frameworkConfig?: PoppyConfigInit): void => {
  const win = window;
  const Poppy = (win.Poppy = win.Poppy || ({} as Poppy));

  componentConfig.reset(frameworkConfig?.components ?? {});
  delete frameworkConfig?.components;

  config.reset(frameworkConfig ?? {});

  Poppy.components = componentConfig;
};

export default initialize;
