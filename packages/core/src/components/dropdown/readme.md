# pop-dropdown


<!-- Auto Generated Below -->


## Overview

Dropdown can open a menu or any other element when the trigger element is clicked.

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                         | Default    |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| `align`         | `align`          | Describes how the dropdown has to be alined<br> - `"start"`: Align to the left in LTR and to the right in RTL.<br> - `"center"`: Align to the left in LTR and to the right in RTL.<br> - `"end"`: Align to the right in LTR and to the left in RTL.                                                                                                                                                                                                                                           | `"center" \| "end" \| "start"`                               | `"start"`  |
| `debounce`      | `debounce`       | Set the amount of time, in milliseconds after the user no longer hover the trigger or dropdown, will dismiss.<br> Only apply on `triggerAction=hover`                                                                                                                                                                                                                                                                                                                                         | `number`                                                     | `100`      |
| `open`          | `open`           | Force the dropdown to be shown                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `boolean`                                                    | `false`    |
| `showBackdrop`  | `show-backdrop`  | If `true`, a backdrop will be displayed behind the modal.<br> This property controls whether or not the backdrop<br> darkens the screen when the modal is presented.                                                                                                                                                                                                                                                                                                                          | `boolean`                                                    | `false`    |
| `side`          | `side`           | Describe where the content is displayed relatively to the trigger element<br> - `"start"`: Open on the left in LTR and to the right in RTL.<br> - `"end"`: Open on the right in LTR and to the left in RTL.<br> - `"left"`: Open on left<br> - `"right"`: Open on right<br> - `"top"`: Open on top<br> - `"bottom"`: Open on bottom                                                                                                                                                           | `"bottom" \| "end" \| "left" \| "right" \| "start" \| "top"` | `"bottom"` |
| `triggerAction` | `trigger-action` | Describes what kind of intertion with the trigger (sloted element) that should cause the dropdown to open.<br> - `"click"`: the dropdown will be presented when the trigger is left clicked.<br> - `"hover"`: the dropdown will be presented when a pointer hovers over the trigger.<br> - `"context-menu"`: the dropdown will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing. | `"click" \| "context-menu" \| "hover"`                       | `"click"`  |


## Events

| Event     | Description                            | Type                |
| --------- | -------------------------------------- | ------------------- |
| `dismiss` | Emitted after the modal has dismissed. | `CustomEvent<void>` |
| `present` | Emitted after the modal has presented. | `CustomEvent<void>` |


## Methods

### `dismiss(data?: any) => Promise<boolean>`

Close the dropdown.

#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `data` | `any` |             |

#### Returns

Type: `Promise<boolean>`

return `true` if the dropdown has been closed, otherwise `false`.

### `present() => Promise<boolean>`

Open the dropdown.

#### Returns

Type: `Promise<boolean>`

return `true` if the dropdown has been opened, otherwise `false`.

### `toggle() => Promise<boolean>`

Toggle the select dropdown

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot        | Description                               |
| ----------- | ----------------------------------------- |
| `"trigger"` | Content that trigger the dropdown to open |


## Parts

| Part         | Description              |
| ------------ | ------------------------ |
| `"backdrop"` | Backdrop element         |
| `"content"`  | Dropdown content         |
| `"dropdown"` | Native `details` element |
| `"trigger"`  | Native `summary` element |


## CSS Custom Properties

| Name              | Description               |
| ----------------- | ------------------------- |
| `--background`    | Change sidebar background |
| `--border-color`  | Change border color       |
| `--border-radius` | Change border radius      |
| `--color`         | Change sidebar text color |
| `--shadow`        | Change box-shadow         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
