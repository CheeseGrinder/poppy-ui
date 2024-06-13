import type { Components, JSX } from "../dist/types/components";

interface PopSelect extends Components.PopSelect, HTMLElement {}
export const PopSelect: {
    prototype: PopSelect;
    new (): PopSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
