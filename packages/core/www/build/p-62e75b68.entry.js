import { r as e, c as t, h as r, H as s, g as o, F as i } from "./p-e8f36a8b.js";

import { c as n, a } from "./p-da5609ce.js";

import { i as d, c } from "./p-aa31b330.js";

import { a as l, h } from "./p-622ca0a1.js";

import { C as p } from "./p-87d55620.js";

import { S as f } from "./p-e87048ef.js";

const u = "pop";

const b = `${u}-app`
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */;

const raf = e => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(e);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(e);
  }
  return setTimeout(e);
};

/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */ const componentOnReady = (e, t) => {
  if (e.componentOnReady) {
    // eslint-disable-next-line custom-rules/no-component-on-ready-method
    e.componentOnReady().then((e => t(e)));
  } else {
    raf((() => t(e)));
  }
};

const getAppRoot = e => e.querySelector(b) || e.body;

var m = undefined && undefined.__classPrivateFieldSet || function(e, t, r, s, o) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
};

var v = undefined && undefined.__classPrivateFieldGet || function(e, t, r, s) {
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : t.get(e);
};

var w, y, g, k, _, x, C, z;

class P {
  constructor(e) {
    w.add(this);
    y.set(this, void 0);
    m(this, y, e, "f");
  }
  create(e) {
    return v(this, w, "m", C).call(this, v(this, y, "f"), e);
  }
  dismiss(e, t, r) {
    return v(this, w, "m", z).call(this, document, e, t, v(this, y, "f"), r);
  }
  getTop(e) {
    return v(this, w, "m", x).call(this, e, v(this, y, "f"));
  }
  static create(e) {
    return new P(e);
  }
}

y = new WeakMap, w = new WeakSet, g = function _OverlayController_isHidden(e) {
  return e.classList.contains("overlay-hidden");
}, k = function _OverlayController_getOverlays(e, t) {
  if (t === undefined) {
    t = "pop-popover, pop-modal";
  }
  return Array.from(e.querySelectorAll(t));
}, _ = function _OverlayController_getAllPresented(e, t) {
  return v(this, w, "m", k).call(this, e, t).filter((e => !v(this, w, "m", g).call(this, e))).filter((e => e.open));
}, x = function _OverlayController_getPresented(e, t, r) {
  const s = v(this, w, "m", _).call(this, e, t);
  return r === undefined ? s.at(-1) : s.find((e => e.id === r));
}, C = async function _OverlayController_create(e, t) {
  return window?.customElements?.whenDefined(e).then((() => {
    const r = document.createElement(e);
    r.classList.add("overlay-hidden");
    /**
         * Convert the passed in overlay options into props
         * that get passed down into the new overlay.
         */    Object.assign(r, {
      ...t,
      hasController: true
    });
    // append the overlay element to the document body
    // in case we have a modal open, we append the popover in it to avoid stacking top layer probleme
    // modal can be over an another modal, but popover cant, so we do a little trick here
        const s = document.querySelector("pop-modal[open]") ?? getAppRoot(document);
    s.appendChild(r);
    return new Promise((e => componentOnReady(r, e)));
  })) ?? Promise.resolve();
}, z = async function _OverlayController_dismiss(e, t, r, s, o) {
  const i = v(this, w, "m", x).call(this, e, s, o);
  if (!i) {
    return Promise.reject("overlay does not exist");
  }
  return i.dismiss(t, r);
};

const S = P.create("pop-popover");

P.create("pop-modal");

