import type { Components, JSX } from "../dist/types/components";

interface PopRadioGroup extends Components.PopRadioGroup, HTMLElement {}
export const PopRadioGroup: {
    prototype: PopRadioGroup;
    new (): PopRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
