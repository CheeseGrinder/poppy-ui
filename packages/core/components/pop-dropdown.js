import { Build, getElement, proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';
import { S as Show } from './Show.js';

// Code from https://github.com/jarrvis/stencil-click-outside
const ClickOutsideOptionsDefaults = {
    triggerEvents: 'click',
    exclude: '',
};
/**
 * Call this function as soon as the click outside of annotated method's host is done.
 */
function ClickOutside(opt = ClickOutsideOptionsDefaults) {
    return (proto, methodName) => {
        // this is to resolve the 'compiler optimization issue':
        // lifecycle events not being called when not explicitly declared in at least one of components from bundle
        Build.connectedCallback = true;
        Build.disconnectedCallback = true;
        const { connectedCallback, disconnectedCallback } = proto;
        proto.connectedCallback = function () {
            const host = getElement(this);
            const method = this[methodName];
            registerClickOutside(this, host, method, opt);
            return connectedCallback?.call(this);
        };
        proto.disconnectedCallback = function () {
            const host = getElement(this);
            const method = this[methodName];
            removeClickOutside(this, host, method, opt);
            return disconnectedCallback?.call(this);
        };
    };
}
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 */
function registerClickOutside(component, element, callback, opt = ClickOutsideOptionsDefaults) {
    const excludedNodes = getExcludedNodes(opt);
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.addEventListener(triggerEvent, (e) => {
            initClickOutside(e, component, element, callback, excludedNodes);
        }, false);
    });
}
/**
 * Remove click outside callback function for HTMLElement.
 */
function removeClickOutside(component, element, callback, opt = ClickOutsideOptionsDefaults) {
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.removeEventListener(triggerEvent, (e) => {
            initClickOutside(e, component, element, callback);
        }, false);
    });
}
function initClickOutside(event, component, element, callback, excludedNodes) {
    const target = event.target;
    if (!element.contains(target) && !isExcluded(target, excludedNodes)) {
        callback.call(component);
    }
}
function getTriggerEvents(opt) {
    if (opt.triggerEvents) {
        return opt.triggerEvents.split(',').map(e => e.trim());
    }
    return ['click'];
}
function getExcludedNodes(opt) {
    if (opt.exclude) {
        try {
            return Array.from(document.querySelectorAll(opt.exclude));
        }
        catch (err) {
            console.warn(`@ClickOutside: Exclude: '${opt.exclude}' will not be evaluated. Check your exclude selector syntax.`, err);
        }
    }
    return;
}
function isExcluded(target, excudedNodes) {
    if (target && excudedNodes) {
        for (let excludedNode of excudedNodes) {
            if (excludedNode.contains(target)) {
                return true;
            }
        }
    }
    return false;
}

