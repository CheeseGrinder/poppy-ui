import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './checkbox.js';
import { d as defineCustomElement$5 } from './item.js';
import { d as defineCustomElement$4 } from './list.js';
import { d as defineCustomElement$3 } from './radio.js';
import { d as defineCustomElement$2 } from './radio-group.js';

const selectPopoverCss = "";
const PopSelectPopoverStyle0 = selectPopoverCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SelectPopover_instances, _SelectPopover_findOptionFromEvent, _SelectPopover_getValues, _SelectPopover_setChecked, _SelectPopover_renderRadioOptions, _SelectPopover_renderCheckboxOptions, _SelectPopover_renderOptions;
const SelectPopover = /*@__PURE__*/ proxyCustomElement(class SelectPopover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        _SelectPopover_instances.add(this);
        this.required = undefined;
        this.multiple = undefined;
        this.color = undefined;
        this.size = undefined;
        this.options = [];
    }
    render() {
        return (h(Host, { key: 'd2d12ba0f1ce7acc17fcc8959b5b265b9d3b74d9' }, h("pop-list", { key: 'aeb5151b8c17a294856d6857fb60650a766778b0', size: this.size }, __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_renderOptions).call(this))));
    }
    static get style() { return PopSelectPopoverStyle0; }
}, [0, "pop-select-popover", {
        "required": [1028],
        "multiple": [1028],
        "color": [1025],
        "size": [1025],
        "options": [16]
    }]);
_SelectPopover_instances = new WeakSet(), _SelectPopover_findOptionFromEvent = function _SelectPopover_findOptionFromEvent(ev) {
    const { options } = this;
    return options.find(o => o.value === ev.target.value);
}, _SelectPopover_getValues = function _SelectPopover_getValues(ev) {
    const { multiple, options } = this;
    if (multiple) {
        // this is a popover with checkboxes (multiple value select)
        // return an array of all the checked values
        return options.filter(o => o.checked).map(o => o.value);
    }
    // this is a popover with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_findOptionFromEvent).call(this, ev);
    return option ? option.value : undefined;
}, _SelectPopover_setChecked = function _SelectPopover_setChecked(ev) {
    const { multiple } = this;
    const option = __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_findOptionFromEvent).call(this, ev);
    if (multiple && option) {
        option.checked = ev.detail.checked;
    }
}, _SelectPopover_renderRadioOptions = function _SelectPopover_renderRadioOptions() {
    const { options, required, color, size } = this;
    const selected = options.filter(o => o.checked).map(o => o.value)[0];
    return (h("pop-radio-group", { value: selected, color: color, size: size, allowEmpty: !required, onPopChange: ev => {
            if (!required && ev.detail.value === undefined) {
                options[0].handler(undefined);
                return;
            }
            const option = __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_findOptionFromEvent).call(this, ev);
            option?.handler(__classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_getValues).call(this, ev));
        } }, options.map(option => {
        const clazz = typeof option.cssClass === 'string'
            ? option.cssClass
            : Object.fromEntries(option.cssClass.map(cls => [cls, true]));
        return (h("pop-item", null, h("pop-radio", { value: option.value, disabled: option.disabled, color: option.color, size: option.size, class: clazz }, option.text)));
    })));
}, _SelectPopover_renderCheckboxOptions = function _SelectPopover_renderCheckboxOptions() {
    const { options } = this;
    return (h(Fragment, null, options.map(option => {
        const clazz = typeof option.cssClass === 'string'
            ? option.cssClass
            : Object.fromEntries(option.cssClass.map(cls => [cls, true]));
        return (h("pop-item", null, h("pop-checkbox", { value: option.value, color: this.color, size: this.size, checked: option.checked, disabled: option.disabled, class: clazz, onPopChange: ev => {
                __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_setChecked).call(this, ev);
                option.handler(__classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_getValues).call(this, ev));
            } }, option.text)));
    })));
}, _SelectPopover_renderOptions = function _SelectPopover_renderOptions() {
    const { multiple } = this;
    if (multiple)
        return __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_renderCheckboxOptions).call(this);
    return __classPrivateFieldGet(this, _SelectPopover_instances, "m", _SelectPopover_renderRadioOptions).call(this);
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-select-popover", "pop-checkbox", "pop-item", "pop-list", "pop-radio", "pop-radio-group"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-select-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectPopover);
            }
            break;
        case "pop-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "pop-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "pop-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "pop-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "pop-radio-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const PopSelectPopover = SelectPopover;
const defineCustomElement = defineCustomElement$1;

export { PopSelectPopover, defineCustomElement };

//# sourceMappingURL=pop-select-popover.js.map