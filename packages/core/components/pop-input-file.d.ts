import type { Components, JSX } from "../dist/types/components";

interface PopInputFile extends Components.PopInputFile, HTMLElement {}
export const PopInputFile: {
    prototype: PopInputFile;
    new (): PopInputFile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
