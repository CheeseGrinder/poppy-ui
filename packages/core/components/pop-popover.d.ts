import type { Components, JSX } from "../dist/types/components";

interface PopPopover extends Components.PopPopover, HTMLElement {}
export const PopPopover: {
    prototype: PopPopover;
    new (): PopPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
