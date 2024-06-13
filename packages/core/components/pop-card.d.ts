import type { Components, JSX } from "../dist/types/components";

interface PopCard extends Components.PopCard, HTMLElement {}
export const PopCard: {
    prototype: PopCard;
    new (): PopCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
