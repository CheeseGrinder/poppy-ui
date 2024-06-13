import type { Components, JSX } from "../dist/types/components";

interface PopTextarea extends Components.PopTextarea, HTMLElement {}
export const PopTextarea: {
    prototype: PopTextarea;
    new (): PopTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
