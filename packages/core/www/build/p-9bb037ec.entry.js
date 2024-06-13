import { r as o, h as t, H as r } from "./p-e8f36a8b.js";

import { c as a } from "./p-da5609ce.js";

const p = 'pop-tooltip{--tail:0.1875rem;--bg:var(--background, oklch(var(--neutral, 0.313815 0.021108 254.139175) / var(--background-opacity, 1)));position:relative;display:inline-flex;text-align:center}pop-tooltip:before,pop-tooltip:after{position:absolute;opacity:0;z-index:1;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:ease-in-out;transition-duration:200ms;transition-delay:100ms}pop-tooltip:before{--offset:calc(100% + 1px + var(--tail, 0px));content:attr(data-tip);max-width:20rem;border-radius:var(--radius-sm, 4px);padding:0.5rem 0.25rem;font-size:0.875rem;line-height:1.25rem;background-color:var(--bg);color:var(--color, oklch(var(--neutral-content, 0.746477 0.0216 264.435964)/var(--text-opacity, 1)));width:max-content;pointer-events:none}pop-tooltip:after{--tail-offset:calc(100% + 0.0625rem - var(--tail));content:"";border-style:solid;border-width:var(--tail, 0);width:0;height:0}pop-tooltip[data-tip][open]::before,pop-tooltip[data-tip][open]::after,pop-tooltip[data-tip]:hover::before,pop-tooltip[data-tip]:hover::after,pop-tooltip[data-tip]:has(:focus-visible)::before,pop-tooltip[data-tip]:has(:focus-visible)::after{opacity:1;transition-delay:75ms}pop-tooltip:not([position]):before,pop-tooltip:not([position]):after,pop-tooltip[position=top]:before,pop-tooltip[position=top]:after{transform:translateX(-50%);top:auto;left:50%;right:auto}pop-tooltip:not([position]):before,pop-tooltip[position=top]:before{bottom:var(--offset)}pop-tooltip:not([position]):after,pop-tooltip[position=top]:after{border-color:var(--bg) transparent transparent transparent;bottom:var(--tail-offset)}pop-tooltip[position=bottom]:before,pop-tooltip[position=bottom]:after{transform:translateX(-50%);left:50%;right:auto;bottom:auto}pop-tooltip[position=bottom]:before{top:var(--offset)}pop-tooltip[position=bottom]:after{border-color:transparent transparent var(--bg) transparent;top:var(--tail-offset)}pop-tooltip[position=left]:before,pop-tooltip[position=left]:after{transform:translateY(-50%);top:50%;left:auto;bottom:auto}pop-tooltip[position=left]:before{right:var(--offset)}pop-tooltip[position=left]:after{border-color:transparent transparent transparent var(--bg);right:calc(var(--tail-offset) + 0.0625rem)}pop-tooltip[position=right]:before,pop-tooltip[position=right]:after{transform:translateY(-50%);top:50%;right:auto;bottom:auto}pop-tooltip[position=right]:before{left:var(--offset)}pop-tooltip[position=right]:after{border-color:transparent var(--bg) transparent transparent;left:calc(var(--tail-offset) + 0.0625rem)}pop-tooltip[color=primary]{--background:oklch(var(--primary, 0.6569 0.196 275.75) / var(--background-opacity, 1));--color:oklch(var(--primary-content, 0.13138 0.0392 275.75) / var(--text-opacity, 1))}pop-tooltip[color=secondary]{--background:oklch(var(--secondary, 0.748 0.26 342.55) / var(--background-opacity, 1));--color:oklch(var(--secondary-content, 0.1496 0.052 342.55) / var(--text-opacity, 1))}pop-tooltip[color=accent]{--background:oklch(var(--accent, 0.7451 0.167 183.61) / var(--background-opacity, 1));--color:oklch(var(--accent-content, 0.14902 0.0334 183.61) / var(--text-opacity, 1))}pop-tooltip[color=info]{--background:oklch(var(--info, 0.7206 0.191 231.6) / var(--background-opacity, 1));--color:oklch(var(--info-content, 0 0 0) / var(--text-opacity, 1))}pop-tooltip[color=success]{--background:oklch(var(--success, 64.8% 0.15 160) / var(--background-opacity, 1));--color:oklch(var(--success-content, 0 0 0) / var(--text-opacity, 1))}pop-tooltip[color=warning]{--background:oklch(var(--warning, 0.8471 0.199 83.87) / var(--background-opacity, 1));--color:oklch(var(--warning-content, 0 0 0) / var(--text-opacity, 1))}pop-tooltip[color=error]{--background:oklch(var(--error, 0.7176 0.221 22.18) / var(--background-opacity, 1));--color:oklch(var(--error-content, 0 0 0) / var(--text-opacity, 1))}';

const i = p;

const e = class {
  constructor(t) {
    o(this, t);
    this.value = undefined;
    this.color = undefined;
    this.position = undefined;
    this.open = false;
  }
  componentWillLoad() {
    a.apply(this, "pop-tooltip", {
      position: "top",
      open: false
    });
  }
  render() {
    const {value: o} = this;
    return t(r, {
      key: "4ff152c81203fb9cb775837c25ec0a84d0b07105",
      "data-tip": o
    }, t("slot", {
      key: "30ae23e65bbdba306b35972b8e68b1ebdca274ab"
    }));
  }
};

e.style = i;

export { e as pop_tooltip };
//# sourceMappingURL=p-9bb037ec.entry.js.map