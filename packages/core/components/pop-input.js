import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes, a as inheritAttributes, h as hostContext } from './helpers.js';
import { S as Show } from './Show.js';

const inputCss = ":host(.join-item)>.input-wrapper{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{--border-radius:var(--radius-md, 8px);--border-color:transparent;--outline-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));display:inline-flex;flex-direction:column}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>.input-wrapper+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>.input-wrapper+.text-wrapper:empty{display:none}:host>.input-wrapper:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>.input-wrapper:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .counter-text{margin-inline-start:auto;font-size:0.75rem;line-height:1rem}:host>.input-wrapper{box-sizing:border-box;display:flex;justify-content:center;align-items:center;flex-shrink:1;gap:0.5rem;border-style:solid;border-width:1px;border-radius:var(--border-radius);border-color:var(--border-color, transparent);background-color:var(--background);min-width:12rem;width:100%}:host>.input-wrapper:has(input:not([readonly]):focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--outline-color, var(--border-color))}:host>.input-wrapper>input{flex-grow:1;border:none;outline:none;color:var(--color);background-color:transparent;font-family:system-ui;white-space:pre-wrap;cursor:inherit}:host>.input-wrapper>input::-webkit-calendar-picker-indicator{line-height:1em}:host>.input-wrapper>input::-webkit-date-and-time-value{text-align:inherit}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}::slotted([slot=start]),::slotted([slot=end]){display:flex;justify-content:center;align-items:center;gap:0.5rem}:host([size=xs])>.input-wrapper{padding:0 0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm])>.input-wrapper{padding:0 0.75rem;height:2rem;font-size:0.875rem;line-height:2rem}:host([size=md]) .input-wrapper{padding:0 1rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=lg])>.input-wrapper{padding:1.5rem;height:4rem;font-size:1.125rem;line-height:2}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost])>.input-wrapper:has(input:focus){--opacity:1}:host([readonly]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.8);cursor:text}:host([readonly]) input::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}:host([disabled]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled]) input::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";
const PopInputStyle0 = inputCss;

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
var _Input_instances, _Input_inputId, _Input_inheritedAttributes, _Input_nativeInput, _Input_debounceTimer, _Input_getValue, _Input_counterText_get, _Input_onChange, _Input_onInput, _Input_onFocus, _Input_onBlur;
const Input = /*@__PURE__*/ proxyCustomElement(class Input extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popInput = createEvent(this, "popInput", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Input_instances.add(this);
        _Input_inputId.set(this, `pop-input-${inputIds++}`);
        _Input_inheritedAttributes.set(this, void 0);
        _Input_nativeInput.set(this, void 0);
        _Input_debounceTimer.set(this, void 0);
        _Input_onChange.set(this, () => {
            this.popChange.emit({
                value: __classPrivateFieldGet(this, _Input_instances, "m", _Input_getValue).call(this),
            });
        });
        _Input_onInput.set(this, () => {
            this.value = __classPrivateFieldGet(this, _Input_nativeInput, "f").value;
            clearTimeout(__classPrivateFieldGet(this, _Input_debounceTimer, "f"));
            __classPrivateFieldSet(this, _Input_debounceTimer, setTimeout(() => {
                this.popInput.emit({
                    value: __classPrivateFieldGet(this, _Input_instances, "m", _Input_getValue).call(this),
                });
            }, this.debounce || 0), "f");
        });
        _Input_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Input_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _Input_inputId, "f");
        this.type = 'text';
        this.placeholder = undefined;
        this.value = '';
        this.min = undefined;
        this.max = undefined;
        this.step = undefined;
        this.minLength = undefined;
        this.maxLength = undefined;
        this.multiple = undefined;
        this.pattern = undefined;
        this.required = undefined;
        this.readonly = undefined;
        this.disabled = undefined;
        this.autoFocus = undefined;
        this.keyboard = undefined;
        this.enterkeyhint = undefined;
        this.spellcheck = undefined;
        this.autoComplete = 'off';
        this.autoCapitalize = undefined;
        this.autoCorrect = undefined;
        this.bordered = undefined;
        this.color = undefined;
        this.size = undefined;
        this.helperText = undefined;
        this.errorText = undefined;
        this.counter = undefined;
        this.counterFormatter = undefined;
        this.debounce = 0;
    }
    onValueChange() {
        const value = __classPrivateFieldGet(this, _Input_instances, "m", _Input_getValue).call(this);
        this.internals.setFormValue(value, value);
        if (value !== __classPrivateFieldGet(this, _Input_nativeInput, "f").value) {
            /**
             * Assigning the native input's value on attribute
             * value change, allows `popInput` implementations
             * to override the control's value.
             *
             * Used for patterns such as input trimming (removing whitespace),
             * or input masking.
             */
            __classPrivateFieldGet(this, _Input_nativeInput, "f").value = value;
        }
    }
    formResetCallback() {
        this.value = '';
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Input_inheritedAttributes, {
            ...inheritAriaAttributes(this.host),
            ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
        }, "f");
        componentConfig.apply(this, 'pop-input', {
            type: 'text',
            multiple: false,
            required: false,
            readonly: false,
            disabled: false,
            autoFocus: false,
            spellcheck: false,
            autoComplete: 'off',
            autoCapitalize: 'off',
            autoCorrect: 'off',
            bordered: false,
            size: config.get('defaultSize', 'md'),
            counter: false,
            counterFormatter: (length, max) => `${length} / ${max}`,
            debounce: 0,
        });
        if (this.counter && this.maxLength === undefined) {
            console.warn(`The 'maxLength' attribut must be specified.`);
        }
    }
    disconnectedCallback() {
        clearTimeout(__classPrivateFieldGet(this, _Input_debounceTimer, "f"));
    }
    /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Input_nativeInput, "f")?.focus();
    }
    render() {
        const { host, errorText, helperText } = this;
        const inputId = __classPrivateFieldGet(this, _Input_inputId, "f");
        const counter = __classPrivateFieldGet(this, _Input_instances, "a", _Input_counterText_get);
        const hasLabel = host.textContent !== '';
        const hasError = !!errorText;
        const hasHelper = !!helperText;
        const hasCounter = counter !== '';
        const hasBottomText = hasError || hasHelper || hasCounter;
        return (h(Host, { key: '156d8698b3586211975c378438d113f03c8eb057', "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null, class: {
                'join-item': hostContext(host, 'pop-join'),
            } }, h(Show, { key: '01fb16ccab8db1f9cffea1fde876ce70db84301e', when: hasLabel }, h("div", { key: 'c3ba75b6c724dd6e637ee64df3fdd44aadf27c28', class: "label" }, h("label", { key: '5325e7d58852b64fafc53ef0d66a03b76c2f7f0b', htmlFor: inputId, part: "label" }, h("slot", { key: 'a0b0389cf608060c4144df7be98a66c77c6168f1' })))), h("label", { key: '510f3a1d4ac199c2e66c8bb53bd76bccd7c9ace3', htmlFor: inputId, class: "input-wrapper" }, h("slot", { key: 'edc01e0ea30d4e39a092d256f02024a64025b250', name: "start" }), h("input", { key: '7a7a6a760e9fe85341e41347a09bcc52322f4eb1', part: "native", id: inputId, name: this.name, type: this.type, placeholder: this.placeholder || '', min: this.min, max: this.max, step: this.step, value: this.value, multiple: this.multiple, pattern: this.pattern, minLength: this.minLength, maxLength: this.maxLength, required: this.required, readonly: this.readonly, disabled: this.disabled, autoFocus: this.autoFocus, inputMode: this.keyboard, enterKeyHint: this.enterkeyhint, spellcheck: this.spellcheck, autoComplete: this.autoComplete, autoCapitalize: this.autoCapitalize, autoCorrect: this.autoCorrect, onChange: __classPrivateFieldGet(this, _Input_onChange, "f"), onInput: __classPrivateFieldGet(this, _Input_onInput, "f"), onFocus: __classPrivateFieldGet(this, _Input_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Input_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Input_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Input_inheritedAttributes, "f") }), h("slot", { key: 'c8e35b021a8d5d5bef5f816a2f7c262e82e385e1', name: "end" })), h(Show, { key: '33b00b9344a7f5d938cbdb162fadb484f3e93b9e', when: hasBottomText }, h("div", { key: '0ec83c6d40092fdbd560496c4227bc42df015fb1', class: "text-wrapper" }, h(Show, { key: '1604058e94c330d5823e0ef45abe53acf421429a', when: hasError }, h("span", { key: '7b0ac2afd902dcfd94eb9b56b4b85a19d3d30fd4', class: "error-text" }, errorText)), h(Show, { key: '9b5c89647671590daac073da6d6dccc44d88c5f6', when: hasHelper }, h("span", { key: '062e40f538a061828a6db67cd6515f1b9b36f894', class: "helper-text" }, helperText)), h(Show, { key: '7586259defe61fe670c806360afe0c14d8836c4b', when: hasCounter }, h("span", { key: 'ed32a05e0dc3451d2d528702292f39be0f6cfaf4', class: "counter-text" }, counter))))));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return PopInputStyle0; }
}, [65, "pop-input", {
        "name": [1],
        "type": [1025],
        "placeholder": [1],
        "value": [1032],
        "min": [1026],
        "max": [1032],
        "step": [1025],
        "minLength": [1026, "min-length"],
        "maxLength": [1026, "max-length"],
        "multiple": [1028],
        "pattern": [1025],
        "required": [1540],
        "readonly": [1540],
        "disabled": [1540],
        "autoFocus": [1540, "auto-focus"],
        "keyboard": [1025],
        "enterkeyhint": [1025],
        "spellcheck": [1028],
        "autoComplete": [1025, "auto-complete"],
        "autoCapitalize": [1025, "auto-capitalize"],
        "autoCorrect": [1025, "auto-correct"],
        "bordered": [1540],
        "color": [1537],
        "size": [1537],
        "helperText": [1, "helper-text"],
        "errorText": [1, "error-text"],
        "counter": [1028],
        "counterFormatter": [1040],
        "debounce": [1026],
        "setFocus": [64]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_Input_inputId = new WeakMap(), _Input_inheritedAttributes = new WeakMap(), _Input_nativeInput = new WeakMap(), _Input_debounceTimer = new WeakMap(), _Input_onChange = new WeakMap(), _Input_onInput = new WeakMap(), _Input_onFocus = new WeakMap(), _Input_onBlur = new WeakMap(), _Input_instances = new WeakSet(), _Input_getValue = function _Input_getValue() {
    if (typeof this.value === 'number')
        return this.value.toString();
    return this.value || '';
}, _Input_counterText_get = function _Input_counterText_get() {
    const { counter, maxLength, counterFormatter } = this;
    if (!counter || maxLength < 0)
        return '';
    const length = __classPrivateFieldGet(this, _Input_instances, "m", _Input_getValue).call(this).length;
    return counterFormatter(length, maxLength);
};
let inputIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-input"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Input);
            }
            break;
    } });
}

const PopInput = Input;
const defineCustomElement = defineCustomElement$1;

export { PopInput, defineCustomElement };

//# sourceMappingURL=pop-input.js.map