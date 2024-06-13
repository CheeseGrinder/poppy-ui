import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const indicatorCss = ":host{--translate-x:-50%;--translate-y:-50%;position:relative;display:inline-flex;width:max-content}:host ::slotted([slot=indicator]){position:absolute;z-index:1;white-space:nowrap;translate:var(--translate-x) var(--translate-y)}:host([side=start]) ::slotted([slot=indicator]){inset-inline-end:auto;inset-inline-start:0}:host([side=left]) ::slotted([slot=indicator]){left:0;right:auto}:host([side=center]) ::slotted([slot=indicator]){inset-inline-end:50%;inset-inline-start:50%}:host([side=right]) ::slotted([slot=indicator]){left:auto;right:0}:host([side=end]) ::slotted([slot=indicator]){--translate-x:50%;inset-inline-end:0;inset-inline-start:auto}:host([position=top]) ::slotted([slot=indicator]){top:0;bottom:auto}:host([position=middle]) ::slotted([slot=indicator]){top:50%;bottom:50%}:host([position=bottom]) ::slotted([slot=indicator]){--translate-y:50%;top:auto;bottom:0}";
const PopIndicatorStyle0 = indicatorCss;

const Indicator = /*@__PURE__*/ proxyCustomElement(class Indicator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.side = undefined;
        this.position = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-indicator', {
            side: 'left',
            position: 'top',
        });
    }
    render() {
        return (h(Host, { key: '44df15bef6d7fe31c65eff5daa9734b3822b407b' }, h("slot", { key: 'f34983f6ca981bf383db049f9919b2521c14e96e', name: "indicator" }), h("slot", { key: '8a28ba5c6aeeb3a5a36e54ad63e964c70c73d7b9' })));
    }
    static get style() { return PopIndicatorStyle0; }
}, [1, "pop-indicator", {
        "side": [1537],
        "position": [1537]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-indicator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Indicator);
            }
            break;
    } });
}

const PopIndicator = Indicator;
const defineCustomElement = defineCustomElement$1;

export { PopIndicator, defineCustomElement };

//# sourceMappingURL=pop-indicator.js.map