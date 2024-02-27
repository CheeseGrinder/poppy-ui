# pop-toggle



<!-- Auto Generated Below -->


## Overview

Toggle is a checkbox that is styled to look like a switch button.

## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                                                           | Type                                                                                             | Default         |
| --------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------- |
| `checked`       | `checked`       | If `true`, the toggle is selected.                                                                                                                                                                                                                    | `boolean`                                                                                        | `false`         |
| `color`         | `color`         | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`. For more information on colors, see [theming](/docs/theming/basics).   | `"accent" \| "error" \| "ghost" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined`     |
| `disabled`      | `disabled`      | If true, the user cannot interact with the native element.                                                                                                                                                                                            | `boolean`                                                                                        | `undefined`     |
| `indeterminate` | `indeterminate` | If a developer want to use `indeterminate`, `checked` property should be set to `false`                                                                                                                                                               | `boolean`                                                                                        | `false`         |
| `name`          | `name`          | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`                                                                                         | `this.#inputId` |
| `readonly`      | `readonly`      | If `true`, the user cannot modify the value.                                                                                                                                                                                                          | `boolean`                                                                                        | `false`         |
| `required`      | `required`      | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                    | `boolean`                                                                                        | `false`         |
| `size`          | `size`          | Change size of the component Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.                                                                                                                                                                             | `"lg" \| "md" \| "sm" \| "xs"`                                                                   | `undefined`     |
| `value`         | `value`         | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`. | `string`                                                                                         | `'on'`          |


## Events

| Event       | Description                                    | Type                                           |
| ----------- | ---------------------------------------------- | ---------------------------------------------- |
| `popBlur`   | Emitted when the input loses focus.            | `CustomEvent<void>`                            |
| `popChange` | Emitted when the input checked attribut change | `CustomEvent<ToggleChangeEventDetail<string>>` |
| `popFocus`  | Emitted when the input has focus.              | `CustomEvent<void>`                            |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input` in `pop-toggle`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                       |
| ---- | --------------------------------- |
|      | Slot for the content of the label |


## Shadow Parts

| Part       | Description                                        |
| ---------- | -------------------------------------------------- |
| `"label"`  | The native HTML label element that wrap the text . |
| `"native"` | The native HTML input element.                     |


## CSS Custom Properties

| Name                   | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `--animation-duration` | Animation duration                                   |
| `--background`         | Background color                                     |
| `--border-radius`      | Border radius                                        |
| `--checked-color`      | Change border and thumd color when toggle is checked |
| `--color`              | Change border and thumd color                        |
| `--opacity`            | Change border and thumd opacity                      |
| `--required-color`     | Change required star color                           |


## Dependencies

### Used by

 - [pop-app](../app)

### Graph
```mermaid
graph TD;
  pop-app --> pop-toggle
  style pop-toggle fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
