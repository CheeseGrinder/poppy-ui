import { r as o, h as e, H as t } from "./p-e8f36a8b.js";

import { c as r } from "./p-da5609ce.js";

import { i as a } from "./p-e525cd6a.js";

const n = ':host{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.1);display:flex;align-items:center;align-self:stretch;white-space:nowrap}:host::before,:host::after{content:"";flex-grow:1;background-color:var(--background)}:host(:not(:empty)){gap:1rem}:host([orientation=horizontal]){margin:1rem 0;width:100%;height:1rem}:host([orientation=horizontal])::before,:host([orientation=horizontal])::after{width:100%;height:0.125rem}:host([orientation=vertical]){flex-direction:column;margin:0 1rem;width:1rem;height:auto}:host([orientation=vertical])::before,:host([orientation=vertical])::after{width:0.125rem;height:100%}:host([placement=left])::before{display:none}:host([placement=left].divider-rtl)::before{display:block}:host([placement=left].divider-rtl)::after{display:none}:host([placement=start])::before{display:none}:host([placement=end])::after{display:none}:host([placement=right])::after{display:none}:host([placement=right].divider-rtl)::before{display:none}:host([placement=right].divider-rtl)::after{display:block}:host([color=primary]){--background:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--background:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--background:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=neutral]){--background:oklch(var(--neutral, 0.313815 0.021108 254.139175))}:host([color=info]){--background:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--background:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--background:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--background:oklch(var(--error, 0.7176 0.221 22.18))}';

const c = n;

const i = class {
  constructor(e) {
    o(this, e);
    this.orientation = undefined;
    this.placement = undefined;
    this.color = undefined;
  }
  componentWillLoad() {
    r.apply(this, "pop-divider", {
      orientation: "horizontal",
      placement: "center"
    });
  }
  render() {
    return e(t, {
      key: "59de99a2829e7d7f09e63a025c3454555c71cece",
      class: {
        "divider-rtl": a(this)
      }
    }, e("slot", {
      key: "ac252a08d1c7ac0de17293fe66c5bcc22e2cb720"
    }));
  }
};

i.style = c;

export { i as pop_divider };
//# sourceMappingURL=p-6a92c5be.entry.js.map