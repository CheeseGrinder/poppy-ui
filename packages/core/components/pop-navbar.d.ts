import type { Components, JSX } from "../dist/types/components";

interface PopNavbar extends Components.PopNavbar, HTMLElement {}
export const PopNavbar: {
    prototype: PopNavbar;
    new (): PopNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
