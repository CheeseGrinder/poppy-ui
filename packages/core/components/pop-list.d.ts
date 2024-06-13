import type { Components, JSX } from "../dist/types/components";

interface PopList extends Components.PopList, HTMLElement {}
export const PopList: {
    prototype: PopList;
    new (): PopList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
