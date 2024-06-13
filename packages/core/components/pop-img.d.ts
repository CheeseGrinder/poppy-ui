import type { Components, JSX } from "../dist/types/components";

interface PopImg extends Components.PopImg, HTMLElement {}
export const PopImg: {
    prototype: PopImg;
    new (): PopImg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
