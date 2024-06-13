import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';
import { r as raf, c as componentOnReady } from './helpers.js';
import { T as TriggerController } from './trigger.js';

const popoverCss = ":host .popover{box-sizing:border-box;position:absolute;margin:0;padding:0;border:none;color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));background:transparent}:host .popover:not([popover],[open]){opacity:0}:host .popover::backdrop{background-color:rgba(0, 0, 0, 0.125);transition:opacity 15s ease 0ms}:host .popover-content{min-height:2rem;border:solid;border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)));box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);animation-name:present;animation-duration:200ms}@keyframes present{from{opacity:0.6;scale:0.95}to{opacity:1;scale:1}}";
const PopPopoverStyle0 = popoverCss;

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
var _Popover_instances, _Popover_dialog, _Popover_handler, _Popover_triggerController, _Popover_didDismiss, _Popover_setupListener, _Popover_present;
const Popover = /*@__PURE__*/ proxyCustomElement(class Popover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.willPresent = createEvent(this, "willPresent", 7);
        this.didPresent = createEvent(this, "didPresent", 7);
        this.willDismiss = createEvent(this, "willDismiss", 7);
        this.didDismiss = createEvent(this, "didDismiss", 7);
        _Popover_instances.add(this);
        _Popover_dialog.set(this, void 0);
        _Popover_handler.set(this, void 0);
        _Popover_triggerController.set(this, TriggerController.create());
        this.open = undefined;
        this.animated = true;
        this.showBackdrop = false;
        this.backdropDismiss = false;
        this.event = undefined;
        this.trigger = undefined;
        this.triggerAction = undefined;
        this.component = undefined;
        this.componentProps = undefined;
    }
    onOpenChange(isOpen) {
        if (isOpen) {
            this.present();
        }
        else {
            this.dismiss(null);
        }
    }
    onTriggerChange(trigger) {
        if (trigger) {
            __classPrivateFieldGet(this, _Popover_triggerController, "f").addListener(this.host, trigger, this.triggerAction);
        }
    }
    onTriggerActionChange(triggerAction) {
        __classPrivateFieldGet(this, _Popover_triggerController, "f").addListener(this.host, this.trigger, triggerAction);
    }
    connectedCallback() {
        const { trigger } = this;
        this.onTriggerChange(trigger);
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-popover', {
            open: false,
            animated: false,
            showBackdrop: false,
            backdropDismiss: false,
            triggerAction: 'click',
        });
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _Popover_instances, "m", _Popover_setupListener).call(this);
        /**
         * If popover was rendered with open="true"
         * then we should open popover immediately.
         */
        if (this.open) {
            raf(() => this.present());
        }
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _Popover_triggerController, "f").removeListener();
        __classPrivateFieldGet(this, _Popover_dialog, "f").removeEventListener('beforetoggle', __classPrivateFieldGet(this, _Popover_handler, "f"));
        __classPrivateFieldGet(this, _Popover_instances, "m", _Popover_didDismiss).call(this);
    }
    async present() {
        const { open, component, componentProps, host } = this;
        if (open) {
            return false;
        }
        this.willPresent.emit();
        const el = typeof component === 'string' ? host.ownerDocument?.createElement(component) : component;
        // if (cssClasses) {
        //   cssClasses.forEach((c) => el.classList.add(c));
        // }
        if (componentProps) {
            Object.assign(el, componentProps);
        }
        host.appendChild(el);
        await new Promise(resolve => componentOnReady(el, resolve));
        __classPrivateFieldGet(this, _Popover_instances, "m", _Popover_present).call(this);
        this.didPresent.emit();
        return true;
    }
    async dismiss(data) {
        const { open, backdropDismiss } = this;
        if (!open)
            return false;
        this.willDismiss.emit();
        backdropDismiss ? __classPrivateFieldGet(this, _Popover_dialog, "f").hidePopover() : __classPrivateFieldGet(this, _Popover_dialog, "f").close(data);
        __classPrivateFieldGet(this, _Popover_instances, "m", _Popover_didDismiss).call(this);
        return true;
    }
    render() {
        const { backdropDismiss } = this;
        return (h(Host, { key: 'e09a34c3cb56d7ad0a03c3e79dd003e66dfb784b', "aria-modal": "true" }, h("dialog", { key: '2fd5f313591e11e4e4d2f4a1782b9774f16e33e8', popover: backdropDismiss ? '' : null, class: "popover", ref: el => (__classPrivateFieldSet(this, _Popover_dialog, el, "f")) }, h("div", { key: 'c20f4cdcde6ca5314073cfd773e9e7bd4d959cc5', part: "content", class: "popover-content" }, h("slot", { key: 'a400c0cfd154d2a9e516e695b4c5780527c51ea2' })))));
    }
    get host() { return this; }
    static get watchers() { return {
        "open": ["onOpenChange"],
        "trigger": ["onTriggerChange"],
        "triggerAction": ["onTriggerActionChange"]
    }; }
    static get style() { return PopPopoverStyle0; }
}, [1, "pop-popover", {
        "open": [1540],
        "animated": [1540],
        "showBackdrop": [1540, "show-backdrop"],
        "backdropDismiss": [1540, "backdrop-dismiss"],
        "event": [16],
        "trigger": [1],
        "triggerAction": [1025, "trigger-action"],
        "component": [1025],
        "componentProps": [1040],
        "present": [64],
        "dismiss": [64]
    }, undefined, {
        "open": ["onOpenChange"],
        "trigger": ["onTriggerChange"],
        "triggerAction": ["onTriggerActionChange"]
    }]);
_Popover_dialog = new WeakMap(), _Popover_handler = new WeakMap(), _Popover_triggerController = new WeakMap(), _Popover_instances = new WeakSet(), _Popover_didDismiss = function _Popover_didDismiss() {
    if (this.host.isConnected)
        return;
    this.host.dispatchEvent(new CustomEvent('didDismiss', {
        detail: {},
    }));
}, _Popover_setupListener = function _Popover_setupListener() {
    __classPrivateFieldSet(this, _Popover_handler, (event) => {
        if (event.oldState === 'open') {
            this.willDismiss.emit();
            this.host.remove();
        }
    }, "f");
    __classPrivateFieldGet(this, _Popover_dialog, "f").addEventListener('beforetoggle', __classPrivateFieldGet(this, _Popover_handler, "f"));
}, _Popover_present = function _Popover_present() {
    const { backdropDismiss, event } = this;
    const target = event.target;
    const rect = target.getBoundingClientRect();
    __classPrivateFieldGet(this, _Popover_dialog, "f").style.setProperty('top', `${rect.bottom}px`);
    __classPrivateFieldGet(this, _Popover_dialog, "f").style.setProperty('left', `${rect.left}px`);
    __classPrivateFieldGet(this, _Popover_dialog, "f").style.setProperty('width', `${rect.width}px`);
    backdropDismiss ? __classPrivateFieldGet(this, _Popover_dialog, "f").showPopover() : __classPrivateFieldGet(this, _Popover_dialog, "f").showModal();
    __classPrivateFieldGet(this, _Popover_dialog, "f").focus();
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Popover);
            }
            break;
    } });
}

const PopPopover = Popover;
const defineCustomElement = defineCustomElement$1;

export { PopPopover, defineCustomElement };

//# sourceMappingURL=pop-popover.js.map