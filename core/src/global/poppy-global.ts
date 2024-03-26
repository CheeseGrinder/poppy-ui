import { PoppyConfigInit, config } from '#config';
import { componentConfig } from '@cheese-grinder/stencil-component-config';

import { Poppy } from 'src/interfaces';


export const initialize = (frameworkConfig?: PoppyConfigInit): void => {
  console.log('initialize')
  const win = window;
  const Poppy = (win.Poppy = win.Poppy || ({} as Poppy));

  componentConfig.reset(frameworkConfig?.components ?? {});
  delete frameworkConfig?.components;

  config.reset(frameworkConfig ?? {});

  Poppy.components = componentConfig;
};

export default initialize;
