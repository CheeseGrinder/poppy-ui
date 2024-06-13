import { r, h as t, H as e, g as a } from "./p-e8f36a8b.js";

import { c as s } from "./p-da5609ce.js";

import { i } from "./p-e525cd6a.js";

import { T as o } from "./p-31ba1818.js";

const n = ":host{--backdrop-background:#0006;--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));position:relative;display:grid;width:100%;height:100%;max-width:100vw}:host .drawer-content{grid-row-start:1;min-width:0px}:host .drawer-side{position:fixed;z-index:1000;top:0px;inset-inline-start:0px;overflow-y:auto;overscroll-behavior:contain;grid-row-start:1;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));grid-template-rows:repeat(1, minmax(0, 1fr));align-items:flex-start;width:100%;height:100dvh;pointer-events:none}:host .drawer-side-inner{z-index:1;grid-column-start:1;grid-row-start:1;height:100%;background-color:var(--background);color:var(--color);will-change:transform;transition-property:transform;transition-timing-function:ease-out;transition-duration:300ms}:host .drawer-backdrop{position:sticky;top:0px;grid-column-start:1;grid-row-start:1;place-self:stretch;background-color:transparent;cursor:pointer;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:ease-out;transition-duration:200ms}:host([side=start]){grid-auto-columns:max-content auto}:host([side=start]) .drawer-content{grid-column-start:2}:host([side=start]) .drawer-side{inset-inline-start:0px;grid-column-start:1;justify-items:start}:host([side=start]) .drawer-side-inner{transform:translateX(-100%)}:host([side=start].drawer-rtl) .drawer-side-inner{transform:translateX(100%)}:host([side=end]){grid-auto-columns:auto max-content}:host([side=end]) .drawer-content{grid-column-start:1;overflow:hidden}:host([side=end]) .drawer-side{grid-column-start:2;justify-items:end;overflow-x:hidden}:host([side=end]) .drawer-side-inner{transform:translateX(100%)}:host([side=end].drawer-rtl) .drawer-side-inner{transform:translateX(-100%)}:host(.drawer[open]) .drawer-side{visibility:visible;pointer-events:auto}:host(.drawer[open]) .drawer-side-inner{transform:translateX(0%)}:host(.drawer[open]) .drawer-backdrop{background-color:var(--background-backdrop)}";

const d = n;

var c = undefined && undefined.__classPrivateFieldGet || function(r, t, e, a) {
  if (e === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? r !== t || !a : !t.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? a : e === "a" ? a.call(r) : a ? a.value : t.get(r);
};

var h, l;

const f = class {
  constructor(t) {
    r(this, t);
    h.set(this, o.create());
    l.set(this, (() => {
      this.dismiss();
    }));
    this.trigger = undefined;
    this.triggerAction = undefined;
    this.side = undefined;
    this.open = undefined;
  }
  onTriggerChange(r) {
    if (r) {
      c(this, h, "f").addListener(this.host, r, this.triggerAction);
    }
  }
  onTriggerActionChange(r) {
    c(this, h, "f").addListener(this.host, this.trigger, r);
  }
  connectedCallback() {
    const {trigger: r} = this;
    this.onTriggerChange(r);
  }
  componentWillLoad() {
    s.apply(this, "pop-drawer", {
      open: false,
      side: "start",
      triggerAction: "click"
    });
  }
  async present() {
    const {open: r} = this;
    if (r) return false;
    this.open = true;
    return true;
  }
  async dismiss() {
    const {open: r} = this;
    if (!r) return false;
    this.open = false;
    return true;
  }
  async toggle() {
    this.open = !this.open;
  }
  render() {
    const {host: r} = this;
    return t(e, {
      key: "3007e91ead03bc4db41686c0ca302fca164fe62e",
      class: {
        drawer: true,
        "drawer-rtl": i(r)
      }
    }, t("div", {
      key: "c97442426a78c1324fa977112fa6738f57b8bf0f",
      class: "drawer-content"
    }, t("slot", {
      key: "c9b1faf176d6920fc31c7a8d90e6ad6710463c9f"
    })), t("aside", {
      key: "cefd63719858a9208c8549321da6d8acacfcfd24",
      class: "drawer-side"
    }, t("div", {
      key: "137274f4c71bcdb4f68a885a192e00bce566d3d0",
      part: "backdrop",
      class: "drawer-backdrop",
      onClick: c(this, l, "f")
    }), t("div", {
      key: "cdec52a1084ff6e64a163a3600965199f0bd731d",
      part: "side",
      class: "drawer-side-inner"
    }, t("slot", {
      key: "ccdc0eaead3bd7a0d1f73f092cbfd87791236f1a",
      name: "side"
    }))));
  }
  get host() {
    return a(this);
  }
  static get watchers() {
    return {
      trigger: [ "onTriggerChange" ],
      triggerAction: [ "onTriggerActionChange" ]
    };
  }
};

h = new WeakMap, l = new WeakMap;

f.style = d;

export { f as pop_drawer };
//# sourceMappingURL=p-ce86c53a.entry.js.map