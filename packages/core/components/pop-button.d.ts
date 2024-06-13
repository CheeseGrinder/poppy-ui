import type { Components, JSX } from "../dist/types/components";

interface PopButton extends Components.PopButton, HTMLElement {}
export const PopButton: {
    prototype: PopButton;
    new (): PopButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
