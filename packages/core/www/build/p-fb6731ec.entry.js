import { r as t, h as e, H as i, c as r, g as s } from "./p-e8f36a8b.js";

import { c as o } from "./p-da5609ce.js";

import { a as n } from "./p-622ca0a1.js";

const a = ":host{--background:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964));position:relative;display:inline-flex;aspect-ratio:1}:host>div{display:grid;place-items:center;width:100%;overflow:hidden;min-width:24px;background-color:var(--background);color:var(--color)}:host ::slotted(pop-img),:host ::slotted(img){height:100%;width:100%;object-fit:cover}";

const h = a;

const c = class {
  constructor(e) {
    t(this, e);
    this.placeholder = false;
  }
  componentWillLoad() {
    o.apply(this, "pop-avatar", {
      placeholder: false
    });
  }
  render() {
    return e(i, {
      key: "8e1b6a5e56112f218a68a6ef5698a24d44948702"
    }, e("div", {
      key: "6738b92a3020afebcf7ac0ca6cd4ca7c699fa508"
    }, e("slot", {
      key: "173561ac4ca5e608e13811fdfd487ea7c0d67c10"
    })));
  }
};

c.style = h;

const d = ":host{display:block;object-fit:contain}:host>img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";

const f = d;

var p = undefined && undefined.__classPrivateFieldGet || function(t, e, i, r) {
  if (i === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e === "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? r : i === "a" ? r.call(t) : r ? r.value : e.get(t);
};

var l = undefined && undefined.__classPrivateFieldSet || function(t, e, i, r, s) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e === "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i;
};

var u, w, b, m, g, v, k, y, j;

const I = class {
  constructor(e) {
    t(this, e);
    this.popWillLoad = r(this, "popWillLoad", 7);
    this.popDidLoad = r(this, "popDidLoad", 7);
    this.popError = r(this, "popError", 7);
    u.add(this);
    w.set(this, void 0);
    b.set(this, {});
    m.set(this, void 0);
    y.set(this, (() => {
      this.popDidLoad.emit();
    }));
    j.set(this, (() => {
      this.popError.emit();
    }));
    this.loadSrc = undefined;
    this.loadError = undefined;
    this.src = undefined;
    this.alt = undefined;
  }
  onSrcChange() {
    p(this, u, "m", g).call(this);
  }
  componentWillLoad() {
    l(this, b, n(this.host, [ "draggable" ]), "f");
  }
  componentDidLoad() {
    p(this, u, "m", g).call(this);
  }
  render() {
    const {draggable: t} = p(this, b, "f");
    return e(i, {
      key: "6a1efeb0fa488dd5e40bb9b73bf9494d4630cab4"
    }, e("img", {
      key: "40a8041382f1358fcedb5c7590b05678d585ae5e",
      part: "image",
      loading: "eager",
      // decoding="sync"
      src: this.loadSrc,
      alt: this.alt || "",
      onLoad: p(this, y, "f"),
      onError: p(this, j, "f"),
      draggable: isDraggable(t),
      ref: t => l(this, w, t, "f")
    }));
  }
  get host() {
    return s(this);
  }
  static get watchers() {
    return {
      src: [ "onSrcChange" ]
    };
  }
};

w = new WeakMap, b = new WeakMap, m = new WeakMap, y = new WeakMap, j = new WeakMap, 
u = new WeakSet, g = function _Img_initObserver() {
  if (!this.src) return;
  if (supportIntersectionObserver()) {
    p(this, u, "m", v).call(this);
    l(this, m, new IntersectionObserver((t => {
      if (t.at(-1).isIntersecting) {
        p(this, u, "m", k).call(this);
        p(this, u, "m", v).call(this);
      }
    })), "f");
    p(this, m, "f").observe(this.host);
  } else {
    p(this, w, "f").loading = "lazy";
    p(this, u, "m", k).call(this);
  }
}, v = function _Img_removeObserver() {
  p(this, m, "f")?.disconnect();
  l(this, m, undefined, "f");
}, k = function _Img_load() {
  this.loadError = p(this, j, "f");
  this.loadSrc = this.src;
  this.popWillLoad.emit();
};

function supportIntersectionObserver() {
  return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
}

/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */ const isDraggable = t => {
  switch (t) {
   case "true":
    return true;

   case "false":
    return false;

   default:
    return undefined;
  }
};

I.style = f;

export { c as pop_avatar, I as pop_img };
//# sourceMappingURL=p-fb6731ec.entry.js.map