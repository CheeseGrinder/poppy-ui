var e = undefined && undefined.__classPrivateFieldGet || function(e, t, n, r) {
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
};

var t = undefined && undefined.__classPrivateFieldSet || function(e, t, n, r, i) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
};

var n, r, i;

class o {
  constructor() {
    n.add(this);
    r.set(this, void 0);
  }
  /**
     * Removes the click listener from the trigger element.
     */  removeListener() {
    e(this, r, "f")?.call(this);
    t(this, r, undefined, "f");
  }
  /**
     * Adds a click listener to the trigger element.
     * Presents the overlay when the trigger is clicked.
     *
     * @param overlay The overlay element.
     * @param trigger The ID of the element to add a click listener to.
     */  addListener(o, s, a = "click") {
    this.removeListener();
    const c = s !== undefined ? document.getElementById(s) : null;
    if (!c) {
      console.warn(`[Poppy Warning]: A trigger element with the ID "${s}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, o);
      return;
    }
    const configureTriggerInteraction = (t, r) => {
      const openOverlay = e => {
        e.preventDefault();
        r.present();
      };
      t.addEventListener(e(this, n, "m", i).call(this, a), openOverlay);
      return () => {
        t.removeEventListener(e(this, n, "m", i).call(this, a), openOverlay);
      };
    };
    t(this, r, configureTriggerInteraction(c, o), "f");
  }
  static create() {
    return new o;
  }
}

r = new WeakMap, n = new WeakSet, i = function _TriggerController_getEvent(e) {
  const t = {
    click: "click",
    hover: "mouseenter",
    "context-menu": "contextmenu"
  };
  return t[e];
};

export { o as T };
//# sourceMappingURL=p-31ba1818.js.map