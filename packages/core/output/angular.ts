import { angularOutputTarget } from '@stencil/angular-output-target';

export function angularOutput(core: string, standalone = false) {
  return angularOutputTarget({
    componentCorePackage: core,
    outputType: 'component',
    directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/generated/components.ts',
    directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/generated/index.ts',
  });
}
