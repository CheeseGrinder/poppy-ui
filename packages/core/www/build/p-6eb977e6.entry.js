import { r as e, c as t, h as o, H as r, g as a } from "./p-e8f36a8b.js";

import { c as i } from "./p-da5609ce.js";

import { T as n } from "./p-31ba1818.js";

import { S as s } from "./p-e87048ef.js";

const d = ":host .modal{position:fixed;inset:0;display:grid;place-items:center;border:none;margin:0;padding:0;width:100%;max-width:none;height:100%;max-height:none;background-color:transparent;color:inherit;transition-duration:0.2s;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-property:transform, opacity, visibility;overflow-y:hidden}:host .modal:not([open]){opacity:0;pointer-events:none}:host .modal:not([open])>.model-content{scale:0.9}:host .modal[open]>.model-content{scale:1}:host .modal::backdrop{animation:modal-pop 0.2s ease-out}@keyframes modal-pop{0%{opacity:0}}:host .modal-content{box-sizing:border-box;grid-column-start:1;grid-row-start:1;padding:1.5rem;border-radius:var(--border-radius, var(--radius-md, 8px));width:91.6666666667%;max-width:32rem;max-height:calc(100vh - 5em);background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)));box-shadow:rgba(0, 0, 0, 0.2509803922) 0 25px 50px -12px;overflow-y:auto;overscroll-behavior:contain;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, scale, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s}:host .modal-actions{display:flex;margin-top:1.5rem;justify-content:flex-end}:host .modal-backdrop{z-index:-1;display:grid;align-self:stretch;justify-self:stretch;grid-column-start:1;grid-row-start:1;color:transparent}:host .modal-backdrop>button{cursor:pointer;opacity:0}@media screen and (max-width: 640px){:host .modal{place-items:end}:host .modal>.modal-content{width:100%;max-width:none;border-top-left-radius:var(--border-radius, var(--radius-md, 8px));border-top-right-radius:var(--border-radius, var(--radius-md, 8px));border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(:not([showBackdrop])) .modal::backdrop{background-color:transparent}:host([showBackdrop]) .modal::backdrop{background-color:rgba(0, 0, 0, 0.4)}";

const c = d;

var h = undefined && undefined.__classPrivateFieldGet || function(e, t, o, r) {
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? r : o === "a" ? r.call(e) : r ? r.value : t.get(e);
};

var f = undefined && undefined.__classPrivateFieldSet || function(e, t, o, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(e, o) : a ? a.value = o : t.set(e, o), o;
};

var l, p, b;

const m = class {
  constructor(o) {
    e(this, o);
    this.didPresent = t(this, "didPresent", 7);
    this.didDismiss = t(this, "didDismiss", 7);
    l.set(this, void 0);
    p.set(this, void 0);
    b.set(this, n.create());
    this.trigger = undefined;
    this.component = undefined;
    this.componentProps = undefined;
    this.showBackdrop = undefined;
    this.backdropDismiss = undefined;
    this.open = undefined;
  }
  onTriggerChange(e) {
    if (e) {
      h(this, b, "f").addListener(this.host, e);
    }
  }
  onOpenChange(e) {
    if (e) {
      this.present();
    } else {
      this.dismiss(null);
    }
  }
  connectedCallback() {
    const {trigger: e} = this;
    this.onTriggerChange(e);
  }
  componentWillLoad() {
    i.apply(this, "pop-modal", {
      showBackdrop: false,
      backdropDismiss: false,
      open: false
    });
  }
  componentDidRender() {
    f(this, p, new MutationObserver((() => {
      this.open = h(this, l, "f").open;
    })), "f");
    h(this, p, "f").observe(h(this, l, "f"), {
      attributes: true,
      attributeFilter: [ "open" ]
    });
    if (this.open) {
      h(this, l, "f").showModal();
    }
  }
  disconnectedCallback() {
    h(this, b, "f").removeListener();
    h(this, p, "f").disconnect();
  }
  async present() {
    const {open: e} = this;
    if (e) {
      return false;
    }
    h(this, l, "f").showModal();
    return true;
  }
  /**
     * Close the modal
     * @param data Data to return on close
     * @returns `true` if the modal has been closed, otherwise `false`
     */  async dismiss(e) {
    const {open: t} = this;
    if (!t) return false;
    h(this, l, "f").close(e);
    return true;
  }
  render() {
    return o(r, {
      key: "16b234e71b76dd8a420d42af203b5e21db8d9c8a"
    }, o("dialog", {
      key: "0639d4cb38a2aaaa03d3f9562d5b936d253151c4",
      class: "modal",
      ref: e => f(this, l, e, "f")
    }, o("div", {
      key: "e0933994f3c47caf7ea53aadd33e748a9fae4b29",
      class: "modal-content"
    }, o("slot", {
      key: "d7c0c1a2ba8a3862a01483f1f512727fae3390c8"
    }), o("div", {
      key: "52d8a815b24ebbae27cbed1512331cb2aebd5c48",
      class: "modal-actions"
    }, o("slot", {
      key: "5f89965eb23347ad2f1838f878df1a8bcd1e4361",
      name: "actions"
    }))), o(s, {
      key: "f2d95c65cb8e317e6777380229b05d282f1e78e6",
      when: this.backdropDismiss
    }, o("form", {
      key: "25b7f1525767f4334cb6cfacd2a96dd289ad9369",
      method: "dialog",
      class: "modal-backdrop"
    }, o("button", {
      key: "30d5a46687b3f2f9e088dcce3806d68df6e5f333"
    }, "close")))));
  }
  get host() {
    return a(this);
  }
  static get watchers() {
    return {
      trigger: [ "onTriggerChange" ],
      open: [ "onOpenChange" ]
    };
  }
};

l = new WeakMap, p = new WeakMap, b = new WeakMap;

m.style = c;

export { m as pop_modal };
//# sourceMappingURL=p-6eb977e6.entry.js.map