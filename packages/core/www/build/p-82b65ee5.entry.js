import { r as e, c as r, h as a, H as o, g as t } from "./p-e8f36a8b.js";

import { c as n, a as i } from "./p-da5609ce.js";

import { i as c, g as s, h as d } from "./p-622ca0a1.js";

import { S as h } from "./p-e87048ef.js";

const l = ':host{--border-radius:var(--radius-md, 8px);--border-color:oklch(theme.get-color("base.content") / 0.2);--background:var(--base-content, 0.746477 0.0216 264.435964);--checkmark-color:var(--base-100, 0.253267 0.015896 252.417568);--animation:0.2s ease-out;display:inline-flex;align-items:center;justify-content:space-between;gap:4px;flex-shrink:0}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host input{border:1px solid var(--border-color);border-radius:var(--border-radius);appearance:none;cursor:pointer;margin:0}:host input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--background)}:host input:checked{background-repeat:no-repeat;animation:checkmark var(--animation);background-color:var(--background);background-image:linear-gradient(-45deg, transparent 65%, var(--background) 65.99%), linear-gradient(45deg, transparent 75%, var(--background) 75.99%), linear-gradient(-45deg, var(--background) 40%, transparent 40.99%), linear-gradient(45deg, var(--background) 30%, var(--checkmark-color) 30.99%, var(--checkmark-color) 40%, transparent 40.99%), linear-gradient(-45deg, var(--checkmark-color) 50%, var(--background) 50.99%)}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}100%{background-position-y:0}}:host([placement=start]) input{margin-inline-end:auto}:host([placement=end]){flex-direction:row-reverse}:host([placement=end]) input{margin-inline-start:auto}:host([size=xs]) input,:host(.in-list.in-list-xs) input{height:1rem;width:1rem}:host([size=sm]) input,:host(.in-list.in-list-sm) input{height:1.25rem;width:1.25rem}:host([size=md]) input,:host(.in-list.in-list-lg) input{height:1.5rem;width:1.5rem}:host([size=lg]) input,:host(.in-list.in-list-lg) input{height:2rem;width:2rem}:host([color=primary]){--background:oklch(var(--primary, 0.6569 0.196 275.75));--border-color:oklch(var(--primary, 0.6569 0.196 275.75) / 0.2);--checkmark-color:oklch(var(--primary-content, 0.13138 0.0392 275.75))}:host([color=secondary]){--background:oklch(var(--secondary, 0.748 0.26 342.55));--border-color:oklch(var(--secondary, 0.748 0.26 342.55) / 0.2);--checkmark-color:oklch(var(--secondary-content, 0.1496 0.052 342.55))}:host([color=accent]){--background:oklch(var(--accent, 0.7451 0.167 183.61));--border-color:oklch(var(--accent, 0.7451 0.167 183.61) / 0.2);--checkmark-color:oklch(var(--accent-content, 0.14902 0.0334 183.61))}:host([color=info]){--background:oklch(var(--info, 0.7206 0.191 231.6));--border-color:oklch(var(--info, 0.7206 0.191 231.6) / 0.2);--checkmark-color:oklch(var(--info-content, 0 0 0))}:host([color=success]){--background:oklch(var(--success, 64.8% 0.15 160));--border-color:oklch(var(--success, 64.8% 0.15 160) / 0.2);--checkmark-color:oklch(var(--success-content, 0 0 0))}:host([color=warning]){--background:oklch(var(--warning, 0.8471 0.199 83.87));--border-color:oklch(var(--warning, 0.8471 0.199 83.87) / 0.2);--checkmark-color:oklch(var(--warning-content, 0 0 0))}:host([color=error]){--background:oklch(var(--error, 0.7176 0.221 22.18));--border-color:oklch(var(--error, 0.7176 0.221 22.18) / 0.2);--checkmark-color:oklch(var(--error-content, 0 0 0))}:host(:not([color]))>input{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964));--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--checkmark-color:oklch(var(--base-100, 0.253267 0.015896 252.417568))}:host([disabled])>input{--border-color:transparent;--background:oklch(var(--base-content, 0.746477 0.0216 264.435964));opacity:0.2;cursor:not-allowed;background-color:var(--background);background-image:linear-gradient(-45deg, transparent 65%, var(--background) 65.99%), linear-gradient(45deg, transparent 75%, var(--background) 75.99%), linear-gradient(-45deg, var(--background) 40%, transparent 40.99%), linear-gradient(45deg, var(--background) 30%, var(--checkmark-color) 30.99%, var(--checkmark-color) 40%, transparent 40.99%), linear-gradient(-45deg, var(--checkmark-color) 50%, var(--background) 50.99%)}:host([indeterminate])>input{background-repeat:no-repeat;background-color:var(--background, oklch(var(--base-content, 0.746477 0.0216 264.435964)));animation:checkmark var(--animation-duration, 0.2s) ease-out;background-image:linear-gradient(90deg, transparent 80%, var(--background) 80%), linear-gradient(-90deg, transparent 80%, var(--background) 80%), linear-gradient(0deg, var(--background) 43%, var(--checkmark-color) 43%, var(--checkmark-color) 57%, var(--background) 57%)}:host(.in-item){grid-column:span 2}:host(.in-item)>.label{padding-inline-start:0}';

