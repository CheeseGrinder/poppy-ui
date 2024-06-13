import type { Components, JSX } from "../dist/types/components";

interface PopSwap extends Components.PopSwap, HTMLElement {}
export const PopSwap: {
    prototype: PopSwap;
    new (): PopSwap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
