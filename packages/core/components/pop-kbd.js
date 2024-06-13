import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';

const kbdCss = ":host{width:min-content}:host>kbd{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;border-style:solid;border-radius:var(--border-radius, var(--radius-md, 8px));border-width:1px;border-bottom-width:2px;border-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2));background-color:var(--background, oklch(var(--base-200, 0.232607 0.013807 253.100675)));font-family:var(--font, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Vazirmatn, Courier New, monospace);font-feature-settings:normal;font-variation-settings:normal;user-select:none}:host([size=xs])>kbd{padding-left:0.25rem;padding-right:0.25rem;min-height:1.2em;min-width:1.2em;font-size:0.75rem;line-height:1rem}:host([size=sm])>kbd{padding-left:0.25rem;padding-right:0.25rem;min-height:1.6em;min-width:1.6em;font-size:0.875rem;line-height:1.25rem}:host([size=md])>kbd,:host(:not([size]))>kbd{padding-left:0.5rem;padding-right:0.5rem;min-height:2.2em;min-width:2.2em;font-size:1rem;line-height:1.5rem}:host([size=lg])>kbd{padding-left:1rem;padding-right:1rem;min-height:2.5em;min-width:2.5em;font-size:1.125rem;line-height:1.75rem}";
const PopKbdStyle0 = kbdCss;

const Kbd = /*@__PURE__*/ proxyCustomElement(class Kbd extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-kbd', {
            size: config.get('defaultSize', 'md'),
        });
    }
    render() {
        return (h(Host, { key: '2abf0f6336ce6062cb3ac7249386f5780c0968da' }, h("kbd", { key: 'ba68c17b588ea1a1578d29619ca7b00454cf41f9', part: "native" }, h("slot", { key: '6f132f2d268b435307857e1d82ae06216dc936bf' }))));
    }
    static get style() { return PopKbdStyle0; }
}, [1, "pop-kbd", {
        "size": [1537]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-kbd"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-kbd":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Kbd);
            }
            break;
    } });
}

const PopKbd = Kbd;
const defineCustomElement = defineCustomElement$1;

export { PopKbd, defineCustomElement };

//# sourceMappingURL=pop-kbd.js.map