import { r as o, h as r, H as t, g as e } from "./p-e8f36a8b.js";

import { c as n, a } from "./p-da5609ce.js";

import { i } from "./p-622ca0a1.js";

const c = ":host{--border-radius:var(--radius-full, 9999px);--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));display:inline-flex;width:max-content}:host>.badge{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:0.2s;width:fit-content;height:100%;border:solid 1px var(--border-color);border-radius:var(--border-radius);background-color:var(--background);color:var(--color)}:host([size=xs]){height:0.75rem}:host([size=xs])>.badge{font-size:0.75rem;line-height:0.75rem;padding-left:0.313rem;padding-right:0.313rem}:host([size=sm]){height:1rem}:host([size=sm])>.badge{font-size:0.75rem;line-height:1rem;padding-left:0.438rem;padding-right:0.438rem}:host([size=md]){height:1.25rem}:host([size=md])>.badge{font-size:0.875rem;line-height:1.25rem;padding-left:0.563rem;padding-right:0.563rem}:host([size=lg]){height:1.5rem}:host([size=lg])>.badge{font-size:1rem;line-height:1.5rem;padding-left:0.688rem;padding-right:0.688rem}:host([color=neutral]){--border-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));--background:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964))}:host([color=neutral][outlined]){--color:oklch(var(--neutral, 0.313815 0.021108 254.139175))}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75));--background:oklch(var(--primary, 0.6569 0.196 275.75));--color:oklch(var(--primary-content, 0.13138 0.0392 275.75))}:host([color=primary][outlined]){--color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55));--background:oklch(var(--secondary, 0.748 0.26 342.55));--color:oklch(var(--secondary-content, 0.1496 0.052 342.55))}:host([color=secondary][outlined]){--color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61));--background:oklch(var(--accent, 0.7451 0.167 183.61));--color:oklch(var(--accent-content, 0.14902 0.0334 183.61))}:host([color=accent][outlined]){--color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6));--background:oklch(var(--info, 0.7206 0.191 231.6));--color:oklch(var(--info-content, 0 0 0))}:host([color=info][outlined]){--color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160));--background:oklch(var(--success, 64.8% 0.15 160));--color:oklch(var(--success-content, 0 0 0))}:host([color=success][outlined]){--color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87));--background:oklch(var(--warning, 0.8471 0.199 83.87));--color:oklch(var(--warning-content, 0 0 0))}:host([color=warning][outlined]){--color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18));--background:oklch(var(--error, 0.7176 0.221 22.18));--color:oklch(var(--error-content, 0 0 0))}:host([color=error][outlined]){--color:oklch(var(--error, 0.7176 0.221 22.18))}:host(:not([color],[outlined])){--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host([outlined]){--border-color:currentColor;--background:transparent}";

const s = c;

var l = undefined && undefined.__classPrivateFieldSet || function(o, r, t, e, n) {
  if (e === "m") throw new TypeError("Private method is not writable");
  if (e === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r === "function" ? o !== r || !n : !r.has(o)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e === "a" ? n.call(o, t) : n ? n.value = t : r.set(o, t), t;
};

var d = undefined && undefined.__classPrivateFieldGet || function(o, r, t, e) {
  if (t === "a" && !e) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r === "function" ? o !== r || !e : !r.has(o)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? e : t === "a" ? e.call(o) : e ? e.value : r.get(o);
};

var h;

const b = class {
  constructor(r) {
    o(this, r);
    h.set(this, {});
    this.color = undefined;
    this.size = undefined;
    this.outlined = false;
    this.as = undefined;
  }
  componentWillLoad() {
    l(this, h, i(this.host), "f");
    n.apply(this, "pop-badge", {
      size: a.get("defaultSize", "md"),
      outlined: false,
      as: "div"
    });
  }
  componentWillRender() {
    l(this, h, i(this.host), "f");
  }
  render() {
    const o = this.as;
    return r(t, {
      key: "4301de9b3c8659b1d9116a01eb5c8ea109268354"
    }, r(o, {
      key: "a7e958960814d73796d2a3b9cbf7e92de710c2e7",
      class: "badge",
      part: "native",
      ...d(this, h, "f")
    }, r("slot", {
      key: "b9c0f3a6cca0a371ff8b5aed1b6b5f257b06f480"
    })));
  }
  get host() {
    return e(this);
  }
};

h = new WeakMap;

b.style = s;

const f = ":host{--translate-x:-50%;--translate-y:-50%;position:relative;display:inline-flex;width:max-content}:host ::slotted([slot=indicator]){position:absolute;z-index:1;white-space:nowrap;translate:var(--translate-x) var(--translate-y)}:host([side=start]) ::slotted([slot=indicator]){inset-inline-end:auto;inset-inline-start:0}:host([side=left]) ::slotted([slot=indicator]){left:0;right:auto}:host([side=center]) ::slotted([slot=indicator]){inset-inline-end:50%;inset-inline-start:50%}:host([side=right]) ::slotted([slot=indicator]){left:auto;right:0}:host([side=end]) ::slotted([slot=indicator]){--translate-x:50%;inset-inline-end:0;inset-inline-start:auto}:host([position=top]) ::slotted([slot=indicator]){top:0;bottom:auto}:host([position=middle]) ::slotted([slot=indicator]){top:50%;bottom:50%}:host([position=bottom]) ::slotted([slot=indicator]){--translate-y:50%;top:auto;bottom:0}";

const u = f;

const p = class {
  constructor(r) {
    o(this, r);
    this.side = undefined;
    this.position = undefined;
  }
  componentWillLoad() {
    n.apply(this, "pop-indicator", {
      side: "left",
      position: "top"
    });
  }
  render() {
    return r(t, {
      key: "44df15bef6d7fe31c65eff5daa9734b3822b407b"
    }, r("slot", {
      key: "f34983f6ca981bf383db049f9919b2521c14e96e",
      name: "indicator"
    }), r("slot", {
      key: "8a28ba5c6aeeb3a5a36e54ad63e964c70c73d7b9"
    }));
  }
};

p.style = u;

export { b as pop_badge, p as pop_indicator };
//# sourceMappingURL=p-4b0c13a4.entry.js.map