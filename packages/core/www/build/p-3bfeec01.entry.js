import { r, c as e, h as t, H as a, g as i } from "./p-e8f36a8b.js";

import { c as o, a as s } from "./p-da5609ce.js";

import { i as c } from "./p-622ca0a1.js";

const n = ":host{--thumb-color:oklch(var(--base-100, 0.253267 0.015896 252.417568));width:100%}:host>input{appearance:none;-webkit-appearance:none;overflow:hidden;width:100%;height:var(--thumb-size);margin:0;border-radius:var(--border-radius, var(--radius-xl, 16px));color:var(--active-track-color);background-color:transparent;cursor:pointer}:host>input:focus{outline:none}:host>input:focus-visible{--focus-shadow:0 0 0 6px var(--thumb-color) inset, 0 0 0 2rem var(--active-track-color) inset}:host>input::-webkit-slider-runnable-track{width:100%;height:var(--track-size);border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--track-color, oklch(var(--base-content)/var(--track-opacity, 0.2)))}:host>input::-webkit-slider-thumb{height:var(--thumb-size);width:var(--thumb-size);border-style:none;border-radius:var(--border-radius, var(--radius-xl, 16px));--filler-size:50rem;--active-track-size:calc(var(--filler-size) * -1 - var(--filler-offset));background-color:var(--thumb-color);box-shadow:0 0 0 3px var(--active-track-color) inset, var(--focus-shadow, 0 0), var(--active-track-size) 0 0 var(--filler-size);appearance:none;-webkit-appearance:none;position:relative;top:50%;transform:translateY(-50%)}:host>input::-moz-range-track{width:100%;height:var(--track-size);border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--track-color, oklch(var(--base-content)/var(--track-opacity, 0.2)))}:host>input::-moz-range-thumb{height:var(--thumb-size);width:var(--thumb-size);border-style:none;border-radius:var(--border-radius, var(--radius-xl, 16px));--filler-size:50rem;--active-track-size:calc(var(--filler-size) * -1 - var(--filler-offset));background-color:var(--thumb-color);box-shadow:0 0 0 3px var(--active-track-color) inset, var(--focus-shadow, 0 0), var(--active-track-size) 0 0 var(--filler-size)}:host([size=xs]){--track-size:0.25rem;--thumb-size:1rem;--filler-offset:0.4rem}:host([size=sm]){--track-size:0.25rem;--thumb-size:1.25rem;--filler-offset:0.5rem}:host([size=md]),:host(:not([size])){--track-size:0.5rem;--thumb-size:1.5rem;--filler-offset:0.6rem}:host([size=lg]){--track-size:1rem;--thumb-size:2rem;--filler-offset:1rem}:host([color=primary]){--active-track-color:oklch(var(--primary, 0.6569 0.196 275.75) / var(--active-track-opacity, 1))}:host([color=secondary]){--active-track-color:oklch(var(--secondary, 0.748 0.26 342.55) / var(--active-track-opacity, 1))}:host([color=accent]){--active-track-color:oklch(var(--accent, 0.7451 0.167 183.61) / var(--active-track-opacity, 1))}:host([color=info]){--active-track-color:oklch(var(--info, 0.7206 0.191 231.6) / var(--active-track-opacity, 1))}:host([color=success]){--active-track-color:oklch(var(--success, 64.8% 0.15 160) / var(--active-track-opacity, 1))}:host([color=warning]){--active-track-color:oklch(var(--warning, 0.8471 0.199 83.87) / var(--active-track-opacity, 1))}:host([color=error]){--active-track-color:oklch(var(--error, 0.7176 0.221 22.18) / var(--active-track-opacity, 1))}:host(:not([color])){--track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--track-opacity, 0.2));--active-track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--active-track-opacity, 1))}:host([disabled])>input{--active-track-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / var(--active-track-opacity, 1));opacity:var(--opacity, 0.2);cursor:not-allowed}";

const h = n;

var l = undefined && undefined.__classPrivateFieldGet || function(r, e, t, a) {
  if (t === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e === "function" ? r !== e || !a : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? a : t === "a" ? a.call(r) : a ? a.value : e.get(r);
};

var d = undefined && undefined.__classPrivateFieldSet || function(r, e, t, a, i) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e === "function" ? r !== e || !i : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return a === "a" ? i.call(r, t) : i ? i.value = t : e.set(r, t), t;
};

var v, u, f, p, k, m, b;

const w = class {
  constructor(t) {
    r(this, t);
    this.popChange = e(this, "popChange", 7);
    this.popFocus = e(this, "popFocus", 7);
    this.popBlur = e(this, "popBlur", 7);
    if (t.$hostElement$["s-ei"]) {
      this.internals = t.$hostElement$["s-ei"];
    } else {
      this.internals = t.$hostElement$.attachInternals();
      t.$hostElement$["s-ei"] = this.internals;
    }
    v.set(this, `pop-range-${z++}`);
    u.set(this, void 0);
    f.set(this, void 0);
    p.set(this, void 0);
    k.set(this, (() => {
      clearTimeout(l(this, p, "f"));
      d(this, p, setTimeout((() => {
        this.value = l(this, f, "f").valueAsNumber;
        this.popChange.emit({
          value: this.value
        });
      }), this.debounce || 0), "f");
    }));
    m.set(this, (() => {
      this.popFocus.emit();
    }));
    b.set(this, (() => {
      this.popBlur.emit();
    }));
    this.name = l(this, v, "f");
    this.value = undefined;
    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.autoFocus = false;
    this.color = undefined;
    this.size = undefined;
    this.debounce = 0;
  }
  onValueChange(r) {
    this.internals.setFormValue(r.toString(), r.toString());
  }
  formResetCallback() {
    this.value = 0;
  }
  formStateRestoreCallback(r) {
    this.value = +r;
  }
  componentWillLoad() {
    d(this, u, c(this.host), "f");
    o.apply(this, "pop-range", {
      min: 0,
      max: 100,
      step: 1,
      required: false,
      disabled: false,
      size: s.get("defaultSize", "md"),
      debounce: 0
    });
  }
  disconnectedCallback() {
    clearTimeout(l(this, p, "f"));
  }
  /**
     * Sets focus on the native `input` in `pop-range`. Use this method instead of the global
     * `input.focus()`.
     */  async setFocus() {
    l(this, f, "f")?.focus();
  }
  render() {
    const {inputId: r} = this;
    return t(a, {
      key: "e72e9497201f24246d833ca5854dafcc81e93c00",
      "aria-labelledby": r,
      "aria-hidden": this.disabled ? "true" : null
    }, t("input", {
      key: "9112269ba2ef58ef752d2ec84e28f8dbfcee90fb",
      part: "native",
      id: r,
      name: this.name,
      type: "range",
      min: this.min,
      max: this.max,
      step: this.step,
      value: this.value,
      required: this.required,
      disabled: this.disabled,
      autoFocus: this.autoFocus,
      onInput: l(this, k, "f"),
      onFocus: l(this, m, "f"),
      onBlur: l(this, b, "f"),
      ref: r => d(this, f, r, "f"),
      ...l(this, u, "f")
    }));
  }
  static get formAssociated() {
    return true;
  }
  get host() {
    return i(this);
  }
  static get watchers() {
    return {
      value: [ "onValueChange" ]
    };
  }
};

v = new WeakMap, u = new WeakMap, f = new WeakMap, p = new WeakMap, k = new WeakMap, 
m = new WeakMap, b = new WeakMap;

let z = 0;

w.style = h;

export { w as pop_range };
//# sourceMappingURL=p-3bfeec01.entry.js.map