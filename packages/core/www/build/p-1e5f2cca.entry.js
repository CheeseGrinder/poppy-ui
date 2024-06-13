import { g as e, r as t, c as o, h as n, H as i } from "./p-e8f36a8b.js";

import { c as r } from "./p-da5609ce.js";

import { S as s } from "./p-e87048ef.js";

// Code from https://github.com/jarrvis/stencil-click-outside
const d = {
  triggerEvents: "click",
  exclude: ""
};

/**
 * Call this function as soon as the click outside of annotated method's host is done.
 */ function ClickOutside(t = d) {
  return (o, n) => {
    const {connectedCallback: i, disconnectedCallback: r} = o;
    o.connectedCallback = function() {
      const o = e(this);
      const r = this[n];
      registerClickOutside(this, o, r, t);
      return i?.call(this);
    };
    o.disconnectedCallback = function() {
      const o = e(this);
      const i = this[n];
      removeClickOutside(this, o, i, t);
      return r?.call(this);
    };
  };
}

/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 */ function registerClickOutside(e, t, o, n = d) {
  const i = getExcludedNodes(n);
  getTriggerEvents(n).forEach((n => {
    window.addEventListener(n, (n => {
      initClickOutside(n, e, t, o, i);
    }), false);
  }));
}

/**
 * Remove click outside callback function for HTMLElement.
 */ function removeClickOutside(e, t, o, n = d) {
  getTriggerEvents(n).forEach((n => {
    window.removeEventListener(n, (n => {
      initClickOutside(n, e, t, o);
    }), false);
  }));
}

function initClickOutside(e, t, o, n, i) {
  const r = e.target;
  if (!o.contains(r) && !isExcluded(r, i)) {
    n.call(t);
  }
}

function getTriggerEvents(e) {
  if (e.triggerEvents) {
    return e.triggerEvents.split(",").map((e => e.trim()));
  }
  return [ "click" ];
}

function getExcludedNodes(e) {
  if (e.exclude) {
    try {
      return Array.from(document.querySelectorAll(e.exclude));
    } catch (t) {
      console.warn(`@ClickOutside: Exclude: '${e.exclude}' will not be evaluated. Check your exclude selector syntax.`, t);
    }
  }
  return;
}

function isExcluded(e, t) {
  if (e && t) {
    for (let o of t) {
      if (o.contains(e)) {
        return true;
      }
    }
  }
  return false;
}

const a = ":host{--border-radius:var(--radius-md, 8px);--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));--shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)}:host .dropdown{position:relative;display:grid;width:100%}:host .dropdown-trigger{display:inline-block;grid-column-start:1;grid-row-start:1}:host .dropdown-content{position:absolute;min-height:2rem;border:1px solid var(--border-color);border-radius:var(--border-radius);color:var(--color);background-color:var(--background);box-shadow:var(--shadow);animation-name:present;animation-duration:200ms}:host(:not([open])) .dropdown-content{opacity:0;pointer-events:none}:host([open]) .dropdown-content{z-index:100;opacity:1}:host([side=bottom][align=end]) .dropdown-content{inset-inline-end:0}:host([side=top]) .dropdown-content{top:auto;bottom:100%}:host([side=top][align=end]) .dropdown-content{inset-inline-end:0}:host([side=left]) .dropdown-content{top:0;bottom:auto;inset-inline-end:100%}:host([side=left][align=end]) .dropdown-content{top:auto;bottom:0}:host([side=right]) .dropdown-content{top:0;bottom:auto;inset-inline-start:100%}:host([side=right][align=end]) .dropdown-content{top:auto;bottom:0}@keyframes present{from{opacity:0.6;scale:0.95}to{opacity:1;scale:1}}";

const c = a;

var f = undefined && undefined.__decorate || function(e, t, o, n) {
  var i = arguments.length, r = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, o) : n, s;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(e, t, o, n); else for (var d = e.length - 1; d >= 0; d--) if (s = e[d]) r = (i < 3 ? s(r) : i > 3 ? s(t, o, r) : s(t, o)) || r;
  return i > 3 && r && Object.defineProperty(t, o, r), r;
};

