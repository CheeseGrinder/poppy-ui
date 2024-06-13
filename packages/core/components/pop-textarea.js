import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes, h as hostContext } from './helpers.js';
import { S as Show } from './Show.js';

const textareaCss = ":host(.join-item)>textarea{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column;min-width:12rem;height:auto}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>textarea+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>textarea+.text-wrapper:empty{display:none}:host>textarea:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>textarea:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .counter-text{margin-inline-start:auto;font-size:0.75rem;line-height:1rem}:host>textarea{box-sizing:border-box;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, transparent);background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--opacity, 1)));color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));min-width:12rem;width:100%;min-height:3rem;flex-shrink:1;font-family:system-ui;white-space:pre-wrap}:host>textarea:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([size=xs])>textarea{padding:0.25rem 0.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm])>textarea{padding:0.25rem 0.75rem;font-size:0.875rem;line-height:2rem}:host([size=md])>textarea,:host(:not([size]))>textarea{padding:0.75rem 1rem;font-size:0.875rem;line-height:2}:host([size=lg])>textarea{padding:1rem 1.5rem;font-size:1.125rem;line-height:2}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost])>textarea:focus{--opacity:1}:host([disabled])>textarea{--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled])>textarea::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";
const PopTextareaStyle0 = textareaCss;

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
var _Textarea_instances, _Textarea_inputId, _Textarea_inheritedAttributes, _Textarea_resizeObserver, _Textarea_nativeInput, _Textarea_debounceTimer, _Textarea_getValue, _Textarea_counterText_get, _Textarea_onChange, _Textarea_onInput, _Textarea_onFocus, _Textarea_onBlur;
const Textarea = /*@__PURE__*/ proxyCustomElement(class Textarea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popInput = createEvent(this, "popInput", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Textarea_instances.add(this);
        _Textarea_inputId.set(this, `pop-textarea-${textareaIds++}`);
        _Textarea_inheritedAttributes.set(this, void 0);
        _Textarea_resizeObserver.set(this, void 0);
        _Textarea_nativeInput.set(this, void 0);
        _Textarea_debounceTimer.set(this, void 0);
        _Textarea_onChange.set(this, () => {
            this.value = __classPrivateFieldGet(this, _Textarea_nativeInput, "f").value;
            this.popChange.emit({
                value: __classPrivateFieldGet(this, _Textarea_instances, "m", _Textarea_getValue).call(this),
            });
        });
        _Textarea_onInput.set(this, () => {
            this.value = __classPrivateFieldGet(this, _Textarea_nativeInput, "f").value;
            clearTimeout(__classPrivateFieldGet(this, _Textarea_debounceTimer, "f"));
            __classPrivateFieldSet(this, _Textarea_debounceTimer, setTimeout(() => {
                this.popInput.emit({
                    value: __classPrivateFieldGet(this, _Textarea_instances, "m", _Textarea_getValue).call(this),
                });
            }, this.debounce || 0), "f");
        });
        _Textarea_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Textarea_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.textareaWidth = undefined;
        this.name = __classPrivateFieldGet(this, _Textarea_inputId, "f");
        this.placeholder = undefined;
        this.value = '';
        this.minLength = undefined;
        this.maxLength = undefined;
        this.cols = undefined;
        this.rows = undefined;
        this.required = undefined;
        this.readonly = undefined;
        this.disabled = undefined;
        this.autoFocus = false;
        this.keyboard = undefined;
        this.enterkeyhint = undefined;
        this.spellcheck = undefined;
        this.autoCapitalize = undefined;
        this.wrap = undefined;
        this.bordered = false;
        this.color = undefined;
        this.size = undefined;
        this.helperText = undefined;
        this.errorText = undefined;
        this.counter = undefined;
        this.counterFormatter = undefined;
        this.debounce = undefined;
    }
    onValueChange(value) {
        this.internals.setFormValue(value, value);
    }
    formResetCallback() {
        this.value = '';
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Textarea_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-textarea', {
            required: false,
            readonly: false,
            disabled: false,
            spellcheck: false,
            bordered: false,
            size: config.get('defaultSize', 'md'),
            debounce: 0,
        });
        if (this.counter && this.maxLength === undefined) {
            console.warn(`The 'maxLength' attribut must be specified.`);
        }
        if (this.wrap === 'hard' && this.cols === undefined) {
            console.warn(`The 'cols' attribut must be specified.`);
        }
    }
    componentDidLoad() {
        __classPrivateFieldSet(this, _Textarea_resizeObserver, new MutationObserver(() => {
            this.textareaWidth = __classPrivateFieldGet(this, _Textarea_nativeInput, "f").style.width;
        }), "f");
        __classPrivateFieldGet(this, _Textarea_resizeObserver, "f").observe(__classPrivateFieldGet(this, _Textarea_nativeInput, "f"), {
            attributes: true,
            attributeFilter: ['style'],
        });
    }
    disconnectedCallback() {
        clearTimeout(__classPrivateFieldGet(this, _Textarea_debounceTimer, "f"));
        __classPrivateFieldGet(this, _Textarea_resizeObserver, "f").disconnect();
    }
    /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Textarea_nativeInput, "f")?.focus();
    }
    render() {
        const { host, value, helperText, errorText } = this;
        const inputId = __classPrivateFieldGet(this, _Textarea_inputId, "f");
        const counter = __classPrivateFieldGet(this, _Textarea_instances, "a", _Textarea_counterText_get);
        const hasLabel = host.textContent !== '';
        const hasError = !!errorText;
        const hasHelper = !!helperText;
        const hasCounter = counter !== '';
        const hasBottomText = hasError || hasHelper || hasCounter;
        return (h(Host, { key: 'fab368a8327e4da73fbd08fccc73a845bb6f29fe', style: {
                maxWidth: this.textareaWidth,
            }, "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null, class: {
                'join-item': hostContext(host, 'pop-join'),
            } }, h(Show, { key: '6d81773b5e24f64c602518f2ba56b871049221c9', when: hasLabel }, h("div", { key: '9609a4cf2798fa918c38a5b788c8eee8f95b6031', class: "label" }, h("label", { key: 'e683a2be1a2a27d7a0027a1c301442c5f95f72ec', htmlFor: inputId, part: "label" }, h("slot", { key: '0a9e45d45140b07653f2a3357294c1e862dbef37' })))), h("textarea", { key: 'd1004a18fb571c221f5cfc95de27a3add5ca1d97', part: "native", id: inputId, name: this.name, placeholder: this.placeholder || '', minLength: this.minLength, maxLength: this.maxLength, rows: this.rows, cols: this.cols, required: this.required, readonly: this.readonly, disabled: this.disabled, autoFocus: this.autoFocus, inputMode: this.keyboard, enterKeyHint: this.enterkeyhint, spellcheck: this.spellcheck, autoCapitalize: this.autoCapitalize, wrap: this.wrap, onChange: __classPrivateFieldGet(this, _Textarea_onChange, "f"), onInput: __classPrivateFieldGet(this, _Textarea_onInput, "f"), onFocus: __classPrivateFieldGet(this, _Textarea_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Textarea_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Textarea_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Textarea_inheritedAttributes, "f") }, value), h(Show, { key: 'f2be8b34346b8be6149638e27a2e1bcb3895167d', when: hasBottomText }, h("div", { key: 'ebcbf894d5cf5c512ac7baa450b7c7253d4a9a87', class: "text-wrapper" }, h(Show, { key: 'b4e2002e7391fed200b9dc7208c09200eb259363', when: hasError }, h("span", { key: '7488d6bcd3ab960fb1d9db13e95d78398f3291e9', class: "error-text" }, errorText)), h(Show, { key: '7c704b3f9c1b8586f752002fcc2b3ee4eed6110b', when: hasHelper }, h("span", { key: '993f84a3c29b52ffe4e1570c0b92953764bf63d8', class: "helper-text" }, helperText)), h(Show, { key: '1e9dce06c85c3f9f89ec6de0c5d309fbc5e773bb', when: hasCounter }, h("span", { key: 'c4201ae788a83f3a9298d79b1c315ab766d2a86a', class: "counter-text" }, counter))))));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return PopTextareaStyle0; }
}, [65, "pop-textarea", {
        "name": [1],
        "placeholder": [1],
        "value": [1025],
        "minLength": [1026, "min-length"],
        "maxLength": [1026, "max-length"],
        "cols": [1026],
        "rows": [1026],
        "required": [516],
        "readonly": [516],
        "disabled": [516],
        "autoFocus": [516, "auto-focus"],
        "keyboard": [1025],
        "enterkeyhint": [1025],
        "spellcheck": [1028],
        "autoCapitalize": [1025, "auto-capitalize"],
        "wrap": [1025],
        "bordered": [1540],
        "color": [1537],
        "size": [1537],
        "helperText": [1, "helper-text"],
        "errorText": [1, "error-text"],
        "counter": [1028],
        "counterFormatter": [1040],
        "debounce": [1026],
        "textareaWidth": [32],
        "setFocus": [64]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_Textarea_inputId = new WeakMap(), _Textarea_inheritedAttributes = new WeakMap(), _Textarea_resizeObserver = new WeakMap(), _Textarea_nativeInput = new WeakMap(), _Textarea_debounceTimer = new WeakMap(), _Textarea_onChange = new WeakMap(), _Textarea_onInput = new WeakMap(), _Textarea_onFocus = new WeakMap(), _Textarea_onBlur = new WeakMap(), _Textarea_instances = new WeakSet(), _Textarea_getValue = function _Textarea_getValue() {
    return this.value || '';
}, _Textarea_counterText_get = function _Textarea_counterText_get() {
    if (!this.counter)
        return null;
    const { maxLength } = this;
    const length = __classPrivateFieldGet(this, _Textarea_instances, "m", _Textarea_getValue).call(this).length;
    return this.counterFormatter?.(length, maxLength) ?? `${length} / ${maxLength}`;
};
let textareaIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-textarea"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Textarea);
            }
            break;
    } });
}

const PopTextarea = Textarea;
const defineCustomElement = defineCustomElement$1;

export { PopTextarea, defineCustomElement };

//# sourceMappingURL=pop-textarea.js.map