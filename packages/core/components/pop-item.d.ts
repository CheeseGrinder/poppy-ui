import type { Components, JSX } from "../dist/types/components";

interface PopItem extends Components.PopItem, HTMLElement {}
export const PopItem: {
    prototype: PopItem;
    new (): PopItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
