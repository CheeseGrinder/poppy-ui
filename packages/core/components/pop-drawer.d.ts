import type { Components, JSX } from "../dist/types/components";

interface PopDrawer extends Components.PopDrawer, HTMLElement {}
export const PopDrawer: {
    prototype: PopDrawer;
    new (): PopDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
