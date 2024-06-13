import { r as e, c as t, h as i, H as s, g as o } from "./p-e8f36a8b.js";

import { c as r } from "./p-da5609ce.js";

import { r as n, c as a } from "./p-622ca0a1.js";

import { T as h } from "./p-31ba1818.js";

const c = ":host .popover{box-sizing:border-box;position:absolute;margin:0;padding:0;border:none;color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));background:transparent}:host .popover:not([popover],[open]){opacity:0}:host .popover::backdrop{background-color:rgba(0, 0, 0, 0.125);transition:opacity 15s ease 0ms}:host .popover-content{min-height:2rem;border:solid;border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)));box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);animation-name:present;animation-duration:200ms}@keyframes present{from{opacity:0.6;scale:0.95}to{opacity:1;scale:1}}";

const d = c;

var p = undefined && undefined.__classPrivateFieldGet || function(e, t, i, s) {
  if (i === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? s : i === "a" ? s.call(e) : s ? s.value : t.get(e);
};

var f = undefined && undefined.__classPrivateFieldSet || function(e, t, i, s, o) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? o.call(e, i) : o ? o.value = i : t.set(e, i), i;
};

var l, m, u, b, g, v, w;

const k = class {
  constructor(i) {
    e(this, i);
    this.willPresent = t(this, "willPresent", 7);
    this.didPresent = t(this, "didPresent", 7);
    this.willDismiss = t(this, "willDismiss", 7);
    this.didDismiss = t(this, "didDismiss", 7);
    l.add(this);
    m.set(this, void 0);
    u.set(this, void 0);
    b.set(this, h.create());
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
  onOpenChange(e) {
    if (e) {
      this.present();
    } else {
      this.dismiss(null);
    }
  }
  onTriggerChange(e) {
    if (e) {
      p(this, b, "f").addListener(this.host, e, this.triggerAction);
    }
  }
  onTriggerActionChange(e) {
    p(this, b, "f").addListener(this.host, this.trigger, e);
  }
  connectedCallback() {
    const {trigger: e} = this;
    this.onTriggerChange(e);
  }
  componentWillLoad() {
    r.apply(this, "pop-popover", {
      open: false,
      animated: false,
      showBackdrop: false,
      backdropDismiss: false,
      triggerAction: "click"
    });
  }
  componentDidLoad() {
    p(this, l, "m", v).call(this);
    /**
         * If popover was rendered with open="true"
         * then we should open popover immediately.
         */    if (this.open) {
      n((() => this.present()));
    }
  }
  disconnectedCallback() {
    p(this, b, "f").removeListener();
    p(this, m, "f").removeEventListener("beforetoggle", p(this, u, "f"));
    p(this, l, "m", g).call(this);
  }
  async present() {
    const {open: e, component: t, componentProps: i, host: s} = this;
    if (e) {
      return false;
    }
    this.willPresent.emit();
    const o = typeof t === "string" ? s.ownerDocument?.createElement(t) : t;
    // if (cssClasses) {
    //   cssClasses.forEach((c) => el.classList.add(c));
    // }
        if (i) {
      Object.assign(o, i);
    }
    s.appendChild(o);
    await new Promise((e => a(o, e)));
    p(this, l, "m", w).call(this);
    this.didPresent.emit();
    return true;
  }
  async dismiss(e) {
    const {open: t, backdropDismiss: i} = this;
    if (!t) return false;
    this.willDismiss.emit();
    i ? p(this, m, "f").hidePopover() : p(this, m, "f").close(e);
    p(this, l, "m", g).call(this);
    return true;
  }
  render() {
    const {backdropDismiss: e} = this;
    return i(s, {
      key: "e09a34c3cb56d7ad0a03c3e79dd003e66dfb784b",
      "aria-modal": "true"
    }, i("dialog", {
      key: "2fd5f313591e11e4e4d2f4a1782b9774f16e33e8",
      popover: e ? "" : null,
      class: "popover",
      ref: e => f(this, m, e, "f")
    }, i("div", {
      key: "c20f4cdcde6ca5314073cfd773e9e7bd4d959cc5",
      part: "content",
      class: "popover-content"
    }, i("slot", {
      key: "a400c0cfd154d2a9e516e695b4c5780527c51ea2"
    }))));
  }
  get host() {
    return o(this);
  }
  static get watchers() {
    return {
      open: [ "onOpenChange" ],
      trigger: [ "onTriggerChange" ],
      triggerAction: [ "onTriggerActionChange" ]
    };
  }
};

m = new WeakMap, u = new WeakMap, b = new WeakMap, l = new WeakSet, g = function _Popover_didDismiss() {
  if (this.host.isConnected) return;
  this.host.dispatchEvent(new CustomEvent("didDismiss", {
    detail: {}
  }));
}, v = function _Popover_setupListener() {
  f(this, u, (e => {
    if (e.oldState === "open") {
      this.willDismiss.emit();
      this.host.remove();
    }
  }), "f");
  p(this, m, "f").addEventListener("beforetoggle", p(this, u, "f"));
}, w = function _Popover_present() {
  const {backdropDismiss: e, event: t} = this;
  const i = t.target;
  const s = i.getBoundingClientRect();
  p(this, m, "f").style.setProperty("top", `${s.bottom}px`);
  p(this, m, "f").style.setProperty("left", `${s.left}px`);
  p(this, m, "f").style.setProperty("width", `${s.width}px`);
  e ? p(this, m, "f").showPopover() : p(this, m, "f").showModal();
  p(this, m, "f").focus();
};

k.style = d;

export { k as pop_popover };
//# sourceMappingURL=p-f49e825c.entry.js.map