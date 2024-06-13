import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes, h as hostContext } from './helpers.js';

const buttonCss = ":host(.join-item)>button{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{--border-radius:var(--radius-md, 8px);--border-color:transparent;--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));--animation:0.25s ease-out;--focus-scale:0.97;width:max-content}:host button{box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;gap:0.5rem;flex-wrap:wrap;flex-shrink:0;border:1px solid var(--border-color);border-radius:var(--border-radius);background-color:var(--background);color:var(--color);outline-color:var(--background);font-weight:600;line-height:1em;text-align:center;text-decoration-line:none;text-rendering:optimizeLegibility;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);animation:button-pop var(--animation);transition-duration:200ms;transition-timing-function:ease-out;transition-property:color, background-color, border-color, opacity, box-shadow, transform;user-select:none}:host button:hover{cursor:pointer}:host button:active:hover,:host button:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--focus-scale))}:host button:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}@keyframes button-pop{0%{transform:scale(var(--focus-scale))}40%{transform:scale(1.02)}100%{transform:scale(1)}}:host([size=xs]) button{height:1.5rem;min-height:1.5rem;font-size:0.75rem;padding-left:0.5rem;padding-right:0.5rem}:host([size=sm]) button{height:2rem;min-height:2rem;font-size:0.875rem;padding-left:0.75rem;padding-right:0.75rem}:host([size=md]) button{height:3rem;min-height:3rem;font-size:0.875rem;padding-left:1rem;padding-right:1rem}:host([size=lg]) button{height:4rem;min-height:4rem;font-size:1.125rem;padding-left:1.5rem;padding-right:1.5rem}:host([color=neutral]){--background:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964))}:host([color=neutral]) button:hover{--background:color-mix(in oklab, oklch(var(--neutral, 0.313815 0.021108 254.139175)), black 10%)}:host([color=primary]){--background:oklch(var(--primary, 0.6569 0.196 275.75));--color:oklch(var(--primary-content, 0.13138 0.0392 275.75))}:host([color=primary]) button:hover{--background:color-mix(in oklab, oklch(var(--primary, 0.6569 0.196 275.75)), black 10%)}:host([color=secondary]){--background:oklch(var(--secondary, 0.748 0.26 342.55));--color:oklch(var(--secondary-content, 0.1496 0.052 342.55))}:host([color=secondary]) button:hover{--background:color-mix(in oklab, oklch(var(--secondary, 0.748 0.26 342.55)), black 10%)}:host([color=accent]){--background:oklch(var(--accent, 0.7451 0.167 183.61));--color:oklch(var(--accent-content, 0.14902 0.0334 183.61))}:host([color=accent]) button:hover{--background:color-mix(in oklab, oklch(var(--accent, 0.7451 0.167 183.61)), black 10%)}:host([color=info]){--background:oklch(var(--info, 0.7206 0.191 231.6));--color:oklch(var(--info-content, 0 0 0))}:host([color=info]) button:hover{--background:color-mix(in oklab, oklch(var(--info, 0.7206 0.191 231.6)), black 10%)}:host([color=success]){--background:oklch(var(--success, 64.8% 0.15 160));--color:oklch(var(--success-content, 0 0 0))}:host([color=success]) button:hover{--background:color-mix(in oklab, oklch(var(--success, 64.8% 0.15 160)), black 10%)}:host([color=warning]){--background:oklch(var(--warning, 0.8471 0.199 83.87));--color:oklch(var(--warning-content, 0 0 0))}:host([color=warning]) button:hover{--background:color-mix(in oklab, oklch(var(--warning, 0.8471 0.199 83.87)), black 10%)}:host([color=error]){--background:oklch(var(--error, 0.7176 0.221 22.18));--color:oklch(var(--error-content, 0 0 0))}:host([color=error]) button:hover{--background:color-mix(in oklab, oklch(var(--error, 0.7176 0.221 22.18)), black 10%)}@supports not (color: color-mix(in oklab, black, black)){:host([color=neutral]) button:hover{--background:oklch(var(--neutral-shade, 28.22% 0.019 254.82))}:host([color=primary]) button:hover{--background:oklch(var(--primary-shade, 59% 0.181 275.81))}:host([color=secondary]) button:hover{--background:oklch(var(--secondary-shade, 67.31% 0.233 342.57))}:host([color=accent]) button:hover{--background:oklch(var(--accent-shade, 68.49% 0.1229427781 181.6698834793))}:host([color=info]) button:hover{--background:oklch(var(--info-shade, 66.25% 0.1498779989 239.253594275))}:host([color=success]) button:hover{--background:oklch(var(--success-shade, 58.5% 0.133 159.63))}:host([color=warning]) button:hover{--background:oklch(var(--warning-shade, 76.51% 0.158561541 79.7738362662))}:host([color=error]) button:hover{--background:oklch(var(--error-shade, 64.53% 0.198 22.33))}}:host([color=ghost]:not([outlined])){--background:transparent;--color:currentColor}:host([color=ghost]:not([outlined])) button{outline-color:currentColor}:host([color=ghost]:not([outlined])) button:hover{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host(:not([color],[outlined])){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host(:not([color],[outlined])) button{outline-color:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host(:not([color],[outlined])) button:hover{--background:oklch(var(--base-300, 0.211484 0.01165 254.087939))}:host([outlined]) button{box-shadow:none}:host([outlined]) button:hover{border-color:transparent}:host([outlined]) button:not(:hover){border-color:currentColor;color:var(--background);background-color:transparent}:host(:not([color])[outlined]){--background:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host(:not([color])[outlined]) button:hover{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964));--color:oklch(var(--base-200, 0.232607 0.013807 253.100675))}:host([expand=block]){width:100%}:host([expand=block]) button{width:100%}:host([expand=wide]) button{width:16rem}:host([shape=square]) button,:host([shape=circle]) button{aspect-ratio:1/1;padding:0}:host([shape=circle]){--border-radius:var(--radius-full, 9999px)}:host([disabled]){cursor:not-allowed}:host([disabled])>button:disabled{--background:oklch(var(--neutral, 0.313815 0.021108 254.139175) / 0.2);--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964) / 0.2);border-color:transparent;pointer-events:none}";
const PopButtonStyle0 = buttonCss;

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
var _Button_inheritedAttributes, _Button_onFocus, _Button_onBlur;
const Button = /*@__PURE__*/ proxyCustomElement(class Button extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        _Button_inheritedAttributes.set(this, {});
        _Button_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Button_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.type = 'button';
        this.form = undefined;
        this.disabled = undefined;
        this.color = undefined;
        this.size = undefined;
        this.outlined = undefined;
        this.shape = undefined;
        this.expand = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-button', {
            disabled: false,
            size: config.get('defaultSize', 'md'),
            outlined: false,
        });
    }
    componentWillRender() {
        __classPrivateFieldSet(this, _Button_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        const { host, disabled } = this;
        return (h(Host, { key: '57510607361e45f03e3659421036156775ef50ca', "aria-disabled": disabled ? 'true' : null, class: {
                'join-item': hostContext(host, 'pop-join'),
            } }, h("button", { key: '304e988b72597785eb1d912b7d367b3d4916d86c', part: "native", disabled: disabled, onFocus: __classPrivateFieldGet(this, _Button_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Button_onBlur, "f"), ...__classPrivateFieldGet(this, _Button_inheritedAttributes, "f") }, h("slot", { key: 'b926b5b106c068ec308b37bfbd085c19c3c10c04', name: "start-icon" }), h("slot", { key: '5d5ebdf5f005480518b0c4fb80afd4fa35939c32' }), h("slot", { key: '0d4c925afa8244d7b9e7fd8a09095d4c097de4f3', name: "end-icon" }))));
    }
    get host() { return this; }
    static get style() { return PopButtonStyle0; }
}, [1, "pop-button", {
        "type": [1],
        "form": [1],
        "disabled": [1540],
        "color": [1537],
        "size": [1537],
        "outlined": [1540],
        "shape": [1537],
        "expand": [1537]
    }]);
_Button_inheritedAttributes = new WeakMap(), _Button_onFocus = new WeakMap(), _Button_onBlur = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-button"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
    } });
}

const PopButton = Button;
const defineCustomElement = defineCustomElement$1;

export { PopButton, defineCustomElement };

//# sourceMappingURL=pop-button.js.map