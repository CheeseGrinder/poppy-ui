import { r as e, c as t, h as r, H as a, g as s } from "./p-e8f36a8b.js";

import { c as i, a as o } from "./p-da5609ce.js";

import { i as n, h as d } from "./p-622ca0a1.js";

import { S as h } from "./p-e87048ef.js";

const c = ":host(.join-item)>textarea{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column;min-width:12rem;height:auto}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>textarea+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>textarea+.text-wrapper:empty{display:none}:host>textarea:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>textarea:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .counter-text{margin-inline-start:auto;font-size:0.75rem;line-height:1rem}:host>textarea{box-sizing:border-box;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, transparent);background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--opacity, 1)));color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));min-width:12rem;width:100%;min-height:3rem;flex-shrink:1;font-family:system-ui;white-space:pre-wrap}:host>textarea:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([size=xs])>textarea{padding:0.25rem 0.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm])>textarea{padding:0.25rem 0.75rem;font-size:0.875rem;line-height:2rem}:host([size=md])>textarea,:host(:not([size]))>textarea{padding:0.75rem 1rem;font-size:0.875rem;line-height:2}:host([size=lg])>textarea{padding:1rem 1.5rem;font-size:1.125rem;line-height:2}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost])>textarea:focus{--opacity:1}:host([disabled])>textarea{--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled])>textarea::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";

const l = c;

var f = undefined && undefined.__classPrivateFieldGet || function(e, t, r, a) {
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? a : r === "a" ? a.call(e) : a ? a.value : t.get(e);
};

var u = undefined && undefined.__classPrivateFieldSet || function(e, t, r, a, s) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return a === "a" ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
};

var b, p, m, v, x, w, k, y, g, z, T, W;

