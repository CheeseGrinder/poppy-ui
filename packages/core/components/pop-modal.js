import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';
import { T as TriggerController } from './trigger.js';
import { S as Show } from './Show.js';

const modalCss = ":host .modal{position:fixed;inset:0;display:grid;place-items:center;border:none;margin:0;padding:0;width:100%;max-width:none;height:100%;max-height:none;background-color:transparent;color:inherit;transition-duration:0.2s;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-property:transform, opacity, visibility;overflow-y:hidden}:host .modal:not([open]){opacity:0;pointer-events:none}:host .modal:not([open])>.model-content{scale:0.9}:host .modal[open]>.model-content{scale:1}:host .modal::backdrop{animation:modal-pop 0.2s ease-out}@keyframes modal-pop{0%{opacity:0}}:host .modal-content{box-sizing:border-box;grid-column-start:1;grid-row-start:1;padding:1.5rem;border-radius:var(--border-radius, var(--radius-md, 8px));width:91.6666666667%;max-width:32rem;max-height:calc(100vh - 5em);background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)));box-shadow:rgba(0, 0, 0, 0.2509803922) 0 25px 50px -12px;overflow-y:auto;overscroll-behavior:contain;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, scale, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s}:host .modal-actions{display:flex;margin-top:1.5rem;justify-content:flex-end}:host .modal-backdrop{z-index:-1;display:grid;align-self:stretch;justify-self:stretch;grid-column-start:1;grid-row-start:1;color:transparent}:host .modal-backdrop>button{cursor:pointer;opacity:0}@media screen and (max-width: 640px){:host .modal{place-items:end}:host .modal>.modal-content{width:100%;max-width:none;border-top-left-radius:var(--border-radius, var(--radius-md, 8px));border-top-right-radius:var(--border-radius, var(--radius-md, 8px));border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(:not([showBackdrop])) .modal::backdrop{background-color:transparent}:host([showBackdrop]) .modal::backdrop{background-color:rgba(0, 0, 0, 0.4)}";
const PopModalStyle0 = modalCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Modal_dialog, _Modal_dialogObserver, _Modal_triggerController;
const Modal = /*@__PURE__*/ proxyCustomElement(class Modal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.didPresent = createEvent(this, "didPresent", 7);
        this.didDismiss = createEvent(this, "didDismiss", 7);
        _Modal_dialog.set(this, void 0);
        _Modal_dialogObserver.set(this, void 0);
        _Modal_triggerController.set(this, TriggerController.create());
        this.trigger = undefined;
        this.component = undefined;
        this.componentProps = undefined;
        this.showBackdrop = undefined;
        this.backdropDismiss = undefined;
        this.open = undefined;
    }
    onTriggerChange(trigger) {
        if (trigger) {
            __classPrivateFieldGet(this, _Modal_triggerController, "f").addListener(this.host, trigger);
        }
    }
    onOpenChange(isOpen) {
        if (isOpen) {
            this.present();
        }
        else {
            this.dismiss(null);
        }
    }
    connectedCallback() {
        const { trigger } = this;
        this.onTriggerChange(trigger);
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-modal', {
            showBackdrop: false,
            backdropDismiss: false,
            open: false,
        });
    }
    componentDidRender() {
        __classPrivateFieldSet(this, _Modal_dialogObserver, new MutationObserver(() => {
            this.open = __classPrivateFieldGet(this, _Modal_dialog, "f").open;
        }), "f");
        __classPrivateFieldGet(this, _Modal_dialogObserver, "f").observe(__classPrivateFieldGet(this, _Modal_dialog, "f"), {
            attributes: true,
            attributeFilter: ['open'],
        });
        if (this.open) {
            __classPrivateFieldGet(this, _Modal_dialog, "f").showModal();
        }
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _Modal_triggerController, "f").removeListener();
        __classPrivateFieldGet(this, _Modal_dialogObserver, "f").disconnect();
    }
    async present() {
        const { open } = this;
        if (open) {
            return false;
        }
        __classPrivateFieldGet(this, _Modal_dialog, "f").showModal();
        return true;
    }
    /**
     * Close the modal
     * @param data Data to return on close
     * @returns `true` if the modal has been closed, otherwise `false`
     */
    async dismiss(data) {
        const { open } = this;
        if (!open)
            return false;
        __classPrivateFieldGet(this, _Modal_dialog, "f").close(data);
        return true;
    }
    render() {
        return (h(Host, { key: '16b234e71b76dd8a420d42af203b5e21db8d9c8a' }, h("dialog", { key: '0639d4cb38a2aaaa03d3f9562d5b936d253151c4', class: "modal", ref: el => (__classPrivateFieldSet(this, _Modal_dialog, el, "f")) }, h("div", { key: 'e0933994f3c47caf7ea53aadd33e748a9fae4b29', class: "modal-content" }, h("slot", { key: 'd7c0c1a2ba8a3862a01483f1f512727fae3390c8' }), h("div", { key: '52d8a815b24ebbae27cbed1512331cb2aebd5c48', class: "modal-actions" }, h("slot", { key: '5f89965eb23347ad2f1838f878df1a8bcd1e4361', name: "actions" }))), h(Show, { key: 'f2d95c65cb8e317e6777380229b05d282f1e78e6', when: this.backdropDismiss }, h("form", { key: '25b7f1525767f4334cb6cfacd2a96dd289ad9369', method: "dialog", class: "modal-backdrop" }, h("button", { key: '30d5a46687b3f2f9e088dcce3806d68df6e5f333' }, "close"))))));
    }
    get host() { return this; }
    static get watchers() { return {
        "trigger": ["onTriggerChange"],
        "open": ["onOpenChange"]
    }; }
    static get style() { return PopModalStyle0; }
}, [1, "pop-modal", {
        "trigger": [1],
        "component": [1025],
        "componentProps": [1040],
        "showBackdrop": [1540, "show-backdrop"],
        "backdropDismiss": [1028, "backdrop-dismiss"],
        "open": [1540],
        "present": [64],
        "dismiss": [64]
    }, undefined, {
        "trigger": ["onTriggerChange"],
        "open": ["onOpenChange"]
    }]);
_Modal_dialog = new WeakMap(), _Modal_dialogObserver = new WeakMap(), _Modal_triggerController = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Modal);
            }
            break;
    } });
}

const PopModal = Modal;
const defineCustomElement = defineCustomElement$1;

export { PopModal, defineCustomElement };

//# sourceMappingURL=pop-modal.js.map