const T = ":host(.join-item)>.select-wrapper button{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column;min-width:12rem}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>input+.text-wrapper:empty{display:none}:host>input:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>input:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .select-wrapper{position:relative;display:flex;align-items:center;overflow:hidden;background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--opacity, 1)))}:host .select-wrapper:has(button:focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host .select-placeholder{opacity:0.6}:host .text-wrapper{transition:opacity 150ms ease 0ms}:host button{position:absolute;inset:0;z-index:1;width:100%;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, transparent);background-color:transparent;color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));user-select:none;outline:none}:host svg{margin-inline-start:auto;transition:transform 150ms ease 0ms}:host(.select-expanded) .select-wrapper{box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)}:host(.select-expanded) .select-wrapper svg{transform:rotateX(180deg)}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost]) .select-wrapper:has(button:focus-visible){--opacity:1}:host(.select-expanded[color=ghost]) .select-wrapper{--opacity:1}:host([size=xs]) .select-wrapper{padding-inline-start:0.65rem;padding-inline-end:0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm]) .select-wrapper{padding-inline-start:0.75rem;padding-inline-end:0.85rem;height:2rem;font-size:0.875rem;line-height:2rem}:host([size=md]) .select-wrapper,:host(:not([size])) .select-wrapper{padding-inline-start:1rem;padding-inline-end:1.15rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=lg]) .select-wrapper{padding-inline-start:1.15rem;padding-inline-end:1.35rem;height:4rem;font-size:1.125rem;line-height:2}:host([disabled]) button{--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled]) button::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";

const j = T;

var E = undefined && undefined.__classPrivateFieldGet || function(e, t, r, s) {
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : t.get(e);
};

var O = undefined && undefined.__classPrivateFieldSet || function(e, t, r, s, o) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
};

var W, A, F, M, q, $, B, D, L, R, V, H, X, G, I;

