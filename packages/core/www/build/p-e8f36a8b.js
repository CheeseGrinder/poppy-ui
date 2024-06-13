const e = "poppy";

const t = /* poppy */ {
  allRenderFn: true,
  appendChildSlotFix: false,
  asyncLoading: true,
  asyncQueue: false,
  attachStyles: true,
  cloneNodeFix: false,
  cmpDidLoad: true,
  cmpDidRender: true,
  cmpDidUnload: false,
  cmpDidUpdate: false,
  cmpShouldUpdate: false,
  cmpWillLoad: true,
  cmpWillRender: true,
  cmpWillUpdate: false,
  connectedCallback: true,
  constructableCSS: true,
  cssAnnotations: true,
  devTools: false,
  disconnectedCallback: true,
  element: false,
  event: true,
  experimentalScopedSlotChanges: false,
  experimentalSlotFixes: false,
  formAssociated: true,
  hasRenderFn: true,
  hostListener: false,
  hostListenerTarget: false,
  hostListenerTargetBody: false,
  hostListenerTargetDocument: false,
  hostListenerTargetParent: false,
  hostListenerTargetWindow: false,
  hotModuleReplacement: false,
  hydrateClientSide: true,
  hydrateServerSide: false,
  hydratedAttribute: false,
  hydratedClass: true,
  hydratedSelectorName: "hydrated",
  initializeNextTick: false,
  invisiblePrehydration: true,
  isDebug: true,
  isDev: false,
  isTesting: false,
  lazyLoad: true,
  lifecycle: true,
  lifecycleDOMEvents: true,
  member: true,
  method: true,
  mode: false,
  observeAttribute: true,
  profile: false,
  prop: true,
  propBoolean: true,
  propMutable: true,
  propNumber: true,
  propString: true,
  reflect: true,
  scoped: false,
  scopedSlotTextContentFix: false,
  scriptDataOpts: false,
  shadowDelegatesFocus: true,
  shadowDom: true,
  slot: true,
  slotChildNodesFix: false,
  slotRelocation: true,
  state: true,
  style: true,
  svg: true,
  taskQueue: true,
  transformTagName: false,
  updatable: true,
  vdomAttribute: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomPropOrAttr: true,
  vdomRef: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  vdomXlink: true,
  watchCallback: true
};

/*
 Stencil Client Platform v4.18.3 | MIT Licensed | https://stenciljs.com
 */ var n = Object.defineProperty;

var __export = (e, t) => {
  for (var l in t) n(e, l, {
    get: t[l],
    enumerable: true
  });
};

// src/utils/constants.ts
var l = {};

var r = "http://www.w3.org/2000/svg";

var s = "http://www.w3.org/1999/xhtml";

// src/utils/helpers.ts
var isDef = e => e != null;

var isComplexType = e => {
  e = typeof e;
  return e === "object" || e === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(e) {
  var t, n, l;
  return (l = (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n.getAttribute("content")) != null ? l : void 0;
}

// src/utils/result.ts
var o = {};

__export(o, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});

var ok = e => ({
  isOk: true,
  isErr: false,
  value: e
});

var err = e => ({
  isOk: false,
  isErr: true,
  value: e
});

function map(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    if (n instanceof Promise) {
      return n.then((e => ok(e)));
    } else {
      return ok(n);
    }
  }
  if (e.isErr) {
    const t = e.value;
    return err(t);
  }
  throw "should never get here";
}

var unwrap = e => {
  if (e.isOk) {
    return e.value;
  } else {
    throw e.value;
  }
};

var unwrapErr = e => {
  if (e.isErr) {
    return e.value;
  } else {
    throw e.value;
  }
};

var createTime = (e, t = "") => {
  {
    return () => {};
  }
};

var uniqueTime = (e, t) => {
  {
    return () => {};
  }
};

// src/runtime/runtime-constants.ts
var i = "r";

var a = "o";

var f = "s";

var c = "t";

var u = "s-id";

var v = "sty-id";

var d = "c-id";

var m = "{visibility:hidden}.hydrated{visibility:inherit}";

var p = "slot-fb{display:contents}slot-fb[hidden]{display:none}";

var $ = "http://www.w3.org/1999/xlink";

var y = [ "formAssociatedCallback", "formResetCallback", "formDisabledCallback", "formStateRestoreCallback" ];

var h = (e, t, ...n) => {
  let l = null;
  let r = null;
  let s = null;
  let o = false;
  let i = false;
  const a = [];
  const walk = t => {
    for (let n = 0; n < t.length; n++) {
      l = t[n];
      if (Array.isArray(l)) {
        walk(l);
      } else if (l != null && typeof l !== "boolean") {
        if (o = typeof e !== "function" && !isComplexType(l)) {
          l = String(l);
        }
        if (o && i) {
          a[a.length - 1]._$$text$$_ += l;
        } else {
          a.push(o ? newVNode(null, l) : l);
        }
        i = o;
      }
    }
  };
  walk(n);
  if (t) {
    if (t.key) {
      r = t.key;
    }
    if (t.name) {
      s = t.name;
    }
    {
      const e = t.className || t.class;
      if (e) {
        t.class = typeof e !== "object" ? e : Object.keys(e).filter((t => e[t])).join(" ");
      }
    }
  }
  if (typeof e === "function") {
    return e(t === null ? {} : t, a, w);
  }
  const f = newVNode(e, null);
  f._$$attrs$$_ = t;
  if (a.length > 0) {
    f._$$children$$_ = a;
  }
  {
    f._$$key$$_ = r;
  }
  {
    f._$$name$$_ = s;
  }
  return f;
};

var newVNode = (e, t) => {
  const n = {
    _$$flags$$_: 0,
    _$$tag$$_: e,
    _$$text$$_: t,
    _$$elm$$_: null,
    _$$children$$_: null
  };
  {
    n._$$attrs$$_ = null;
  }
  {
    n._$$key$$_ = null;
  }
  {
    n._$$name$$_ = null;
  }
  return n;
};

var b = {};

var isHost = e => e && e._$$tag$$_ === b;

var w = {
  forEach: (e, t) => e.map(convertToPublic).forEach(t),
  map: (e, t) => e.map(convertToPublic).map(t).map(convertToPrivate)
};

var convertToPublic = e => ({
  vattrs: e._$$attrs$$_,
  vchildren: e._$$children$$_,
  vkey: e._$$key$$_,
  vname: e._$$name$$_,
  vtag: e._$$tag$$_,
  vtext: e._$$text$$_
});

