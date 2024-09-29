import type { Config } from '@stencil/core';
import { config as base } from './stencil.config';

export const config: Config = {
  ...base,
  devServer: {
    port: 2222,
    openBrowser: false,
  },
  outputTargets: [
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    ...base.outputTargets!,
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: '**/*.html' }, { src: '**/*.css' }]
    },
  ]
};
