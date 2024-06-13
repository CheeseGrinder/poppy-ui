import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AccordionGroup_instances, _AccordionGroup_applyOpen, _AccordionGroup_accordions_get, _AccordionGroup_onClick;
const AccordionGroup = /*@__PURE__*/ proxyCustomElement(class AccordionGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popChange = createEvent(this, "popChange", 7);
        this.popActiveChange = createEvent(this, "popActiveChange", 7);
        _AccordionGroup_instances.add(this);
        _AccordionGroup_onClick.set(this, (ev) => {
            ev.preventDefault();
            const accordion = ev.target;
            if (!accordion || accordion.disabled || accordion.readonly)
                return;
            const current = this.active;
            const newActive = accordion.name;
            if (this.multiple) {
                this.active =
                    current === undefined
                        ? [newActive]
                        : this.active.includes(newActive)
                            ? [...this.active].filter(a => a !== newActive)
                            : [newActive, ...this.active];
            }
            else {
                this.active = current !== newActive ? newActive : null;
            }
        });
        this.readonly = undefined;
        this.disabled = undefined;
        this.multiple = undefined;
        this.active = undefined;
    }
    onActiveChange(value) {
        this.popActiveChange.emit({
            value,
        });
        this.popChange.emit({
            value,
        });
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-accordion-group', {
            readonly: false,
            disabled: false,
            multiple: false,
        });
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _AccordionGroup_instances, "a", _AccordionGroup_accordions_get).forEach(accordion => {
            if (this.readonly)
                accordion.readonly = this.readonly;
            if (this.disabled)
                accordion.disabled = this.disabled;
        });
        __classPrivateFieldGet(this, _AccordionGroup_instances, "m", _AccordionGroup_applyOpen).call(this);
    }
    render() {
        return (h(Host, { key: '8bcccc41a45a7b6d4826de998d7bea63c630e97b', onClick: __classPrivateFieldGet(this, _AccordionGroup_onClick, "f") }, h("slot", { key: '56146ac74281d0aaa8b5e51f6c8a579964a49e97' })));
    }
    get host() { return this; }
    static get watchers() { return {
        "active": ["onActiveChange"]
    }; }
}, [1, "pop-accordion-group", {
        "readonly": [1540],
        "disabled": [1540],
        "multiple": [1540],
        "active": [1025]
    }, undefined, {
        "active": ["onActiveChange"]
    }]);
_AccordionGroup_onClick = new WeakMap(), _AccordionGroup_instances = new WeakSet(), _AccordionGroup_applyOpen = function _AccordionGroup_applyOpen() {
    if (!this.active)
        return;
    this.popActiveChange.emit({
        value: this.active,
    });
}, _AccordionGroup_accordions_get = function _AccordionGroup_accordions_get() {
    return Array.from(this.host.querySelectorAll('pop-accordion'));
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-accordion-group"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-accordion-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AccordionGroup);
            }
            break;
    } });
}

const PopAccordionGroup = AccordionGroup;
const defineCustomElement = defineCustomElement$1;

export { PopAccordionGroup, defineCustomElement };

//# sourceMappingURL=pop-accordion-group.js.map