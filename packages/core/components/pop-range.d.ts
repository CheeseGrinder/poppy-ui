import type { Components, JSX } from "../dist/types/components";

interface PopRange extends Components.PopRange, HTMLElement {}
export const PopRange: {
    prototype: PopRange;
    new (): PopRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
