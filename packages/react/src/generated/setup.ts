import { initialize, type PoppyUserConfig } from "@poppy-ui/core";

export const setupPoppyReact = (config: PoppyUserConfig = {}) => {
  /**
   * By default Stencil hides elements that
   * are not hydrated, but in the CE build there is no
   * hydration.
   */
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('pop-ce');
  }

  initialize({
    ...config,
  });
};
