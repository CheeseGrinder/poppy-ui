import type { PoppyUserConfig } from '@poppy-ui/core';
import { initialize } from '@poppy-ui/core/components';
import type { Plugin } from 'vue';

const toKebabCase = (eventName: string) => {
  return eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const getHelperFunctions = () => {
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName: string, opts: any) => new CustomEvent(toKebabCase(eventName), opts),
  };
};

export const PoppyVue: Plugin<[PoppyUserConfig?]> = {
  async install(_, config = {}) {
    /**
     * By default Poppy UI hides elements that
     * are not hydrated, but in the CE build there is no
     * hydration.
     */
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('pop-ce');
    }

    initialize({
      ...config,
      helpers: getHelperFunctions(),
    });
  },
};
