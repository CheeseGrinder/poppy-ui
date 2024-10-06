import { setPlatformHelpers } from '@stencil/core';
import { type PoppyConfig, componentConfig, config } from '#config';

export const initialize = (frameworkConfig: PoppyConfig = {}): void => {
  window.Poppy ||= {};
  const { Poppy } = window;

  componentConfig.reset(frameworkConfig?.components ?? {});
  Poppy.components = componentConfig;

  config.reset(frameworkConfig.config ?? {});
  Poppy.config = config;

  if (frameworkConfig.helpers) {
    setPlatformHelpers(frameworkConfig.helpers);
  }
};

export default initialize;
