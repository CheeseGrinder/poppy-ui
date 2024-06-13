import { r as i, h as o, H as t } from "./p-e8f36a8b.js";

import { c as r } from "./p-da5609ce.js";

const n = "pop-join{display:inline-flex}pop-join .join-item:not(:first-of-type,:last-of-type),pop-join .join-item:not(:first-child,:last-child),pop-join :not(:first-of-type,:last-of-type) .join-item,pop-join :not(:first-child,:last-child) .join-item{--border-radius:0;border-radius:0}pop-join .join-item:focus{isolation:isolate}pop-join[orientation=horizontal] :first-child:has(.join-item) .join-item,pop-join[orientation=horizontal] .join-item:first-child,pop-join:not([orientation]) :first-child:has(.join-item) .join-item,pop-join:not([orientation]) .join-item:first-child{--border-radius-start-end:0;--border-radius-end-end:0;border-start-end-radius:0;border-end-end-radius:0}pop-join[orientation=horizontal] :last-child:has(.join-item) .join-item,pop-join[orientation=horizontal] .join-item:last-child:not(:first-child),pop-join:not([orientation]) :last-child:has(.join-item) .join-item,pop-join:not([orientation]) .join-item:last-child:not(:first-child){--border-radius-start-start:0;--border-radius-end-start:0;border-start-start-radius:0;border-end-start-radius:0}pop-join[orientation=vertical]{flex-direction:column}pop-join[orientation=vertical] :first-child:has(.join-item) .join-item,pop-join[orientation=vertical] .join-item:first-child{--border-radius-end-start:0;--border-radius-end-end:0;border-end-start-radius:0;border-end-end-radius:0}pop-join[orientation=vertical] :last-child:has(.join-item) .join-item,pop-join[orientation=vertical] .join-item:last-child:not(:first-child){--border-radius-start-start:0;--border-radius-start-end:0;border-start-start-radius:0;border-start-end-radius:0}";

const e = n;

const a = class {
  constructor(o) {
    i(this, o);
    this.orientation = undefined;
  }
  componentWillLoad() {
    r.apply(this, "pop-join", {
      orientation: "horizontal"
    });
  }
  render() {
    return o(t, {
      key: "fe103196d96c5cb9057c14948319798335319533"
    }, o("slot", {
      key: "88faf73b48cd7a2c4fca0ac1d8c56b5f82ba7d96"
    }));
  }
};

a.style = e;

export { a as pop_join };
//# sourceMappingURL=p-f0cc0bc3.entry.js.map