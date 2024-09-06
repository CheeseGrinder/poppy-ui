# pop-input-file


<!-- Auto Generated Below -->


## Overview

File Input is a an input field for uploading files.

## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                           | Type                                                                                             | Default        |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------- |
| `autoFocus`  | `auto-focus`  | If `true`, the element will be focused on page load.                                                                                                                                                                                                                  | `boolean`                                                                                        | `false`        |
| `bordered`   | `bordered`    | if `true`, adds border to textarea when `color` property is not set.                                                                                                                                                                                                  | `boolean`                                                                                        | `false`        |
| `color`      | `color`       | The color to use from your application's color palette.<br> Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.<br> For more information on colors, see [theming](/docs/theming/basics).           | `"accent" \| "error" \| "ghost" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined`    |
| `disabled`   | `disabled`    | If `true`, the user cannot interact with the element.                                                                                                                                                                                                                 | `boolean`                                                                                        | `false`        |
| `errorText`  | `error-text`  | Text that is placed under the input-file and displayed when an error is detected.                                                                                                                                                                                     | `string`                                                                                         | `undefined`    |
| `helperText` | `helper-text` | Text that is placed under the input-file and displayed when no error is detected.                                                                                                                                                                                     | `string`                                                                                         | `undefined`    |
| `multiple`   | `multiple`    | If `true`, the user can enter more than one value.<br> This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.                                                                                                                   | `boolean`                                                                                        | `false`        |
| `name`       | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                                       | `string`                                                                                         | `this.inputId` |
| `readonly`   | `readonly`    | If `true`, the user cannot modify the value.                                                                                                                                                                                                                          | `boolean`                                                                                        | `false`        |
| `required`   | `required`    | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                                    | `boolean`                                                                                        | `false`        |
| `size`       | `size`        | Change size of the component<br> Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.                                                                                                                                                                                         | `"lg" \| "md" \| "sm" \| "xs"`                                                                   | `"md"`         |
| `value`      | --            | The value of the toggle does not mean if it's checked or not, use the `checked`<br> property for that.<br> <br> The value of a toggle is analogous to the value of a `<input type="checkbox">`,<br> it's only used when the toggle participates in a native `<form>`. | `File \| File[]`                                                                                 | `undefined`    |


## Events

| Event       | Description                                                                   | Type                                      |
| ----------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| `popBlur`   | Emitted when the input loses focus.                                           | `CustomEvent<void>`                       |
| `popChange` | The `popChange` event is fired when the user modifies the input-file's value. | `CustomEvent<InputFileChangeEventDetail>` |
| `popFocus`  | Emitted when the input has focus.                                             | `CustomEvent<void>`                       |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input` in `pop-input-file`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                       |
| ---- | --------------------------------- |
|      | Slot for the content of the label |


## Parts

| Part       | Description                                        |
| ---------- | -------------------------------------------------- |
| `"label"`  | The native HTML label element that wrap the text . |
| `"native"` | The native HTML input element.                     |


## CSS Custom Properties

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| `--background`         | Change background color.                 |
| `--background-opacity` | CHange background opacity.               |
| `--border-color`       | Change border and outline color.         |
| `--border-radius`      | Change border radius.                    |
| `--button-animation`   | Change animation duration of the button. |
| `--button-background`  | Change button background.                |
| `--button-color`       | Change button text color.                |
| `--color`              | Change text color.                       |
| `--error-color`        | Change error text .                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
