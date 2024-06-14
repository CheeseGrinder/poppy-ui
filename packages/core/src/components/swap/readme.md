# pop-swap


<!-- Auto Generated Below -->


## Overview

Swap allows you to toggle the visibility of two elements.

## Properties

| Property | Attribute | Description                                             | Type                 | Default    |
| -------- | --------- | ------------------------------------------------------- | -------------------- | ---------- |
| `active` | `active`  | Activates the swap.<br> Show whats inside the slot `on` | `boolean`            | `false`    |
| `type`   | `type`    | Choose what animation is used on click.                 | `"flip" \| "rotate"` | `'rotate'` |


## Events

| Event     | Description                                  | Type                                 |
| --------- | -------------------------------------------- | ------------------------------------ |
| `popSwap` | Emitted when the swap active attribut change | `CustomEvent<SwapChangeEventDetail>` |


## Slots

| Slot    | Description                                |
| ------- | ------------------------------------------ |
| `"off"` | Slot for element when the swap is inactive |
| `"on"`  | Slot for element when the swap is active   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
