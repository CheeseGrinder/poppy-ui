import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const selectOptionCss = "pop-select-option{display:none}";
const PopSelectOptionStyle0 = selectOptionCss;

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SelectOption_inputId;
const SelectOption = /*@__PURE__*/ proxyCustomElement(class SelectOption extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        _SelectOption_inputId.set(this, `pop-selopt-${selectOptionIds++}`);
        this.value = undefined;
        this.disabled = undefined;
        this.color = undefined;
        this.size = undefined;
    }
    render() {
        return h(Host, { key: '18bb23a42a3c9facea459e179f94ad001af5dfbc', role: "option", id: __classPrivateFieldGet(this, _SelectOption_inputId, "f") });
    }
    static get style() { return PopSelectOptionStyle0; }
}, [0, "pop-select-option", {
        "value": [8],
        "disabled": [1028],
        "color": [1025],
        "size": [1537]
    }]);
_SelectOption_inputId = new WeakMap();
let selectOptionIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-select-option"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-select-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectOption);
            }
            break;
    } });
}

const PopSelectOption = SelectOption;
const defineCustomElement = defineCustomElement$1;

export { PopSelectOption, defineCustomElement };

//# sourceMappingURL=pop-select-option.js.map