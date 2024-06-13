import type { Components, JSX } from "../dist/types/components";

interface PopAvatar extends Components.PopAvatar, HTMLElement {}
export const PopAvatar: {
    prototype: PopAvatar;
    new (): PopAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
