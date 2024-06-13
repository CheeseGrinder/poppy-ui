import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';
import { h as hostContext, g as getHostContextProperty } from './helpers.js';

const itemCss = ":host{position:relative;display:flex;flex-shrink:0;flex-direction:column;flex-wrap:wrap;align-items:stretch}:host>.item-inner{box-sizing:border-box;display:grid;grid-auto-flow:column;align-content:center;align-items:center;grid-auto-columns:minmax(auto, max-content) auto max-content;gap:0.5rem;border:none;outline:none;background-color:transparent;text-align:start;text-wrap:balance;cursor:pointer;transition-property:color, background-color, opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s}:host(:not(.has-list))>.item-inner:is(:hover,:focus),:host(:not(.has-list))>.item-inner:has(:focus){background-color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.1);color:inherit}:host>.item-inner:active{background-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964))}:host(.in-list-md)>.item-inner{padding:0.5rem 1rem;border-radius:var(--radius-md, 8px);height:36px;font-size:0.875rem;line-height:1.25rem}:host(.in-list-xs)>.item-inner{padding:0.25rem 0.5rem;border-radius:var(--radius-sm, 4px);height:24px;font-size:0.75rem;line-height:1rem}:host(.in-list-sm)>.item-inner{padding:0.25rem 0.75rem;border-radius:var(--radius-md, 8px);height:28px;font-size:0.875rem;line-height:1.25rem}:host(.in-list-lg)>.item-inner{border-radius:var(--radius-md, 8px);height:52px;font-size:1.125rem;line-height:1.75rem}:host(.has-list)>.item-inner{display:flex;height:auto;padding:0}";
const PopItemStyle0 = itemCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_instances, _Item_onClick, _Item_getFirstInteractive;
const Item = /*@__PURE__*/ proxyCustomElement(class Item extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _Item_instances.add(this);
        _Item_onClick.set(this, (ev) => {
            const path = ev.composedPath();
            const target = path[0];
            const firstInteractive = __classPrivateFieldGet(this, _Item_instances, "m", _Item_getFirstInteractive).call(this);
            if (!ev.isTrusted || firstInteractive === undefined)
                return;
            const clickedWithinShadowRoot = this.host.shadowRoot.contains(target);
            if (clickedWithinShadowRoot) {
                firstInteractive.click();
            }
        });
        this.disabled = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-item', {
            disabled: false,
        });
    }
    render() {
        const { host, disabled } = this;
        const inList = hostContext(host, 'pop-list');
        const listSize = getHostContextProperty(host, 'pop-list', 'size', 'md');
        const hasList = !!host.querySelector('pop-list');
        return (h(Host, { key: '03ab687a61dd784a561c655480291fd2f58ad9fd', role: inList ? 'listitem' : null, "aria-disabled": disabled ? 'true' : null, onClick: __classPrivateFieldGet(this, _Item_onClick, "f"), class: {
                'in-list': inList,
                [`in-list-${listSize}`]: inList,
                'has-list': hasList,
            } }, h("a", { key: '3eb063b99588f74e1ca4a92374a659424b6542c3', class: "item-inner" }, h("slot", { key: '177ec10f2f22e0c3966df2e201e9acf47100db12' }))));
    }
    static get delegatesFocus() { return true; }
    get host() { return this; }
    static get style() { return PopItemStyle0; }
}, [17, "pop-item", {
        "disabled": [1028]
    }]);
_Item_onClick = new WeakMap(), _Item_instances = new WeakSet(), _Item_getFirstInteractive = function _Item_getFirstInteractive() {
    const controls = this.host.querySelectorAll('pop-toggle:not([disabled]), pop-checkbox:not([disabled]), pop-radio:not([disabled]), pop-select:not([disabled])');
    return controls[0];
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-item"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Item);
            }
            break;
    } });
}

export { Item as I, defineCustomElement as d };

//# sourceMappingURL=item.js.map