const k = l;

var u = undefined && undefined.__classPrivateFieldGet || function(e, r, a, o) {
  if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r === "function" ? e !== r || !o : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? o : a === "a" ? o.call(e) : o ? o.value : r.get(e);
};

var p = undefined && undefined.__classPrivateFieldSet || function(e, r, a, o, t) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !t) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r === "function" ? e !== r || !t : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return o === "a" ? t.call(e, a) : t ? t.value = a : r.set(e, a), a;
};

var b, g, m, f, v, w, y;

const x = class {
  constructor(a) {
    e(this, a);
    this.popChange = r(this, "popChange", 7);
    this.popFocus = r(this, "popFocus", 7);
    this.popBlur = r(this, "popBlur", 7);
    if (a.$hostElement$["s-ei"]) {
      this.internals = a.$hostElement$["s-ei"];
    } else {
      this.internals = a.$hostElement$.attachInternals();
      a.$hostElement$["s-ei"] = this.internals;
    }
    b.set(this, `pop-cb-${C++}`);
    g.set(this, void 0);
    m.set(this, void 0);
    f.set(this, (() => {
      const {disabled: e, readonly: r} = this;
      if (e || r) return;
      this.checked = !this.checked;
    }));
    v.set(this, (e => {
      const r = e.target;
      this.checked = r.checked;
    }));
    w.set(this, (() => {
      this.popFocus.emit();
    }));
    y.set(this, (() => {
      this.popBlur.emit();
    }));
    this.name = u(this, b, "f");
    this.value = "on";
    this.required = undefined;
    this.readonly = undefined;
    this.checked = undefined;
    this.indeterminate = undefined;
    this.disabled = undefined;
    this.color = undefined;
    this.size = undefined;
    this.placement = undefined;
  }
  onCheckedChange(e) {
    this.indeterminate = false;
    this.popChange.emit({
      checked: e,
      value: this.value || ""
    });
    this.internals.setFormValue(e ? this.value : "", e.toString());
    this.internals.ariaChecked = e.toString();
  }
  formResetCallback() {
    this.checked = false;
  }
  formStateRestoreCallback(e) {
    this.checked = e === "true";
  }
  componentWillLoad() {
    p(this, g, c(this.host), "f");
    n.apply(this, "pop-checkbox", {
      required: false,
      readonly: false,
      checked: false,
      indeterminate: false,
      disabled: false,
      size: i.get("defaultSize", "md"),
      placement: "start"
    });
  }
  /**
     * Sets focus on the native `input` in `pop-checkbox`. Use this method instead of the global
     * `input.focus()`.
     */  async setFocus() {
    u(this, m, "f")?.focus();
  }
  render() {
    const {host: e, name: r, disabled: t, checked: n, indeterminate: i} = this;
    const c = u(this, b, "f");
    const l = i ? "mixed" : n ? "true" : "false";
    const k = e.textContent !== "";
    const x = s(e, "pop-list", "size", "md");
    return a(o, {
      key: "78b20e1fee99b45efeb44e4e0b14a3461ac46e32",
      "aria-labelledby": c,
      "aria-checked": l,
      "aria-hidden": t ? "true" : null,
      onClick: u(this, f, "f"),
      class: {
        "in-list": d(e, "pop-list"),
        [`in-list-${x}`]: x !== null,
        "in-item": d(e, "pop-item")
      }
    }, a(h, {
      key: "11cf77f2e408dfc27fb9f75e856f9a51b606a978",
      when: k
    }, a("div", {
      key: "dac0e9b85ab41ec8ff2ec97c48f483bedbafd357",
      class: "label"
    }, a("label", {
      key: "e4e937ada9dd1cd0b6ab0fc60997e3560df0ba6b",
      htmlFor: c,
      part: "label"
    }, a("slot", {
      key: "dda4331a49aa516a8a96fbbd4bac5f87818c3f7f"
    })))), a("input", {
      key: "fe2ae81aa3e968aefca11b8a2d856e917e2ef072",
      type: "checkbox",
      part: "native",
      id: c,
      name: r,
      "aria-checked": l,
      indeterminate: this.indeterminate,
      required: this.required,
      readOnly: this.readonly,
      checked: n,
      disabled: t,
      onChange: u(this, v, "f"),
      onFocus: u(this, w, "f"),
      onBlur: u(this, y, "f"),
      ref: e => p(this, m, e, "f"),
      ...u(this, g, "f")
    }));
  }
  static get formAssociated() {
    return true;
  }
  get host() {
    return t(this);
  }
  static get watchers() {
    return {
      checked: [ "onCheckedChange" ]
    };
  }
};

b = new WeakMap, g = new WeakMap, m = new WeakMap, f = new WeakMap, v = new WeakMap, 
w = new WeakMap, y = new WeakMap;

let C = 0;

x.style = k;

export { x as pop_checkbox };
//# sourceMappingURL=p-82b65ee5.entry.js.map