const J = class {
  constructor(r) {
    e(this, r);
    this.popDismiss = t(this, "popDismiss", 7);
    this.popChange = t(this, "popChange", 7);
    this.popFocus = t(this, "popFocus", 7);
    this.popBlur = t(this, "popBlur", 7);
    if (r.$hostElement$["s-ei"]) {
      this.internals = r.$hostElement$["s-ei"];
    } else {
      this.internals = r.$hostElement$.attachInternals();
      r.$hostElement$["s-ei"] = this.internals;
    }
    W.add(this);
    A.set(this, `pop-select-${K++}`);
    F.set(this, void 0);
    M.set(this, void 0);
    q.set(this, void 0);
    $.set(this, (() => {
      this.popFocus.emit();
    }));
    B.set(this, (() => {
      this.popBlur.emit();
    }));
    D.set(this, (async e => {
      await this.open({
        ...e,
        target: E(this, q, "f")
      });
    }));
    this.isExpanded = false;
    this.errorText = undefined;
    this.name = E(this, A, "f");
    this.placeholder = undefined;
    this.value = undefined;
    this.multiple = false;
    this.min = undefined;
    this.max = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.autoFocus = false;
    this.bordered = undefined;
    this.color = undefined;
    this.size = undefined;
    this.selectedText = undefined;
    this.helperText = undefined;
    this.notEnoughErrorText = undefined;
    this.tooManyErrorText = undefined;
    this.compare = undefined;
  }
  onValueChange(e) {
    this.errorText = E(this, W, "a", X);
    if (this.errorText) {
      // No emit if the select has error.
      return;
    }
    this.internals.setFormValue(e, e);
    this.popChange.emit({
      value: e
    });
  }
  formResetCallback() {
    this.value = null;
  }
  formStateRestoreCallback(e) {
    this.value = e;
  }
  componentWillLoad() {
    O(this, F, l(this.host, [ "aria-label" ]), "f");
    n.apply(this, "pop-select", {
      multiple: false,
      required: false,
      disabled: false,
      bordered: false,
      size: a.get("defaultSize", "md")
    });
  }
  /**
     * Sets focus on the native `select` in `pop-select`. Use this method instead of the global
     * `select.focus()`.
     */  async setFocus() {
    E(this, q, "f").focus();
  }
  async open(e) {
    if (this.disabled || this.isExpanded || E(this, M, "f")) return;
    this.isExpanded = true;
    const t = this.value;
    const r = await S.create({
      component: "pop-select-popover",
      componentProps: {
        value: E(this, W, "a", L),
        required: this.required,
        multiple: this.multiple,
        color: this.color,
        size: this.size,
        options: E(this, W, "a", R).map((e => {
          const r = getOptionValue(e);
          const s = Array.from(e.classList).filter((e => e !== "hydrated"));
          return {
            text: e.textContent || "",
            value: r,
            checked: d(t, r, this.compare),
            disabled: e.disabled,
            color: e.color,
            size: e.size,
            cssClass: [ N, ...s ],
            handler: e => {
              this.value = e;
              if (!this.multiple) {
                this.close();
              }
            }
          };
        }))
      },
      size: this.size,
      dismissOnSelect: !this.multiple,
      animated: true,
      backdropDismiss: true,
      showBackdrop: false,
      keyboardClose: true,
      reference: e ? "event" : "trigger",
      alignment: "center",
      event: e
    });
    O(this, M, r, "f");
    r.addEventListener("didDismiss", (() => {
      O(this, M, undefined, "f");
      this.isExpanded = false;
      this.popDismiss.emit();
      this.setFocus();
    }));
    await r.present();
    const s = E(this, W, "a", R).map((e => e.value)).indexOf(this.value);
    if (s === -1) {
      /**
             * If no value is set then focus the first enabled option.
             */
      const e = r.querySelector("pop-radio:not([disabled]), pop-checkbox:not([disabled])");
      if (e) {
        e.closest("pop-item")?.focus();
        /**
                 * Focus the option for the same reason as we do above.
                 */        e.focus();
      }
    } else {
      const e = r.querySelector(`.select-interface-option:nth-child(${s + 1})`);
      if (e) {
        e.focus();
        const t = e.querySelector("pop-radio, pop-checkbox");
        if (t) {
          t.focus();
        }
      }
    }
    return r;
  }
  async close() {
    if (this.disabled || !this.isExpanded) return;
    this.isExpanded = false;
    E(this, M, "f").dismiss();
  }
  render() {
    const {host: e, helperText: t, errorText: o} = this;
    const i = E(this, A, "f");
    const n = !!o;
    const a = !!t;
    const d = n || a;
    return r(s, {
      key: "2c79ebc1c8b1eca64b9d98176ffeafde1bbeb5e3",
      "aria-labelledby": i,
      "aria-hidden": this.disabled ? "true" : null,
      class: {
        "select-expanded": this.isExpanded,
        "join-item": h(e, "pop-join")
      }
    }, r("div", {
      key: "0af804b8692cbd50bf68db3a41fcad857bfa40ff",
      class: "label-text-wrapper"
    }, r("label", {
      key: "825b9107ff04e3898e61df2844ab95f1652fbfa1",
      htmlFor: i,
      part: "label"
    }, r("slot", {
      key: "59de60241d91f747d690e3a6f22e4cd0614ebc2f",
      name: "label"
    }))), r("div", {
      key: "1c72e78fb0aa2a78d960df188f0aff95b65c859d",
      class: "select-wrapper"
    }, r("slot", {
      key: "157e9dadd0f7c3dcf4e3b7eeb108308c47bb1d30",
      name: "start"
    }), r("div", {
      key: "76501c88f8f1215a5d222ba806fe8501ff670f99",
      class: "select-wrapper-inner"
    }, E(this, W, "m", G).call(this), E(this, W, "m", I).call(this)), r("slot", {
      key: "ea781faf98b3190182ec333bcf8a888fb609c771",
      name: "end"
    }), r(p, {
      key: "141a775955c99996dd5d65196fde0fdde03ea710"
    })), r(f, {
      key: "f26205f0c2a9fc3b6cd9a7b9ee1314e13eb94017",
      when: d
    }, r("div", {
      key: "5400bfbae04e716370dd65fd329fb3b3457641d5",
      class: "text-wrapper"
    }, r(f, {
      key: "a2982776b2b7a48370d71ef4953fc870f8d0f29e",
      when: n
    }, r("span", {
      key: "0a2f86984f6276314572551d7f0a9e7afcae0ed5",
      class: "error-text"
    }, o)), r(f, {
      key: "f09e245b501ecef0de6c89dcdaee3d5b58750043",
      when: a
    }, r("span", {
      key: "ff7cf2744b5c454a36f214ebfe19c31eddc572b6",
      class: "helper-text"
    }, t)))));
  }
  static get formAssociated() {
    return true;
  }
  get host() {
    return o(this);
  }
  static get watchers() {
    return {
      value: [ "onValueChange" ]
    };
  }
};

