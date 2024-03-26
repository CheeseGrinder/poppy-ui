import { componentConfigTarget } from '@cheese-grinder/stencil-component-config';
import { docsReadme } from '@cheese-grinder/stencil-custom-readme';
import { Config } from '@stencil/core';
import type { JSX } from './src/components';
import { sass } from '@stencil/sass';

type ComponentTag = keyof JSX.IntrinsicElements;
type Bundle = { components: ComponentTag[] };

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
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  bundles: <Bundle[]>[
    { components: ['pop-accordion', 'pop-accordion-group'] },
    { components: ['pop-avatar', 'pop-img'] },
    { components: ['pop-badge', 'pop-indicator'] },
    { components: ['pop-button'] },
    { components: ['pop-card'] },
    { components: ['pop-checkbox'] },
    { components: ['pop-divider'] },
    { components: ['pop-drawer'] },
    { components: ['pop-dropdown'] },
    { components: ['pop-input'] },
    { components: ['pop-input-file'] },
    { components: ['pop-list', 'pop-list-title', 'pop-item'] },
    { components: ['pop-join'] },
    { components: ['pop-kbd'] },
    { components: ['pop-loading'] },
    { components: ['pop-mask'] },
    { components: ['pop-modal'] },
    { components: ['pop-navbar'] },
    { components: ['pop-popover'] },
    { components: ['pop-progress'] },
    { components: ['pop-radio', 'pop-radio-group'] },
    { components: ['pop-range'] },
    { components: ['pop-select', 'pop-select-option', 'pop-select-popover'] },
    { components: ['pop-swap'] },
    { components: ['pop-textarea'] },
    { components: ['pop-toggle'] },
    { components: ['pop-tooltip'] },
  ],
  testing: {
    browserHeadless: "new",
  },
};
