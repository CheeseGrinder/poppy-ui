import type { Components, JSX } from "../dist/types/components";

interface PopKbd extends Components.PopKbd, HTMLElement {}
export const PopKbd: {
    prototype: PopKbd;
    new (): PopKbd;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