var u = undefined && undefined.__classPrivateFieldGet || function(e, t, o, n) {
  if (o === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? n : o === "a" ? n.call(e) : n ? n.value : t.get(e);
};

var l = undefined && undefined.__classPrivateFieldSet || function(e, t, o, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, o) : i ? i.value = o : t.set(e, o), o;
};

var h, p, b, w, k, m;

const g = class {
  constructor(e) {
    t(this, e);
    this.didPresent = o(this, "didPresent", 7);
    this.didDismiss = o(this, "didDismiss", 7);
    h.set(this, void 0);
    p.set(this, void 0);
    b.set(this, (() => {
      if (this.triggerAction === "click") {
        this.present();
      }
    }));
    w.set(this, (() => {
      if (this.triggerAction === "hover") {
        clearTimeout(u(this, p, "f"));
        this.present();
      }
    }));
    k.set(this, (() => {
      if (this.triggerAction === "hover") {
        clearTimeout(u(this, p, "f"));
        l(this, p, setTimeout((() => {
          this.dismiss();
        }), this.debounce || 500), "f");
      }
    }));
    m.set(this, (e => {
      if (this.triggerAction === "context-menu") {
        e.preventDefault();
        this.present();
      }
    }));
    this.side = undefined;
    this.align = undefined;
    this.open = undefined;
    this.triggerAction = undefined;
    this.debounce = 100;
    this.showBackdrop = undefined;
  }
  componentWillLoad() {
    r.apply(this, "pop-dropdown", {
      side: "bottom",
      align: "start",
      open: false,
      triggerAction: "click",
      debounce: 100,
      showBackdrop: false
    });
  }
  componentDidRender() {
    const {open: e} = this;
    if (e) {
      u(this, h, "f").open = true;
    }
  }
  async present() {
    const {open: e} = this;
    if (e) return false;
    this.open = true;
    return true;
  }
  async dismiss() {
    const {open: e} = this;
    if (!e) return false;
    this.open = false;
    return true;
  }
  onClickOutside() {
    if (!this.open) return;
    this.dismiss();
  }
  render() {
    return n(i, {
      key: "4213b72803d6f25fcc0b0d54f76beca3dc6a82ae"
    }, n("details", {
      key: "2c39fd69991ce8fb30d5bb4b048550b5b412826c",
      part: "dropdown",
      class: "dropdown",
      onMouseEnter: u(this, w, "f"),
      onMouseLeave: u(this, k, "f"),
      ref: e => l(this, h, e, "f")
    }, n("summary", {
      key: "bc51fbbc265eb564b00d8b64acea4141db3e43fb",
      part: "trigger",
      class: "dropdown-trigger",
      onClick: u(this, b, "f"),
      onContextMenu: u(this, m, "f")
    }, n("slot", {
      key: "54c6299807b94400ec2e11d2f1904752bbc5eac1",
      name: "trigger"
    })), n("div", {
      key: "a91244f6a422a8d90206899975105c23d4199b96",
      part: "content",
      class: "dropdown-content"
    }, n("slot", {
      key: "98f8f7f2a125e6d905587e02cd604d6f6353735e"
    })), n(s, {
      key: "bcf7baa841c4c24a698ef477f53ba6dbe4a739ee",
      when: this.showBackdrop
    }, n("div", {
      key: "8a98a37f490e9ef9d988760565ba2522e7010b6a",
      part: "backdrop",
      class: "dropdown-backdrop",
      onClick: () => this.dismiss()
    }))));
  }
  get host() {
    return e(this);
  }
};

h = new WeakMap, p = new WeakMap, b = new WeakMap, w = new WeakMap, k = new WeakMap, 
m = new WeakMap;

f([ ClickOutside() ], g.prototype, "onClickOutside", null);

g.style = c;

export { g as pop_dropdown };
//# sourceMappingURL=p-1e5f2cca.entry.js.map