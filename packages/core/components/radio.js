import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { c as compareOptions } from './compare-with-utils.js';
import { i as inheritAriaAttributes } from './helpers.js';
import { S as Show } from './Show.js';

const radioCss = ":host{display:inline-flex;align-items:center;justify-content:space-between;gap:4px;flex-shrink:0;outline:none}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input{border-width:1px;border-style:solid;border-radius:var(--border-radius, var(--radius-full, 9999px));border-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/var(--border-opacity, 0.2)));margin:0;margin-inline-start:auto;appearance:none;cursor:pointer}:host>input:focus{box-shadow:none}:host>input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)))}:host>input:checked{background-color:var(--background, oklch(var(--base-content, 0.746477 0.0216 264.435964)));background-image:none;animation:radiomark var(--animation-duration, 0.2s) ease-out;box-shadow:0 0 0 4px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset, 0 0 0 4px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset, 0 0 0 12px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset}50%{box-shadow:0 0 0 3px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset, 0 0 0 3px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset}100%{box-shadow:0 0 0 4px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset, 0 0 0 4px var(--shadow, oklch(var(--base-100, 0.253267 0.015896 252.417568))) inset}}:host([size=xs])>input,:host-context(pop-list[size=xs])>input{height:1rem;width:1rem}:host([size=sm])>input,:host-context(pop-list[size=sm])>input{height:1.25rem;width:1.25rem}:host([size=md])>input,:host(:not([size]))>input{height:1.5rem;width:1.5rem}:host([size=lg])>input,:host-context(pop-list[size=lg])>input{height:2rem;width:2rem}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75) / var(--border-opacity, 1));--background:oklch(var(--primary, 0.6569 0.196 275.75) / var(--opacity, 1))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55) / var(--border-opacity, 1));--background:oklch(var(--secondary, 0.748 0.26 342.55) / var(--opacity, 1))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61) / var(--border-opacity, 1));--background:oklch(var(--accent, 0.7451 0.167 183.61) / var(--opacity, 1))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6) / var(--border-opacity, 1));--background:oklch(var(--info, 0.7206 0.191 231.6) / var(--opacity, 1))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160) / var(--border-opacity, 1));--background:oklch(var(--success, 64.8% 0.15 160) / var(--opacity, 1))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87) / var(--border-opacity, 1));--background:oklch(var(--warning, 0.8471 0.199 83.87) / var(--opacity, 1))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18) / var(--border-opacity, 1));--background:oklch(var(--error, 0.7176 0.221 22.18) / var(--opacity, 1))}:host(:not([color])){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--border-opacity, 1));--background:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--opacity, 1))}:host([disabled]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964));--background:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host([disabled])>input{opacity:var(--opacity, 0.2);cursor:not-allowed}:host-context(pop-item){grid-column:span 2}:host-context(pop-item)>.label{padding-inline-start:0}:host-context(pop-list[size=xs])>.label{padding-top:2px;padding-bottom:2px}:host-context(pop-list[size=sm])>.label{padding-top:4px;padding-bottom:4px}";
const PopRadioStyle0 = radioCss;

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
var _Radio_inputId, _Radio_inheritedAttributes, _Radio_radioGroup, _Radio_nativeInput, _Radio_handleValueChanged, _Radio_onClick, _Radio_onFocus, _Radio_onBlur;
const Radio = /*@__PURE__*/ proxyCustomElement(class Radio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        _Radio_inputId.set(this, `pop-radio-${radioIds++}`);
        _Radio_inheritedAttributes.set(this, void 0);
        _Radio_radioGroup.set(this, void 0);
        _Radio_nativeInput.set(this, void 0);
        _Radio_handleValueChanged.set(this, () => {
            if (!__classPrivateFieldGet(this, _Radio_radioGroup, "f"))
                return;
            const { compare, value: newValue } = __classPrivateFieldGet(this, _Radio_radioGroup, "f");
            const currentValue = this.value;
            this.checked = compareOptions(currentValue, newValue, compare);
        });
        _Radio_onClick.set(this, () => {
            const { checked, disabled } = this;
            if (disabled)
                return;
            if (checked && __classPrivateFieldGet(this, _Radio_radioGroup, "f")?.allowEmpty) {
                this.checked = false;
            }
            else {
                this.checked = true;
            }
        });
        _Radio_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Radio_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _Radio_inputId, "f");
        this.value = '';
        this.checked = false;
        this.required = undefined;
        this.disabled = undefined;
        this.autoFocus = false;
        this.color = undefined;
        this.size = undefined;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Radio_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-radio', {
            required: false,
            disabled: false,
            size: config.get('defaultSize', 'md'),
        });
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _Radio_radioGroup, this.host.closest('pop-radio-group'), "f");
        __classPrivateFieldGet(this, _Radio_radioGroup, "f")?.addEventListener('popValueChange', __classPrivateFieldGet(this, _Radio_handleValueChanged, "f"));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _Radio_radioGroup, "f")?.removeEventListener('popValueChange', __classPrivateFieldGet(this, _Radio_handleValueChanged, "f"));
    }
    /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Radio_nativeInput, "f")?.focus();
    }
    render() {
        const { host, checked } = this;
        const inputId = __classPrivateFieldGet(this, _Radio_inputId, "f");
        const hasLabel = host.textContent !== '';
        return (h(Host, { key: 'ed82a8dba5675d120cc746c15244bfb04781b75b', role: "radio", "aria-checked": `${checked}`, "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null, onClick: __classPrivateFieldGet(this, _Radio_onClick, "f") }, h(Show, { key: '690d7616eb3dd92f1d9d627aaed679478e490709', when: hasLabel }, h("div", { key: '9a29084a151bccb46b9aec67ea9493e956a6c403', class: "label" }, h("label", { key: '61453febc58cfa92427be870d13eaf762993ec4f', htmlFor: inputId, part: "label" }, h("slot", { key: '69b329c76b89906e096e1a7ce8713cb738e43648' })))), h("input", { key: 'b7313f8e5dcd7156be3f4122b257c9809b1a1125', part: "native", type: "radio", id: inputId, name: this.name, checked: this.checked, required: this.required, disabled: this.disabled, autoFocus: this.autoFocus, onFocus: __classPrivateFieldGet(this, _Radio_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Radio_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Radio_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Radio_inheritedAttributes, "f") })));
    }
    get host() { return this; }
    static get style() { return PopRadioStyle0; }
}, [1, "pop-radio", {
        "name": [1],
        "value": [1032],
        "checked": [1540],
        "required": [1540],
        "disabled": [1540],
        "autoFocus": [1540, "auto-focus"],
        "color": [1537],
        "size": [1537],
        "setFocus": [64]
    }]);
_Radio_inputId = new WeakMap(), _Radio_inheritedAttributes = new WeakMap(), _Radio_radioGroup = new WeakMap(), _Radio_nativeInput = new WeakMap(), _Radio_handleValueChanged = new WeakMap(), _Radio_onClick = new WeakMap(), _Radio_onFocus = new WeakMap(), _Radio_onBlur = new WeakMap();
let radioIds = 0;
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Radio);
            }
            break;
    } });
}

export { Radio as R, defineCustomElement as d };

//# sourceMappingURL=radio.js.map