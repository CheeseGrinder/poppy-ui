import { PoppyConfig, componentConfig, config } from '#config';
import { setPlatformHelpers } from '@stencil/core';
import type { Poppy } from 'src/interface';

export const initialize = (frameworkConfig: PoppyConfig = {}): void => {
  const win = window;
  const Poppy = (win.Poppy = win.Poppy || ({} as Poppy));

  componentConfig.reset(frameworkConfig?.components ?? {});
  delete frameworkConfig?.components;

  config.reset(frameworkConfig ?? {});

  const platformHelpers: any = {};
  if (frameworkConfig._ael) {
    platformHelpers.ael = frameworkConfig._ael;
  }
  if (frameworkConfig._rel) {
    platformHelpers.rel = frameworkConfig._rel;
  }
  if (frameworkConfig._ce) {
    platformHelpers.ce = frameworkConfig._ce;
  }
  setPlatformHelpers(platformHelpers);

  Poppy.components = componentConfig;
};

export default initialize;
