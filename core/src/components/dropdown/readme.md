# pop-dropdown



<!-- Auto Generated Below -->


## Overview

Describe whats does the component



## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                     | Default     |
|-----------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-------------|
| `align`         | `align`          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `"end" \| "start"`                       | `'start'`   |
| `debounce`      | `debounce`       | Set the amount of time, in milliseconds after the user no longer hover the trigger or dropdown, will dismiss.<br>Only apply on `triggerAction=hover`                                                                                                                                                                                                                                                                                                                                       | `number`                                 | `100`       |
| `open`          | `open`           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `boolean`                                | `false`     |
| `showBackdrop`  | `show-backdrop`  | If `true`, a backdrop will be displayed behind the modal.<br>This property controls whether or not the backdrop<br>darkens the screen when the modal is presented.                                                                                                                                                                                                                                                                                                                         | `boolean`                                | `false`     |
| `side`          | `side`           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'`  |
| `triggerAction` | `trigger-action` | Describes what kind of intertion with the trigger (sloted element) that should cause the dropdown to open.<br>- `"click"`: the dropdown will be presented when the trigger is left clicked.<br>- `"hover"`: the dropdown will be presented when a pointer hovers over the trigger.<br>- `"context-menu"`: the dropdown will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing. | `"click" \| "context-menu" \| "hover"`   | `'click'`   |


## Events

| Event        | Description                              | Type                |
|--------------|------------------------------------------|---------------------|
| `didDismiss` | Emitted after the modal has dismissed.   | `CustomEvent<void>` |
| `didPresent` | Emitted after the modal has presented.   | `CustomEvent<void>` |


## Methods

### `dismiss() => Promise<boolean>`

#### Returns

Type: `Promise<boolean>`

### `present() => Promise<boolean>`

#### Returns

Type: `Promise<boolean>`



## Slots

| Slot | Description                |
|----|----------------------------|
| `` | // Describe slot content   |


## Shadow Parts

| Part       | Description            |
|------------|------------------------|
| `backdrop` |                        |
| `content`  |                        |
| `dropdown` |                        |
| `trigger`  |                        |
| `{name}`   | // Describe css part   |

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
