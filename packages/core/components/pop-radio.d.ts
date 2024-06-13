import type { Components, JSX } from "../dist/types/components";

interface PopRadio extends Components.PopRadio, HTMLElement {}
export const PopRadio: {
    prototype: PopRadio;
    new (): PopRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
