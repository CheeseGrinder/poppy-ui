import type { Components, JSX } from "../dist/types/components";

interface PopDropdown extends Components.PopDropdown, HTMLElement {}
export const PopDropdown: {
    prototype: PopDropdown;
    new (): PopDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
