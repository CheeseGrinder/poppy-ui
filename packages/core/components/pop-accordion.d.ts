import type { Components, JSX } from "../dist/types/components";

interface PopAccordion extends Components.PopAccordion, HTMLElement {}
export const PopAccordion: {
    prototype: PopAccordion;
    new (): PopAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