A = new WeakMap, F = new WeakMap, M = new WeakMap, q = new WeakMap, $ = new WeakMap, 
B = new WeakMap, D = new WeakMap, W = new WeakSet, L = function _Select_values_get() {
  const {value: e} = this;
  if (!e) return [];
  return Array.isArray(e) ? e : [ e ];
}, R = function _Select_options_get() {
  return Array.from(this.host.querySelectorAll("pop-select-option"));
}, V = function _Select_text_get() {
  const e = this.selectedText;
  if (e) {
    return e;
  }
  const t = E(this, W, "a", L);
  if (t.length === 0) {
    return "";
  }
  return t.map((e => {
    const t = E(this, W, "a", R).find((t => {
      const r = t.value ?? (t.textContent || "");
      return c(e, r, this.compare);
    }));
    return t ? t.textContent : null;
  })).filter(Boolean).join(", ");
}, H = function _Select_ariaLabel_get() {
  const {placeholder: e} = this;
  const t = E(this, W, "a", V);
  const r = E(this, F, "f")["aria-label"];
  /**
     * If developer has specified a placeholder
     * and there is nothing selected, the selectText
     * should have the placeholder value.
     */  let s = t;
  if (s === "" && e !== undefined) {
    s = e;
  }
  /**
     * If there is a developer-defined label,
     * then we need to concatenate the developer label
     * string with the current current value.
     * The label for the control should be read
     * before the values of the control.
     */  if (r !== undefined) {
    s = s === "" ? r : `${r}, ${s}`;
  }
  return s;
}, X = function _Select_errorText_get() {
  if (!this.multiple) return "";
  const {length: e} = E(this, W, "a", L);
  if (e === 0 && !this.required) return "";
  if (e < this.min) return this.notEnoughErrorText ?? "";
  if (e > this.max) return this.tooManyErrorText ?? "";
  return "";
}, G = function _Select_renderSelectText() {
  const {placeholder: e} = this;
  const t = E(this, W, "a", V);
  let s = false;
  let o = t;
  if (o === "" && e !== undefined) {
    o = e;
    s = true;
  }
  const i = s ? "placeholder" : "text";
  return r("div", {
    "aria-hidden": "true",
    class: {
      "select-placeholder": s
    },
    part: i
  }, o);
}, I = function _Select_renderListbox() {
  const {disabled: e, isExpanded: t} = this;
  const s = E(this, A, "f");
  return r("button", {
    disabled: e,
    id: s,
    "aria-label": E(this, W, "a", H),
    "aria-haspopup": "dialog",
    "aria-expanded": `${t}`,
    onClick: E(this, D, "f"),
    onFocus: E(this, $, "f"),
    onBlur: E(this, B, "f"),
    ref: e => O(this, q, e, "f")
  });
};

const getOptionValue = e => {
  const t = e.value;
  return t === undefined ? e.textContent || "" : t;
};

let K = 0;

const N = "select-interface-option";

J.style = j;

const Q = "pop-select-option{display:none}";

const U = Q;

var Y = undefined && undefined.__classPrivateFieldGet || function(e, t, r, s) {
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : t.get(e);
};

var Z;

