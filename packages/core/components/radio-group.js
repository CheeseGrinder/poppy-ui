import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig, a as config } from './config.js';

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RadioGroup_instances, _RadioGroup_inputId, _RadioGroup_applyColor, _RadioGroup_applySize, _RadioGroup_applyCheck, _RadioGroup_radios_get, _RadioGroup_onClick;
let radioGroupIds = 0;
const RadioGroup = /*@__PURE__*/ proxyCustomElement(class RadioGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.popChange = createEvent(this, "popChange", 7);
        this.popValueChange = createEvent(this, "popValueChange", 7);
        this.internals = this.attachInternals();
        _RadioGroup_instances.add(this);
        _RadioGroup_inputId.set(this, `ion-rg-${radioGroupIds++}`);
        _RadioGroup_onClick.set(this, (ev) => {
            ev.preventDefault();
            const target = ev.target;
            const radio = target.closest('pop-radio');
            if (!radio || radio.disabled)
                return;
            const currentValue = this.value;
            const newValue = radio.value;
            this.value = currentValue !== newValue ? newValue : this.allowEmpty ? undefined : newValue;
        });
        this.name = __classPrivateFieldGet(this, _RadioGroup_inputId, "f");
        this.value = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.allowEmpty = undefined;
        this.compare = undefined;
        this.color = undefined;
        this.size = undefined;
    }
    onValueChange(value) {
        this.internals.setFormValue(value, value);
        this.popValueChange.emit({
            value: value,
        });
        this.popChange.emit({
            value,
        });
    }
    formResetCallback() {
        this.value = undefined;
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-radio-group', {
            required: false,
            disabled: false,
            allowEmpty: false,
            size: config.get('defaultSize', 'md'),
        });
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _RadioGroup_instances, "a", _RadioGroup_radios_get).forEach(radio => {
            radio.name = this.name;
            if (this.required)
                radio.required = this.required;
            if (this.disabled)
                radio.disabled = this.disabled;
        });
        __classPrivateFieldGet(this, _RadioGroup_instances, "m", _RadioGroup_applyColor).call(this);
        __classPrivateFieldGet(this, _RadioGroup_instances, "m", _RadioGroup_applySize).call(this);
        __classPrivateFieldGet(this, _RadioGroup_instances, "m", _RadioGroup_applyCheck).call(this);
    }
    render() {
        return (h(Host, { key: '9bf828247e8c3fa9651ad5ed1aa3c9b63404a120', onClick: __classPrivateFieldGet(this, _RadioGroup_onClick, "f") }, h("slot", { key: '5f591090631d41395ca2ef9a862e6103a0e205a1' })));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
}, [68, "pop-radio-group", {
        "name": [1],
        "value": [1032],
        "required": [1540],
        "disabled": [1540],
        "allowEmpty": [1028, "allow-empty"],
        "compare": [1025],
        "color": [1537],
        "size": [1537]
    }, undefined, {
        "value": ["onValueChange"]
    }]);
_RadioGroup_inputId = new WeakMap(), _RadioGroup_onClick = new WeakMap(), _RadioGroup_instances = new WeakSet(), _RadioGroup_applyColor = function _RadioGroup_applyColor() {
    if (!this.color)
        return;
    __classPrivateFieldGet(this, _RadioGroup_instances, "a", _RadioGroup_radios_get).filter(radio => !radio.color).forEach(radio => (radio.color = this.color));
}, _RadioGroup_applySize = function _RadioGroup_applySize() {
    if (!this.size)
        return;
    __classPrivateFieldGet(this, _RadioGroup_instances, "a", _RadioGroup_radios_get).filter(radio => !radio.size).forEach(radio => (radio.size = this.size));
}, _RadioGroup_applyCheck = function _RadioGroup_applyCheck() {
    if (this.value) {
        this.popValueChange.emit({
            value: this.value,
        });
        return;
    }
    if (this.allowEmpty)
        return;
    const radios = __classPrivateFieldGet(this, _RadioGroup_instances, "a", _RadioGroup_radios_get);
    const radio = radios.find(radio => !radio.disabled);
    if (!radio)
        return;
    radio.checked = true;
}, _RadioGroup_radios_get = function _RadioGroup_radios_get() {
    return Array.from(this.host.querySelectorAll('pop-radio'));
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-radio-group"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RadioGroup);
            }
            break;
    } });
}

export { RadioGroup as R, defineCustomElement as d };

//# sourceMappingURL=radio-group.js.map