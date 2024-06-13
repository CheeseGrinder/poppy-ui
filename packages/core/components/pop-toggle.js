import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes } from './helpers.js';
import { S as Show } from './Show.js';

const toggleCss = ":host{--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--handleoffsetcalculator:calc(var(--handleoffset) * -1);box-sizing:border-box;display:inline-flex;justify-content:space-between;align-items:center;gap:4px;flex-shrink:0}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input{appearance:none;margin:0;margin-inline-start:auto;border-width:1px;border-style:solid;border-color:currentColor;border-radius:var(--border-radius, var(--radius-2xl, 24px));background-color:currentColor;color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/var(--opacity, 0.5)));transition:color, background, box-shadow var(--animation-duration, 0.2s) ease-out;box-shadow:var(--handleoffsetcalculator) 0 0 2px var(--background) inset, 0 0 0 2px var(--background) inset, var(--togglehandleborder, 0 0);cursor:pointer}:host>input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host>input:checked{--handleoffsetcalculator:var(--handleoffset);color:var(--checked-color);background-image:none}:host([size=xs]),:host-context(pop-list[size=xs]){--handleoffset:0.5rem}:host([size=xs])>input,:host-context(pop-list[size=xs])>input{height:1rem;width:1.5rem}:host([size=sm]),:host-context(pop-list[size=sm]){--handleoffset:0.75rem}:host([size=sm])>input,:host-context(pop-list[size=sm])>input{height:1.25rem;width:2rem}:host([size=md]),:host(:not([size])){--handleoffset:1.5rem}:host([size=md])>input,:host(:not([size]))>input{height:1.5rem;width:3rem}:host([size=lg]),:host-context(pop-list[size=lg]){--handleoffset:2rem}:host([size=lg])>input,:host-context(pop-list[size=lg])>input{height:2rem;width:4rem}:host([color=primary])>input:checked{--color:oklch(var(--primary, 0.6569 0.196 275.75) / var(--opacity, 1));--checked-color:oklch(var(--primary, 0.6569 0.196 275.75) / var(--opacity, 1))}:host([color=secondary])>input:checked{--color:oklch(var(--secondary, 0.748 0.26 342.55) / var(--opacity, 1));--checked-color:oklch(var(--secondary, 0.748 0.26 342.55) / var(--opacity, 1))}:host([color=accent])>input:checked{--color:oklch(var(--accent, 0.7451 0.167 183.61) / var(--opacity, 1));--checked-color:oklch(var(--accent, 0.7451 0.167 183.61) / var(--opacity, 1))}:host([color=info])>input:checked{--color:oklch(var(--info, 0.7206 0.191 231.6) / var(--opacity, 1));--checked-color:oklch(var(--info, 0.7206 0.191 231.6) / var(--opacity, 1))}:host([color=success])>input:checked{--color:oklch(var(--success, 64.8% 0.15 160) / var(--opacity, 1));--checked-color:oklch(var(--success, 64.8% 0.15 160) / var(--opacity, 1))}:host([color=warning])>input:checked{--color:oklch(var(--warning, 0.8471 0.199 83.87) / var(--opacity, 1));--checked-color:oklch(var(--warning, 0.8471 0.199 83.87) / var(--opacity, 1))}:host([color=error])>input:checked{--color:oklch(var(--error, 0.7176 0.221 22.18) / var(--opacity, 1));--checked-color:oklch(var(--error, 0.7176 0.221 22.18) / var(--opacity, 1))}:host(:not([color]))>input:checked{--checked-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--opacity, 1))}:host([indeterminate])>input{color:var(--checked-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));box-shadow:0.75rem 0 0 2px var(--background) inset, -0.75rem 0 0 2px var(--background) inset, 0 0 0 2px var(--background) inset, 0.75rem 0 0 3px currentColor inset, -0.75rem 0 0 3px currentColor inset}:host([disabled])>input{--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--opacity, 1));--togglehandleborder:0 0 0 3px oklch(var(--base-content, 0.746477 0.0216 264.435964)) inset, var(--handleoffsetcalculator) 0 0 3px oklch(var(--base-content, 0.746477 0.0216 264.435964)) inset;border-color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));background-color:transparent;opacity:0.3;cursor:not-allowed}:host-context(pop-item){grid-column:span 2}:host-context(pop-item)>.label{padding-inline-start:0}";
const PopToggleStyle0 = toggleCss;

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
var _Toggle_inputId, _Toggle_inheritedAttributes, _Toggle_nativeInput, _Toggle_onClick, _Toggle_onChecked, _Toggle_onFocus, _Toggle_onBlur;
const Toggle = /*@__PURE__*/ proxyCustomElement(class Toggle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Toggle_inputId.set(this, `pop-tg-${toggleIds++}`);
        _Toggle_inheritedAttributes.set(this, void 0);
        _Toggle_nativeInput.set(this, void 0);
        _Toggle_onClick.set(this, () => {
            const { checked, disabled, readonly } = this;
            if (disabled || readonly)
                return;
            this.checked = !checked;
        });
        _Toggle_onChecked.set(this, (ev) => {
            const input = ev.target;
            this.checked = input.checked;
        });
        _Toggle_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Toggle_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _Toggle_inputId, "f");
        this.value = 'on';
        this.required = undefined;
        this.readonly = undefined;
        this.checked = undefined;
        this.indeterminate = false;
        this.disabled = undefined;
        this.color = undefined;
        this.size = undefined;
    }
    onCheckedChange(checked) {
        this.indeterminate = false;
        this.internals.setFormValue(this.value, checked.toString());
        this.popChange.emit({
            checked,
            value: this.value || '',
        });
    }
    formResetCallback() {
        this.checked = false;
    }
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Toggle_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-toggle', {
            required: false,
            readonly: false,
            checked: false,
            indeterminate: false,
            disabled: false,
            size: config.get('defaultSize', 'md'),
        });
    }
    /**
     * Sets focus on the native `input` in `pop-toggle`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Toggle_nativeInput, "f")?.focus();
    }
    render() {
        const { host, name, disabled, checked } = this;
        const inputId = __classPrivateFieldGet(this, _Toggle_inputId, "f");
        const hasLabel = host.textContent !== '';
        return (h(Host, { key: '1f0bff425fe277cfd6754d1440978a564db91fc0', "aria-labelledby": inputId, "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, onClick: __classPrivateFieldGet(this, _Toggle_onClick, "f") }, h(Show, { key: '8ef93d265f150011ecbf6ceff191e74aa8323c85', when: hasLabel }, h("div", { key: 'c90e14fd6975a26f648e0d1b55eb79ed95a8c923', class: "label" }, h("label", { key: '4e2a32d0c0405c5383f2108286937f1943e0ed05', htmlFor: inputId, part: "label" }, h("slot", { key: 'e4a0f2941d505e6e8f93301098c0e53b03ab88d9' })))), h("input", { key: 'b924b27b211ac6f9e10271289c6cdb5c1e532d0b', type: "checkbox", role: "switch", part: "native", id: inputId, name: name, "aria-checked": `${checked}`, indeterminate: this.indeterminate, required: this.required, readOnly: this.readonly, checked: checked, disabled: disabled, onChange: __classPrivateFieldGet(this, _Toggle_onChecked, "f"), onFocus: __classPrivateFieldGet(this, _Toggle_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Toggle_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Toggle_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Toggle_inheritedAttributes, "f") })));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "checked": ["onCheckedChange"]
    }; }
    static get style() { return PopToggleStyle0; }
}, [65, "pop-toggle", {
        "name": [1],
        "value": [513],
        "required": [1540],
        "readonly": [1540],
        "checked": [1540],
        "indeterminate": [1540],
        "disabled": [1540],
        "color": [1537],
        "size": [1537],
        "setFocus": [64]
    }, undefined, {
        "checked": ["onCheckedChange"]
    }]);
_Toggle_inputId = new WeakMap(), _Toggle_inheritedAttributes = new WeakMap(), _Toggle_nativeInput = new WeakMap(), _Toggle_onClick = new WeakMap(), _Toggle_onChecked = new WeakMap(), _Toggle_onFocus = new WeakMap(), _Toggle_onBlur = new WeakMap();
let toggleIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Toggle);
            }
            break;
    } });
}

const PopToggle = Toggle;
const defineCustomElement = defineCustomElement$1;

export { PopToggle, defineCustomElement };

//# sourceMappingURL=pop-toggle.js.map