var convertToPrivate = e => {
  if (typeof e.vtag === "function") {
    const t = {
      ...e.vattrs
    };
    if (e.vkey) {
      t.key = e.vkey;
    }
    if (e.vname) {
      t.name = e.vname;
    }
    return h(e.vtag, t, ...e.vchildren || []);
  }
  const t = newVNode(e.vtag, e.vtext);
  t._$$attrs$$_ = e.vattrs;
  t._$$children$$_ = e.vchildren;
  t._$$key$$_ = e.vkey;
  t._$$name$$_ = e.vname;
  return t;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (e, t, n, l) => {
  const r = createTime("hydrateClient", t);
  const s = e.shadowRoot;
  const o = [];
  const i = [];
  const a = s ? [] : null;
  const f = l._$$vnode$$_ = newVNode(t, null);
  if (!W._$$orgLocNodes$$_) {
    initializeDocumentHydrate(P.body, W._$$orgLocNodes$$_ =  new Map);
  }
  e[u] = n;
  e.removeAttribute(u);
  clientHydrate(f, o, i, a, e, e, n);
  o.map((e => {
    const n = e._$$hostId$$_ + "." + e._$$nodeId$$_;
    const l = W._$$orgLocNodes$$_.get(n);
    const r = e._$$elm$$_;
    if (l && U && l["s-en"] === "") {
      l.parentNode.insertBefore(r, l.nextSibling);
    }
    if (!s) {
      r["s-hn"] = t;
      if (l) {
        r["s-ol"] = l;
        r["s-ol"]["s-nr"] = r;
      }
    }
    W._$$orgLocNodes$$_.delete(n);
  }));
  if (s) {
    a.map((e => {
      if (e) {
        s.appendChild(e);
      }
    }));
  }
  r();
};

var clientHydrate = (e, t, n, l, r, s, o) => {
  let a;
  let u;
  let v;
  let m;
  if (s.nodeType === 1 /* ElementNode */) {
    a = s.getAttribute(d);
    if (a) {
      u = a.split(".");
      if (u[0] === o || u[0] === "0") {
        v = {
          _$$flags$$_: 0,
          _$$hostId$$_: u[0],
          _$$nodeId$$_: u[1],
          _$$depth$$_: u[2],
          _$$index$$_: u[3],
          _$$tag$$_: s.tagName.toLowerCase(),
          _$$elm$$_: s,
          _$$attrs$$_: null,
          _$$children$$_: null,
          _$$key$$_: null,
          _$$name$$_: null,
          _$$text$$_: null
        };
        t.push(v);
        s.removeAttribute(d);
        if (!e._$$children$$_) {
          e._$$children$$_ = [];
        }
        e._$$children$$_[v._$$index$$_] = v;
        e = v;
        if (l && v._$$depth$$_ === "0") {
          l[v._$$index$$_] = v._$$elm$$_;
        }
      }
    }
    for (m = s.childNodes.length - 1; m >= 0; m--) {
      clientHydrate(e, t, n, l, r, s.childNodes[m], o);
    }
    if (s.shadowRoot) {
      for (m = s.shadowRoot.childNodes.length - 1; m >= 0; m--) {
        clientHydrate(e, t, n, l, r, s.shadowRoot.childNodes[m], o);
      }
    }
  } else if (s.nodeType === 8 /* CommentNode */) {
    u = s.nodeValue.split(".");
    if (u[1] === o || u[1] === "0") {
      a = u[0];
      v = {
        _$$flags$$_: 0,
        _$$hostId$$_: u[1],
        _$$nodeId$$_: u[2],
        _$$depth$$_: u[3],
        _$$index$$_: u[4],
        _$$elm$$_: s,
        _$$attrs$$_: null,
        _$$children$$_: null,
        _$$key$$_: null,
        _$$name$$_: null,
        _$$tag$$_: null,
        _$$text$$_: null
      };
      if (a === c) {
        v._$$elm$$_ = s.nextSibling;
        if (v._$$elm$$_ && v._$$elm$$_.nodeType === 3 /* TextNode */) {
          v._$$text$$_ = v._$$elm$$_.textContent;
          t.push(v);
          s.remove();
          if (!e._$$children$$_) {
            e._$$children$$_ = [];
          }
          e._$$children$$_[v._$$index$$_] = v;
          if (l && v._$$depth$$_ === "0") {
            l[v._$$index$$_] = v._$$elm$$_;
          }
        }
      } else if (v._$$hostId$$_ === o) {
        if (a === f) {
          v._$$tag$$_ = "slot";
          if (u[5]) {
            s["s-sn"] = v._$$name$$_ = u[5];
          } else {
            s["s-sn"] = "";
          }
          s["s-sr"] = true;
          if (l) {
            v._$$elm$$_ = P.createElement(v._$$tag$$_);
            if (v._$$name$$_) {
              v._$$elm$$_.setAttribute("name", v._$$name$$_);
            }
            s.parentNode.insertBefore(v._$$elm$$_, s);
            s.remove();
            if (v._$$depth$$_ === "0") {
              l[v._$$index$$_] = v._$$elm$$_;
            }
          }
          n.push(v);
          if (!e._$$children$$_) {
            e._$$children$$_ = [];
          }
          e._$$children$$_[v._$$index$$_] = v;
        } else if (a === i) {
          if (l) {
            s.remove();
          } else {
            r["s-cr"] = s;
            s["s-cn"] = true;
          }
        }
      }
    }
  } else if (e && e._$$tag$$_ === "style") {
    const t = newVNode(null, s.textContent);
    t._$$elm$$_ = s;
    t._$$index$$_ = "0";
    e._$$children$$_ = [ t ];
  }
};

var initializeDocumentHydrate = (e, t) => {
  if (e.nodeType === 1 /* ElementNode */) {
    let n = 0;
    for (;n < e.childNodes.length; n++) {
      initializeDocumentHydrate(e.childNodes[n], t);
    }
    if (e.shadowRoot) {
      for (n = 0; n < e.shadowRoot.childNodes.length; n++) {
        initializeDocumentHydrate(e.shadowRoot.childNodes[n], t);
      }
    }
  } else if (e.nodeType === 8 /* CommentNode */) {
    const n = e.nodeValue.split(".");
    if (n[0] === a) {
      t.set(n[1] + "." + n[2], e);
      e.nodeValue = "";
      e["s-en"] = n[3];
    }
  }
};

var parsePropertyValue = (e, t) => {
  if (e != null && !isComplexType(e)) {
    if (t & 4 /* Boolean */) {
      return e === "false" ? false : e === "" || !!e;
    }
    if (t & 2 /* Number */) {
      return parseFloat(e);
    }
    if (t & 1 /* String */) {
      return String(e);
    }
    return e;
  }
  return e;
};

var getElement = e => getHostRef(e).$hostElement$
// src/runtime/event-emitter.ts
;

var createEvent = (e, t, n) => {
  const l = getElement(e);
  return {
    emit: e => emitEvent(l, t, {
      bubbles: !!(n & 4 /* Bubbles */),
      composed: !!(n & 2 /* Composed */),
      cancelable: !!(n & 1 /* Cancellable */),
      detail: e
    })
  };
};

var emitEvent = (e, t, n) => {
  const l = W.ce(t, n);
  e.dispatchEvent(l);
  return l;
};

var g =  new WeakMap;

var registerStyle = (e, t, n) => {
  let l = F.get(e);
  if (I && n) {
    l = l || new CSSStyleSheet;
    if (typeof l === "string") {
      l = t;
    } else {
      l.replaceSync(t);
    }
  } else {
    l = t;
  }
  F.set(e, l);
};

var addStyle = (e, t, n) => {
  var l;
  const r = getScopeId(t);
  const s = F.get(r);
  e = e.nodeType === 11 /* DocumentFragment */ ? e : P;
  if (s) {
    if (typeof s === "string") {
      e = e.head || e;
      let n = g.get(e);
      let o;
      if (!n) {
        g.set(e, n =  new Set);
      }
      if (!n.has(r)) {
        if (e.host && (o = e.querySelector(`[${v}="${r}"]`))) {
          o.innerHTML = s;
        } else {
          o = P.createElement("style");
          o.innerHTML = s;
          const t = (l = W._$$nonce$$_) != null ? l : queryNonceMetaTagContent(P);
          if (t != null) {
            o.setAttribute("nonce", t);
          }
          e.insertBefore(o, e.querySelector("link"));
        }
        if (t._$$flags$$_ & 4 /* hasSlotRelocation */) {
          o.innerHTML += p;
        }
        if (n) {
          n.add(r);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(s)) {
      e.adoptedStyleSheets = [ ...e.adoptedStyleSheets, s ];
    }
  }
  return r;
};

var attachStyles = e => {
  const t = e._$$cmpMeta$$_;
  const n = e.$hostElement$;
  const l = t._$$flags$$_;
  const r = createTime("attachStyles", t._$$tagName$$_);
  const s = addStyle(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
  if (l & 10 /* needsScopedEncapsulation */) {
    n["s-sc"] = s;
    n.classList.add(s + "-h");
  }
  r();
};

var getScopeId = (e, t) => "sc-" + e._$$tagName$$_;

var convertScopedToShadow = e => e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");

var setAccessor = (e, t, n, l, r, s) => {
  if (n !== l) {
    let o = isMemberInElement(e, t);
    let i = t.toLowerCase();
    if (t === "class") {
      const t = e.classList;
      const r = parseClassList(n);
      const s = parseClassList(l);
      t.remove(...r.filter((e => e && !s.includes(e))));
      t.add(...s.filter((e => e && !r.includes(e))));
    } else if (t === "style") {
      {
        for (const t in n) {
          if (!l || l[t] == null) {
            if (t.includes("-")) {
              e.style.removeProperty(t);
            } else {
              e.style[t] = "";
            }
          }
        }
      }
      for (const t in l) {
        if (!n || l[t] !== n[t]) {
          if (t.includes("-")) {
            e.style.setProperty(t, l[t]);
          } else {
            e.style[t] = l[t];
          }
        }
      }
    } else if (t === "key") ; else if (t === "ref") {
      if (l) {
        l(e);
      }
    } else if (!o && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-") {
        t = t.slice(3);
      } else if (isMemberInElement(E, i)) {
        t = i.slice(2);
      } else {
        t = i[2] + t.slice(3);
      }
      if (n || l) {
        const r = t.endsWith(k);
        t = t.replace(C, "");
        if (n) {
          W.rel(e, t, n, r);
        }
        if (l) {
          W.ael(e, t, l, r);
        }
      }
    } else {
      const a = isComplexType(l);
      if ((o || a && l !== null) && !r) {
        try {
          if (!e.tagName.includes("-")) {
            const r = l == null ? "" : l;
            if (t === "list") {
              o = false;
            } else if (n == null || e[t] != r) {
              e[t] = r;
            }
          } else {
            e[t] = l;
          }
        } catch (e) {}
      }
      let f = false;
      {
        if (i !== (i = i.replace(/^xlink\:?/, ""))) {
          t = i;
          f = true;
        }
      }
      if (l == null || l === false) {
        if (l !== false || e.getAttribute(t) === "") {
          if (f) {
            e.removeAttributeNS($, t);
          } else {
            e.removeAttribute(t);
          }
        }
      } else if ((!o || s & 4 /* isHost */ || r) && !a) {
        l = l === true ? "" : l;
        if (f) {
          e.setAttributeNS($, t, l);
        } else {
          e.setAttribute(t, l);
        }
      }
    }
  }
};

var S = /\s/;

var parseClassList = e => !e ? [] : e.split(S);

var k = "Capture";

var C = new RegExp(k + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (e, t, n) => {
  const r = t._$$elm$$_.nodeType === 11 /* DocumentFragment */ && t._$$elm$$_.host ? t._$$elm$$_.host : t._$$elm$$_;
  const s = e && e._$$attrs$$_ || l;
  const o = t._$$attrs$$_ || l;
  {
    for (const e of sortedAttrNames(Object.keys(s))) {
      if (!(e in o)) {
        setAccessor(r, e, s[e], void 0, n, t._$$flags$$_);
      }
    }
  }
  for (const e of sortedAttrNames(Object.keys(o))) {
    setAccessor(r, e, s[e], o[e], n, t._$$flags$$_);
  }
};

function sortedAttrNames(e) {
  return e.includes("ref") ? 
  // we need to sort these to ensure that `'ref'` is the last attr
  [ ...e.filter((e => e !== "ref")), "ref" ] : 
  // no need to sort, return the original array
  e;
}

// src/runtime/vdom/vdom-render.ts
var x;

var j;

var O;

var R = false;

var T = false;

var D = false;

var L = false;

var createElm = (e, t, n, l) => {
  var o;
  const i = t._$$children$$_[n];
  let a = 0;
  let f;
  let c;
  let u;
  if (!R) {
    D = true;
    if (i._$$tag$$_ === "slot") {
      if (x) {
        l.classList.add(x + "-s");
      }
      i._$$flags$$_ |= i._$$children$$_ ? 
      // slot element has fallback content
      // still create an element that "mocks" the slot element
      2 /* isSlotFallback */ : 
      // slot element does not have fallback content
      // create an html comment we'll use to always reference
      // where actual slot content should sit next to
      1 /* isSlotReference */;
    }
  }
  if (i._$$text$$_ !== null) {
    f = i._$$elm$$_ = P.createTextNode(i._$$text$$_);
  } else if (i._$$flags$$_ & 1 /* isSlotReference */) {
    f = i._$$elm$$_ = slotReferenceDebugNode(i);
  } else {
    if (!L) {
      L = i._$$tag$$_ === "svg";
    }
    f = i._$$elm$$_ = P.createElementNS(L ? r : s, i._$$flags$$_ & 2 /* isSlotFallback */ ? "slot-fb" : i._$$tag$$_);
    if (L && i._$$tag$$_ === "foreignObject") {
      L = false;
    }
    {
      updateElement(null, i, L);
    }
    if (isDef(x) && f["s-si"] !== x) {
      f.classList.add(f["s-si"] = x);
    }
    if (i._$$children$$_) {
      for (a = 0; a < i._$$children$$_.length; ++a) {
        c = createElm(e, i, a, f);
        if (c) {
          f.appendChild(c);
        }
      }
    }
    {
      if (i._$$tag$$_ === "svg") {
        L = false;
      } else if (f.tagName === "foreignObject") {
        L = true;
      }
    }
  }
  f["s-hn"] = O;
  {
    if (i._$$flags$$_ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      f["s-sr"] = true;
      f["s-cr"] = j;
      f["s-sn"] = i._$$name$$_ || "";
      f["s-rf"] = (o = i._$$attrs$$_) == null ? void 0 : o.ref;
      u = e && e._$$children$$_ && e._$$children$$_[n];
      if (u && u._$$tag$$_ === i._$$tag$$_ && e._$$elm$$_) {
        {
          putBackInOriginalLocation(e._$$elm$$_, false);
        }
      }
    }
  }
  return f;
};

var putBackInOriginalLocation = (e, n) => {
  W._$$flags$$_ |= 1 /* isTmpDisconnected */;
  const l = Array.from(e.childNodes);
  if (e["s-sr"] && t.experimentalSlotFixes) {
    let t = e;
    while (t = t.nextSibling) {
      if (t && t["s-sn"] === e["s-sn"] && t["s-sh"] === O) {
        l.push(t);
      }
    }
  }
  for (let e = l.length - 1; e >= 0; e--) {
    const t = l[e];
    if (t["s-hn"] !== O && t["s-ol"]) {
      insertBefore(parentReferenceNode(t), t, referenceNode(t));
      t["s-ol"].remove();
      t["s-ol"] = void 0;
      t["s-sh"] = void 0;
      D = true;
    }
    if (n) {
      putBackInOriginalLocation(t, n);
    }
  }
  W._$$flags$$_ &= ~1 /* isTmpDisconnected */;
};

var addVnodes = (e, t, n, l, r, s) => {
  let o = e["s-cr"] && e["s-cr"].parentNode || e;
  let i;
  if (o.shadowRoot && o.tagName === O) {
    o = o.shadowRoot;
  }
  for (;r <= s; ++r) {
    if (l[r]) {
      i = createElm(null, n, r, e);
      if (i) {
        l[r]._$$elm$$_ = i;
        insertBefore(o, i, referenceNode(t));
      }
    }
  }
};

var removeVnodes = (e, t, n) => {
  for (let l = t; l <= n; ++l) {
    const t = e[l];
    if (t) {
      const e = t._$$elm$$_;
      nullifyVNodeRefs(t);
      if (e) {
        {
          T = true;
          if (e["s-ol"]) {
            e["s-ol"].remove();
          } else {
            putBackInOriginalLocation(e, true);
          }
        }
        e.remove();
      }
    }
  }
};

var updateChildren = (e, t, n, l, r = false) => {
  let s = 0;
  let o = 0;
  let i = 0;
  let a = 0;
  let f = t.length - 1;
  let c = t[0];
  let u = t[f];
  let v = l.length - 1;
  let d = l[0];
  let m = l[v];
  let p;
  let $;
  while (s <= f && o <= v) {
    if (c == null) {
      c = t[++s];
    } else if (u == null) {
      u = t[--f];
    } else if (d == null) {
      d = l[++o];
    } else if (m == null) {
      m = l[--v];
    } else if (isSameVnode(c, d, r)) {
      patch(c, d, r);
      c = t[++s];
      d = l[++o];
    } else if (isSameVnode(u, m, r)) {
      patch(u, m, r);
      u = t[--f];
      m = l[--v];
    } else if (isSameVnode(c, m, r)) {
      if (c._$$tag$$_ === "slot" || m._$$tag$$_ === "slot") {
        putBackInOriginalLocation(c._$$elm$$_.parentNode, false);
      }
      patch(c, m, r);
      insertBefore(e, c._$$elm$$_, u._$$elm$$_.nextSibling);
      c = t[++s];
      m = l[--v];
    } else if (isSameVnode(u, d, r)) {
      if (c._$$tag$$_ === "slot" || m._$$tag$$_ === "slot") {
        putBackInOriginalLocation(u._$$elm$$_.parentNode, false);
      }
      patch(u, d, r);
      insertBefore(e, u._$$elm$$_, c._$$elm$$_);
      u = t[--f];
      d = l[++o];
    } else {
      i = -1;
      {
        for (a = s; a <= f; ++a) {
          if (t[a] && t[a]._$$key$$_ !== null && t[a]._$$key$$_ === d._$$key$$_) {
            i = a;
            break;
          }
        }
      }
      if (i >= 0) {
        $ = t[i];
        if ($._$$tag$$_ !== d._$$tag$$_) {
          p = createElm(t && t[o], n, i, e);
        } else {
          patch($, d, r);
          t[i] = void 0;
          p = $._$$elm$$_;
        }
        d = l[++o];
      } else {
        p = createElm(t && t[o], n, o, e);
        d = l[++o];
      }
      if (p) {
        {
          insertBefore(parentReferenceNode(c._$$elm$$_), p, referenceNode(c._$$elm$$_));
        }
      }
    }
  }
  if (s > f) {
    addVnodes(e, l[v + 1] == null ? null : l[v + 1]._$$elm$$_, n, l, o, v);
  } else if (o > v) {
    removeVnodes(t, s, f);
  }
};

var isSameVnode = (e, t, n = false) => {
  if (e._$$tag$$_ === t._$$tag$$_) {
    if (e._$$tag$$_ === "slot") {
      return e._$$name$$_ === t._$$name$$_;
    }
    if (!n) {
      return e._$$key$$_ === t._$$key$$_;
    }
    return true;
  }
  return false;
};

var referenceNode = e => e && e["s-ol"] || e;

var parentReferenceNode = e => (e["s-ol"] ? e["s-ol"] : e).parentNode;

var patch = (e, t, n = false) => {
  const l = t._$$elm$$_ = e._$$elm$$_;
  const r = e._$$children$$_;
  const s = t._$$children$$_;
  const o = t._$$tag$$_;
  const i = t._$$text$$_;
  let a;
  if (i === null) {
    {
      L = o === "svg" ? true : o === "foreignObject" ? false : L;
    }
    {
      if (o === "slot" && !R) ; else {
        updateElement(e, t, L);
      }
    }
    if (r !== null && s !== null) {
      updateChildren(l, r, t, s, n);
    } else if (s !== null) {
      if (e._$$text$$_ !== null) {
        l.textContent = "";
      }
      addVnodes(l, null, t, s, 0, s.length - 1);
    } else if (r !== null) {
      removeVnodes(r, 0, r.length - 1);
    }
    if (L && o === "svg") {
      L = false;
    }
  } else if (a = l["s-cr"]) {
    a.parentNode.textContent = i;
  } else if (e._$$text$$_ !== i) {
    l.data = i;
  }
};

var updateFallbackSlotVisibility = e => {
  const t = e.childNodes;
  for (const e of t) {
    if (e.nodeType === 1 /* ElementNode */) {
      if (e["s-sr"]) {
        const n = e["s-sn"];
        e.hidden = false;
        for (const l of t) {
          if (l !== e) {
            if (l["s-hn"] !== e["s-hn"] || n !== "") {
              if (l.nodeType === 1 /* ElementNode */ && (n === l.getAttribute("slot") || n === l["s-sn"]) || l.nodeType === 3 /* TextNode */ && n === l["s-sn"]) {
                e.hidden = true;
                break;
              }
            } else {
              if (l.nodeType === 1 /* ElementNode */ || l.nodeType === 3 /* TextNode */ && l.textContent.trim() !== "") {
                e.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(e);
    }
  }
};

var M = [];

var markSlotContentForRelocation = e => {
  let n;
  let l;
  let r;
  for (const s of e.childNodes) {
    if (s["s-sr"] && (n = s["s-cr"]) && n.parentNode) {
      l = n.parentNode.childNodes;
      const e = s["s-sn"];
      for (r = l.length - 1; r >= 0; r--) {
        n = l[r];
        if (!n["s-cn"] && !n["s-nr"] && n["s-hn"] !== s["s-hn"] && !t.experimentalSlotFixes) {
          if (isNodeLocatedInSlot(n, e)) {
            let t = M.find((e => e._$$nodeToRelocate$$_ === n));
            T = true;
            n["s-sn"] = n["s-sn"] || e;
            if (t) {
              t._$$nodeToRelocate$$_["s-sh"] = s["s-hn"];
              t._$$slotRefNode$$_ = s;
            } else {
              n["s-sh"] = s["s-hn"];
              M.push({
                _$$slotRefNode$$_: s,
                _$$nodeToRelocate$$_: n
              });
            }
            if (n["s-sr"]) {
              M.map((e => {
                if (isNodeLocatedInSlot(e._$$nodeToRelocate$$_, n["s-sn"])) {
                  t = M.find((e => e._$$nodeToRelocate$$_ === n));
                  if (t && !e._$$slotRefNode$$_) {
                    e._$$slotRefNode$$_ = t._$$slotRefNode$$_;
                  }
                }
              }));
            }
          } else if (!M.some((e => e._$$nodeToRelocate$$_ === n))) {
            M.push({
              _$$nodeToRelocate$$_: n
            });
          }
        }
      }
    }
    if (s.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(s);
    }
  }
};

var isNodeLocatedInSlot = (e, t) => {
  if (e.nodeType === 1 /* ElementNode */) {
    if (e.getAttribute("slot") === null && t === "") {
      return true;
    }
    if (e.getAttribute("slot") === t) {
      return true;
    }
    return false;
  }
  if (e["s-sn"] === t) {
    return true;
  }
  return t === "";
};

var nullifyVNodeRefs = e => {
  {
    e._$$attrs$$_ && e._$$attrs$$_.ref && e._$$attrs$$_.ref(null);
    e._$$children$$_ && e._$$children$$_.map(nullifyVNodeRefs);
  }
};

var insertBefore = (e, t, n) => {
  const l = e == null ? void 0 : e.insertBefore(t, n);
  return l;
};

var renderVdom = (e, t, n = false) => {
  var l, r, s, o;
  const i = e.$hostElement$;
  const a = e._$$cmpMeta$$_;
  const f = e._$$vnode$$_ || newVNode(null, null);
  const c = isHost(t) ? t : h(null, null, t);
  O = i.tagName;
  if (a._$$attrsToReflect$$_) {
    c._$$attrs$$_ = c._$$attrs$$_ || {};
    a._$$attrsToReflect$$_.map((([e, t]) => c._$$attrs$$_[t] = i[e]));
  }
  if (n && c._$$attrs$$_) {
    for (const e of Object.keys(c._$$attrs$$_)) {
      if (i.hasAttribute(e) && ![ "key", "ref", "style", "class" ].includes(e)) {
        c._$$attrs$$_[e] = i[e];
      }
    }
  }
  c._$$tag$$_ = null;
  c._$$flags$$_ |= 4 /* isHost */;
  e._$$vnode$$_ = c;
  c._$$elm$$_ = f._$$elm$$_ = i.shadowRoot || i;
  {
    x = i["s-sc"];
  }
  R = (a._$$flags$$_ & 1 /* shadowDomEncapsulation */) !== 0;
  {
    j = i["s-cr"];
    T = false;
  }
  patch(f, c, n);
  {
    W._$$flags$$_ |= 1 /* isTmpDisconnected */;
    if (D) {
      markSlotContentForRelocation(c._$$elm$$_);
      for (const e of M) {
        const t = e._$$nodeToRelocate$$_;
        if (!t["s-ol"]) {
          const e = originalLocationDebugNode(t);
          e["s-nr"] = t;
          insertBefore(t.parentNode, t["s-ol"] = e, t);
        }
      }
      for (const e of M) {
        const t = e._$$nodeToRelocate$$_;
        const i = e._$$slotRefNode$$_;
        if (i) {
          const e = i.parentNode;
          let n = i.nextSibling;
          {
            let s = (l = t["s-ol"]) == null ? void 0 : l.previousSibling;
            while (s) {
              let l = (r = s["s-nr"]) != null ? r : null;
              if (l && l["s-sn"] === t["s-sn"] && e === l.parentNode) {
                l = l.nextSibling;
                while (l === t || (l == null ? void 0 : l["s-sr"])) {
                  l = l == null ? void 0 : l.nextSibling;
                }
                if (!l || !l["s-nr"]) {
                  n = l;
                  break;
                }
              }
              s = s.previousSibling;
            }
          }
          if (!n && e !== t.parentNode || t.nextSibling !== n) {
            if (t !== n) {
              if (!t["s-hn"] && t["s-ol"]) {
                t["s-hn"] = t["s-ol"].parentNode.nodeName;
              }
              insertBefore(e, t, n);
              if (t.nodeType === 1 /* ElementNode */) {
                t.hidden = (s = t["s-ih"]) != null ? s : false;
              }
            }
          }
          t && typeof i["s-rf"] === "function" && i["s-rf"](t);
        } else {
          if (t.nodeType === 1 /* ElementNode */) {
            if (n) {
              t["s-ih"] = (o = t.hidden) != null ? o : false;
            }
            t.hidden = true;
          }
        }
      }
    }
    if (T) {
      updateFallbackSlotVisibility(c._$$elm$$_);
    }
    W._$$flags$$_ &= ~1 /* isTmpDisconnected */;
    M.length = 0;
  }
  j = void 0;
};

var slotReferenceDebugNode = e => P.createComment(`<slot${e._$$name$$_ ? ' name="' + e._$$name$$_ + '"' : ""}> (host=${O.toLowerCase()})`);

var originalLocationDebugNode = e => P.createComment(`org-location for ` + (e.localName ? `<${e.localName}> (host=${e["s-hn"]})` : `[${e.textContent}]`))
// src/runtime/update-component.ts
;

var attachToAncestor = (e, t) => {
  if (t && !e._$$onRenderResolve$$_ && t["s-p"]) {
    t["s-p"].push(new Promise((t => e._$$onRenderResolve$$_ = t)));
  }
};

var scheduleUpdate = (e, t) => {
  {
    e._$$flags$$_ |= 16 /* isQueuedForUpdate */;
  }
  if (e._$$flags$$_ & 4 /* isWaitingForChildren */) {
    e._$$flags$$_ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(e, e._$$ancestorComponent$$_);
  const dispatch = () => dispatchHooks(e, t);
  return B(dispatch);
};

var dispatchHooks = (e, t) => {
  const n = e.$hostElement$;
  const l = createTime("scheduleUpdate", e._$$cmpMeta$$_._$$tagName$$_);
  const r = e._$$lazyInstance$$_;
  if (!r) {
    throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let s;
  if (t) {
    emitLifecycleEvent(n, "componentWillLoad");
    {
      s = safeCall(r, "componentWillLoad");
    }
  } else {
    emitLifecycleEvent(n, "componentWillUpdate");
  }
  emitLifecycleEvent(n, "componentWillRender");
  {
    s = enqueue(s, (() => safeCall(r, "componentWillRender")));
  }
  l();
  return enqueue(s, (() => updateComponent(e, r, t)));
};

var enqueue = (e, t) => isPromisey(e) ? e.then(t) : t();

var isPromisey = e => e instanceof Promise || e && e.then && typeof e.then === "function";

var updateComponent = async (e, t, n) => {
  var l;
  const r = e.$hostElement$;
  const s = createTime("update", e._$$cmpMeta$$_._$$tagName$$_);
  const o = r["s-rc"];
  if (n) {
    attachStyles(e);
  }
  const i = createTime("render", e._$$cmpMeta$$_._$$tagName$$_);
  {
    callRender(e, t, r, n);
  }
  if (o) {
    o.map((e => e()));
    r["s-rc"] = void 0;
  }
  i();
  s();
  {
    const t = (l = r["s-p"]) != null ? l : [];
    const postUpdate = () => postUpdateComponent(e);
    if (t.length === 0) {
      postUpdate();
    } else {
      Promise.all(t).then(postUpdate);
      e._$$flags$$_ |= 4 /* isWaitingForChildren */;
      t.length = 0;
    }
  }
};

var callRender = (e, t, n, l) => {
  try {
    t = t.render();
    {
      e._$$flags$$_ &= ~16 /* isQueuedForUpdate */;
    }
    {
      e._$$flags$$_ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(e, t, l);
        }
      }
    }
  } catch (t) {
    consoleError(t, e.$hostElement$);
  }
  return null;
};

var postUpdateComponent = e => {
  const t = e._$$cmpMeta$$_._$$tagName$$_;
  const n = e.$hostElement$;
  const l = createTime("postUpdate", t);
  const r = e._$$lazyInstance$$_;
  const s = e._$$ancestorComponent$$_;
  {
    safeCall(r, "componentDidRender");
  }
  emitLifecycleEvent(n, "componentDidRender");
  if (!(e._$$flags$$_ & 64 /* hasLoadedComponent */)) {
    e._$$flags$$_ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(n);
    }
    {
      safeCall(r, "componentDidLoad");
    }
    emitLifecycleEvent(n, "componentDidLoad");
    l();
    {
      e._$$onReadyResolve$$_(n);
      if (!s) {
        appDidLoad();
      }
    }
  } else {
    emitLifecycleEvent(n, "componentDidUpdate");
    l();
  }
  {
    e._$$onInstanceResolve$$_(n);
  }
  {
    if (e._$$onRenderResolve$$_) {
      e._$$onRenderResolve$$_();
      e._$$onRenderResolve$$_ = void 0;
    }
    if (e._$$flags$$_ & 512 /* needsRerender */) {
      nextTick((() => scheduleUpdate(e, false)));
    }
    e._$$flags$$_ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};

var appDidLoad = t => {
  {
    addHydratedFlag(P.documentElement);
  }
  nextTick((() => emitEvent(E, "appload", {
    detail: {
      namespace: e
    }
  })));
};

var safeCall = (e, t, n) => {
  if (e && e[t]) {
    try {
      return e[t](n);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};

var emitLifecycleEvent = (t, n) => {
  {
    emitEvent(t, "stencil_" + n, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: e
      }
    });
  }
};

var addHydratedFlag = e => {
  var n;
  return e.classList.add((n = t.hydratedSelectorName) != null ? n : "hydrated");
};

// src/runtime/set-value.ts
var getValue = (e, t) => getHostRef(e)._$$instanceValues$$_.get(t);

var setValue = (e, t, n, l) => {
  const r = getHostRef(e);
  if (!r) {
    throw new Error(`Couldn't find host element for "${l._$$tagName$$_}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
  }
  const s = r.$hostElement$;
  const o = r._$$instanceValues$$_.get(t);
  const i = r._$$flags$$_;
  const a = r._$$lazyInstance$$_;
  n = parsePropertyValue(n, l._$$members$$_[t][0]);
  const f = Number.isNaN(o) && Number.isNaN(n);
  const c = n !== o && !f;
  if ((!(i & 8 /* isConstructingInstance */) || o === void 0) && c) {
    r._$$instanceValues$$_.set(t, n);
    if (a) {
      if (l._$$watchers$$_ && i & 128 /* isWatchReady */) {
        const e = l._$$watchers$$_[t];
        if (e) {
          e.map((e => {
            try {
              a[e](n, o, t);
            } catch (e) {
              consoleError(e, s);
            }
          }));
        }
      }
      if ((i & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        scheduleUpdate(r, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (e, t, n) => {
  var l;
  const r = e.prototype;
  if (t._$$flags$$_ & 64 /* formAssociated */ && n & 1 /* isElementConstructor */) {
    y.forEach((e => Object.defineProperty(r, e, {
      value(...t) {
        const n = getHostRef(this);
        const l = n._$$lazyInstance$$_;
        if (!l) {
          n._$$onReadyPromise$$_.then((n => {
            const l = n[e];
            typeof l === "function" && l.call(n, ...t);
          }));
        } else {
          const n = l[e];
          typeof n === "function" && n.call(l, ...t);
        }
      }
    })));
  }
  if (t._$$members$$_) {
    if (e.watchers) {
      t._$$watchers$$_ = e.watchers;
    }
    const s = Object.entries(t._$$members$$_);
    s.map((([e, [l]]) => {
      if (l & 31 /* Prop */ || n & 2 /* proxyState */ && l & 32 /* State */) {
        Object.defineProperty(r, e, {
          get() {
            return getValue(this, e);
          },
          set(n) {
            setValue(this, e, n, t);
          },
          configurable: true,
          enumerable: true
        });
      } else if (n & 1 /* isElementConstructor */ && l & 64 /* Method */) {
        Object.defineProperty(r, e, {
          value(...t) {
            var n;
            const l = getHostRef(this);
            return (n = l == null ? void 0 : l._$$onInstancePromise$$_) == null ? void 0 : n.then((() => {
              var n;
              return (n = l._$$lazyInstance$$_) == null ? void 0 : n[e](...t);
            }));
          }
        });
      }
    }));
    if (n & 1 /* isElementConstructor */) {
      const n =  new Map;
      r.attributeChangedCallback = function(e, l, s) {
        W.jmp((() => {
          var o;
          const i = n.get(e);
          if (this.hasOwnProperty(i)) {
            s = this[i];
            delete this[i];
          } else if (r.hasOwnProperty(i) && typeof this[i] === "number" && this[i] == s) {
            return;
          } else if (i == null) {
            const n = getHostRef(this);
            const r = n == null ? void 0 : n._$$flags$$_;
            if (r && !(r & 8 /* isConstructingInstance */) && r & 128 /* isWatchReady */ && s !== l) {
              const r = n._$$lazyInstance$$_;
              const i = (o = t._$$watchers$$_) == null ? void 0 : o[e];
              i == null ? void 0 : i.forEach((t => {
                if (r[t] != null) {
                  r[t].call(r, s, l, e);
                }
              }));
            }
            return;
          }
          this[i] = s === null && typeof this[i] === "boolean" ? false : s;
        }));
      };
      e.observedAttributes = Array.from(
       new Set([ ...Object.keys((l = t._$$watchers$$_) != null ? l : {}), ...s.filter((([e, t]) => t[0] & 15 /* HasAttribute */)).map((([e, l]) => {
        var r;
        const s = l[1] || e;
        n.set(s, e);
        if (l[0] & 512 /* ReflectAttr */) {
          (r = t._$$attrsToReflect$$_) == null ? void 0 : r.push([ e, s ]);
        }
        return s;
      })) ]));
    }
  }
  return e;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (e, t, n, l) => {
  let r;
  if ((t._$$flags$$_ & 32 /* hasInitializedComponent */) === 0) {
    t._$$flags$$_ |= 32 /* hasInitializedComponent */;
    const l = n._$$lazyBundleId$$_;
    if (l) {
      const e = loadModule(n);
      if (e && "then" in e) {
        const t = uniqueTime();
        r = await e;
        t();
      } else {
        r = e;
      }
      if (!r) {
        throw new Error(`Constructor for "${n._$$tagName$$_}#${t._$$modeName$$_}" was not found`);
      }
      if (!r.isProxied) {
        {
          n._$$watchers$$_ = r.watchers;
        }
        proxyComponent(r, n, 2 /* proxyState */);
        r.isProxied = true;
      }
      const l = createTime("createInstance", n._$$tagName$$_);
      {
        t._$$flags$$_ |= 8 /* isConstructingInstance */;
      }
      try {
        new r(t);
      } catch (e) {
        consoleError(e);
      }
      {
        t._$$flags$$_ &= ~8 /* isConstructingInstance */;
      }
      {
        t._$$flags$$_ |= 128 /* isWatchReady */;
      }
      l();
      fireConnectedCallback(t._$$lazyInstance$$_);
    } else {
      r = e.constructor;
      const n = e.localName;
      customElements.whenDefined(n).then((() => t._$$flags$$_ |= 128 /* isWatchReady */));
    }
    if (r && r.style) {
      let e = r.style;
      const t = getScopeId(n);
      if (!F.has(t)) {
        const l = createTime("registerStyles", n._$$tagName$$_);
        registerStyle(t, e, !!(n._$$flags$$_ & 1 /* shadowDomEncapsulation */));
        l();
      }
    }
  }
  const s = t._$$ancestorComponent$$_;
  const schedule = () => scheduleUpdate(t, true);
  if (s && s["s-rc"]) {
    s["s-rc"].push(schedule);
  } else {
    schedule();
  }
};

var fireConnectedCallback = e => {
  {
    safeCall(e, "connectedCallback");
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = e => {
  if ((W._$$flags$$_ & 1 /* isTmpDisconnected */) === 0) {
    const t = getHostRef(e);
    const n = t._$$cmpMeta$$_;
    const l = createTime("connectedCallback", n._$$tagName$$_);
    if (!(t._$$flags$$_ & 1 /* hasConnected */)) {
      t._$$flags$$_ |= 1 /* hasConnected */;
      let l;
      {
        l = e.getAttribute(u);
        if (l) {
          if (n._$$flags$$_ & 1 /* shadowDomEncapsulation */) {
            const t = addStyle(e.shadowRoot, n);
            e.classList.remove(t + "-h", t + "-s");
          }
          initializeClientHydrate(e, n._$$tagName$$_, l, t);
        }
      }
      if (!l) {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        n._$$flags$$_ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(e);
        }
      }
      {
        let n = e;
        while (n = n.parentNode || n.host) {
          if (n.nodeType === 1 /* ElementNode */ && n.hasAttribute("s-id") && n["s-p"] || n["s-p"]) {
            attachToAncestor(t, t._$$ancestorComponent$$_ = n);
            break;
          }
        }
      }
      if (n._$$members$$_) {
        Object.entries(n._$$members$$_).map((([t, [n]]) => {
          if (n & 31 /* Prop */ && e.hasOwnProperty(t)) {
            const n = e[t];
            delete e[t];
            e[t] = n;
          }
        }));
      }
      {
        initializeComponent(e, t, n);
      }
    } else {
      if (t == null ? void 0 : t._$$lazyInstance$$_) {
        fireConnectedCallback(t._$$lazyInstance$$_);
      } else if (t == null ? void 0 : t._$$onReadyPromise$$_) {
        t._$$onReadyPromise$$_.then((() => fireConnectedCallback(t._$$lazyInstance$$_)));
      }
    }
    l();
  }
};

var setContentReference = e => {
  const t = e["s-cr"] = P.createComment(`content-ref (host=${e.localName})`);
  t["s-cn"] = true;
  insertBefore(e, t, e.firstChild);
};

var disconnectInstance = e => {
  {
    safeCall(e, "disconnectedCallback");
  }
};

var disconnectedCallback = async e => {
  if ((W._$$flags$$_ & 1 /* isTmpDisconnected */) === 0) {
    const t = getHostRef(e);
    if (t == null ? void 0 : t._$$lazyInstance$$_) {
      disconnectInstance(t._$$lazyInstance$$_);
    } else if (t == null ? void 0 : t._$$onReadyPromise$$_) {
      t._$$onReadyPromise$$_.then((() => disconnectInstance(t._$$lazyInstance$$_)));
    }
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (e, t = {}) => {
  var n;
  const l = createTime();
  const r = [];
  const s = t.exclude || [];
  const o = E.customElements;
  const i = P.head;
  const a =  i.querySelector("meta[charset]");
  const f =  P.createElement("style");
  const c = [];
  const u =  P.querySelectorAll(`[${v}]`);
  let d;
  let $ = true;
  let y = 0;
  Object.assign(W, t);
  W._$$resourcesUrl$$_ = new URL(t.resourcesUrl || "./", P.baseURI).href;
  {
    W._$$flags$$_ |= 2 /* appLoaded */;
  }
  {
    for (;y < u.length; y++) {
      registerStyle(u[y].getAttribute(v), convertScopedToShadow(u[y].innerHTML), true);
    }
  }
  let b = false;
  e.map((e => {
    e[1].map((t => {
      var n;
      const l = {
        _$$flags$$_: t[0],
        _$$tagName$$_: t[1],
        _$$members$$_: t[2],
        _$$listeners$$_: t[3]
      };
      if (l._$$flags$$_ & 4 /* hasSlotRelocation */) {
        b = true;
      }
      {
        l._$$members$$_ = t[2];
      }
      {
        l._$$attrsToReflect$$_ = [];
      }
      {
        l._$$watchers$$_ = (n = t[4]) != null ? n : {};
      }
      const i = l._$$tagName$$_;
      const a = class extends HTMLElement {
        // StencilLazyHost
        constructor(e) {
          super(e);
          e = this;
          registerHost(e, l);
          if (l._$$flags$$_ & 1 /* shadowDomEncapsulation */) {
            {
              {
                e.attachShadow({
                  mode: "open",
                  delegatesFocus: !!(l._$$flags$$_ & 16 /* shadowDelegatesFocus */)
                });
              }
            }
          }
        }
        connectedCallback() {
          if (d) {
            clearTimeout(d);
            d = null;
          }
          if ($) {
            c.push(this);
          } else {
            W.jmp((() => connectedCallback(this)));
          }
        }
        disconnectedCallback() {
          W.jmp((() => disconnectedCallback(this)));
        }
        componentOnReady() {
          return getHostRef(this)._$$onReadyPromise$$_;
        }
      };
      if (l._$$flags$$_ & 64 /* formAssociated */) {
        a.formAssociated = true;
      }
      l._$$lazyBundleId$$_ = e[0];
      if (!s.includes(i) && !o.get(i)) {
        r.push(i);
        o.define(i, proxyComponent(a, l, 1 /* isElementConstructor */));
      }
    }));
  }));
  if (r.length > 0) {
    if (b) {
      f.textContent += p;
    }
    {
      f.textContent += r + m;
    }
    if (f.innerHTML.length) {
      f.setAttribute("data-styles", "");
      const e = (n = W._$$nonce$$_) != null ? n : queryNonceMetaTagContent(P);
      if (e != null) {
        f.setAttribute("nonce", e);
      }
      i.insertBefore(f, a ? a.nextSibling : i.firstChild);
    }
  }
  $ = false;
  if (c.length) {
    c.map((e => e.connectedCallback()));
  } else {
    {
      W.jmp((() => d = setTimeout(appDidLoad, 30)));
    }
  }
  l();
};

// src/runtime/fragment.ts
var Fragment = (e, t) => t
// src/runtime/nonce.ts
;

var setNonce = e => W._$$nonce$$_ = e
// src/client/client-host-ref.ts
;

var N =  new WeakMap;

var getHostRef = e => N.get(e);

var registerInstance = (e, t) => N.set(t._$$lazyInstance$$_ = e, t);

var registerHost = (e, t) => {
  const n = {
    _$$flags$$_: 0,
    $hostElement$: e,
    _$$cmpMeta$$_: t,
    _$$instanceValues$$_:  new Map
  };
  {
    n._$$onInstancePromise$$_ = new Promise((e => n._$$onInstanceResolve$$_ = e));
  }
  {
    n._$$onReadyPromise$$_ = new Promise((e => n._$$onReadyResolve$$_ = e));
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  return N.set(e, n);
};

var isMemberInElement = (e, t) => t in e;

var consoleError = (e, t) => (0, console.error)(e, t)
// src/client/client-load-module.ts
;

var A =  new Map;

var loadModule = (e, t, n) => {
  const l = e._$$tagName$$_.replace(/-/g, "_");
  const r = e._$$lazyBundleId$$_;
  if (!r) {
    return void 0;
  }
  const s = A.get(r);
  if (s) {
    return s[l];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/  return import(
  /* @vite-ignore */
  /* webpackInclude: /\.entry\.js$/ */
  /* webpackExclude: /\.system\.entry\.js$/ */
  /* webpackMode: "lazy" */
  `./${r}.entry.js${""}`).then((e => {
    {
      A.set(r, e);
    }
    return e[l];
  }), consoleError);
};

// src/client/client-style.ts
var F =  new Map;

var E = typeof window !== "undefined" ? window : {};

var P = E.document || {
  head: {}
};

var W = {
  _$$flags$$_: 0,
  _$$resourcesUrl$$_: "",
  jmp: e => e(),
  raf: e => requestAnimationFrame(e),
  ael: (e, t, n, l) => e.addEventListener(t, n, l),
  rel: (e, t, n, l) => e.removeEventListener(t, n, l),
  ce: (e, t) => new CustomEvent(e, t)
};

var U = 
// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
true;

var promiseResolve = e => Promise.resolve(e);

var I =  (() => {
  try {
    new CSSStyleSheet;
    return typeof (new CSSStyleSheet).replaceSync === "function";
  } catch (e) {}
  return false;
})();

var q = false;

var H = [];

var z = [];

var queueTask = (e, t) => n => {
  e.push(n);
  if (!q) {
    q = true;
    if (t && W._$$flags$$_ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      W.raf(flush);
    }
  }
};

var consume = e => {
  for (let t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  e.length = 0;
};

var flush = () => {
  consume(H);
  {
    consume(z);
    if (q = H.length > 0) {
      W.raf(flush);
    }
  }
};

var nextTick = e => promiseResolve().then(e);

var B =  queueTask(z, true);

export { Fragment as F, b as H, bootstrapLazy as b, createEvent as c, getElement as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
//# sourceMappingURL=p-e8f36a8b.js.map