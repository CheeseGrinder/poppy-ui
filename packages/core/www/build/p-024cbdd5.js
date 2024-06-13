import { p as e, b as o } from "./p-e8f36a8b.js";

export { s as setNonce } from "./p-e8f36a8b.js";

import { g as r } from "./p-7a3bf03d.js";

import "./p-2a480fe2.js";

import "./p-da5609ce.js";

/*
 Stencil Client Patch Browser v4.18.3 | MIT Licensed | https://stenciljs.com
 */ var patchBrowser = () => {
  const o = import.meta.url;
  const r = {};
  if (o !== "") {
    r.resourcesUrl = new URL(".", o).href;
  }
  return e(r);
};

patchBrowser().then((async e => {
  await r();
  return o([ [ "p-62e75b68", [ [ 0, "pop-select-popover", {
    required: [ 1028 ],
    multiple: [ 1028 ],
    color: [ 1025 ],
    size: [ 1025 ],
    options: [ 16 ]
  } ], [ 65, "pop-select", {
    name: [ 1 ],
    placeholder: [ 1 ],
    value: [ 1032 ],
    multiple: [ 1540 ],
    min: [ 1538 ],
    max: [ 1538 ],
    required: [ 1540 ],
    disabled: [ 1540 ],
    autoFocus: [ 1540, "auto-focus" ],
    bordered: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    selectedText: [ 1, "selected-text" ],
    helperText: [ 1, "helper-text" ],
    notEnoughErrorText: [ 1, "not-enough-error-text" ],
    tooManyErrorText: [ 1, "too-many-error-text" ],
    compare: [ 1025 ],
    isExpanded: [ 32 ],
    errorText: [ 32 ],
    setFocus: [ 64 ],
    open: [ 64 ],
    close: [ 64 ]
  }, null, {
    value: [ "onValueChange" ]
  } ], [ 0, "pop-select-option", {
    value: [ 8 ],
    disabled: [ 1028 ],
    color: [ 1025 ],
    size: [ 1537 ]
  } ] ] ], [ "p-5ede4649", [ [ 1, "pop-accordion", {
    readonly: [ 516 ],
    disabled: [ 516 ],
    name: [ 513 ],
    isOpen: [ 1540, "is-open" ],
    open: [ 64 ],
    close: [ 64 ],
    toggle: [ 64 ]
  } ], [ 1, "pop-accordion-group", {
    readonly: [ 1540 ],
    disabled: [ 1540 ],
    multiple: [ 1540 ],
    active: [ 1025 ]
  }, null, {
    active: [ "onActiveChange" ]
  } ] ] ], [ "p-fb6731ec", [ [ 1, "pop-avatar", {
    placeholder: [ 516 ]
  } ], [ 1, "pop-img", {
    src: [ 1 ],
    alt: [ 1 ],
    loadSrc: [ 32 ],
    loadError: [ 32 ]
  }, null, {
    src: [ "onSrcChange" ]
  } ] ] ], [ "p-4b0c13a4", [ [ 1, "pop-badge", {
    color: [ 1537 ],
    size: [ 1537 ],
    outlined: [ 1540 ],
    as: [ 1025 ]
  } ], [ 1, "pop-indicator", {
    side: [ 1537 ],
    position: [ 1537 ]
  } ] ] ], [ "p-f4c8bb26", [ [ 1, "pop-button", {
    type: [ 1 ],
    form: [ 1 ],
    disabled: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    outlined: [ 1540 ],
    shape: [ 1537 ],
    expand: [ 1537 ]
  } ] ] ], [ "p-16a654e6", [ [ 1, "pop-card" ] ] ], [ "p-6a92c5be", [ [ 1, "pop-divider", {
    orientation: [ 1537 ],
    placement: [ 1537 ],
    color: [ 1537 ]
  } ] ] ], [ "p-ce86c53a", [ [ 1, "pop-drawer", {
    trigger: [ 1 ],
    triggerAction: [ 1, "trigger-action" ],
    side: [ 1537 ],
    open: [ 1540 ],
    present: [ 64 ],
    dismiss: [ 64 ],
    toggle: [ 64 ]
  }, null, {
    trigger: [ "onTriggerChange" ],
    triggerAction: [ "onTriggerActionChange" ]
  } ] ] ], [ "p-1e5f2cca", [ [ 1, "pop-dropdown", {
    side: [ 1537 ],
    align: [ 1537 ],
    open: [ 1540 ],
    triggerAction: [ 1025, "trigger-action" ],
    debounce: [ 1026 ],
    showBackdrop: [ 1540, "show-backdrop" ],
    present: [ 64 ],
    dismiss: [ 64 ]
  } ] ] ], [ "p-689e0efe", [ [ 65, "pop-input", {
    name: [ 1 ],
    type: [ 1025 ],
    placeholder: [ 1 ],
    value: [ 1032 ],
    min: [ 1026 ],
    max: [ 1032 ],
    step: [ 1025 ],
    minLength: [ 1026, "min-length" ],
    maxLength: [ 1026, "max-length" ],
    multiple: [ 1028 ],
    pattern: [ 1025 ],
    required: [ 1540 ],
    readonly: [ 1540 ],
    disabled: [ 1540 ],
    autoFocus: [ 1540, "auto-focus" ],
    keyboard: [ 1025 ],
    enterkeyhint: [ 1025 ],
    spellcheck: [ 1028 ],
    autoComplete: [ 1025, "auto-complete" ],
    autoCapitalize: [ 1025, "auto-capitalize" ],
    autoCorrect: [ 1025, "auto-correct" ],
    bordered: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    helperText: [ 1, "helper-text" ],
    errorText: [ 1, "error-text" ],
    counter: [ 1028 ],
    counterFormatter: [ 1040 ],
    debounce: [ 1026 ],
    setFocus: [ 64 ]
  }, null, {
    value: [ "onValueChange" ]
  } ] ] ], [ "p-759addd0", [ [ 65, "pop-input-file", {
    name: [ 1 ],
    value: [ 1040 ],
    multiple: [ 1028 ],
    required: [ 1540 ],
    readonly: [ 1540 ],
    disabled: [ 1540 ],
    autoFocus: [ 1540, "auto-focus" ],
    bordered: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    helperText: [ 1, "helper-text" ],
    errorText: [ 1, "error-text" ],
    setFocus: [ 64 ]
  }, null, {
    value: [ "onValueChange" ]
  } ] ] ], [ "p-f0cc0bc3", [ [ 4, "pop-join", {
    orientation: [ 513 ]
  } ] ] ], [ "p-73463fdc", [ [ 1, "pop-kbd", {
    size: [ 1537 ]
  } ] ] ], [ "p-6757291a", [ [ 1, "pop-loading", {
    type: [ 1537 ],
    size: [ 1537 ]
  } ] ] ], [ "p-8cf1eb30", [ [ 1, "pop-mask", {
    type: [ 1537 ]
  } ] ] ], [ "p-6eb977e6", [ [ 1, "pop-modal", {
    trigger: [ 1 ],
    component: [ 1025 ],
    componentProps: [ 1040 ],
    showBackdrop: [ 1540, "show-backdrop" ],
    backdropDismiss: [ 1028, "backdrop-dismiss" ],
    open: [ 1540 ],
    present: [ 64 ],
    dismiss: [ 64 ]
  }, null, {
    trigger: [ "onTriggerChange" ],
    open: [ "onOpenChange" ]
  } ] ] ], [ "p-dfa9f285", [ [ 1, "pop-navbar" ] ] ], [ "p-f49e825c", [ [ 1, "pop-popover", {
    open: [ 1540 ],
    animated: [ 1540 ],
    showBackdrop: [ 1540, "show-backdrop" ],
    backdropDismiss: [ 1540, "backdrop-dismiss" ],
    event: [ 16 ],
    trigger: [ 1 ],
    triggerAction: [ 1025, "trigger-action" ],
    component: [ 1025 ],
    componentProps: [ 1040 ],
    present: [ 64 ],
    dismiss: [ 64 ]
  }, null, {
    open: [ "onOpenChange" ],
    trigger: [ "onTriggerChange" ],
    triggerAction: [ "onTriggerActionChange" ]
  } ] ] ], [ "p-9e6daab1", [ [ 1, "pop-progress", {
    value: [ 514 ],
    max: [ 1538 ],
    color: [ 1537 ]
  } ] ] ], [ "p-3bfeec01", [ [ 65, "pop-range", {
    name: [ 1 ],
    value: [ 1026 ],
    min: [ 1538 ],
    max: [ 1538 ],
    step: [ 1538 ],
    required: [ 1540 ],
    disabled: [ 1540 ],
    autoFocus: [ 1028, "auto-focus" ],
    color: [ 1537 ],
    size: [ 1537 ],
    debounce: [ 1026 ],
    setFocus: [ 64 ]
  }, null, {
    value: [ "onValueChange" ]
  } ] ] ], [ "p-a955925b", [ [ 1, "pop-swap", {
    type: [ 1537 ],
    active: [ 1540 ]
  } ] ] ], [ "p-e8ee9b29", [ [ 65, "pop-textarea", {
    name: [ 1 ],
    placeholder: [ 1 ],
    value: [ 1025 ],
    minLength: [ 1026, "min-length" ],
    maxLength: [ 1026, "max-length" ],
    cols: [ 1026 ],
    rows: [ 1026 ],
    required: [ 516 ],
    readonly: [ 516 ],
    disabled: [ 516 ],
    autoFocus: [ 516, "auto-focus" ],
    keyboard: [ 1025 ],
    enterkeyhint: [ 1025 ],
    spellcheck: [ 1028 ],
    autoCapitalize: [ 1025, "auto-capitalize" ],
    wrap: [ 1025 ],
    bordered: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    helperText: [ 1, "helper-text" ],
    errorText: [ 1, "error-text" ],
    counter: [ 1028 ],
    counterFormatter: [ 1040 ],
    debounce: [ 1026 ],
    textareaWidth: [ 32 ],
    setFocus: [ 64 ]
  }, null, {
    value: [ "onValueChange" ]
  } ] ] ], [ "p-b6b04934", [ [ 65, "pop-toggle", {
    name: [ 1 ],
    value: [ 513 ],
    required: [ 1540 ],
    readonly: [ 1540 ],
    checked: [ 1540 ],
    indeterminate: [ 1540 ],
    disabled: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    setFocus: [ 64 ]
  }, null, {
    checked: [ "onCheckedChange" ]
  } ] ] ], [ "p-9bb037ec", [ [ 4, "pop-tooltip", {
    value: [ 1 ],
    color: [ 1537 ],
    position: [ 1537 ],
    open: [ 1540 ]
  } ] ] ], [ "p-82b65ee5", [ [ 65, "pop-checkbox", {
    name: [ 1 ],
    value: [ 513 ],
    required: [ 1540 ],
    readonly: [ 1540 ],
    checked: [ 1540 ],
    indeterminate: [ 1540 ],
    disabled: [ 1540 ],
    color: [ 1537 ],
    size: [ 1537 ],
    placement: [ 1537 ],
    setFocus: [ 64 ]
  }, null, {
    checked: [ "onCheckedChange" ]
  } ] ] ], [ "p-f5e185c7", [ [ 17, "pop-item", {
    disabled: [ 1028 ]
  } ], [ 4, "pop-list", {
    size: [ 1537 ],
    orientation: [ 1537 ]
  } ] ] ], [ "p-2a50e96c", [ [ 1, "pop-radio", {
    name: [ 1 ],
    value: [ 1032 ],
    checked: [ 1540 ],
    required: [ 1540 ],
    disabled: [ 1540 ],
    autoFocus: [ 1540, "auto-focus" ],
    color: [ 1537 ],
    size: [ 1537 ],
    setFocus: [ 64 ]
  } ], [ 68, "pop-radio-group", {
    name: [ 1 ],
    value: [ 1032 ],
    required: [ 1540 ],
    disabled: [ 1540 ],
    allowEmpty: [ 1028, "allow-empty" ],
    compare: [ 1025 ],
    color: [ 1537 ],
    size: [ 1537 ]
  }, null, {
    value: [ "onValueChange" ]
  } ] ] ] ], e);
}));
//# sourceMappingURL=poppy.esm.js.map