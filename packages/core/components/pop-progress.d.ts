import type { Components, JSX } from "../dist/types/components";

interface PopProgress extends Components.PopProgress, HTMLElement {}
export const PopProgress: {
    prototype: PopProgress;
    new (): PopProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
