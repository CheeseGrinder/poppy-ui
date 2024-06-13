import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { h as hostContext } from './helpers.js';

const listCss = "pop-list{flex-wrap:wrap;width:100%;contain:content;margin:0;padding:0.5rem}pop-list[orientation=vertical],pop-list:not([orientation]){display:flex;flex-direction:column}pop-list[orientation=horizontal]{display:inline-flex}pop-list[size=xs]{font-size:0.75rem;line-height:1rem;border-radius:var(--radius-sm, 4px)}pop-list[size=sm]{font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=md],pop-list:not([size]){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=lg]{font-size:1.125rem;line-height:1.75rem;border-radius:var(--radius-md, 8px)}pop-list[size=xs]>:is(pop-list-title,pop-item){font-size:0.75rem;line-height:1rem;border-radius:var(--radius-sm, 4px)}pop-list[size=sm]>:is(pop-list-title,pop-item){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=md]>:is(pop-list-title,pop-item),pop-list:not([size])>:is(pop-list-title,pop-item){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=lg]>:is(pop-list-title,pop-item){font-size:1.125rem;line-height:1.75rem;border-radius:var(--radius-md, 8px)}pop-list.in-item{position:relative;white-space:nowrap;margin-inline-start:1rem;padding:0;padding-inline-start:0.5rem}pop-list.in-item::before{content:\"\";position:absolute;top:0.75rem;bottom:0.75rem;inset-inline-start:2px;width:1px;--tw-bg-opacity:1;background-color:oklch(var(--base-content, 0.746477 0.0216 264.435964));opacity:0.1}";
const PopListStyle0 = listCss;

const List = /*@__PURE__*/ proxyCustomElement(class List extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.size = undefined;
        this.orientation = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-list', {
            size: config.get('defaultSize', 'md'),
            orientation: 'vertical',
        });
    }
    render() {
        const { host } = this;
        return (h(Host, { key: 'f8b3b15f40a7c688a066c99a09fc49391bc044ce', role: "list", class: {
                'in-item': hostContext(host, 'pop-item'),
            } }, h("slot", { key: 'c962c6c06bc0ee00ba48011bc9a60fadfb32921b' })));
    }
    get host() { return this; }
    static get style() { return PopListStyle0; }
}, [4, "pop-list", {
        "size": [1537],
        "orientation": [1537]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-list"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, List);
            }
            break;
    } });
}

export { List as L, defineCustomElement as d };

//# sourceMappingURL=list.js.map