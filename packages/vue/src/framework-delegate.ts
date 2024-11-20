import type { FrameworkDelegate } from '@poppy-ui/core/components';
import type { VNode } from 'vue';
import { Teleport, h, shallowRef } from 'vue';

const userComponents = shallowRef([]);
/**
 * When rendering user components inside of
 * ion-modal, or ion-popover the component
 * needs to be created inside of the current application
 * context otherwise libraries such as vue-i18n or vuex
 * will not work properly.
 *
 * `userComponents` renders teleported components as children
 * of `ion-app` within the current application context.
 */
export const addTeleportedUserComponent = (component: VNode) => {
  userComponents.value = [...userComponents.value, component];
};

export const removeTeleportedUserComponent = (component: VNode) => {
  userComponents.value = userComponents.value.filter(cmp => cmp !== component);
};

export const VueDelegate = (
  addFn = addTeleportedUserComponent,
  removeFn = removeTeleportedUserComponent,
): FrameworkDelegate => {
  // `h` doesn't provide a type for the component argument
  const refMap = new WeakMap<any, VNode>();

  const attachViewToDom = (
    parentElement: HTMLElement,
    componentOrTagName: any | string,
    componentProps: any = {},
    classes?: string[],
  ) => {
    const div = document.createElement('div');
    classes && div.classList.add(...classes);
    parentElement.appendChild(div);

    const hostComponent = h(Teleport, { to: div }, h(componentOrTagName, { ...componentProps }));

    /**
     * Ionic Framework will use what is returned from `attachViewToDom`
     * as the `component` argument in `removeViewFromDom`.
     *
     * We will store a reference to the div element and the host component,
     * so we can later look-up and unmount the correct instance.
     */
    refMap.set(div, hostComponent);

    addFn(hostComponent);

    return Promise.resolve(div);
  };

  const removeViewFromDom = (_container: any, component: any) => {
    const hostComponent = refMap.get(component);
    hostComponent && removeFn(hostComponent);

    return Promise.resolve();
  };

  return { attachViewToDom, removeViewFromDom };
};
