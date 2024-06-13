import type { Components, JSX } from "../dist/types/components";

interface PopSelectOption extends Components.PopSelectOption, HTMLElement {}
export const PopSelectOption: {
    prototype: PopSelectOption;
    new (): PopSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