const dropdownCss = ":host{--border-radius:var(--radius-md, 8px);--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));--shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)}:host .dropdown{position:relative;display:grid;width:100%}:host .dropdown-trigger{display:inline-block;grid-column-start:1;grid-row-start:1}:host .dropdown-content{position:absolute;min-height:2rem;border:1px solid var(--border-color);border-radius:var(--border-radius);color:var(--color);background-color:var(--background);box-shadow:var(--shadow);animation-name:present;animation-duration:200ms}:host(:not([open])) .dropdown-content{opacity:0;pointer-events:none}:host([open]) .dropdown-content{z-index:100;opacity:1}:host([side=bottom][align=end]) .dropdown-content{inset-inline-end:0}:host([side=top]) .dropdown-content{top:auto;bottom:100%}:host([side=top][align=end]) .dropdown-content{inset-inline-end:0}:host([side=left]) .dropdown-content{top:0;bottom:auto;inset-inline-end:100%}:host([side=left][align=end]) .dropdown-content{top:auto;bottom:0}:host([side=right]) .dropdown-content{top:0;bottom:auto;inset-inline-start:100%}:host([side=right][align=end]) .dropdown-content{top:auto;bottom:0}@keyframes present{from{opacity:0.6;scale:0.95}to{opacity:1;scale:1}}";
const PopDropdownStyle0 = dropdownCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var _Dropdown_dropdown, _Dropdown_debounceTimer, _Dropdown_onClick, _Dropdown_onHover, _Dropdown_onBlur, _Dropdown_onContext;
const Dropdown = /*@__PURE__*/ proxyCustomElement(class Dropdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.didPresent = createEvent(this, "didPresent", 7);
        this.didDismiss = createEvent(this, "didDismiss", 7);
        _Dropdown_dropdown.set(this, void 0);
        _Dropdown_debounceTimer.set(this, void 0);
        _Dropdown_onClick.set(this, () => {
            if (this.triggerAction === 'click') {
                this.present();
            }
        });
        _Dropdown_onHover.set(this, () => {
            if (this.triggerAction === 'hover') {
                clearTimeout(__classPrivateFieldGet(this, _Dropdown_debounceTimer, "f"));
                this.present();
            }
        });
        _Dropdown_onBlur.set(this, () => {
            if (this.triggerAction === 'hover') {
                clearTimeout(__classPrivateFieldGet(this, _Dropdown_debounceTimer, "f"));
                __classPrivateFieldSet(this, _Dropdown_debounceTimer, setTimeout(() => {
                    this.dismiss();
                }, this.debounce || 500), "f");
            }
        });
        _Dropdown_onContext.set(this, (ev) => {
            if (this.triggerAction === 'context-menu') {
                ev.preventDefault();
                this.present();
            }
        });
        this.side = undefined;
        this.align = undefined;
        this.open = undefined;
        this.triggerAction = undefined;
        this.debounce = 100;
        this.showBackdrop = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-dropdown', {
            side: 'bottom',
            align: 'start',
            open: false,
            triggerAction: 'click',
            debounce: 100,
            showBackdrop: false,
        });
    }
    componentDidRender() {
        const { open } = this;
        if (open) {
            __classPrivateFieldGet(this, _Dropdown_dropdown, "f").open = true;
        }
    }
    async present() {
        const { open } = this;
        if (open)
            return false;
        this.open = true;
        return true;
    }
    async dismiss() {
        const { open } = this;
        if (!open)
            return false;
        this.open = false;
        return true;
    }
    onClickOutside() {
        if (!this.open)
            return;
        this.dismiss();
    }
    render() {
        return (h(Host, { key: '4213b72803d6f25fcc0b0d54f76beca3dc6a82ae' }, h("details", { key: '2c39fd69991ce8fb30d5bb4b048550b5b412826c', part: "dropdown", class: "dropdown", onMouseEnter: __classPrivateFieldGet(this, _Dropdown_onHover, "f"), onMouseLeave: __classPrivateFieldGet(this, _Dropdown_onBlur, "f"), ref: (el) => (__classPrivateFieldSet(this, _Dropdown_dropdown, el, "f")) }, h("summary", { key: 'bc51fbbc265eb564b00d8b64acea4141db3e43fb', part: "trigger", class: "dropdown-trigger", onClick: __classPrivateFieldGet(this, _Dropdown_onClick, "f"), onContextMenu: __classPrivateFieldGet(this, _Dropdown_onContext, "f") }, h("slot", { key: '54c6299807b94400ec2e11d2f1904752bbc5eac1', name: "trigger" })), h("div", { key: 'a91244f6a422a8d90206899975105c23d4199b96', part: "content", class: "dropdown-content" }, h("slot", { key: '98f8f7f2a125e6d905587e02cd604d6f6353735e' })), h(Show, { key: 'bcf7baa841c4c24a698ef477f53ba6dbe4a739ee', when: this.showBackdrop }, h("div", { key: '8a98a37f490e9ef9d988760565ba2522e7010b6a', part: "backdrop", class: "dropdown-backdrop", onClick: () => this.dismiss() })))));
    }
    get host() { return this; }
    static get style() { return PopDropdownStyle0; }
}, [1, "pop-dropdown", {
        "side": [1537],
        "align": [1537],
        "open": [1540],
        "triggerAction": [1025, "trigger-action"],
        "debounce": [1026],
        "showBackdrop": [1540, "show-backdrop"],
        "present": [64],
        "dismiss": [64]
    }]);
_Dropdown_dropdown = new WeakMap(), _Dropdown_debounceTimer = new WeakMap(), _Dropdown_onClick = new WeakMap(), _Dropdown_onHover = new WeakMap(), _Dropdown_onBlur = new WeakMap(), _Dropdown_onContext = new WeakMap();
__decorate([
    ClickOutside()
], Dropdown.prototype, "onClickOutside", null);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-dropdown"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Dropdown);
            }
            break;
    } });
}

const PopDropdown = Dropdown;
const defineCustomElement = defineCustomElement$1;

export { PopDropdown, defineCustomElement };

//# sourceMappingURL=pop-dropdown.js.map