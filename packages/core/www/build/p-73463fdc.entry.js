import { r as e, h as i, H as t } from "./p-e8f36a8b.js";

import { c as o, a as r } from "./p-da5609ce.js";

const n = ":host{width:min-content}:host>kbd{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;border-style:solid;border-radius:var(--border-radius, var(--radius-md, 8px));border-width:1px;border-bottom-width:2px;border-color:var(--border-color, oklch(var(--base-content, 0.746477 0.0216 264.435964)/0.2));background-color:var(--background, oklch(var(--base-200, 0.232607 0.013807 253.100675)));font-family:var(--font, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Vazirmatn, Courier New, monospace);font-feature-settings:normal;font-variation-settings:normal;user-select:none}:host([size=xs])>kbd{padding-left:0.25rem;padding-right:0.25rem;min-height:1.2em;min-width:1.2em;font-size:0.75rem;line-height:1rem}:host([size=sm])>kbd{padding-left:0.25rem;padding-right:0.25rem;min-height:1.6em;min-width:1.6em;font-size:0.875rem;line-height:1.25rem}:host([size=md])>kbd,:host(:not([size]))>kbd{padding-left:0.5rem;padding-right:0.5rem;min-height:2.2em;min-width:2.2em;font-size:1rem;line-height:1.5rem}:host([size=lg])>kbd{padding-left:1rem;padding-right:1rem;min-height:2.5em;min-width:2.5em;font-size:1.125rem;line-height:1.75rem}";

const d = n;

const a = class {
  constructor(i) {
    e(this, i);
    this.size = undefined;
  }
  componentWillLoad() {
    o.apply(this, "pop-kbd", {
      size: r.get("defaultSize", "md")
    });
  }
  render() {
    return i(t, {
      key: "2abf0f6336ce6062cb3ac7249386f5780c0968da"
    }, i("kbd", {
      key: "ba68c17b588ea1a1578d29619ca7b00454cf41f9",
      part: "native"
    }, i("slot", {
      key: "6f132f2d268b435307857e1d82ae06216dc936bf"
    })));
  }
};

a.style = d;

export { a as pop_kbd };
//# sourceMappingURL=p-73463fdc.entry.js.map