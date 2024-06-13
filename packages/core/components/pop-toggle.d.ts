import type { Components, JSX } from "../dist/types/components";

interface PopToggle extends Components.PopToggle, HTMLElement {}
export const PopToggle: {
    prototype: PopToggle;
    new (): PopToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
