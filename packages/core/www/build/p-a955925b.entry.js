import { r as t, h as o, H as e } from "./p-e8f36a8b.js";

import { c as s } from "./p-da5609ce.js";

const i = ":host{position:relative;display:inline-grid;place-content:center;user-select:none;cursor:pointer}:host ::slotted(*){grid-column-start:1;grid-row-start:1;transition-duration:0.3s;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-property:transform, opacity}:host(:not([active])) ::slotted([slot=on]){opacity:0;z-index:0}:host(:not([active])) ::slotted([slot=off]){opacity:1;z-index:1}:host([active]) ::slotted([slot=on]){opacity:1;z-index:1}:host([active]) ::slotted([slot=off]){opacity:0;z-index:0}:host([type=rotate]:not([active])) ::slotted([slot=on]){transform:rotate(45deg)}:host([type=rotate][active]) ::slotted([slot=on]){transform:rotate(0deg)}:host([type=rotate][active]) ::slotted([slot=off]){transform:rotate(-45deg)}:host([type=flip]) ::slotted([slot=on]){opacity:1;z-index:1;backface-visibility:hidden}:host([type=flip]) ::slotted([slot=off]){opacity:1;z-index:1;backface-visibility:hidden}:host([type=flip]:not([active])) ::slotted([slot=on]){transform:rotateY(180deg)}:host([type=flip][active]) ::slotted([slot=on]){transform:rotateY(0deg)}:host([type=flip][active]) ::slotted([slot=off]){transform:rotateY(-180deg)}";

const a = i;

const n = class {
  constructor(o) {
    t(this, o);
    this.type = undefined;
    this.active = undefined;
  }
  /**
     * Activates the swap on hover.
     */
  // @Prop({ reflect: true, mutable: true }) swapOnHover?: boolean;
  componentWillLoad() {
    s.apply(this, "pop-swap", {
      type: "rotate",
      active: false
    });
  }
  // #onClick = (): void => {
  //   if (!this.swapOnHover) this.active = !this.active;
  // };
  render() {
    return o(e, {
      key: "a1172ef6f9fd04e920f25ced203bd47092112095"
    }, o("slot", {
      key: "e46d8eb53e0077765f7b4861c9afe5960ff8f683",
      name: "off"
    }), o("slot", {
      key: "b1bd20ae6f4eb4d254cab89f3e5cd9afdb7a9827",
      name: "on"
    }));
  }
};

n.style = a;

export { n as pop_swap };
//# sourceMappingURL=p-a955925b.entry.js.map