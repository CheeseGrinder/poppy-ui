import type { Components, JSX } from "../dist/types/components";

interface PopIndicator extends Components.PopIndicator, HTMLElement {}
export const PopIndicator: {
    prototype: PopIndicator;
    new (): PopIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
