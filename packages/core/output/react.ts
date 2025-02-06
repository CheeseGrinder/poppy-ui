import { reactOutputTarget } from '@stencil/react-output-target';

export function reactOutput(core: string, ssr = false): ReturnType<typeof reactOutputTarget> {
  const ssrOptions: Parameters<typeof reactOutputTarget>[0] = {
    outDir: '../next/src/generated',
    hydrateModule: `${core}/hydrate`,
  };

  return reactOutputTarget({
    stencilPackageName: core,
    outDir: '../react/src/generated',
    customElementsDir: 'components',
    ...(ssr ? ssrOptions : {}),
  });
}
