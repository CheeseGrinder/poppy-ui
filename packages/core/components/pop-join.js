import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const joinCss = "pop-join{display:inline-flex}pop-join .join-item:not(:first-of-type,:last-of-type),pop-join .join-item:not(:first-child,:last-child),pop-join :not(:first-of-type,:last-of-type) .join-item,pop-join :not(:first-child,:last-child) .join-item{--border-radius:0;border-radius:0}pop-join .join-item:focus{isolation:isolate}pop-join[orientation=horizontal] :first-child:has(.join-item) .join-item,pop-join[orientation=horizontal] .join-item:first-child,pop-join:not([orientation]) :first-child:has(.join-item) .join-item,pop-join:not([orientation]) .join-item:first-child{--border-radius-start-end:0;--border-radius-end-end:0;border-start-end-radius:0;border-end-end-radius:0}pop-join[orientation=horizontal] :last-child:has(.join-item) .join-item,pop-join[orientation=horizontal] .join-item:last-child:not(:first-child),pop-join:not([orientation]) :last-child:has(.join-item) .join-item,pop-join:not([orientation]) .join-item:last-child:not(:first-child){--border-radius-start-start:0;--border-radius-end-start:0;border-start-start-radius:0;border-end-start-radius:0}pop-join[orientation=vertical]{flex-direction:column}pop-join[orientation=vertical] :first-child:has(.join-item) .join-item,pop-join[orientation=vertical] .join-item:first-child{--border-radius-end-start:0;--border-radius-end-end:0;border-end-start-radius:0;border-end-end-radius:0}pop-join[orientation=vertical] :last-child:has(.join-item) .join-item,pop-join[orientation=vertical] .join-item:last-child:not(:first-child){--border-radius-start-start:0;--border-radius-start-end:0;border-start-start-radius:0;border-start-end-radius:0}";
const PopJoinStyle0 = joinCss;

const Join = /*@__PURE__*/ proxyCustomElement(class Join extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.orientation = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-join', {
            orientation: 'horizontal',
        });
    }
    render() {
        return (h(Host, { key: 'fe103196d96c5cb9057c14948319798335319533' }, h("slot", { key: '88faf73b48cd7a2c4fca0ac1d8c56b5f82ba7d96' })));
    }
    static get style() { return PopJoinStyle0; }
}, [4, "pop-join", {
        "orientation": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-join"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-join":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Join);
            }
            break;
    } });
}

const PopJoin = Join;
const defineCustomElement = defineCustomElement$1;

export { PopJoin, defineCustomElement };

//# sourceMappingURL=pop-join.js.map