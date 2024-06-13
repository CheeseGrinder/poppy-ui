import type { Components, JSX } from "../dist/types/components";

interface PopModal extends Components.PopModal, HTMLElement {}
export const PopModal: {
    prototype: PopModal;
    new (): PopModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
