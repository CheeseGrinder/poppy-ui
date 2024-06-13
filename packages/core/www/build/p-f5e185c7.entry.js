import { r as i, h as e, H as t, g as r } from "./p-e8f36a8b.js";

import { c as o, a as s } from "./p-da5609ce.js";

import { h as n, g as a } from "./p-622ca0a1.js";

const l = ":host{position:relative;display:flex;flex-shrink:0;flex-direction:column;flex-wrap:wrap;align-items:stretch}:host>.item-inner{box-sizing:border-box;display:grid;grid-auto-flow:column;align-content:center;align-items:center;grid-auto-columns:minmax(auto, max-content) auto max-content;gap:0.5rem;border:none;outline:none;background-color:transparent;text-align:start;text-wrap:balance;cursor:pointer;transition-property:color, background-color, opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s}:host(:not(.has-list))>.item-inner:is(:hover,:focus),:host(:not(.has-list))>.item-inner:has(:focus){background-color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.1);color:inherit}:host>.item-inner:active{background-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964))}:host(.in-list-md)>.item-inner{padding:0.5rem 1rem;border-radius:var(--radius-md, 8px);height:36px;font-size:0.875rem;line-height:1.25rem}:host(.in-list-xs)>.item-inner{padding:0.25rem 0.5rem;border-radius:var(--radius-sm, 4px);height:24px;font-size:0.75rem;line-height:1rem}:host(.in-list-sm)>.item-inner{padding:0.25rem 0.75rem;border-radius:var(--radius-md, 8px);height:28px;font-size:0.875rem;line-height:1.25rem}:host(.in-list-lg)>.item-inner{border-radius:var(--radius-md, 8px);height:52px;font-size:1.125rem;line-height:1.75rem}:host(.has-list)>.item-inner{display:flex;height:auto;padding:0}";

const p = l;

var d = undefined && undefined.__classPrivateFieldGet || function(i, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e === "function" ? i !== e || !r : !e.has(i)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(i) : r ? r.value : e.get(i);
};

var c, m, h;

const u = class {
  constructor(e) {
    i(this, e);
    c.add(this);
    m.set(this, (i => {
      const e = i.composedPath();
      const t = e[0];
      const r = d(this, c, "m", h).call(this);
      if (!i.isTrusted || r === undefined) return;
      const o = this.host.shadowRoot.contains(t);
      if (o) {
        r.click();
      }
    }));
    this.disabled = undefined;
  }
  componentWillLoad() {
    o.apply(this, "pop-item", {
      disabled: false
    });
  }
  render() {
    const {host: i, disabled: r} = this;
    const o = n(i, "pop-list");
    const s = a(i, "pop-list", "size", "md");
    const l = !!i.querySelector("pop-list");
    return e(t, {
      key: "03ab687a61dd784a561c655480291fd2f58ad9fd",
      role: o ? "listitem" : null,
      "aria-disabled": r ? "true" : null,
      onClick: d(this, m, "f"),
      class: {
        "in-list": o,
        [`in-list-${s}`]: o,
        "has-list": l
      }
    }, e("a", {
      key: "3eb063b99588f74e1ca4a92374a659424b6542c3",
      class: "item-inner"
    }, e("slot", {
      key: "177ec10f2f22e0c3966df2e201e9acf47100db12"
    })));
  }
  static get delegatesFocus() {
    return true;
  }
  get host() {
    return r(this);
  }
};

m = new WeakMap, c = new WeakSet, h = function _Item_getFirstInteractive() {
  const i = this.host.querySelectorAll("pop-toggle:not([disabled]), pop-checkbox:not([disabled]), pop-radio:not([disabled]), pop-select:not([disabled])");
  return i[0];
};

u.style = p;

const f = 'pop-list{flex-wrap:wrap;width:100%;contain:content;margin:0;padding:0.5rem}pop-list[orientation=vertical],pop-list:not([orientation]){display:flex;flex-direction:column}pop-list[orientation=horizontal]{display:inline-flex}pop-list[size=xs]{font-size:0.75rem;line-height:1rem;border-radius:var(--radius-sm, 4px)}pop-list[size=sm]{font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=md],pop-list:not([size]){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=lg]{font-size:1.125rem;line-height:1.75rem;border-radius:var(--radius-md, 8px)}pop-list[size=xs]>:is(pop-list-title,pop-item){font-size:0.75rem;line-height:1rem;border-radius:var(--radius-sm, 4px)}pop-list[size=sm]>:is(pop-list-title,pop-item){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=md]>:is(pop-list-title,pop-item),pop-list:not([size])>:is(pop-list-title,pop-item){font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius-md, 8px)}pop-list[size=lg]>:is(pop-list-title,pop-item){font-size:1.125rem;line-height:1.75rem;border-radius:var(--radius-md, 8px)}pop-list.in-item{position:relative;white-space:nowrap;margin-inline-start:1rem;padding:0;padding-inline-start:0.5rem}pop-list.in-item::before{content:"";position:absolute;top:0.75rem;bottom:0.75rem;inset-inline-start:2px;width:1px;--tw-bg-opacity:1;background-color:oklch(var(--base-content, 0.746477 0.0216 264.435964));opacity:0.1}';

const g = f;

const b = class {
  constructor(e) {
    i(this, e);
    this.size = undefined;
    this.orientation = undefined;
  }
  componentWillLoad() {
    o.apply(this, "pop-list", {
      size: s.get("defaultSize", "md"),
      orientation: "vertical"
    });
  }
  render() {
    const {host: i} = this;
    return e(t, {
      key: "f8b3b15f40a7c688a066c99a09fc49391bc044ce",
      role: "list",
      class: {
        "in-item": n(i, "pop-item")
      }
    }, e("slot", {
      key: "c962c6c06bc0ee00ba48011bc9a60fadfb32921b"
    }));
  }
  get host() {
    return r(this);
  }
};

b.style = g;

export { u as pop_item, b as pop_list };
//# sourceMappingURL=p-f5e185c7.entry.js.map