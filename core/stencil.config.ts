import { componentConfigTarget } from '@cheese-grinder/stencil-component-config';
import { docsReadme } from '@cheese-grinder/stencil-custom-readme';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { customDocsReadme } from './custom-docs-readme';
import { componentConfig } from './component-config';
import { Plugin } from '@stencil/core/internal';

export const config: Config = {
  namespace: 'Poppy',
  globalStyle: './src/poppy.scss',
  globalScript: './src/global/poppy.ts',
  plugins: [
    sass(),
  ],
  outputTargets: [
    docsReadme(),
    componentConfigTarget(),
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
