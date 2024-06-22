import { componentConfigTarget } from '@cheese-grinder/stencil-component-config';
import { docsReadme } from '@cheese-grinder/stencil-custom-readme';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { apiSpecGenerator } from './plugins/api-spec-generator';
import type { JSX } from './src/components';

type ComponentTag = keyof JSX.IntrinsicElements;
type Bundle = { components: ComponentTag[] };


type VueComponentModel = {
  elements: ComponentTag | ComponentTag[];
  event: string
  targetAttr: string;
}

const componentCorePackage = '@poppy-ui/core';

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
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/CheeseGrinder/poppy-ui/tree/main/packages/core/',
    },
    apiSpecGenerator({
      file: 'api.txt',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../assets/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    vueOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../vue/src/proxies.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false,
      includePolyfills: false,
      componentModels: <VueComponentModel[]>[
        {
          elements: ['pop-checkbox', 'pop-toggle'],
          targetAttr: 'checked',
          event: 'pop-change'
        },
        {
          elements: ['pop-swap'],
          targetAttr: 'active',
          event: 'pop-change'
        },
        {
          elements: ['pop-accordion-group'],
          targetAttr: 'active',
          event: 'pop-change'
        },
        {
          elements: ['pop-radio-group', 'pop-radio', 'pop-select'],
          targetAttr: 'value',
          event: 'pop-change',
        },
      ]
    })
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
    { components: ['pop-list', 'pop-item'] },
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
