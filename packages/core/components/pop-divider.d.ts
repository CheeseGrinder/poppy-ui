import type { Components, JSX } from "../dist/types/components";

interface PopDivider extends Components.PopDivider, HTMLElement {}
export const PopDivider: {
    prototype: PopDivider;
    new (): PopDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
