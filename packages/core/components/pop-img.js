import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as inheritAttributes } from './helpers.js';

const imgCss = ":host{display:block;object-fit:contain}:host>img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";
const PopImgStyle0 = imgCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Img_instances, _Img_nativeImg, _Img_inheritedAttributes, _Img_observer, _Img_initObserver, _Img_removeObserver, _Img_load, _Img_onLoad, _Img_onError;
const Img = /*@__PURE__*/ proxyCustomElement(class Img extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.popWillLoad = createEvent(this, "popWillLoad", 7);
        this.popDidLoad = createEvent(this, "popDidLoad", 7);
        this.popError = createEvent(this, "popError", 7);
        _Img_instances.add(this);
        _Img_nativeImg.set(this, void 0);
        _Img_inheritedAttributes.set(this, {});
        _Img_observer.set(this, void 0);
        _Img_onLoad.set(this, () => {
            this.popDidLoad.emit();
        });
        _Img_onError.set(this, () => {
            this.popError.emit();
        });
        this.loadSrc = undefined;
        this.loadError = undefined;
        this.src = undefined;
        this.alt = undefined;
    }
    onSrcChange() {
        __classPrivateFieldGet(this, _Img_instances, "m", _Img_initObserver).call(this);
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Img_inheritedAttributes, inheritAttributes(this.host, ['draggable']), "f");
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _Img_instances, "m", _Img_initObserver).call(this);
    }
    render() {
        const { draggable } = __classPrivateFieldGet(this, _Img_inheritedAttributes, "f");
        return (h(Host, { key: '6a1efeb0fa488dd5e40bb9b73bf9494d4630cab4' }, h("img", { key: '40a8041382f1358fcedb5c7590b05678d585ae5e', part: "image", loading: "eager",
            // decoding="sync"
            src: this.loadSrc, alt: this.alt || '', onLoad: __classPrivateFieldGet(this, _Img_onLoad, "f"), onError: __classPrivateFieldGet(this, _Img_onError, "f"), draggable: isDraggable(draggable), ref: el => (__classPrivateFieldSet(this, _Img_nativeImg, el, "f")) })));
    }
    get host() { return this; }
    static get watchers() { return {
        "src": ["onSrcChange"]
    }; }
    static get style() { return PopImgStyle0; }
}, [1, "pop-img", {
        "src": [1],
        "alt": [1],
        "loadSrc": [32],
        "loadError": [32]
    }, undefined, {
        "src": ["onSrcChange"]
    }]);
_Img_nativeImg = new WeakMap(), _Img_inheritedAttributes = new WeakMap(), _Img_observer = new WeakMap(), _Img_onLoad = new WeakMap(), _Img_onError = new WeakMap(), _Img_instances = new WeakSet(), _Img_initObserver = function _Img_initObserver() {
    if (!this.src)
        return;
    if (supportIntersectionObserver()) {
        __classPrivateFieldGet(this, _Img_instances, "m", _Img_removeObserver).call(this);
        __classPrivateFieldSet(this, _Img_observer, new IntersectionObserver(entries => {
            if (entries.at(-1).isIntersecting) {
                __classPrivateFieldGet(this, _Img_instances, "m", _Img_load).call(this);
                __classPrivateFieldGet(this, _Img_instances, "m", _Img_removeObserver).call(this);
            }
        }), "f");
        __classPrivateFieldGet(this, _Img_observer, "f").observe(this.host);
    }
    else {
        __classPrivateFieldGet(this, _Img_nativeImg, "f").loading = 'lazy';
        __classPrivateFieldGet(this, _Img_instances, "m", _Img_load).call(this);
    }
}, _Img_removeObserver = function _Img_removeObserver() {
    __classPrivateFieldGet(this, _Img_observer, "f")?.disconnect();
    __classPrivateFieldSet(this, _Img_observer, undefined, "f");
}, _Img_load = function _Img_load() {
    this.loadError = __classPrivateFieldGet(this, _Img_onError, "f");
    this.loadSrc = this.src;
    this.popWillLoad.emit();
};
function supportIntersectionObserver() {
    return ('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'isIntersecting' in window.IntersectionObserverEntry.prototype);
}
/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */
const isDraggable = (draggable) => {
    switch (draggable) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return undefined;
    }
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-img"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-img":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Img);
            }
            break;
    } });
}

const PopImg = Img;
const defineCustomElement = defineCustomElement$1;

export { PopImg, defineCustomElement };

//# sourceMappingURL=pop-img.js.map