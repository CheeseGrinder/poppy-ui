import { reactOutputTarget } from '@stencil/react-output-target';

export function reactOutput(core: string, ssr = false): ReturnType<typeof reactOutputTarget> {
  const ssrOptions: Parameters<typeof reactOutputTarget>[0] = {
    outDir: '../next/src',
    hydrateModule: `${core}/hydrate`,
  };

  return reactOutputTarget({
    stencilPackageName: core,
    outDir: '../react/src',
    customElementsDir: 'components',
    ...(ssr ? ssrOptions : {}),
  });
}