const ee = class {
  constructor(t) {
    e(this, t);
    Z.set(this, `pop-selopt-${te++}`);
    this.value = undefined;
    this.disabled = undefined;
    this.color = undefined;
    this.size = undefined;
  }
  render() {
    return r(s, {
      key: "18bb23a42a3c9facea459e179f94ad001af5dfbc",
      role: "option",
      id: Y(this, Z, "f")
    });
  }
};

Z = new WeakMap;

let te = 0;

ee.style = U;

const re = "";

const se = re;

var oe = undefined && undefined.__classPrivateFieldGet || function(e, t, r, s) {
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : t.get(e);
};

var ie, ne, ae, de, ce, le, he;

const pe = class {
  constructor(t) {
    e(this, t);
    ie.add(this);
    this.required = undefined;
    this.multiple = undefined;
    this.color = undefined;
    this.size = undefined;
    this.options = [];
  }
  render() {
    return r(s, {
      key: "d2d12ba0f1ce7acc17fcc8959b5b265b9d3b74d9"
    }, r("pop-list", {
      key: "aeb5151b8c17a294856d6857fb60650a766778b0",
      size: this.size
    }, oe(this, ie, "m", he).call(this)));
  }
};

ie = new WeakSet, ne = function _SelectPopover_findOptionFromEvent(e) {
  const {options: t} = this;
  return t.find((t => t.value === e.target.value));
}, ae = function _SelectPopover_getValues(e) {
  const {multiple: t, options: r} = this;
  if (t) {
    // this is a popover with checkboxes (multiple value select)
    // return an array of all the checked values
    return r.filter((e => e.checked)).map((e => e.value));
  }
  // this is a popover with radio buttons (single value select)
  // return the value that was clicked, otherwise undefined
    const s = oe(this, ie, "m", ne).call(this, e);
  return s ? s.value : undefined;
}, de = function _SelectPopover_setChecked(e) {
  const {multiple: t} = this;
  const r = oe(this, ie, "m", ne).call(this, e);
  if (t && r) {
    r.checked = e.detail.checked;
  }
}, ce = function _SelectPopover_renderRadioOptions() {
  const {options: e, required: t, color: s, size: o} = this;
  const i = e.filter((e => e.checked)).map((e => e.value))[0];
  return r("pop-radio-group", {
    value: i,
    color: s,
    size: o,
    allowEmpty: !t,
    onPopChange: r => {
      if (!t && r.detail.value === undefined) {
        e[0].handler(undefined);
        return;
      }
      const s = oe(this, ie, "m", ne).call(this, r);
      s?.handler(oe(this, ie, "m", ae).call(this, r));
    }
  }, e.map((e => {
    const t = typeof e.cssClass === "string" ? e.cssClass : Object.fromEntries(e.cssClass.map((e => [ e, true ])));
    return r("pop-item", null, r("pop-radio", {
      value: e.value,
      disabled: e.disabled,
      color: e.color,
      size: e.size,
      class: t
    }, e.text));
  })));
}, le = function _SelectPopover_renderCheckboxOptions() {
  const {options: e} = this;
  return r(i, null, e.map((e => {
    const t = typeof e.cssClass === "string" ? e.cssClass : Object.fromEntries(e.cssClass.map((e => [ e, true ])));
    return r("pop-item", null, r("pop-checkbox", {
      value: e.value,
      color: this.color,
      size: this.size,
      checked: e.checked,
      disabled: e.disabled,
      class: t,
      onPopChange: t => {
        oe(this, ie, "m", de).call(this, t);
        e.handler(oe(this, ie, "m", ae).call(this, t));
      }
    }, e.text));
  })));
}, he = function _SelectPopover_renderOptions() {
  const {multiple: e} = this;
  if (e) return oe(this, ie, "m", le).call(this);
  return oe(this, ie, "m", ce).call(this);
};

pe.style = se;

export { J as pop_select, ee as pop_select_option, pe as pop_select_popover };
//# sourceMappingURL=p-62e75b68.entry.js.map