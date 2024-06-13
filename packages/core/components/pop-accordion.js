import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as compareOptions } from './compare-with-utils.js';
import { h as hostContext } from './helpers.js';
import { C as ChevronDown } from './ChevronDown.js';

const accordionCss = ":host(.join-item){border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{--border-radius:var(--radius-xl, 16px);--border-color:oklch(var(--base-300, 0.211484 0.01165 254.087939));--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--animation:0.2s;box-sizing:border-box;position:relative;display:grid;overflow:hidden;width:100%;border:1px solid var(--border-color);border-radius:var(--border-radius);background-color:var(--background);transition:grid-template-rows var(--animation)}:host>.accordion-title{box-sizing:border-box;position:relative;display:flex;justify-content:space-between;align-items:center;grid-column-start:1;grid-row-start:1;padding:1rem;padding-inline-end:1.5rem;width:100%;min-height:3.75rem;cursor:pointer;user-select:none;transition:background-color var(--animation) ease-out}:host>.accordion-content{grid-column-start:1;grid-row-start:2;padding-left:1rem;padding-right:1rem;min-height:0;transition:visibility var(--animation), padding var(--animation) ease-out, background-color var(--animation) ease-out;cursor:unset}:host>svg{margin-inline-start:auto;transition:transform 150ms ease 0ms}:host(:not([is-open])){grid-template-rows:auto 0fr}:host(:not([is-open]))>.accordion-content{visibility:hidden}:host([is-open]){grid-template-rows:auto 1fr}:host([is-open]) svg{transform:rotateX(180deg)}:host([is-open])>.accordion-content{visibility:visible;min-height:fit-content;padding-bottom:1rem}";
const PopAccordionStyle0 = accordionCss;

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
var _Accordion_accordionGroup, _Accordion_handleValueChanged, _Accordion_onClick;
const Accordion = /*@__PURE__*/ proxyCustomElement(class Accordion extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _Accordion_accordionGroup.set(this, void 0);
        _Accordion_handleValueChanged.set(this, () => {
            if (!__classPrivateFieldGet(this, _Accordion_accordionGroup, "f"))
                return;
            const { active: newActive } = __classPrivateFieldGet(this, _Accordion_accordionGroup, "f");
            const current = this.name;
            this.isOpen = compareOptions(current, newActive);
        });
        _Accordion_onClick.set(this, () => {
            if (__classPrivateFieldGet(this, _Accordion_accordionGroup, "f"))
                return;
            const { readonly, disabled } = this;
            if (disabled || readonly)
                return;
            this.isOpen = !this.isOpen;
        });
        this.readonly = false;
        this.disabled = false;
        this.name = undefined;
        this.isOpen = false;
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _Accordion_accordionGroup, this.host.closest('pop-accordion-group'), "f");
        __classPrivateFieldGet(this, _Accordion_accordionGroup, "f")?.addEventListener('popActiveChange', __classPrivateFieldGet(this, _Accordion_handleValueChanged, "f"));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _Accordion_accordionGroup, "f")?.removeEventListener('popActiveChange', __classPrivateFieldGet(this, _Accordion_handleValueChanged, "f"));
    }
    /**
     * Open the accordion.
     * If the method returns `false`, the accordion was already open. otherwise it returns `true`
     */
    async open() {
        if (this.isOpen) {
            return false;
        }
        this.isOpen = true;
        return true;
    }
    /**
     * Close the accordion.
     * If the method returns `false`, the accordion was already closed. otherwise it returns `true`
     */
    async close() {
        if (!this.isOpen) {
            return false;
        }
        this.isOpen = false;
        return true;
    }
    /**
     * Open or close the accordion depending on his actual state
     */
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    render() {
        const { host } = this;
        return (h(Host, { key: 'a44ed2242d1ee9cb4b38f53187af5700953674b4', class: {
                'join-item': hostContext(host, 'pop-join'),
            } }, h("header", { key: 'bb5931988634da26f6e635252294e31c64889e78', part: "header", class: "accordion-title", onClick: __classPrivateFieldGet(this, _Accordion_onClick, "f") }, h("div", { key: 'f73598cb6d8c16a8d3da7464062b67126a76e43d', class: "header-content" }, h("slot", { key: '49db84b7544cc13762a7f42c404412b3f238cad1', name: "header" })), h(ChevronDown, { key: '1cf98e72cd85f7a66a6fad9ef92fb784f86ce2c9' })), h("div", { key: '752a960f1a47fd6fb2cff4cecc9cc0ae84cb0ccf', part: "content", class: "accordion-content" }, h("slot", { key: '6e70351bb6fdf79c825efe51f280d64285c27feb' }))));
    }
    get host() { return this; }
    static get style() { return PopAccordionStyle0; }
}, [1, "pop-accordion", {
        "readonly": [516],
        "disabled": [516],
        "name": [513],
        "isOpen": [1540, "is-open"],
        "open": [64],
        "close": [64],
        "toggle": [64]
    }]);
_Accordion_accordionGroup = new WeakMap(), _Accordion_handleValueChanged = new WeakMap(), _Accordion_onClick = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Accordion);
            }
            break;
    } });
}

const PopAccordion = Accordion;
const defineCustomElement = defineCustomElement$1;

export { PopAccordion, defineCustomElement };

//# sourceMappingURL=pop-accordion.js.map