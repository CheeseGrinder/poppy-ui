import { Config } from '@stencil/core';
import { config as base } from './stencil.config';

export const config: Config = {
  ...base,
  devServer: {
    port: 2222,
    openBrowser: false,
  },
};
