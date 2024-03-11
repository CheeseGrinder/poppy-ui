import { ComponentsOption, Poppy } from 'src/interfaces';
import { componentConfig } from '#global/component-config';

type DefaultComponent = ComponentsOption;

interface PoppyConfig {
  components: DefaultComponent;
}

export const initialize = (userConfig: PoppyConfig = {} as PoppyConfig) => {
  const win = window;
  const Poppy = (win.Poppy = win.Poppy || ({} as Poppy));

  componentConfig.reset(userConfig?.components ?? {});

  Poppy.components = componentConfig;
};

export default initialize;
