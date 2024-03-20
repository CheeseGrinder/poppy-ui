import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { customDocsReadme } from './custom-docs-readme';
import { componentConfig } from './component-config';
import { Plugin } from '@stencil/core/internal';

export const config: Config = {
  namespace: 'Poppy',
  globalStyle: './src/poppy.scss',
  globalScript: './src/global/poppy-global.ts',
  plugins: [
    sass(),
  ],
  outputTargets: [
    customDocsReadme(),
    componentConfig(),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
