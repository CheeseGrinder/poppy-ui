import type { Components, JSX } from "../dist/types/components";

interface PopInput extends Components.PopInput, HTMLElement {}
export const PopInput: {
    prototype: PopInput;
    new (): PopInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
