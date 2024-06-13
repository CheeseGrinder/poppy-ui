import type { Components, JSX } from "../dist/types/components";

interface PopBadge extends Components.PopBadge, HTMLElement {}
export const PopBadge: {
    prototype: PopBadge;
    new (): PopBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
