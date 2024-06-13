import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cardCss = ":host{--border-radius:var(--radius-xl, 16px);position:relative;display:flex;flex-direction:column;border-radius:var(--border-radius);color:var(--color);background-color:var(--background);outline:none}";
const PopCardStyle0 = cardCss;

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '9e9c9e2e22b63564c874de175487de71d01886cd' }, h("slot", { key: '03f36583f11b5ff70537610a854f597c8d20559a' })));
    }
    static get style() { return PopCardStyle0; }
}, [1, "pop-card"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-card"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Card);
            }
            break;
    } });
}

const PopCard = Card;
const defineCustomElement = defineCustomElement$1;

export { PopCard, defineCustomElement };

//# sourceMappingURL=pop-card.js.map