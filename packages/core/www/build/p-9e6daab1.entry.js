import { r, h as o, H as a } from "./p-e8f36a8b.js";

import { c as e } from "./p-da5609ce.js";

const s = ":host{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--background-active:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host>progress{appearance:none;position:relative;vertical-align:baseline;width:100%;overflow:hidden;height:0.5rem;border-radius:var(--border-radius, var(--radius-xl, 16px))}:host>progress::-webkit-progress-bar{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background)}:host>progress::-moz-progress-bar{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background)}:host>progress::-webkit-progress-value{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background-active)}:host>progress:indeterminate{background-image:repeating-linear-gradient(90deg, var(--background-active) -1%, var(--background-active) 10%, transparent 10%, transparent 90%);background-size:200%;background-position-x:15%;animation:progress-loading 5s ease-in-out infinite}@keyframes progress-loading{50%{background-position-x:-115%}}:host([color=primary]){--background-active:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--background-active:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--background-active:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--background-active:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--background-active:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--background-active:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--background-active:oklch(var(--error, 0.7176 0.221 22.18))}";

const c = s;

const n = class {
  constructor(o) {
    r(this, o);
    this.value = undefined;
    this.max = undefined;
    this.color = undefined;
  }
  componentWillLoad() {
    e.apply(this, "pop-progress", {
      max: 100
    });
  }
  render() {
    return o(a, {
      key: "beb467798124af45c3f73c988c3ee9f8b2404b72"
    }, o("progress", {
      key: "e77117458fdb5afc688538567d95dea0b4440d87",
      part: "native",
      value: this.value,
      max: this.max
    }, o("slot", {
      key: "e477b3efceea6ebf131d67319f667679560cee9a"
    })));
  }
};

n.style = c;

export { n as pop_progress };
//# sourceMappingURL=p-9e6daab1.entry.js.map