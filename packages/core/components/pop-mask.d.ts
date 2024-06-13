import type { Components, JSX } from "../dist/types/components";

interface PopMask extends Components.PopMask, HTMLElement {}
export const PopMask: {
    prototype: PopMask;
    new (): PopMask;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
