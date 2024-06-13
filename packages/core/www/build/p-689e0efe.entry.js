import { r as e, c as t, h as r, H as i, g as o } from "./p-e8f36a8b.js";

import { c as a, a as s } from "./p-da5609ce.js";

import { i as n, a as d, h } from "./p-622ca0a1.js";

import { S as c } from "./p-e87048ef.js";

const l = ":host(.join-item)>.input-wrapper{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{--border-radius:var(--radius-md, 8px);--border-color:transparent;--outline-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--background:oklch(var(--base-100, 0.253267 0.015896 252.417568));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964));display:inline-flex;flex-direction:column}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>.input-wrapper+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>.input-wrapper+.text-wrapper:empty{display:none}:host>.input-wrapper:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>.input-wrapper:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host .counter-text{margin-inline-start:auto;font-size:0.75rem;line-height:1rem}:host>.input-wrapper{box-sizing:border-box;display:flex;justify-content:center;align-items:center;flex-shrink:1;gap:0.5rem;border-style:solid;border-width:1px;border-radius:var(--border-radius);border-color:var(--border-color, transparent);background-color:var(--background);min-width:12rem;width:100%}:host>.input-wrapper:has(input:not([readonly]):focus-visible){outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--outline-color, var(--border-color))}:host>.input-wrapper>input{flex-grow:1;border:none;outline:none;color:var(--color);background-color:transparent;font-family:system-ui;white-space:pre-wrap;cursor:inherit}:host>.input-wrapper>input::-webkit-calendar-picker-indicator{line-height:1em}:host>.input-wrapper>input::-webkit-date-and-time-value{text-align:inherit}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}::slotted([slot=start]),::slotted([slot=end]){display:flex;justify-content:center;align-items:center;gap:0.5rem}:host([size=xs])>.input-wrapper{padding:0 0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=sm])>.input-wrapper{padding:0 0.75rem;height:2rem;font-size:0.875rem;line-height:2rem}:host([size=md]) .input-wrapper{padding:0 1rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=lg])>.input-wrapper{padding:1.5rem;height:4rem;font-size:1.125rem;line-height:2}:host([color=primary]){--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=ghost]){--opacity:0.05}:host([color=ghost])>.input-wrapper:has(input:focus){--opacity:1}:host([readonly]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.8);cursor:text}:host([readonly]) input::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}:host([disabled]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);cursor:not-allowed}:host([disabled]) input::placeholder{color:oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2)}";

const p = l;

var u = undefined && undefined.__classPrivateFieldGet || function(e, t, r, i) {
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
};

var f = undefined && undefined.__classPrivateFieldSet || function(e, t, r, i, o) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
};

var b, m, w, v, k, y, g, x, z, C, j;

