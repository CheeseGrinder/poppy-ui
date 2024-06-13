import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const progressCss = ":host{--background:oklch(var(--base-content, 0.746477 0.0216 264.435964) / 0.2);--background-active:oklch(var(--base-content, 0.746477 0.0216 264.435964))}:host>progress{appearance:none;position:relative;vertical-align:baseline;width:100%;overflow:hidden;height:0.5rem;border-radius:var(--border-radius, var(--radius-xl, 16px))}:host>progress::-webkit-progress-bar{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background)}:host>progress::-moz-progress-bar{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background)}:host>progress::-webkit-progress-value{border-radius:var(--border-radius, var(--radius-xl, 16px));background-color:var(--background-active)}:host>progress:indeterminate{background-image:repeating-linear-gradient(90deg, var(--background-active) -1%, var(--background-active) 10%, transparent 10%, transparent 90%);background-size:200%;background-position-x:15%;animation:progress-loading 5s ease-in-out infinite}@keyframes progress-loading{50%{background-position-x:-115%}}:host([color=primary]){--background-active:oklch(var(--primary, 0.6569 0.196 275.75))}:host([color=secondary]){--background-active:oklch(var(--secondary, 0.748 0.26 342.55))}:host([color=accent]){--background-active:oklch(var(--accent, 0.7451 0.167 183.61))}:host([color=info]){--background-active:oklch(var(--info, 0.7206 0.191 231.6))}:host([color=success]){--background-active:oklch(var(--success, 64.8% 0.15 160))}:host([color=warning]){--background-active:oklch(var(--warning, 0.8471 0.199 83.87))}:host([color=error]){--background-active:oklch(var(--error, 0.7176 0.221 22.18))}";
const PopProgressStyle0 = progressCss;

const Progress = /*@__PURE__*/ proxyCustomElement(class Progress extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.value = undefined;
        this.max = undefined;
        this.color = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-progress', {
            max: 100,
        });
    }
    render() {
        return (h(Host, { key: 'beb467798124af45c3f73c988c3ee9f8b2404b72' }, h("progress", { key: 'e77117458fdb5afc688538567d95dea0b4440d87', part: "native", value: this.value, max: this.max }, h("slot", { key: 'e477b3efceea6ebf131d67319f667679560cee9a' }))));
    }
    static get style() { return PopProgressStyle0; }
}, [1, "pop-progress", {
        "value": [514],
        "max": [1538],
        "color": [1537]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-progress"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-progress":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Progress);
            }
            break;
    } });
}

const PopProgress = Progress;
const defineCustomElement = defineCustomElement$1;

export { PopProgress, defineCustomElement };

//# sourceMappingURL=pop-progress.js.map