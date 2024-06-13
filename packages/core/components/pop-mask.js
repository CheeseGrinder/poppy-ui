import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as componentConfig } from './config.js';

const maskCss = ":host{aspect-ratio:1;mask-size:contain;mask-repeat:no-repeat;mask-position:center}:host-context(pop-avatar[placeholder]){display:grid;place-items:center}:host([type=squircle]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==\")}:host([type=heart]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzE4NScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDE4NC42MDZhMTUuMzg0IDE1LjM4NCAwIDAgMS04LjY1My0yLjY3OEM1My41NjUgMTU2LjI4IDM3LjIwNSAxMzguNjk1IDI4LjE4MiAxMjcuNyA4Ljk1MiAxMDQuMjY0LS4yNTQgODAuMjAyLjAwNSA1NC4xNDYuMzA4IDI0LjI4NyAyNC4yNjQgMCA1My40MDYgMGMyMS4xOTIgMCAzNS44NjkgMTEuOTM3IDQ0LjQxNiAyMS44NzlhMi44ODQgMi44ODQgMCAwIDAgNC4zNTYgMEMxMTAuNzI1IDExLjkyNyAxMjUuNDAyIDAgMTQ2LjU5NCAwYzI5LjE0MiAwIDUzLjA5OCAyNC4yODcgNTMuNCA1NC4xNTEuMjYgMjYuMDYxLTguOTU2IDUwLjEyMi0yOC4xNzYgNzMuNTU0LTkuMDIzIDEwLjk5NC0yNS4zODMgMjguNTgtNjMuMTY1IDU0LjIyOGExNS4zODQgMTUuMzg0IDAgMCAxLTguNjUzIDIuNjczWicgZmlsbD0nYmxhY2snIGZpbGwtcnVsZT0nbm9uemVybycvPjwvc3ZnPg==\")}:host([type=hexagon]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgyJyBoZWlnaHQ9JzIwMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBMMTQuNTEgMTYxLjYyQzYuMTUxIDE1Ny40NC4zIDE0NS43MzcuMyAxMzYuNTRWNjUuNDg2WicgZmlsbD0nYmxhY2snIGZpbGwtcnVsZT0nbm9uemVybycvPjwvc3ZnPg==\")}:host([type=hexagon-2]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzE4MicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZaJyBmaWxsPSdibGFjaycgZmlsbC1ydWxlPSdub256ZXJvJy8+PC9zdmc+\")}:host([type=decagon]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDAgNTguNzc5IDE5LjA5OCAzNi4zMjcgNTB2NjEuODA0bC0zNi4zMjcgNTBMOTYgMjAwbC01OC43NzktMTkuMDk4LTM2LjMyNy01MFY2OS4wOThsMzYuMzI3LTUweicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+\")}:host([type=pentagon]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDAgOTUuMTA2IDY5LjA5OC0zNi4zMjcgMTExLjgwNEgzNy4yMkwuODk0IDY5LjA5OHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=diamond]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTEwMCAwIDEwMCAxMDAtMTAwIDEwMEwwIDEwMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=square]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTTAgMGgyMDB2MjAwSDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz4=\")}:host([type=circle]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48Y2lyY2xlIGZpbGw9J2JsYWNrJyBjeD0nMTAwJyBjeT0nMTAwJyByPScxMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=parallelogram]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzE1NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTTQ2LjE1NCAwSDIwMGwtNDYuMTU0IDE1My44NDZIMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=parallelogram-2]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzE1NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTTE1My44NDYgMEgwbDQ2LjE1NCAxNTMuODQ2SDIwMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=parallelogram-3]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU0JyBoZWlnaHQ9JzIwMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTS4wNzcgNDcuMDc3djE1My44NDZsMTUzLjg0Ni00Ni4xNTRWLjkyM3onIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=parallelogram-4]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU0JyBoZWlnaHQ9JzIwMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTTE1My45MjMgNDcuMDc3djE1My44NDZMLjA3NyAxNTQuNzdWLjkyM3onIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=star]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDEzNy4yNjMtNTguNzc5IDQyLjAyNCAyMi4xNjMtNjguMzg5TC44OTQgNjguNDgxbDcyLjQ3Ni0uMjQzTDk2IDBsMjIuNjMgNjguMjM4IDcyLjQ3Ni4yNDMtNTguNDkgNDIuNDE3IDIyLjE2MyA2OC4zODl6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz4=\")}:host([type=star-2]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDE1My4wNDQtNTguNzc5IDI2LjI0MyA3LjAyLTYzLjUxM0wuODk0IDY4LjQ4MWw2My4xMTctMTMuMDFMOTYgMGwzMS45ODkgNTUuNDcyIDYzLjExNyAxMy4wMS00My4zNDcgNDcuMjkyIDcuMDIgNjMuNTEzeicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+\")}:host([type=triangle]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTc0JyBoZWlnaHQ9JzE0OScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTg3IDE0OC40NzYtODYuNjAzLjE4NUw0My44NiA3NC40MjMgODcgMGw0My4xNCA3NC40MjMgNDMuNDYzIDc0LjIzOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==\")}:host([type=triangle-2]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTc0JyBoZWlnaHQ9JzE1MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTg3IC43MzggODYuNjAzLS4xODQtNDMuNDYzIDc0LjIzOEw4NyAxNDkuMjE0IDQzLjg2IDc0Ljc5Mi4zOTcuNTU0eicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+\")}:host([type=triangle-3]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUwJyBoZWlnaHQ9JzE3NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTE0OS4zNjkgODcuMTA3LjE4NSA4Ni42MDMtNzQuMjM5LTQzLjQ2M0wuODkzIDg3LjEwN2w3NC40MjItNDMuMTRMMTQ5LjU1NC41MDV6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz4=\")}:host([type=triangle-4]){mask-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUwJyBoZWlnaHQ9JzE3NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nTS42MzEgODcuMTA3LjQ0Ni41MDVsNzQuMjM5IDQzLjQ2MiA3NC40MjIgNDMuMTQtNzQuNDIyIDQzLjE0TC40NDYgMTczLjcxeicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+\")}";
const PopMaskStyle0 = maskCss;

const Mask = /*@__PURE__*/ proxyCustomElement(class Mask extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = undefined;
    }
    componentWillLoad() {
        componentConfig.apply(this, 'pop-mask', {
            type: 'squircle',
        });
    }
    render() {
        return (h(Host, { key: '92a4ffbf29060ced3c3027affa1c8d31316b8b30' }, h("slot", { key: 'a9527b36ede9ee1e1d7585e1a3e8e8328ed22020' })));
    }
    static get style() { return PopMaskStyle0; }
}, [1, "pop-mask", {
        "type": [1537]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pop-mask"];
    components.forEach(tagName => { switch (tagName) {
        case "pop-mask":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Mask);
            }
            break;
    } });
}

const PopMask = Mask;
const defineCustomElement = defineCustomElement$1;

export { PopMask, defineCustomElement };

//# sourceMappingURL=pop-mask.js.map