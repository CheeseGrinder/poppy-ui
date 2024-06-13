import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes } from './helpers.js';

const rangeCss = ":host{--thumb-color:oklch(var(--base-100, 0.253267 0.015896 252.417568));width:100%}:host>input{appearance:none;-webkit-appearance:none;overflow:hidden;width:100%;height:var(--thumb-size);margin:0;border-radius:var(--border-radius, var(--radius-xl, 16px));color:var(--active-track-color);background-color:transparent;cursor:pointer}:host>input:focus{outline:none}:host>input:focus-visible{--focus-shadow:0 0 0 6px var(--thumb-color) inset, 0 0 0 2rem var(--active-track-color) inset}:host>input::-webkit-slider-runnable-track{width:100%;height:var(--track-size);border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--track-color, oklch(var(--base-content)/var(--track-opacity, 0.2)))}:host>input::-webkit-slider-thumb{height:var(--thumb-size);width:var(--thumb-size);border-style:none;border-radius:var(--border-radius, var(--radius-xl, 16px));--filler-size:50rem;--active-track-size:calc(var(--filler-size) * -1 - var(--filler-offset));background-color:var(--thumb-color);box-shadow:0 0 0 3px var(--active-track-color) inset, var(--focus-shadow, 0 0), var(--active-track-size) 0 0 var(--filler-size);appearance:none;-webkit-appearance:none;position:relative;top:50%;transform:translateY(-50%)}:host>input::-moz-range-track{width:100%;height:var(--track-size);border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--track-color, oklch(var(--base-content)/var(--track-opacity, 0.2)))}:host>input::-moz-range-thumb{height:var(--thumb-size);width:var(--thumb-size);border-style:none;border-radius:var(--border-radius, var(--radius-xl, 16px));--filler-size:50rem;--active-track-size:calc(var(--filler-size) * -1 - var(--filler-offset));background-color:var(--thumb-color);box-shadow:0 0 0 3px var(--active-track-color) inset, var(--focus-shadow, 0 0), var(--active-track-size) 0 0 var(--filler-size)}:host([size=xs]){--track-size:0.25rem;--thumb-size:1rem;--filler-offset:0.4rem}:host([size=sm]){--track-size:0.25rem;--thumb-size:1.25rem;--filler-offset:0.5rem}:host([size=md]),:host(:not([size])){--track-size:0.5rem;--thumb-size:1.5rem;--filler-offset:0.6rem}:host([size=lg]){--track-size:1rem;--thumb-size:2rem;--filler-offset:1rem}:host([color=primary]){--active-track-color:oklch(var(--primary, 0.6569 0.196 275.75) / var(--active-track-opacity, 1))}:host([color=secondary]){--active-track-color:oklch(var(--secondary, 0.748 0.26 342.55) / var(--active-track-opacity, 1))}:host([color=accent]){--active-track-color:oklch(var(--accent, 0.7451 0.167 183.61) / var(--active-track-opacity, 1))}:host([color=info]){--active-track-color:oklch(var(--info, 0.7206 0.191 231.6) / var(--active-track-opacity, 1))}:host([color=success]){--active-track-color:oklch(var(--success, 64.8% 0.15 160) / var(--active-track-opacity, 1))}:host([color=warning]){--active-track-color:oklch(var(--warning, 0.8471 0.199 83.87) / var(--active-track-opacity, 1))}:host([color=error]){--active-track-color:oklch(var(--error, 0.7176 0.221 22.18) / var(--active-track-opacity, 1))}:host(:not([color])){--track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--track-opacity, 0.2));--active-track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--active-track-opacity, 1))}:host([disabled])>input{--active-track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--active-track-opacity, 1));opacity:var(--opacity, 0.2);cursor:not-allowed}";
const PopRangeStyle0 = rangeCss;

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
var _Range_inputId, _Range_inheritedAttributes, _Range_nativeInput, _Range_debounceTimer, _Range_onChange, _Range_onFocus, _Range_onBlur;
const Range = /*@__PURE__*/ proxyCustomElement(class Range extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Range_inputId.set(this, `pop-range-${rangeIds++}`);
        _Range_inheritedAttributes.set(this, void 0);
        _Range_nativeInput.set(this, void 0);
        _Range_debounceTimer.set(this, void 0);
        _Range_onChange.set(this, () => {
            clearTimeout(__classPrivateFieldGet(this, _Range_debounceTimer, "f"));
            __classPrivateFieldSet(this, _Range_debounceTimer, setTimeout(() => {
                this.value = __classPrivateFieldGet(this, _Range_nativeInput, "f").valueAsNumber;
                this.popChange.emit({
                    value: this.value,
                });
            }, this.debounce || 0), "f");
        });
        _Range_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Range_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _Range_inputId, "f");
        this.value = undefined;
        this.min = undefined;
        this.max = undefined;
        this.step = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.autoFocus = false;
        this.color = undefined;
        this.size = undefined;
        this.debounce = 0;
    }
    onValueChange(value) {
        this.internals.setFormValue(value.toString(), value.toString());
    }
    formResetCallback() {
        this.value = 0;
    }
    formStateRestoreCallback(state) {
        this.value = +state;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Range_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        componentConfig.apply(this, 'pop-range', {
            min: 0,
            max: 100,
            step: 1,
            required: false,
            disabled: false,
            size: config.get('defaultSize', 'md'),
            debounce: 0,
        });
    }
    disconnectedCallback() {
        clearTimeout(__classPrivateFieldGet(this, _Range_debounceTimer, "f"));
    }
    /**
     * Sets focus on the native `input` in `pop-range`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Range_nativeInput, "f")?.focus();
    }
    render() {
        const { inputId } = this;
        return (h(Host, { key: 'e72e9497201f24246d833ca5854dafcc81e93c00', "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null }, h("input", { key: '9112269ba2ef58ef752d2ec84e28f8dbfcee90fb', part: "native", id: inputId, name: this.name, type: "range", min: this.min, max: this.max, step: this.step, value: this.value, required: this.required, disabled: this.disabled, autoFocus: this.autoFocus, onInput: __classPrivateFieldGet(this, _Range_onChange, "f"), onFocus: __classPrivateFieldGet(this, _Range_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Range_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _Range_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _Range_inheritedAttributes, "f") })));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return PopRangeStyle0; }
}, [65, "pop-range", {
        "name": [1],
        "value": [1026],
        "min": [1538],
        "max": [1538],
        "step": [1538],
        "required": [1540],
        "disabled": [1540],
        "autoFocus": [1028, "auto-focus"],
        "color": [1537],
        "size": [1537],
        "debounce": [1026],
        "setFocus": [64]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_Range_inputId = new WeakMap(), _Range_inheritedAttributes = new WeakMap(), _Range_nativeInput = new WeakMap(), _Range_debounceTimer = new WeakMap(), _Range_onChange = new WeakMap(), _Range_onFocus = new WeakMap(), _Range_onBlur = new WeakMap();
let rangeIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-range"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Range);
            }
            break;
    } });
}

const PopRange = Range;
const defineCustomElement = defineCustomElement$1;

export { PopRange, defineCustomElement };

//# sourceMappingURL=pop-range.js.map