export { getAssetPath, setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';

const initialize = (frameworkConfig) => {
    const win = window;
    const Poppy = (win.Poppy = win.Poppy || {});
    componentConfig.reset(frameworkConfig?.components ?? {});
    delete frameworkConfig?.components;
    config.reset(frameworkConfig ?? {});
    Poppy.components = componentConfig;
};

export { initialize };

//# sourceMappingURL=index.js.map