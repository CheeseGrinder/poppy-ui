import { r as o, c as r, h as e, H as t, g as n } from "./p-e8f36a8b.js";

import { c as a, a as i } from "./p-da5609ce.js";

import { i as c, a as s, h as l } from "./p-622ca0a1.js";

import { S as d } from "./p-e87048ef.js";

const h = ":host(.join-item)>input{border-start-start-radius:var(--border-radius-start-start, var(--border-radius, var(--radius-md, 8px)));border-end-start-radius:var(--border-radius-end-start, var(--border-radius, var(--radius-md, 8px)));border-start-end-radius:var(--border-radius-start-end, var(--border-radius, var(--radius-md, 8px)));border-end-end-radius:var(--border-radius-end-end, var(--border-radius, var(--radius-md, 8px)))}:host{display:inline-flex;flex-direction:column}:host>.label{display:flex;user-select:none;align-items:center;justify-content:space-between;padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem}:host>input+.text-wrapper{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap;padding:0.5rem 0.25rem;font-size:0.75rem;line-height:1rem}:host>input+.text-wrapper:empty{display:none}:host>input:not(:user-invalid)+.text-wrapper>.error-text{display:none}:host>input:user-invalid+.text-wrapper>.helper-text{display:none}:host .error-text{color:var(--error-color, oklch(var(--error, 0.7176 0.221 22.18)))}:host>input{box-sizing:border-box;overflow:hidden;padding:0;border-style:solid;border-width:1px;border-radius:var(--border-radius, var(--radius-md, 8px));border-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0));background-color:var(--background, oklch(var(--base-100, 0.253267 0.015896 252.417568)/var(--background-opacity, 1)));color:var(--color, oklch(var(--base-content, 0.746477 0.0216 264.435964)));min-width:12rem;width:100%;cursor:pointer}:host>input:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2))}:host>input::file-selector-button{border:none;padding-left:1rem;padding-right:1rem;height:100%;background-color:var(--button-background, oklch(var(--neutral, 0.313815 0.021108 254.139175)));color:var(--button-color, oklch(var(--neutral-content, 0.746477 0.0216 264.435964)));text-align:center;text-transform:uppercase;text-decoration-line:none;font-weight:600;cursor:pointer;user-select:none;transition-property:color, background-color, border-color, opacity;transition-timing-function:ease-out;transition-duration:200ms;animation:button-pop var(--button-animation, 0.25s) ease-out}:host([bordered]){--border-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2)}:host([size=xs])>input{padding-inline-end:0.5rem;height:1.5rem;font-size:0.75rem;line-height:1.625}:host([size=xs])>input::file-selector-button{margin-right:0.5rem;font-size:0.75rem}:host([size=sm])>input{padding-inline-end:0.75rem;height:2rem;font-size:0.875rem;line-height:2}:host([size=sm])>input::file-selector-button{margin-right:0.75rem;font-size:0.875rem}:host([size=md])>input,:host(:not([size]))>input{padding-inline-end:1rem;height:3rem;font-size:0.875rem;line-height:2}:host([size=md])>input::file-selector-button,:host(:not([size]))>input::file-selector-button{margin-right:1rem;font-size:0.875rem}:host([size=lg])>input{padding-inline-end:1.5rem;height:4rem;font-size:1.125rem;line-height:2}:host([size=lg])>input::file-selector-button{margin-right:1.5rem;font-size:1.125rem}:host([color=primary]){--button-background:oklch(var(--primary, 0.6569 0.196 275.75));--button-color:oklch(var(--primary-content, 0.13138 0.0392 275.75));--border-color:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=primary])>input:hover{--button-background:color-mix(in oklab, oklch(var(--primary, 0.6569 0.196 275.75)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=primary])>input:hover{--button-background:oklch(var(--primary-shade, 59% 0.181 275.81))}}:host([color=secondary]){--button-background:oklch(var(--secondary, 0.748 0.26 342.55));--button-color:oklch(var(--secondary-content, 0.1496 0.052 342.55));--border-color:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=secondary])>input:hover{--button-background:color-mix(in oklab, oklch(var(--secondary, 0.748 0.26 342.55)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=secondary])>input:hover{--button-background:oklch(var(--secondary-shade, 67.31% 0.233 342.57))}}:host([color=accent]){--button-background:oklch(var(--accent, 0.7451 0.167 183.61));--button-color:oklch(var(--accent-content, 0.14902 0.0334 183.61));--border-color:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=accent])>input:hover{--button-background:color-mix(in oklab, oklch(var(--accent, 0.7451 0.167 183.61)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=accent])>input:hover{--button-background:oklch(var(--accent-shade, 68.49% 0.1229427781 181.6698834793))}}:host([color=info]){--button-background:oklch(var(--info, 0.7206 0.191 231.6));--button-color:oklch(var(--info-content, 0 0 0));--border-color:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=info])>input:hover{--button-background:color-mix(in oklab, oklch(var(--info, 0.7206 0.191 231.6)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=info])>input:hover{--button-background:oklch(var(--info-shade, 66.25% 0.1498779989 239.253594275))}}:host([color=success]){--button-background:oklch(var(--success, 64.8% 0.15 160));--button-color:oklch(var(--success-content, 0 0 0));--border-color:oklch(var(--success, 64.8% 0.15 160))}:host([color=success])>input:hover{--button-background:color-mix(in oklab, oklch(var(--success, 64.8% 0.15 160)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=success])>input:hover{--button-background:oklch(var(--success-shade, 58.5% 0.133 159.63))}}:host([color=warning]){--button-background:oklch(var(--warning, 0.8471 0.199 83.87));--button-color:oklch(var(--warning-content, 0 0 0));--border-color:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=warning])>input:hover{--button-background:color-mix(in oklab, oklch(var(--warning, 0.8471 0.199 83.87)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=warning])>input:hover{--button-background:oklch(var(--warning-shade, 76.51% 0.158561541 79.7738362662))}}:host([color=error]){--button-background:oklch(var(--error, 0.7176 0.221 22.18));--button-color:oklch(var(--error-content, 0 0 0));--border-color:oklch(var(--error, 0.7176 0.221 22.18))}:host([color=error])>input:hover{--button-background:color-mix(in oklab, oklch(var(--error, 0.7176 0.221 22.18)) 90%, black)}@supports (color: color-mix(in oklab, black, black)){:host([color=error])>input:hover{--button-background:oklch(var(--error-shade, 64.53% 0.198 22.33))}}:host(:not([color],[disabled]))>input:hover{--button-background:color-mix(in oklab, oklch(var(--neutral, 0.313815 0.021108 254.139175)) 90%, black)}@supports not (color: color-mix(in oklab, black, black)){:host(:not([color],[disabled]))>input:hover{--button-background:oklch(var(--neutral-shade, 28.22% 0.019 254.82))}}:host([color=ghost]){--background-opacity:0.05;--button-background:transparent;--button-color:currentColor}:host([color=ghost])>input:focus{--background-opacity:1;color:var(--text-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)))}:host([disabled]){--background:oklch(var(--base-200, 0.232607 0.013807 253.100675));--border-color:oklch(var(--base-200, 0.232607 0.013807 253.100675));--color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--button-color:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--button-background:oklch(var(--neutral, 0.313815 0.021108 254.139175) / 0.2)}:host([disabled])>input,:host([disabled]) input::file-selector-button{cursor:not-allowed}";

