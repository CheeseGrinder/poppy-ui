import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';
import { i as isOptionSelected, c as compareOptions } from './compare-with-utils.js';
import { a as inheritAttributes, h as hostContext } from './helpers.js';
import { C as ChevronDown } from './ChevronDown.js';
import { S as Show } from './Show.js';

const APP_PREFIX = 'pop';
const APP_TAG = `${APP_PREFIX}-app`;

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
const componentOnReady = (el, callback) => {
    if (el.componentOnReady) {
        // eslint-disable-next-line custom-rules/no-component-on-ready-method
        el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
    }
    else {
        raf(() => callback(el));
    }
};
const getAppRoot = (doc) => {
    return doc.querySelector(APP_TAG) || doc.body;
};

var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OverlayController_instances, _OverlayController_tag, _OverlayController_isHidden, _OverlayController_getOverlays, _OverlayController_getAllPresented, _OverlayController_getPresented, _OverlayController_create, _OverlayController_dismiss;
class OverlayController {
    constructor(tag) {
        _OverlayController_instances.add(this);
        _OverlayController_tag.set(this, void 0);
        __classPrivateFieldSet$1(this, _OverlayController_tag, tag, "f");
    }
    create(options) {
        return __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_create).call(this, __classPrivateFieldGet$1(this, _OverlayController_tag, "f"), options);
    }
    dismiss(data, role, id) {
        return __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_dismiss).call(this, document, data, role, __classPrivateFieldGet$1(this, _OverlayController_tag, "f"), id);
    }
    getTop(doc) {
        return __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_getPresented).call(this, doc, __classPrivateFieldGet$1(this, _OverlayController_tag, "f"));
    }
    static create(tag) {
        return new OverlayController(tag);
    }
}
_OverlayController_tag = new WeakMap(), _OverlayController_instances = new WeakSet(), _OverlayController_isHidden = function _OverlayController_isHidden(overlay) {
    return overlay.classList.contains('overlay-hidden');
}, _OverlayController_getOverlays = function _OverlayController_getOverlays(doc, selector) {
    if (selector === undefined) {
        selector = 'pop-popover, pop-modal';
    }
    return Array.from(doc.querySelectorAll(selector));
}, _OverlayController_getAllPresented = function _OverlayController_getAllPresented(doc, overlayTag) {
    return __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_getOverlays).call(this, doc, overlayTag)
        .filter(o => !__classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_isHidden).call(this, o))
        .filter(o => o.open);
}, _OverlayController_getPresented = function _OverlayController_getPresented(doc, overlayTag, id) {
    const overlays = __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_getAllPresented).call(this, doc, overlayTag);
    return id === undefined ? overlays.at(-1) : overlays.find((o) => o.id === id);
}, _OverlayController_create = async function _OverlayController_create(tag, options) {
    return (window?.customElements?.whenDefined(tag).then(() => {
        const element = document.createElement(tag);
        element.classList.add('overlay-hidden');
        /**
         * Convert the passed in overlay options into props
         * that get passed down into the new overlay.
         */
        Object.assign(element, { ...options, hasController: true });
        // append the overlay element to the document body
        // in case we have a modal open, we append the popover in it to avoid stacking top layer probleme
        // modal can be over an another modal, but popover cant, so we do a little trick here
        const root = document.querySelector('pop-modal[open]') ?? getAppRoot(document);
        root.appendChild(element);
        return new Promise(resolve => componentOnReady(element, resolve));
    }) ?? Promise.resolve());
}, _OverlayController_dismiss = async function _OverlayController_dismiss(doc, data, role, overlayTag, id) {
    const overlay = __classPrivateFieldGet$1(this, _OverlayController_instances, "m", _OverlayController_getPresented).call(this, doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
};
const popoverController = OverlayController.create('pop-popover');
OverlayController.create('pop-modal');

const selectCss = ":host(.join-item)>.select-wrapper button{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column;min-width:12rem}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>input+.text-wrapper:empty{display:none}:host>input:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>input:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .select-wrapper{position:relative;display:flex;align-items:center;overflow:hidden;background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--opacity, 1)))}:host .select-wrapper:has(button:focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host .select-placeholder{opacity:0.6}:host .text-wrapper{transition:opacity 150ms ease 0ms}:host button{position:absolute;inset:0;z-index:1;width:100%;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, transparent);background-color:transparent;color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));user-select:none;outline:none}:host svg{margin-inline-start:auto;transition:transform 150ms ease 0ms}:host(.select-expanded) .select-wrapper{box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)}:host(.select-expanded) .select-wrapper svg{transform:rotateX(180deg)}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost]) .select-wrapper:has(button:focus-visible){--opacity:1}:host(.select-expanded[color=ghost]) .select-wrapper{--opacity:1}:host([size=xs]) .select-wrapper{padding-inline-start:0.65rem;padding-inline-end:0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm]) .select-wrapper{padding-inline-start:0.75rem;padding-inline-end:0.85rem;height:2rem;font-size:0.875rem;line-height:2rem}:host([size=md]) .select-wrapper,:host(:not([size])) .select-wrapper{padding-inline-start:1rem;padding-inline-end:1.15rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=lg]) .select-wrapper{padding-inline-start:1.15rem;padding-inline-end:1.35rem;height:4rem;font-size:1.125rem;line-height:2}:host([disabled]) button{--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled]) button::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";
const PopSelectStyle0 = selectCss;

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
var _Select_instances, _Select_inputId, _Select_inheritedAttributes, _Select_popover, _Select_trigger, _Select_onFocus, _Select_onBlur, _Select_onClick, _Select_values_get, _Select_options_get, _Select_text_get, _Select_ariaLabel_get, _Select_errorText_get, _Select_renderSelectText, _Select_renderListbox;
const Select = /*@__PURE__*/ proxyCustomElement(class Select extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popDismiss = createEvent(this, "popDismiss", 7);
        this.popChange = createEvent(this, "popChange", 7);
        this.popFocus = createEvent(this, "popFocus", 7);
        this.popBlur = createEvent(this, "popBlur", 7);
        this.internals = this.attachInternals();
        _Select_instances.add(this);
        _Select_inputId.set(this, `pop-select-${selectIds++}`);
        _Select_inheritedAttributes.set(this, void 0);
        _Select_popover.set(this, void 0);
        _Select_trigger.set(this, void 0);
        _Select_onFocus.set(this, () => {
            this.popFocus.emit();
        });
        _Select_onBlur.set(this, () => {
            this.popBlur.emit();
        });
        _Select_onClick.set(this, async (ev) => {
            await this.open({
                ...ev,
                target: __classPrivateFieldGet(this, _Select_trigger, "f"),
            });
        });
        this.isExpanded = false;
        this.errorText = undefined;
        this.name = __classPrivateFieldGet(this, _Select_inputId, "f");
        this.placeholder = undefined;
        this.value = undefined;
        this.multiple = false;
        this.min = undefined;
        this.max = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.autoFocus = false;
        this.bordered = undefined;
        this.color = undefined;
        this.size = undefined;
        this.selectedText = undefined;
        this.helperText = undefined;
        this.notEnoughErrorText = undefined;
        this.tooManyErrorText = undefined;
        this.compare = undefined;
    }
    onValueChange(value) {
        this.errorText = __classPrivateFieldGet(this, _Select_instances, "a", _Select_errorText_get);
        if (this.errorText) {
            // No emit if the select has error.
            return;
        }
        this.internals.setFormValue(value, value);
        this.popChange.emit({ value });
    }
    formResetCallback() {
        this.value = null;
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Select_inheritedAttributes, inheritAttributes(this.host, ['aria-label']), "f");
        componentConfig.apply(this, 'pop-select', {
            multiple: false,
            required: false,
            disabled: false,
            bordered: false,
            size: config.get('defaultSize', 'md'),
        });
    }
    /**
     * Sets focus on the native `select` in `pop-select`. Use this method instead of the global
     * `select.focus()`.
     */
    async setFocus() {
        __classPrivateFieldGet(this, _Select_trigger, "f").focus();
    }
    async open(event) {
        if (this.disabled || this.isExpanded || __classPrivateFieldGet(this, _Select_popover, "f"))
            return;
        this.isExpanded = true;
        const selectedValue = this.value;
        const popover = await popoverController.create({
            component: 'pop-select-popover',
            componentProps: {
                value: __classPrivateFieldGet(this, _Select_instances, "a", _Select_values_get),
                required: this.required,
                multiple: this.multiple,
                color: this.color,
                size: this.size,
                options: __classPrivateFieldGet(this, _Select_instances, "a", _Select_options_get).map(option => {
                    const value = getOptionValue(option);
                    const clazz = Array.from(option.classList).filter(cls => cls !== 'hydrated');
                    return {
                        text: option.textContent || '',
                        value: value,
                        checked: isOptionSelected(selectedValue, value, this.compare),
                        disabled: option.disabled,
                        color: option.color,
                        size: option.size,
                        cssClass: [OPTION_CLASS, ...clazz],
                        handler: value => {
                            this.value = value;
                            if (!this.multiple) {
                                this.close();
                            }
                        },
                    };
                }),
            },
            size: this.size,
            dismissOnSelect: !this.multiple,
            animated: true,
            backdropDismiss: true,
            showBackdrop: false,
            keyboardClose: true,
            reference: event ? 'event' : 'trigger',
            alignment: 'center',
            event: event,
        });
        __classPrivateFieldSet(this, _Select_popover, popover, "f");
        popover.addEventListener('didDismiss', () => {
            __classPrivateFieldSet(this, _Select_popover, undefined, "f");
            this.isExpanded = false;
            this.popDismiss.emit();
            this.setFocus();
        });
        await popover.present();
        const indexOfSelected = __classPrivateFieldGet(this, _Select_instances, "a", _Select_options_get).map(o => o.value).indexOf(this.value);
        if (indexOfSelected === -1) {
            /**
             * If no value is set then focus the first enabled option.
             */
            const firstEnabledOption = popover.querySelector('pop-radio:not([disabled]), pop-checkbox:not([disabled])');
            if (firstEnabledOption) {
                firstEnabledOption.closest('pop-item')?.focus();
                /**
                 * Focus the option for the same reason as we do above.
                 */
                firstEnabledOption.focus();
            }
        }
        else {
            const selectedItem = popover.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
            if (selectedItem) {
                selectedItem.focus();
                const interactiveEl = selectedItem.querySelector('pop-radio, pop-checkbox');
                if (interactiveEl) {
                    interactiveEl.focus();
                }
            }
        }
        return popover;
    }
    async close() {
        if (this.disabled || !this.isExpanded)
            return;
        this.isExpanded = false;
        __classPrivateFieldGet(this, _Select_popover, "f").dismiss();
    }
    render() {
        const { host, helperText, errorText } = this;
        const inputId = __classPrivateFieldGet(this, _Select_inputId, "f");
        const hasError = !!errorText;
        const hasHelper = !!helperText;
        const hasBottomText = hasError || hasHelper;
        return (h(Host, { key: '2c79ebc1c8b1eca64b9d98176ffeafde1bbeb5e3', "aria-labelledby": inputId, "aria-hidden": this.disabled ? 'true' : null, class: {
                'select-expanded': this.isExpanded,
                'join-item': hostContext(host, 'pop-join'),
            } }, h("div", { key: '0af804b8692cbd50bf68db3a41fcad857bfa40ff', class: "label-text-wrapper" }, h("label", { key: '825b9107ff04e3898e61df2844ab95f1652fbfa1', htmlFor: inputId, part: "label" }, h("slot", { key: '59de60241d91f747d690e3a6f22e4cd0614ebc2f', name: "label" }))), h("div", { key: '1c72e78fb0aa2a78d960df188f0aff95b65c859d', class: "select-wrapper" }, h("slot", { key: '157e9dadd0f7c3dcf4e3b7eeb108308c47bb1d30', name: "start" }), h("div", { key: '76501c88f8f1215a5d222ba806fe8501ff670f99', class: "select-wrapper-inner" }, __classPrivateFieldGet(this, _Select_instances, "m", _Select_renderSelectText).call(this), __classPrivateFieldGet(this, _Select_instances, "m", _Select_renderListbox).call(this)), h("slot", { key: 'ea781faf98b3190182ec333bcf8a888fb609c771', name: "end" }), h(ChevronDown, { key: '141a775955c99996dd5d65196fde0fdde03ea710' })), h(Show, { key: 'f26205f0c2a9fc3b6cd9a7b9ee1314e13eb94017', when: hasBottomText }, h("div", { key: '5400bfbae04e716370dd65fd329fb3b3457641d5', class: "text-wrapper" }, h(Show, { key: 'a2982776b2b7a48370d71ef4953fc870f8d0f29e', when: hasError }, h("span", { key: '0a2f86984f6276314572551d7f0a9e7afcae0ed5', class: "error-text" }, errorText)), h(Show, { key: 'f09e245b501ecef0de6c89dcdaee3d5b58750043', when: hasHelper }, h("span", { key: 'ff7cf2744b5c454a36f214ebfe19c31eddc572b6', class: "helper-text" }, helperText))))));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return PopSelectStyle0; }
}, [65, "pop-select", {
        "name": [1],
        "placeholder": [1],
        "value": [1032],
        "multiple": [1540],
        "min": [1538],
        "max": [1538],
        "required": [1540],
        "disabled": [1540],
        "autoFocus": [1540, "auto-focus"],
        "bordered": [1540],
        "color": [1537],
        "size": [1537],
        "selectedText": [1, "selected-text"],
        "helperText": [1, "helper-text"],
        "notEnoughErrorText": [1, "not-enough-error-text"],
        "tooManyErrorText": [1, "too-many-error-text"],
        "compare": [1025],
        "isExpanded": [32],
        "errorText": [32],
        "setFocus": [64],
        "open": [64],
        "close": [64]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_Select_inputId = new WeakMap(), _Select_inheritedAttributes = new WeakMap(), _Select_popover = new WeakMap(), _Select_trigger = new WeakMap(), _Select_onFocus = new WeakMap(), _Select_onBlur = new WeakMap(), _Select_onClick = new WeakMap(), _Select_instances = new WeakSet(), _Select_values_get = function _Select_values_get() {
    const { value } = this;
    if (!value)
        return [];
    return Array.isArray(value) ? value : [value];
}, _Select_options_get = function _Select_options_get() {
    return Array.from(this.host.querySelectorAll('pop-select-option'));
}, _Select_text_get = function _Select_text_get() {
    const selectedText = this.selectedText;
    if (selectedText) {
        return selectedText;
    }
    const values = __classPrivateFieldGet(this, _Select_instances, "a", _Select_values_get);
    if (values.length === 0) {
        return '';
    }
    return values
        .map(value => {
        const selected = __classPrivateFieldGet(this, _Select_instances, "a", _Select_options_get).find(option => {
            const optionValue = option.value ?? (option.textContent || '');
            return compareOptions(value, optionValue, this.compare);
        });
        return selected ? selected.textContent : null;
    })
        .filter(Boolean)
        .join(', ');
}, _Select_ariaLabel_get = function _Select_ariaLabel_get() {
    const { placeholder } = this;
    const displayValue = __classPrivateFieldGet(this, _Select_instances, "a", _Select_text_get);
    const definedLabel = __classPrivateFieldGet(this, _Select_inheritedAttributes, "f")['aria-label'];
    /**
     * If developer has specified a placeholder
     * and there is nothing selected, the selectText
     * should have the placeholder value.
     */
    let renderedLabel = displayValue;
    if (renderedLabel === '' && placeholder !== undefined) {
        renderedLabel = placeholder;
    }
    /**
     * If there is a developer-defined label,
     * then we need to concatenate the developer label
     * string with the current current value.
     * The label for the control should be read
     * before the values of the control.
     */
    if (definedLabel !== undefined) {
        renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
}, _Select_errorText_get = function _Select_errorText_get() {
    if (!this.multiple)
        return '';
    const { length } = __classPrivateFieldGet(this, _Select_instances, "a", _Select_values_get);
    if (length === 0 && !this.required)
        return '';
    if (length < this.min)
        return this.notEnoughErrorText ?? '';
    if (length > this.max)
        return this.tooManyErrorText ?? '';
    return '';
}, _Select_renderSelectText = function _Select_renderSelectText() {
    const { placeholder } = this;
    const displayValue = __classPrivateFieldGet(this, _Select_instances, "a", _Select_text_get);
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
        selectText = placeholder;
        addPlaceholderClass = true;
    }
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    return (h("div", { "aria-hidden": "true", class: { 'select-placeholder': addPlaceholderClass }, part: textPart }, selectText));
}, _Select_renderListbox = function _Select_renderListbox() {
    const { disabled, isExpanded } = this;
    const inputId = __classPrivateFieldGet(this, _Select_inputId, "f");
    return (h("button", { disabled: disabled, id: inputId, "aria-label": __classPrivateFieldGet(this, _Select_instances, "a", _Select_ariaLabel_get), "aria-haspopup": "dialog", "aria-expanded": `${isExpanded}`, onClick: __classPrivateFieldGet(this, _Select_onClick, "f"), onFocus: __classPrivateFieldGet(this, _Select_onFocus, "f"), onBlur: __classPrivateFieldGet(this, _Select_onBlur, "f"), ref: ref => (__classPrivateFieldSet(this, _Select_trigger, ref, "f")) }));
};
const getOptionValue = (el) => {
    const value = el.value;
    return value === undefined ? el.textContent || '' : value;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-select"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Select);
            }
            break;
    } });
}

const PopSelect = Select;
const defineCustomElement = defineCustomElement$1;

export { PopSelect, defineCustomElement };

//# sourceMappingURL=pop-select.js.map