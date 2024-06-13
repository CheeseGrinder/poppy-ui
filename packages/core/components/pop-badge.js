import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes } from './helpers.js';

const badgeCss = ":host{--border-radius:var(--radius-full, 9999px);--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));display:inline-flex;width:max-content}:host>.badge{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s;width:fit-content;height:100%;border:solid 1px var(--border-color);border-radius:var(--border-radius);background-color:var(--background);color:var(--color)}:host([size=xs]){height:0.75rem}:host([size=xs])>.badge{font-size:0.75rem;line-height:0.75rem;padding-left:0.313rem;padding-right:0.313rem}:host([size=sm]){height:1rem}:host([size=sm])>.badge{font-size:0.75rem;line-height:1rem;padding-left:0.438rem;padding-right:0.438rem}:host([size=md]){height:1.25rem}:host([size=md])>.badge{font-size:0.875rem;line-height:1.25rem;padding-left:0.563rem;padding-right:0.563rem}:host([size=lg]){height:1.5rem}:host([size=lg])>.badge{font-size:1rem;line-height:1.5rem;padding-left:0.688rem;padding-right:0.688rem}:host([color=neutral]){--border-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));--background:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964))}:host([color=neutral][outlined]){--color:oklch(var(--neutral, 0.313815 0.021108 254.139175))}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75));--background:oklch(var(--primary, 0.6569 0.196 275.75));--color:oklch(var(--primary-content, 0.13138 0.0392 275.75))}:host([color=primary][outlined]){--color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55));--background:oklch(var(--secondary, 0.748 0.26 342.55));--color:oklch(var(--secondary-content, 0.1496 0.052 342.55))}:host([color=secondary][outlined]){--color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61));--background:oklch(var(--accent, 0.7451 0.167 183.61));--color:oklch(var(--accent-content, 0.14902 0.0334 183.61))}:host([color=accent][outlined]){--color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6));--background:oklch(var(--info, 0.7206 0.191 231.6));--color:oklch(var(--info-content, 0 0 0))}:host([color=info][outlined]){--color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160));--background:oklch(var(--success, 64.8% 0.15 160));--color:oklch(var(--success-content, 0 0 0))}:host([color=success][outlined]){--color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87));--background:oklch(var(--warning, 0.8471 0.199 83.87));--color:oklch(var(--warning-content, 0 0 0))}:host([color=warning][outlined]){--color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18));--background:oklch(var(--error, 0.7176 0.221 22.18));--color:oklch(var(--error-content, 0 0 0))}:host([color=error][outlined]){--color:oklch(var(--error, 0.7176 0.221 22.18))}:host(:not([color],[outlined])){--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host([outlined]){--border-color:currentColor;--background:transparent}";
const PopBadgeStyle0 = badgeCss;

var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Badge_inheritedAttributes;
const Badge = /*@__PURE__*/ proxyCustomElement(class Badge extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _Badge_inheritedAttributes.set(this, {});
        this.color = undefined;
        this.size = undefined;
        this.outlined = false;
        this.as = undefined;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Badge_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-badge', {
            size: config.get('defaultSize', 'md'),
            outlined: false,
            as: 'div',
        });
    }
    componentWillRender() {
        __classPrivateFieldSet(this, _Badge_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        const Tag = this.as;
        return (h(Host, { key: '4301de9b3c8659b1d9116a01eb5c8ea109268354' }, h(Tag, { key: 'a7e958960814d73796d2a3b9cbf7e92de710c2e7', class: "badge", part: "native", ...__classPrivateFieldGet(this, _Badge_inheritedAttributes, "f") }, h("slot", { key: 'b9c0f3a6cca0a371ff8b5aed1b6b5f257b06f480' }))));
    }
    get host() { return this; }
    static get style() { return PopBadgeStyle0; }
}, [1, "pop-badge", {
        "color": [1537],
        "size": [1537],
        "outlined": [1540],
        "as": [1025]
    }]);
_Badge_inheritedAttributes = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Badge);
            }
            break;
    } });
}

const PopBadge = Badge;
const defineCustomElement = defineCustomElement$1;

export { PopBadge, defineCustomElement };

//# sourceMappingURL=pop-badge.js.map