import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const swapCss = ":host{position:relative;display:inline-grid;place-content:center;user-select:none;cursor:pointer}:host ::slotted(*){grid-column-start:1;grid-row-start:1;transition-duration:0.3s;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-property:transform, opacity}:host(:not([active])) ::slotted([slot=on]){opacity:0;z-index:0}:host(:not([active])) ::slotted([slot=off]){opacity:1;z-index:1}:host([active]) ::slotted([slot=on]){opacity:1;z-index:1}:host([active]) ::slotted([slot=off]){opacity:0;z-index:0}:host([type=rotate]:not([active])) ::slotted([slot=on]){transform:rotate(45deg)}:host([type=rotate][active]) ::slotted([slot=on]){transform:rotate(0deg)}:host([type=rotate][active]) ::slotted([slot=off]){transform:rotate(-45deg)}:host([type=flip]) ::slotted([slot=on]){opacity:1;z-index:1;backface-visibility:hidden}:host([type=flip]) ::slotted([slot=off]){opacity:1;z-index:1;backface-visibility:hidden}:host([type=flip]:not([active])) ::slotted([slot=on]){transform:rotateY(180deg)}:host([type=flip][active]) ::slotted([slot=on]){transform:rotateY(0deg)}:host([type=flip][active]) ::slotted([slot=off]){transform:rotateY(-180deg)}";
const PopSwapStyle0 = swapCss;

const Swap = /*@__PURE__*/ proxyCustomElement(class Swap extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = undefined;
        this.active = undefined;
    }
    /**
     * Activates the swap on hover.
     */
    // @Prop({ reflect: true, mutable: true }) swapOnHover?: boolean;
    componentWillLoad() {
        componentConfig.apply(this, 'pop-swap', {
            type: 'rotate',
            active: false,
            // swapOnHover: false,
        });
    }
    // #onClick = (): void => {
    //   if (!this.swapOnHover) this.active = !this.active;
    // };
    render() {
        return (h(Host, { key: 'a1172ef6f9fd04e920f25ced203bd47092112095' }, h("slot", { key: 'e46d8eb53e0077765f7b4861c9afe5960ff8f683', name: "off" }), h("slot", { key: 'b1bd20ae6f4eb4d254cab89f3e5cd9afdb7a9827', name: "on" })));
    }
    static get style() { return PopSwapStyle0; }
}, [1, "pop-swap", {
        "type": [1537],
        "active": [1540]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-swap"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-swap":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Swap);
            }
            break;
    } });
}

const PopSwap = Swap;
const defineCustomElement = defineCustomElement$1;

export { PopSwap, defineCustomElement };

//# sourceMappingURL=pop-swap.js.map