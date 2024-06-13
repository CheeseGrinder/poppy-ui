import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes, g as getHostContextProperty, h as hostContext } from './helpers.js';
import { S as Show } from './Show.js';

const checkboxCss = ":host{--border-radius:var(--radius-md, 8px);--border-color:oklch(theme.get-color(\"base.content\") / 0.2);--background:var(--base-content, 0.746477 0.0216 264.435964);--checkmark-color:var(--base-100, 0.253267 0.015896 252.417568);--animation:0.2s ease-out;display:inline-flex;align-items:center;justify-content:space-between;gap:4px;flex-shrink:0}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host input{border:1px solid var(--border-color);border-radius:var(--border-radius);appearance:none;cursor:pointer;margin:0}:host input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--background)}:host input:checked{background-repeat:no-repeat;animation:checkmark var(--animation);background-color:var(--background);background-image:linear-gradient(-45deg, transparent 65%, var(--background) 65.99%), linear-gradient(45deg, transparent 75%, var(--background) 75.99%), linear-gradient(-45deg, var(--background) 40%, transparent 40.99%), linear-gradient(45deg, var(--background) 30%, var(--checkmark-color) 30.99%, var(--checkmark-color) 40%, transparent 40.99%), linear-gradient(-45deg, var(--checkmark-color) 50%, var(--background) 50.99%)}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}100%{background-position-y:0}}:host([placement=start]) input{margin-inline-end:auto}:host([placement=end]){flex-direction:row-reverse}:host([placement=end]) input{margin-inline-start:auto}:host([size=xs]) input,:host(.in-list.in-list-xs) input{height:1rem;width:1rem}:host([size=sm]) input,:host(.in-list.in-list-sm) input{height:1.25rem;width:1.25rem}:host([size=md]) input,:host(.in-list.in-list-lg) input{height:1.5rem;width:1.5rem}:host([size=lg]) input,:host(.in-list.in-list-lg) input{height:2rem;width:2rem}:host([color=primary]){--background:oklch(var(--primary, 0.6569 0.196 275.75));--border-color:oklch(var(--primary, 0.6569 0.196 275.75) / 0.2);--checkmark-color:oklch(var(--primary-content, 0.13138 0.0392 275.75))}:host([color=secondary]){--background:oklch(var(--secondary, 0.748 0.26 342.55));--border-color:oklch(var(--secondary, 0.748 0.26 342.55) / 0.2);--checkmark-color:oklch(var(--secondary-content, 0.1496 0.052 342.55))}:host([color=accent]){--background:oklch(var(--accent, 0.7451 0.167 183.61));--border-color:oklch(var(--accent, 0.7451 0.167 183.61) / 0.2);--checkmark-color:oklch(var(--accent-content, 0.14902 0.0334 183.61))}:host([color=info]){--background:oklch(var(--info, 0.7206 0.191 231.6));--border-color:oklch(var(--info, 0.7206 0.191 231.6) / 0.2);--checkmark-color:oklch(var(--info-content, 0 0 0))}:host([color=success]){--background:oklch(var(--success, 64.8% 0.15 160));--border-color:oklch(var(--success, 64.8% 0.15 160) / 0.2);--checkmark-color:oklch(var(--success-content, 0 0 0))}:host([color=warning]){--background:oklch(var(--warning, 0.8471 0.199 83.87));--border-color:oklch(var(--warning, 0.8471 0.199 83.87) / 0.2);--checkmark-color:oklch(var(--warning-content, 0 0 0))}:host([color=error]){--background:oklch(var(--error, 0.7176 0.221 22.18));--border-color:oklch(var(--error, 0.7176 0.221 22.18) / 0.2);--checkmark-color:oklch(var(--error-content, 0 0 0))}:host(:not([color]))>input{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964));--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--checkmark-color:oklch(var(--base-100, 0.253267 0.015896 252.417568))}:host([disabled])>input{--border-color:transparent;--background:oklch(var(--base-content, 0.746477 0.0216 264.435964));opacity:0.2;cursor:not-allowed;background-color:var(--background);background-image:linear-gradient(-45deg, transparent 65%, var(--background) 65.99%), linear-gradient(45deg, transparent 75%, var(--background) 75.99%), linear-gradient(-45deg, var(--background) 40%, transparent 40.99%), linear-gradient(45deg, var(--background) 30%, var(--checkmark-color) 30.99%, var(--checkmark-color) 40%, transparent 40.99%), linear-gradient(-45deg, var(--checkmark-color) 50%, var(--background) 50.99%)}:host([indeterminate])>input{background-repeat:no-repeat;background-color:var(--background, oklch(var(--base-content, 0.746477 0.0216 264.435964)));animation:checkmark var(--animation-duration, 0.2s) ease-out;background-image:linear-gradient(90deg, transparent 80%, var(--background) 80%), linear-gradient(-90deg, transparent 80%, var(--background) 80%), linear-gradient(0deg, var(--background) 43%, var(--checkmark-color) 43%, var(--checkmark-color) 57%, var(--background) 57%)}:host(.in-item){grid-column:span 2}:host(.in-item)>.label{padding-inline-start:0}";
const PopCheckboxStyle0 = checkboxCss;

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
var _Checkbox_inputId, _Checkbox_inheritedAttributes, _Checkbox_nativeInput, _Checkbox_onClick, _Checkbox_onChecked, _Checkbox_onFocus, _Checkbox_onBlur;
const Checkbox = /*@__PURE__*/ proxyCustomElement(class Checkbox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Checkbox_inputId.set(this, `pop-cb-${checkboxIds++}`);
        _Checkbox_inheritedAttributes.set(this, void 0);
        _Checkbox_nativeInput.set(this, void 0);
        _Checkbox_onClick.set(this, () => {
            const { disabled, readonly } = this;
            if (disabled || readonly)
                return;
            this.checked = !this.checked;
        });
        _Checkbox_onChecked.set(this, (ev) => {
            const input = ev.target;
            this.checked = input.checked;
        });
        _Checkbox_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Checkbox_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _Checkbox_inputId, "f");
        this.value = 'on';
        this.required = undefined;
        this.readonly = undefined;
        this.checked = undefined;
        this.indeterminate = undefined;
        this.disabled = undefined;
        this.color = undefined;
        this.size = undefined;
        this.placement = undefined;
    }
    onCheckedChange(newChecked) {
        this.indeterminate = false;
        this.popChange.emit({
            checked: newChecked,
            value: this.value || '',
        });
        this.internals.setFormValue(newChecked ? this.value : '', newChecked.toString());
        this.internals.ariaChecked = newChecked.toString();
    }
    formResetCallback() {
        this.checked = false;
    }
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Checkbox_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-checkbox', {
            required: false,
            readonly: false,
            checked: false,
            indeterminate: false,
            disabled: false,
            size: config.get('defaultSize', 'md'),
            placement: 'start',
        });
    }
    /**
     * Sets focus on the native `input` in `pop-checkbox`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Checkbox_nativeInput, "f")?.focus();
    }
    render() {
        const { host, name, disabled, checked, indeterminate } = this;
        const inputId = __classPrivateFieldGet(this, _Checkbox_inputId, "f");
        const ariaChecked = indeterminate ? 'mixed' : checked ? 'true' : 'false';
        const hasLabel = host.textContent !== '';
        const listSize = getHostContextProperty(host, 'pop-list', 'size', 'md');
        return (h(Host, { key: '78b20e1fee99b45efeb44e4e0b14a3461ac46e32', "aria-labelledby": inputId, "aria-checked": ariaChecked, "aria-hidden": disabled ? 'true' : null, onClick: __classPrivateFieldGet(this, _Checkbox_onClick, "f"), class: {
                'in-list': hostContext(host, 'pop-list'),
                [`in-list-${listSize}`]: listSize !== null,
                'in-item': hostContext(host, 'pop-item'),
            } }, h(Show, { key: '11cf77f2e408dfc27fb9f75e856f9a51b606a978', when: hasLabel }, h("div", { key: 'dac0e9b85ab41ec8ff2ec97c48f483bedbafd357', class: "label" }, h("label", { key: 'e4e937ada9dd1cd0b6ab0fc60997e3560df0ba6b', htmlFor: inputId, part: "label" }, h("slot", { key: 'dda4331a49aa516a8a96fbbd4bac5f87818c3f7f' })))), h("input", { key: 'fe2ae81aa3e968aefca11b8a2d856e917e2ef072', type: "checkbox", part: "native", id: inputId, name: name, "aria-checked": ariaChecked, indeterminate: this.indeterminate, required: this.required, readOnly: this.readonly, checked: checked, disabled: disabled, onChange: __classPrivateFieldGet(this, _Checkbox_onChecked, "f"), onFocus: __classPrivateFieldGet(this, _Checkbox_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Checkbox_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Checkbox_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Checkbox_inheritedAttributes, "f") })));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "checked": ["onCheckedChange"]
    }; }
    static get style() { return PopCheckboxStyle0; }
}, [65, "pop-checkbox", {
        "name": [1],
        "value": [513],
        "required": [1540],
        "readonly": [1540],
        "checked": [1540],
        "indeterminate": [1540],
        "disabled": [1540],
        "color": [1537],
        "size": [1537],
        "placement": [1537],
        "setFocus": [64]
    }, undefined, {
        "checked": ["onCheckedChange"]
    }]);
_Checkbox_inputId = new WeakMap(), _Checkbox_inheritedAttributes = new WeakMap(), _Checkbox_nativeInput = new WeakMap(), _Checkbox_onClick = new WeakMap(), _Checkbox_onChecked = new WeakMap(), _Checkbox_onFocus = new WeakMap(), _Checkbox_onBlur = new WeakMap();
let checkboxIds = 0;
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Checkbox);
            }
            break;
    } });
}

export { Checkbox as C, defineCustomElement as d };

//# sourceMappingURL=checkbox.js.map