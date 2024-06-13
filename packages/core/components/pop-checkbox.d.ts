import type { Components, JSX } from "../dist/types/components";

interface PopCheckbox extends Components.PopCheckbox, HTMLElement {}
export const PopCheckbox: {
    prototype: PopCheckbox;
    new (): PopCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