const u = h;

var b = undefined && undefined.__classPrivateFieldGet || function(o, r, e, t) {
  if (e === "a" && !t) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r === "function" ? o !== r || !t : !r.has(o)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? t : e === "a" ? t.call(o) : t ? t.value : r.get(o);
};

var p = undefined && undefined.__classPrivateFieldSet || function(o, r, e, t, n) {
  if (t === "m") throw new TypeError("Private method is not writable");
  if (t === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r === "function" ? o !== r || !n : !r.has(o)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t === "a" ? n.call(o, e) : n ? n.value = e : r.set(o, e), e;
};

var k, f, v, m, g, y, w, x, z;

const j = class {
  constructor(e) {
    o(this, e);
    this.popChange = r(this, "popChange", 7);
    this.popFocus = r(this, "popFocus", 7);
    this.popBlur = r(this, "popBlur", 7);
    if (e.$hostElement$["s-ei"]) {
      this.internals = e.$hostElement$["s-ei"];
    } else {
      this.internals = e.$hostElement$.attachInternals();
      e.$hostElement$["s-ei"] = this.internals;
    }
    k.add(this);
    f.set(this, `pop-input-file-${C++}`);
    v.set(this, void 0);
    m.set(this, void 0);
    g.set(this, void 0);
    w.set(this, (() => {
      this.popChange.emit({
        value: b(this, k, "m", y).call(this)
      });
    }));
    x.set(this, (() => {
      this.popFocus.emit();
    }));
    z.set(this, (() => {
      this.popBlur.emit();
    }));
    this.name = b(this, f, "f");
    this.value = undefined;
    this.multiple = undefined;
    this.required = undefined;
    this.readonly = undefined;
    this.disabled = undefined;
    this.autoFocus = undefined;
    this.bordered = undefined;
    this.color = undefined;
    this.size = undefined;
    this.helperText = undefined;
    this.errorText = undefined;
  }
  onValueChange(o) {
    this.internals.setFormValue(o, o);
  }
  formResetCallback() {
    this.value = null;
    b(this, m, "f").value = null;
  }
  formStateRestoreCallback(o) {
    this.value = o;
  }
  componentWillLoad() {
    p(this, v, {
      ...c(this.host),
      ...s(this.host, [ "tabindex", "title", "data-form-type" ])
    }, "f");
    a.apply(this, "pop-input-file", {
      multiple: false,
      required: false,
      readonly: false,
      disabled: false,
      autoFocus: false,
      bordered: false,
      size: i.get("defaultSize", "md")
    });
  }
  // TODO: Tester si ça fonctionne
  componentDidLoad() {
    const {value: o} = this;
    const r = Array.isArray(o) ? o : [ o ];
    r.forEach(((o, r) => b(this, m, "f").files[r] = o));
  }
  disconnectedCallback() {
    clearTimeout(b(this, g, "f"));
  }
  /**
     * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */  async setFocus() {
    b(this, m, "f")?.focus();
  }
  render() {
    const {host: o, errorText: r, helperText: n} = this;
    const a = b(this, f, "f");
    const i = o.textContent !== "";
    const c = !!r;
    const s = !!n;
    const h = c || s;
    return e(t, {
      key: "62641a85a66037deecff024a3d635d2e9e341d79",
      "aria-labelledby": a,
      "aria-hidden": this.disabled ? "true" : null,
      class: {
        "join-item": l(o, "pop-join")
      }
    }, e(d, {
      key: "07978938ea5031786051c40c15904d6196779658",
      when: i
    }, e("div", {
      key: "25d14c60481ace522b1d8eb8c94c84b4c8b17a9b",
      class: "label"
    }, e("label", {
      key: "0d95bb785807360ba333a0b80faf814608b4f44e",
      htmlFor: a,
      part: "label"
    }, e("slot", {
      key: "c8bc583c2a30675b40cb6b20bf40b639b4954944"
    })))), e("input", {
      key: "1190726c0b61aacb0b267c9ed810c7dfc900c4a2",
      part: "native",
      type: "file",
      id: a,
      name: this.name,
      multiple: this.multiple,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      autoFocus: this.autoFocus,
      onChange: b(this, w, "f"),
      onFocus: b(this, x, "f"),
      onBlur: b(this, z, "f"),
      ref: o => p(this, m, o, "f"),
      ...b(this, v, "f")
    }), e(d, {
      key: "c08dba8f02b5bb7a20efcb363ed55db38654c9d9",
      when: h
    }, e("div", {
      key: "ce2e583f86dc090884dbe183e69c8541cd708a9e",
      class: "text-wrapper"
    }, e(d, {
      key: "8f0e73779845eff9f3c892caf7c78d8334f46e6a",
      when: c
    }, e("span", {
      key: "73aeb106598f17851871f45667c76f6ff0450178",
      class: "error-text"
    }, r)), e(d, {
      key: "a13bacc4698a7e77a8f1bcace0ad56a2f6617f15",
      when: s
    }, e("span", {
      key: "f354a63b6f6540003d211d46f584b9eb69062f20",
      class: "helper-text"
    }, n)))));
  }
  static get formAssociated() {
    return true;
  }
  get host() {
    return n(this);
  }
  static get watchers() {
    return {
      value: [ "onValueChange" ]
    };
  }
};

f = new WeakMap, v = new WeakMap, m = new WeakMap, g = new WeakMap, w = new WeakMap, 
x = new WeakMap, z = new WeakMap, k = new WeakSet, y = function _InputFile_getValue() {
  return Array.from(b(this, m, "f").files);
};

let C = 0;

j.style = u;

export { j as pop_input_file };
//# sourceMappingURL=p-759addd0.entry.js.map