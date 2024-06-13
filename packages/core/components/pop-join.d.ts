import type { Components, JSX } from "../dist/types/components";

interface PopJoin extends Components.PopJoin, HTMLElement {}
export const PopJoin: {
    prototype: PopJoin;
    new (): PopJoin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
