import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const navbarCss = ":host{padding:var(--padding, 0.5rem);width:100%;min-height:4rem;background:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)))}:host>header{display:flex;align-items:center;width:100%;height:100%}::slotted(*){display:inline-flex}::slotted(*):not([slot]){flex-shrink:0}::slotted(*:not([slot])){flex-shrink:0}::slotted([slot=start]){width:50%;justify-content:flex-start}::slotted([slot=center]){flex-shrink:0}::slotted([slot=end]){width:50%;justify-content:flex-end}";
const PopNavbarStyle0 = navbarCss;

const Navbar = /*@__PURE__*/ proxyCustomElement(class Navbar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '6d12d22cb8b17fa4bed8e143fdc63c70ec4278b5' }, h("header", { key: 'b3eb8524cd0fd52923dfda6944f82f2f6d428b5e' }, h("slot", { key: '1cd593fdbb98cbbc8debca66f6e7941efd4bf277', name: "start" }), h("slot", { key: '5d0b760a4bbe683c4f918099b7bdf5e454fb6f3e' }), h("slot", { key: '9418880ca120e5a7afb53233fba13813bdb601c9', name: "end" }))));
    }
    static get style() { return PopNavbarStyle0; }
}, [1, "pop-navbar"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-navbar"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-navbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Navbar);
            }
            break;
    } });
}

const PopNavbar = Navbar;
const defineCustomElement = defineCustomElement$1;

export { PopNavbar, defineCustomElement };

//# sourceMappingURL=pop-navbar.js.map