const M = class {
  constructor(r) {
    e(this, r);
    this.popChange = t(this, "popChange", 7);
    this.popInput = t(this, "popInput", 7);
    this.popFocus = t(this, "popFocus", 7);
    this.popBlur = t(this, "popBlur", 7);
    if (r.$hostElement$["s-ei"]) {
      this.internals = r.$hostElement$["s-ei"];
    } else {
      this.internals = r.$hostElement$.attachInternals();
      r.$hostElement$["s-ei"] = this.internals;
    }
    b.add(this);
    p.set(this, `pop-textarea-${j++}`);
    m.set(this, void 0);
    v.set(this, void 0);
    x.set(this, void 0);
    w.set(this, void 0);
    g.set(this, (() => {
      this.value = f(this, x, "f").value;
      this.popChange.emit({
        value: f(this, b, "m", k).call(this)
      });
    }));
    z.set(this, (() => {
      this.value = f(this, x, "f").value;
      clearTimeout(f(this, w, "f"));
      u(this, w, setTimeout((() => {
        this.popInput.emit({
          value: f(this, b, "m", k).call(this)
        });
      }), this.debounce || 0), "f");
    }));
    T.set(this, (() => {
      this.popFocus.emit();
    }));
    W.set(this, (() => {
      this.popBlur.emit();
    }));
    this.textareaWidth = undefined;
    this.name = f(this, p, "f");
    this.placeholder = undefined;
    this.value = "";
    this.minLength = undefined;
    this.maxLength = undefined;
    this.cols = undefined;
    this.rows = undefined;
    this.required = undefined;
    this.readonly = undefined;
    this.disabled = undefined;
    this.autoFocus = false;
    this.keyboard = undefined;
    this.enterkeyhint = undefined;
    this.spellcheck = undefined;
    this.autoCapitalize = undefined;
    this.wrap = undefined;
    this.bordered = false;
    this.color = undefined;
    this.size = undefined;
    this.helperText = undefined;
    this.errorText = undefined;
    this.counter = undefined;
    this.counterFormatter = undefined;
    this.debounce = undefined;
  }
  onValueChange(e) {
    this.internals.setFormValue(e, e);
  }
  formResetCallback() {
    this.value = "";
  }
  formStateRestoreCallback(e) {
    this.value = e;
  }
  componentWillLoad() {
    u(this, m, n(this.host), "f");
    i.apply(this, "pop-textarea", {
      required: false,
      readonly: false,
      disabled: false,
      spellcheck: false,
      bordered: false,
      size: o.get("defaultSize", "md"),
      debounce: 0
    });
    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
    if (this.wrap === "hard" && this.cols === undefined) {
      console.warn(`The 'cols' attribut must be specified.`);
    }
  }
  componentDidLoad() {
    u(this, v, new MutationObserver((() => {
      this.textareaWidth = f(this, x, "f").style.width;
    })), "f");
    f(this, v, "f").observe(f(this, x, "f"), {
      attributes: true,
      attributeFilter: [ "style" ]
    });
  }
  disconnectedCallback() {
    clearTimeout(f(this, w, "f"));
    f(this, v, "f").disconnect();
  }
  /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */  async setFocus() {
    f(this, x, "f")?.focus();
  }
  render() {
    const {host: e, value: t, helperText: s, errorText: i} = this;
    const o = f(this, p, "f");
    const n = f(this, b, "a", y);
    const c = e.textContent !== "";
    const l = !!i;
    const v = !!s;
    const w = n !== "";
    const k = l || v || w;
    return r(a, {
      key: "fab368a8327e4da73fbd08fccc73a845bb6f29fe",
      style: {
        maxWidth: this.textareaWidth
      },
      "aria-labelledby": o,
      "aria-hidden": this.disabled ? "true" : null,
      class: {
        "join-item": d(e, "pop-join")
      }
    }, r(h, {
      key: "6d81773b5e24f64c602518f2ba56b871049221c9",
      when: c
    }, r("div", {
      key: "9609a4cf2798fa918c38a5b788c8eee8f95b6031",
      class: "label"
    }, r("label", {
      key: "e683a2be1a2a27d7a0027a1c301442c5f95f72ec",
      htmlFor: o,
      part: "label"
    }, r("slot", {
      key: "0a9e45d45140b07653f2a3357294c1e862dbef37"
    })))), r("textarea", {
      key: "d1004a18fb571c221f5cfc95de27a3add5ca1d97",
      part: "native",
      id: o,
      name: this.name,
      placeholder: this.placeholder || "",
      minLength: this.minLength,
      maxLength: this.maxLength,
      rows: this.rows,
      cols: this.cols,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      autoFocus: this.autoFocus,
      inputMode: this.keyboard,
      enterKeyHint: this.enterkeyhint,
      spellcheck: this.spellcheck,
      autoCapitalize: this.autoCapitalize,
      wrap: this.wrap,
      onChange: f(this, g, "f"),
      onInput: f(this, z, "f"),
      onFocus: f(this, T, "f"),
      onBlur: f(this, W, "f"),
      ref: e => u(this, x, e, "f"),
      ...f(this, m, "f")
    }, t), r(h, {
      key: "f2be8b34346b8be6149638e27a2e1bcb3895167d",
      when: k
    }, r("div", {
      key: "ebcbf894d5cf5c512ac7baa450b7c7253d4a9a87",
      class: "text-wrapper"
    }, r(h, {
      key: "b4e2002e7391fed200b9dc7208c09200eb259363",
      when: l
    }, r("span", {
      key: "7488d6bcd3ab960fb1d9db13e95d78398f3291e9",
      class: "error-text"
    }, i)), r(h, {
      key: "7c704b3f9c1b8586f752002fcc2b3ee4eed6110b",
      when: v
    }, r("span", {
      key: "993f84a3c29b52ffe4e1570c0b92953764bf63d8",
      class: "helper-text"
    }, s)), r(h, {
      key: "1e9dce06c85c3f9f89ec6de0c5d309fbc5e773bb",
      when: w
    }, r("span", {
      key: "c4201ae788a83f3a9298d79b1c315ab766d2a86a",
      class: "counter-text"
    }, n)))));
  }
  static get formAssociated() {
    return true;
  }
  get host() {
    return s(this);
  }
  static get watchers() {
    return {
      value: [ "onValueChange" ]
    };
  }
};

p = new WeakMap, m = new WeakMap, v = new WeakMap, x = new WeakMap, w = new WeakMap, 
g = new WeakMap, z = new WeakMap, T = new WeakMap, W = new WeakMap, b = new WeakSet, 
k = function _Textarea_getValue() {
  return this.value || "";
}, y = function _Textarea_counterText_get() {
  if (!this.counter) return null;
  const {maxLength: e} = this;
  const t = f(this, b, "m", k).call(this).length;
  return this.counterFormatter?.(t, e) ?? `${t} / ${e}`;
};

let j = 0;

M.style = l;

export { M as pop_textarea };
//# sourceMappingURL=p-e8ee9b29.entry.js.map