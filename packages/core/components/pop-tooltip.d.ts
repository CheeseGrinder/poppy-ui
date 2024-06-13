import type { Components, JSX } from "../dist/types/components";

interface PopTooltip extends Components.PopTooltip, HTMLElement {}
export const PopTooltip: {
    prototype: PopTooltip;
    new (): PopTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
