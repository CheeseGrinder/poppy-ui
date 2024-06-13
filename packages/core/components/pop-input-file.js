import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as inheritAriaAttributes, a as inheritAttributes, h as hostContext } from './helpers.js';
import { S as Show } from './Show.js';

const inputFileCss = ":host(.join-item)>input{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>input+.text-wrapper:empty{display:none}:host>input:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>input:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host>input{box-sizing:border-box;overflow:hidden;padding:0;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0));background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--background-opacity, 1)));color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));min-width:12rem;width:100%;cursor:pointer}:host>input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host>input::file-selector-button{border:none;padding-left:1rem;padding-right:1rem;height:100%;background-color:var(--button-background, oklch(var(--neutral, 0.313815 0.021108 254.139175)));color:var(--button-color, oklch(var(--neutral-content, 0.746477 0.0216 264.435964)));text-align:center;text-transform:uppercase;text-decoration-line:none;font-weight:600;cursor:pointer;user-select:none;transition-property:color, background-color, border-color, opacity;transition-timing-function:ease-out;transition-duration:200ms;animation:button-pop var(--button-animation, 0.25s) ease-out}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([size=xs])>input{padding-inline-end:0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=xs])>input::file-selector-button{margin-right:0.5rem;font-size:0.75rem}:host([size=sm])>input{padding-inline-end:0.75rem;height:2rem;font-size:0.875rem;line-height:2}:host([size=sm])>input::file-selector-button{margin-right:0.75rem;font-size:0.875rem}:host([size=md])>input,:host(:not([size]))>input{padding-inline-end:1rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=md])>input::file-selector-button,:host(:not([size]))>input::file-selector-button{margin-right:1rem;font-size:0.875rem}:host([size=lg])>input{padding-inline-end:1.5rem;height:4rem;font-size:1.125rem;line-height:2}:host([size=lg])>input::file-selector-button{margin-right:1.5rem;font-size:1.125rem}:host([color=primary]){--button-background:oklch(var(--primary, 0.6569 0.196 275.75));--button-color:oklch(var(--primary-content, 0.13138 0.0392 275.75));--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=primary])>input:hover{--button-background:color-mix(in oklab, oklch(var(--primary, 0.6569 0.196 275.75)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=primary])>input:hover{--button-background:oklch(var(--primary-shade, 59% 0.181 275.81))}}:host([color=secondary]){--button-background:oklch(var(--secondary, 0.748 0.26 342.55));--button-color:oklch(var(--secondary-content, 0.1496 0.052 342.55));--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=secondary])>input:hover{--button-background:color-mix(in oklab, oklch(var(--secondary, 0.748 0.26 342.55)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=secondary])>input:hover{--button-background:oklch(var(--secondary-shade, 67.31% 0.233 342.57))}}:host([color=accent]){--button-background:oklch(var(--accent, 0.7451 0.167 183.61));--button-color:oklch(var(--accent-content, 0.14902 0.0334 183.61));--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=accent])>input:hover{--button-background:color-mix(in oklab, oklch(var(--accent, 0.7451 0.167 183.61)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=accent])>input:hover{--button-background:oklch(var(--accent-shade, 68.49% 0.1229427781 181.6698834793))}}:host([color=info]){--button-background:oklch(var(--info, 0.7206 0.191 231.6));--button-color:oklch(var(--info-content, 0 0 0));--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=info])>input:hover{--button-background:color-mix(in oklab, oklch(var(--info, 0.7206 0.191 231.6)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=info])>input:hover{--button-background:oklch(var(--info-shade, 66.25% 0.1498779989 239.253594275))}}:host([color=success]){--button-background:oklch(var(--success, 64.8% 0.15 160));--button-color:oklch(var(--success-content, 0 0 0));--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=success])>input:hover{--button-background:color-mix(in oklab, oklch(var(--success, 64.8% 0.15 160)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=success])>input:hover{--button-background:oklch(var(--success-shade, 58.5% 0.133 159.63))}}:host([color=warning]){--button-background:oklch(var(--warning, 0.8471 0.199 83.87));--button-color:oklch(var(--warning-content, 0 0 0));--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=warning])>input:hover{--button-background:color-mix(in oklab, oklch(var(--warning, 0.8471 0.199 83.87)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=warning])>input:hover{--button-background:oklch(var(--warning-shade, 76.51% 0.158561541 79.7738362662))}}:host([color=error]){--button-background:oklch(var(--error, 0.7176 0.221 22.18));--button-color:oklch(var(--error-content, 0 0 0));--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=error])>input:hover{--button-background:color-mix(in oklab, oklch(var(--error, 0.7176 0.221 22.18)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=error])>input:hover{--button-background:oklch(var(--error-shade, 64.53% 0.198 22.33))}}:host(:not([color],[disabled]))>input:hover{--button-background:color-mix(in oklab, oklch(var(--neutral, 0.313815 0.021108 254.139175)) 90%, black)}@supports not (color: color-mix(in oklab, black, black)){:host(:not([color],[disabled]))>input:hover{--button-background:oklch(var(--neutral-shade, 28.22% 0.019 254.82))}}:host([color=ghost]){--background-opacity:0.05;--button-background:transparent;--button-color:currentColor}:host([color=ghost])>input:focus{--background-opacity:1;color:var(--text-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)))}:host([disabled]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--button-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--button-background:oklch(var(--neutral, 0.313815 0.021108 254.139175) / 0.2)}:host([disabled])>input,:host([disabled]) input::file-selector-button{cursor:not-allowed}";
const PopInputFileStyle0 = inputFileCss;

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
var _InputFile_instances, _InputFile_inputId, _InputFile_inheritedAttributes, _InputFile_nativeInput, _InputFile_debounceTimer, _InputFile_getValue, _InputFile_onChange, _InputFile_onFocus, _InputFile_onBlur;
const InputFile = /*@__PURE__*/ proxyCustomElement(class InputFile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _InputFile_instances.add(this);
        _InputFile_inputId.set(this, `pop-input-file-${inputIds++}`);
        _InputFile_inheritedAttributes.set(this, void 0);
        _InputFile_nativeInput.set(this, void 0);
        _InputFile_debounceTimer.set(this, void 0);
        _InputFile_onChange.set(this, () => {
            this.popChange.emit({
                value: __classPrivateFieldGet(this, _InputFile_instances, "m", _InputFile_getValue).call(this),
            });
        });
        _InputFile_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _InputFile_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        this.name = __classPrivateFieldGet(this, _InputFile_inputId, "f");
        this.value = undefined;
        this.multiple = undefined;
        this.required = undefined;
        this.readonly = undefined;
        this.disabled = undefined;
        this.autoFocus = undefined;
        this.bordered = undefined;
        this.color = undefined;
        this.size = undefined;
        this.helperText = undefined;
        this.errorText = undefined;
    }
    onValueChange(file) {
        this.internals.setFormValue(file, file);
    }
    formResetCallback() {
        this.value = null;
        __classPrivateFieldGet(this, _InputFile_nativeInput, "f").value = null;
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _InputFile_inheritedAttributes, {
            ...inheritAriaAttributes(this.host),
            ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
        }, "f");
        componentConfig.apply(this, 'pop-input-file', {
            multiple: false,
            required: false,
            readonly: false,
            disabled: false,
            autoFocus: false,
            bordered: false,
            size: config.get('defaultSize', 'md'),
        });
    }
    // TODO: Tester si ça fonctionne
    componentDidLoad() {
        const { value } = this;
        const files = Array.isArray(value) ? value : [value];
        files.forEach((file, idx) => (__classPrivateFieldGet(this, _InputFile_nativeInput, "f").files[idx] = file));
    }
    disconnectedCallback() {
        clearTimeout(__classPrivateFieldGet(this, _InputFile_debounceTimer, "f"));
    }
    /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _InputFile_nativeInput, "f")?.focus();
    }
    render() {
        const { host, errorText, helperText } = this;
        const inputId = __classPrivateFieldGet(this, _InputFile_inputId, "f");
        const hasLabel = host.textContent !== '';
        const hasError = !!errorText;
        const hasHelper = !!helperText;
        const hasBottomText = hasError || hasHelper;
        return (h(Host, { key: '62641a85a66037deecff024a3d635d2e9e341d79', "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null, class: {
                'join-item': hostContext(host, 'pop-join'),
            } }, h(Show, { key: '07978938ea5031786051c40c15904d6196779658', when: hasLabel }, h("div", { key: '25d14c60481ace522b1d8eb8c94c84b4c8b17a9b', class: "label" }, h("label", { key: '0d95bb785807360ba333a0b80faf814608b4f44e', htmlFor: inputId, part: "label" }, h("slot", { key: 'c8bc583c2a30675b40cb6b20bf40b639b4954944' })))), h("input", { key: '1190726c0b61aacb0b267c9ed810c7dfc900c4a2', part: "native", type: "file", id: inputId, name: this.name, multiple: this.multiple, required: this.required, readonly: this.readonly, disabled: this.disabled, autoFocus: this.autoFocus, onChange: __classPrivateFieldGet(this, _InputFile_onChange, "f"), onFocus: __classPrivateFieldGet(this, _InputFile_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _InputFile_onBlur, "f"), ref: el => (__classPrivateFieldSet(this, _InputFile_nativeInput, el, "f")), ...__classPrivateFieldGet(this, _InputFile_inheritedAttributes, "f") }), h(Show, { key: 'c08dba8f02b5bb7a20efcb363ed55db38654c9d9', when: hasBottomText }, h("div", { key: 'ce2e583f86dc090884dbe183e69c8541cd708a9e', class: "text-wrapper" }, h(Show, { key: '8f0e73779845eff9f3c892caf7c78d8334f46e6a', when: hasError }, h("span", { key: '73aeb106598f17851871f45667c76f6ff0450178', class: "error-text" }, errorText)), h(Show, { key: 'a13bacc4698a7e77a8f1bcace0ad56a2f6617f15', when: hasHelper }, h("span", { key: 'f354a63b6f6540003d211d46f584b9eb69062f20', class: "helper-text" }, helperText))))));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return PopInputFileStyle0; }
}, [65, "pop-input-file", {
        "name": [1],
        "value": [1040],
        "multiple": [1028],
        "required": [1540],
        "readonly": [1540],
        "disabled": [1540],
        "autoFocus": [1540, "auto-focus"],
        "bordered": [1540],
        "color": [1537],
        "size": [1537],
        "helperText": [1, "helper-text"],
        "errorText": [1, "error-text"],
        "setFocus": [64]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_InputFile_inputId = new WeakMap(), _InputFile_inheritedAttributes = new WeakMap(), _InputFile_nativeInput = new WeakMap(), _InputFile_debounceTimer = new WeakMap(), _InputFile_onChange = new WeakMap(), _InputFile_onFocus = new WeakMap(), _InputFile_onBlur = new WeakMap(), _InputFile_instances = new WeakSet(), _InputFile_getValue = function _InputFile_getValue() {
    return Array.from(__classPrivateFieldGet(this, _InputFile_nativeInput, "f").files);
};
let inputIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-input-file"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-input-file":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputFile);
            }
            break;
    } });
}

const PopInputFile = InputFile;
const defineCustomElement = defineCustomElement$1;

export { PopInputFile, defineCustomElement };

//# sourceMappingURL=pop-input-file.js.map