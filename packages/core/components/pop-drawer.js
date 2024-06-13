import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';
import { i as isRTL } from './dir.js';
import { T as TriggerController } from './trigger.js';

const drawerCss = ":host{--backdrop-background:#0006;--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));position:relative;display:grid;width:100%;height:100%;max-width:100vw}:host .drawer-content{grid-row-start:1;min-width:0px}:host .drawer-side{position:fixed;z-index:1000;top:0px;inset-inline-start:0px;overflow-y:auto;overscroll-behavior:contain;grid-row-start:1;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));grid-template-rows:repeat(1, minmax(0, 1fr));align-items:flex-start;width:100%;height:100dvh;pointer-events:none}:host .drawer-side-inner{z-index:1;grid-column-start:1;grid-row-start:1;height:100%;background-color:var(--background);color:var(--color);will-change:transform;transition-property:transform;transition-timing-function:ease-out;transition-duration:300ms}:host .drawer-backdrop{position:sticky;top:0px;grid-column-start:1;grid-row-start:1;place-self:stretch;background-color:transparent;cursor:pointer;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:ease-out;transition-duration:200ms}:host([side=start]){grid-auto-columns:max-content auto}:host([side=start]) .drawer-content{grid-column-start:2}:host([side=start]) .drawer-side{inset-inline-start:0px;grid-column-start:1;justify-items:start}:host([side=start]) .drawer-side-inner{transform:translateX(-100%)}:host([side=start].drawer-rtl) .drawer-side-inner{transform:translateX(100%)}:host([side=end]){grid-auto-columns:auto max-content}:host([side=end]) .drawer-content{grid-column-start:1;overflow:hidden}:host([side=end]) .drawer-side{grid-column-start:2;justify-items:end;overflow-x:hidden}:host([side=end]) .drawer-side-inner{transform:translateX(100%)}:host([side=end].drawer-rtl) .drawer-side-inner{transform:translateX(-100%)}:host(.drawer[open]) .drawer-side{visibility:visible;pointer-events:auto}:host(.drawer[open]) .drawer-side-inner{transform:translateX(0%)}:host(.drawer[open]) .drawer-backdrop{background-color:var(--background-backdrop)}";
const PopDrawerStyle0 = drawerCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Drawer_triggerController, _Drawer_onClick;
const Drawer = /*@__PURE__*/ proxyCustomElement(class Drawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _Drawer_triggerController.set(this, TriggerController.create());
        _Drawer_onClick.set(this, () => {
            this.dismiss();
        });
        this.trigger = undefined;
        this.triggerAction = undefined;
        this.side = undefined;
        this.open = undefined;
    }
    onTriggerChange(trigger) {
        if (trigger) {
            __classPrivateFieldGet(this, _Drawer_triggerController, "f").addListener(this.host, trigger, this.triggerAction);
        }
    }
    onTriggerActionChange(triggerAction) {
        __classPrivateFieldGet(this, _Drawer_triggerController, "f").addListener(this.host, this.trigger, triggerAction);
    }
    connectedCallback() {
        const { trigger } = this;
        this.onTriggerChange(trigger);
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-drawer', {
            open: false,
            side: 'start',
            triggerAction: 'click',
        });
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
    async toggle() {
        this.open = !this.open;
    }
    render() {
        const { host } = this;
        return (h(Host, { key: '3007e91ead03bc4db41686c0ca302fca164fe62e', class: {
                drawer: true,
                'drawer-rtl': isRTL(host),
            } }, h("div", { key: 'c97442426a78c1324fa977112fa6738f57b8bf0f', class: "drawer-content" }, h("slot", { key: 'c9b1faf176d6920fc31c7a8d90e6ad6710463c9f' })), h("aside", { key: 'cefd63719858a9208c8549321da6d8acacfcfd24', class: "drawer-side" }, h("div", { key: '137274f4c71bcdb4f68a885a192e00bce566d3d0', part: "backdrop", class: "drawer-backdrop", onClick: __classPrivateFieldGet(this, _Drawer_onClick, "f") }), h("div", { key: 'cdec52a1084ff6e64a163a3600965199f0bd731d', part: "side", class: "drawer-side-inner" }, h("slot", { key: 'ccdc0eaead3bd7a0d1f73f092cbfd87791236f1a', name: "side" })))));
    }
    get host() { return this; }
    static get watchers() { return {
        "trigger": ["onTriggerChange"],
        "triggerAction": ["onTriggerActionChange"]
    }; }
    static get style() { return PopDrawerStyle0; }
}, [1, "pop-drawer", {
        "trigger": [1],
        "triggerAction": [1, "trigger-action"],
        "side": [1537],
        "open": [1540],
        "present": [64],
        "dismiss": [64],
        "toggle": [64]
    }, undefined, {
        "trigger": ["onTriggerChange"],
        "triggerAction": ["onTriggerActionChange"]
    }]);
_Drawer_triggerController = new WeakMap(), _Drawer_onClick = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Drawer);
            }
            break;
    } });
}

const PopDrawer = Drawer;
const defineCustomElement = defineCustomElement$1;

export { PopDrawer, defineCustomElement };

//# sourceMappingURL=pop-drawer.js.map