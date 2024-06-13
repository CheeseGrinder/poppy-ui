import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const avatarCss = ":host{--background:oklch(var(--neutral, 0.313815 0.021108 254.139175));--color:oklch(var(--neutral-content, 0.746477 0.0216 264.435964));position:relative;display:inline-flex;aspect-ratio:1}:host>div{display:grid;place-items:center;width:100%;overflow:hidden;min-width:24px;background-color:var(--background);color:var(--color)}:host ::slotted(pop-img),:host ::slotted(img){height:100%;width:100%;object-fit:cover}";
const PopAvatarStyle0 = avatarCss;

const Avatar = /*@__PURE__*/ proxyCustomElement(class Avatar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.placeholder = false;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-avatar', {
            placeholder: false,
        });
    }
    render() {
        return (h(Host, { key: '8e1b6a5e56112f218a68a6ef5698a24d44948702' }, h("div", { key: '6738b92a3020afebcf7ac0ca6cd4ca7c699fa508' }, h("slot", { key: '173561ac4ca5e608e13811fdfd487ea7c0d67c10' }))));
    }
    static get style() { return PopAvatarStyle0; }
}, [1, "pop-avatar", {
        "placeholder": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Avatar);
            }
            break;
    } });
}

const PopAvatar = Avatar;
const defineCustomElement = defineCustomElement$1;

export { PopAvatar, defineCustomElement };

//# sourceMappingURL=pop-avatar.js.map