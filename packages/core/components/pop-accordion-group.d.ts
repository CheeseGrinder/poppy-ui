import type { Components, JSX } from "../dist/types/components";

interface PopAccordionGroup extends Components.PopAccordionGroup, HTMLElement {}
export const PopAccordionGroup: {
    prototype: PopAccordionGroup;
    new (): PopAccordionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
