import { r as e, h as t, H as r, g as i, c as a } from "./p-e8f36a8b.js";

import { c as o } from "./p-aa31b330.js";

import { h as s } from "./p-622ca0a1.js";

import { C as n } from "./p-87d55620.js";

import { c as d } from "./p-da5609ce.js";

const c = ":host(.join-item){border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{--border-radius:var(--radius-xl, 16px);--border-color:oklch(var(--base-300, 0.211484 0.01165 254.087939));--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--animation:0.2s;box-sizing:border-box;position:relative;display:grid;overflow:hidden;width:100%;border:1px solid var(--border-color);border-radius:var(--border-radius);background-color:var(--background);transition:grid-template-rows var(--animation)}:host>.accordion-title{box-sizing:border-box;position:relative;display:flex;justify-content:space-between;align-items:center;grid-column-start:1;grid-row-start:1;padding:1rem;padding-inline-end:1.5rem;width:100%;min-height:3.75rem;cursor:pointer;user-select:none;transition:background-color var(--animation) ease-out}:host>.accordion-content{grid-column-start:1;grid-row-start:2;padding-left:1rem;padding-right:1rem;min-height:0;transition:visibility var(--animation), padding var(--animation) ease-out, background-color var(--animation) ease-out;cursor:unset}:host>svg{margin-inline-start:auto;transition:transform 150ms ease 0ms}:host(:not([is-open])){grid-template-rows:auto 0fr}:host(:not([is-open]))>.accordion-content{visibility:hidden}:host([is-open]){grid-template-rows:auto 1fr}:host([is-open]) svg{transform:rotateX(180deg)}:host([is-open])>.accordion-content{visibility:visible;min-height:fit-content;padding-bottom:1rem}";

const h = c;

var f = undefined && undefined.__classPrivateFieldGet || function(e, t, r, i) {
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
};

var u = undefined && undefined.__classPrivateFieldSet || function(e, t, r, i, a) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? a.call(e, r) : a ? a.value = r : t.set(e, r), r;
};

var p, l, b;

const m = class {
  constructor(t) {
    e(this, t);
    p.set(this, void 0);
    l.set(this, (() => {
      if (!f(this, p, "f")) return;
      const {active: e} = f(this, p, "f");
      const t = this.name;
      this.isOpen = o(t, e);
    }));
    b.set(this, (() => {
      if (f(this, p, "f")) return;
      const {readonly: e, disabled: t} = this;
      if (t || e) return;
      this.isOpen = !this.isOpen;
    }));
    this.readonly = false;
    this.disabled = false;
    this.name = undefined;
    this.isOpen = false;
  }
  connectedCallback() {
    u(this, p, this.host.closest("pop-accordion-group"), "f");
    f(this, p, "f")?.addEventListener("popActiveChange", f(this, l, "f"));
  }
  disconnectedCallback() {
    f(this, p, "f")?.removeEventListener("popActiveChange", f(this, l, "f"));
  }
  /**
     * Open the accordion.
     * If the method returns `false`, the accordion was already open. otherwise it returns `true`
     */  async open() {
    if (this.isOpen) {
      return false;
    }
    this.isOpen = true;
    return true;
  }
  /**
     * Close the accordion.
     * If the method returns `false`, the accordion was already closed. otherwise it returns `true`
     */  async close() {
    if (!this.isOpen) {
      return false;
    }
    this.isOpen = false;
    return true;
  }
  /**
     * Open or close the accordion depending on his actual state
     */  async toggle() {
    this.isOpen = !this.isOpen;
  }
  render() {
    const {host: e} = this;
    return t(r, {
      key: "a44ed2242d1ee9cb4b38f53187af5700953674b4",
      class: {
        "join-item": s(e, "pop-join")
      }
    }, t("header", {
      key: "bb5931988634da26f6e635252294e31c64889e78",
      part: "header",
      class: "accordion-title",
      onClick: f(this, b, "f")
    }, t("div", {
      key: "f73598cb6d8c16a8d3da7464062b67126a76e43d",
      class: "header-content"
    }, t("slot", {
      key: "49db84b7544cc13762a7f42c404412b3f238cad1",
      name: "header"
    })), t(n, {
      key: "1cf98e72cd85f7a66a6fad9ef92fb784f86ce2c9"
    })), t("div", {
      key: "752a960f1a47fd6fb2cff4cecc9cc0ae84cb0ccf",
      part: "content",
      class: "accordion-content"
    }, t("slot", {
      key: "6e70351bb6fdf79c825efe51f280d64285c27feb"
    })));
  }
  get host() {
    return i(this);
  }
};

p = new WeakMap, l = new WeakMap, b = new WeakMap;

m.style = h;

var v = undefined && undefined.__classPrivateFieldGet || function(e, t, r, i) {
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
};

var g, w, y, k;

const C = class {
  constructor(t) {
    e(this, t);
    this.popChange = a(this, "popChange", 7);
    this.popActiveChange = a(this, "popActiveChange", 7);
    g.add(this);
    k.set(this, (e => {
      e.preventDefault();
      const t = e.target;
      if (!t || t.disabled || t.readonly) return;
      const r = this.active;
      const i = t.name;
      if (this.multiple) {
        this.active = r === undefined ? [ i ] : this.active.includes(i) ? [ ...this.active ].filter((e => e !== i)) : [ i, ...this.active ];
      } else {
        this.active = r !== i ? i : null;
      }
    }));
    this.readonly = undefined;
    this.disabled = undefined;
    this.multiple = undefined;
    this.active = undefined;
  }
  onActiveChange(e) {
    this.popActiveChange.emit({
      value: e
    });
    this.popChange.emit({
      value: e
    });
  }
  componentWillLoad() {
    d.apply(this, "pop-accordion-group", {
      readonly: false,
      disabled: false,
      multiple: false
    });
  }
  componentDidLoad() {
    v(this, g, "a", y).forEach((e => {
      if (this.readonly) e.readonly = this.readonly;
      if (this.disabled) e.disabled = this.disabled;
    }));
    v(this, g, "m", w).call(this);
  }
  render() {
    return t(r, {
      key: "8bcccc41a45a7b6d4826de998d7bea63c630e97b",
      onClick: v(this, k, "f")
    }, t("slot", {
      key: "56146ac74281d0aaa8b5e51f6c8a579964a49e97"
    }));
  }
  get host() {
    return i(this);
  }
  static get watchers() {
    return {
      active: [ "onActiveChange" ]
    };
  }
};

k = new WeakMap, g = new WeakSet, w = function _AccordionGroup_applyOpen() {
  if (!this.active) return;
  this.popActiveChange.emit({
    value: this.active
  });
}, y = function _AccordionGroup_accordions_get() {
  return Array.from(this.host.querySelectorAll("pop-accordion"));
};

export { m as pop_accordion, C as pop_accordion_group };
//# sourceMappingURL=p-5ede4649.entry.js.map