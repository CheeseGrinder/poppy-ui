import type { Components, JSX } from "../dist/types/components";

interface PopLoading extends Components.PopLoading, HTMLElement {}
export const PopLoading: {
    prototype: PopLoading;
    new (): PopLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
