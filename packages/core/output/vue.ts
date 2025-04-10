import { type ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';
import type { JSX } from '../src/components';

type ComponentTag = keyof JSX.IntrinsicElements;
type VueComponentModel = {
  elements: ComponentTag | ComponentTag[];
} & ComponentModelConfig;

export function vueOutput(core: string, ssr = false) {
  const ssrOptions: Parameters<typeof vueOutputTarget>[0] = {
    hydrateModule: `${core}/hydrate`,
    proxiesFile: '../nuxt/src/generated/components.ts',
  };

  return vueOutputTarget({
    includeImportCustomElements: true,
    includePolyfills: false,
    includeDefineCustomElements: false,
    componentCorePackage: core,
    proxiesFile: '../vue/src/generated/components.ts',
    componentModels: <VueComponentModel[]>[
      {
        elements: ['pop-checkbox', 'pop-toggle'],
        targetAttr: 'checked',
        event: 'pop-change',
      },
      {
        elements: ['pop-swap', 'pop-accordion-group'],
        targetAttr: 'active',
        event: 'pop-change',
      },
      {
        elements: ['pop-radio', 'pop-radio-group', 'pop-select', 'pop-range', 'pop-input-file'],
        targetAttr: 'value',
        event: 'pop-change',
      },
      {
        elements: ['pop-input', 'pop-textarea'],
        targetAttr: 'value',
        event: 'pop-input',
      },
    ],
    ...(ssr ? ssrOptions : {}),
  });
}
