import type { Components, JSX } from "../dist/types/components";

interface PopSelectPopover extends Components.PopSelectPopover, HTMLElement {}
export const PopSelectPopover: {
    prototype: PopSelectPopover;
    new (): PopSelectPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