const T = class {
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
    m.set(this, `pop-input-${W++}`);
    w.set(this, void 0);
    v.set(this, void 0);
    k.set(this, void 0);
    x.set(this, (() => {
      this.popChange.emit({
        value: u(this, b, "m", y).call(this)
      });
    }));
    z.set(this, (() => {
      this.value = u(this, v, "f").value;
      clearTimeout(u(this, k, "f"));
      f(this, k, setTimeout((() => {
        this.popInput.emit({
          value: u(this, b, "m", y).call(this)
        });
      }), this.debounce || 0), "f");
    }));
    C.set(this, (() => {
      this.popFocus.emit();
    }));
    j.set(this, (() => {
      this.popBlur.emit();
    }));
    this.name = u(this, m, "f");
    this.type = "text";
    this.placeholder = undefined;
    this.value = "";
    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
    this.minLength = undefined;
    this.maxLength = undefined;
    this.multiple = undefined;
    this.pattern = undefined;
    this.required = undefined;
    this.readonly = undefined;
    this.disabled = undefined;
    this.autoFocus = undefined;
    this.keyboard = undefined;
    this.enterkeyhint = undefined;
    this.spellcheck = undefined;
    this.autoComplete = "off";
    this.autoCapitalize = undefined;
    this.autoCorrect = undefined;
    this.bordered = undefined;
    this.color = undefined;
    this.size = undefined;
    this.helperText = undefined;
    this.errorText = undefined;
    this.counter = undefined;
    this.counterFormatter = undefined;
    this.debounce = 0;
  }
  onValueChange() {
    const e = u(this, b, "m", y).call(this);
    this.internals.setFormValue(e, e);
    if (e !== u(this, v, "f").value) {
      /**
             * Assigning the native input's value on attribute
             * value change, allows `popInput` implementations
             * to override the control's value.
             *
             * Used for patterns such as input trimming (removing whitespace),
             * or input masking.
             */
      u(this, v, "f").value = e;
    }
  }
  formResetCallback() {
    this.value = "";
  }
  formStateRestoreCallback(e) {
    this.value = e;
  }
  componentWillLoad() {
    f(this, w, {
      ...n(this.host),
      ...d(this.host, [ "tabindex", "title", "data-form-type" ])
    }, "f");
    a.apply(this, "pop-input", {
      type: "text",
      multiple: false,
      required: false,
      readonly: false,
      disabled: false,
      autoFocus: false,
      spellcheck: false,
      autoComplete: "off",
      autoCapitalize: "off",
      autoCorrect: "off",
      bordered: false,
      size: s.get("defaultSize", "md"),
      counter: false,
      counterFormatter: (e, t) => `${e} / ${t}`,
      debounce: 0
    });
    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
  }
  disconnectedCallback() {
    clearTimeout(u(this, k, "f"));
  }
  /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */  async setFocus() {
    u(this, v, "f")?.focus();
  }
  render() {
    const {host: e, errorText: t, helperText: o} = this;
    const a = u(this, m, "f");
    const s = u(this, b, "a", g);
    const n = e.textContent !== "";
    const d = !!t;
    const l = !!o;
    const p = s !== "";
    const k = d || l || p;
    return r(i, {
      key: "156d8698b3586211975c378438d113f03c8eb057",
      "aria-labelledby": a,
      "aria-hidden": this.disabled ? "true" : null,
      class: {
        "join-item": h(e, "pop-join")
      }
    }, r(c, {
      key: "01fb16ccab8db1f9cffea1fde876ce70db84301e",
      when: n
    }, r("div", {
      key: "c3ba75b6c724dd6e637ee64df3fdd44aadf27c28",
      class: "label"
    }, r("label", {
      key: "5325e7d58852b64fafc53ef0d66a03b76c2f7f0b",
      htmlFor: a,
      part: "label"
    }, r("slot", {
      key: "a0b0389cf608060c4144df7be98a66c77c6168f1"
    })))), r("label", {
      key: "510f3a1d4ac199c2e66c8bb53bd76bccd7c9ace3",
      htmlFor: a,
      class: "input-wrapper"
    }, r("slot", {
      key: "edc01e0ea30d4e39a092d256f02024a64025b250",
      name: "start"
    }), r("input", {
      key: "7a7a6a760e9fe85341e41347a09bcc52322f4eb1",
      part: "native",
      id: a,
      name: this.name,
      type: this.type,
      placeholder: this.placeholder || "",
      min: this.min,
      max: this.max,
      step: this.step,
      value: this.value,
      multiple: this.multiple,
      pattern: this.pattern,
      minLength: this.minLength,
      maxLength: this.maxLength,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      autoFocus: this.autoFocus,
      inputMode: this.keyboard,
      enterKeyHint: this.enterkeyhint,
      spellcheck: this.spellcheck,
      autoComplete: this.autoComplete,
      autoCapitalize: this.autoCapitalize,
      autoCorrect: this.autoCorrect,
      onChange: u(this, x, "f"),
      onInput: u(this, z, "f"),
      onFocus: u(this, C, "f"),
      onBlur: u(this, j, "f"),
      ref: e => f(this, v, e, "f"),
      ...u(this, w, "f")
    }), r("slot", {
      key: "c8e35b021a8d5d5bef5f816a2f7c262e82e385e1",
      name: "end"
    })), r(c, {
      key: "33b00b9344a7f5d938cbdb162fadb484f3e93b9e",
      when: k
    }, r("div", {
      key: "0ec83c6d40092fdbd560496c4227bc42df015fb1",
      class: "text-wrapper"
    }, r(c, {
      key: "1604058e94c330d5823e0ef45abe53acf421429a",
      when: d
    }, r("span", {
      key: "7b0ac2afd902dcfd94eb9b56b4b85a19d3d30fd4",
      class: "error-text"
    }, t)), r(c, {
      key: "9b5c89647671590daac073da6d6dccc44d88c5f6",
      when: l
    }, r("span", {
      key: "062e40f538a061828a6db67cd6515f1b9b36f894",
      class: "helper-text"
    }, o)), r(c, {
      key: "7586259defe61fe670c806360afe0c14d8836c4b",
      when: p
    }, r("span", {
      key: "ed32a05e0dc3451d2d528702292f39be0f6cfaf4",
      class: "counter-text"
    }, s)))));
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

m = new WeakMap, w = new WeakMap, v = new WeakMap, k = new WeakMap, x = new WeakMap, 
z = new WeakMap, C = new WeakMap, j = new WeakMap, b = new WeakSet, y = function _Input_getValue() {
  if (typeof this.value === "number") return this.value.toString();
  return this.value || "";
}, g = function _Input_counterText_get() {
  const {counter: e, maxLength: t, counterFormatter: r} = this;
  if (!e || t < 0) return "";
  const i = u(this, b, "m", y).call(this).length;
  return r(i, t);
};

let W = 0;

T.style = p;

export { T as pop_input };
//# sourceMappingURL=p-689e0efe.entry.js.map