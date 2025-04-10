# pop-select


<!-- Auto Generated Below -->


## Overview

Select is used to pick a value from a list of options.

## Properties

| Property             | Attribute               | Description                                                                                                                                                                                                                                                 | Type                                                                                             | Default        |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------- |
| `autoFocus`          | `auto-focus`            | If `true`, the element will be focused on page load.                                                                                                                                                                                                        | `boolean`                                                                                        | `false`        |
| `bordered`           | `bordered`              | if `true`, adds border to select when `color` property is not set.                                                                                                                                                                                          | `boolean`                                                                                        | `false`        |
| `color`              | `color`                 | The color to use from your application's color palette.<br> Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.<br> For more information on colors, see [theming](/docs/theming/basics). | `"accent" \| "error" \| "ghost" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined`    |
| `compare`            | `compare`               | This property allows developers to specify a custom function<br> for comparing objects when determining the selected option in the<br> ion-radio-group. When not specified, the default behavior will use strict<br> equality (===) for comparison.         | `((currentValue: any, newValue: any) => boolean) \| string`                                      | `undefined`    |
| `disabled`           | `disabled`              | If `true`, the user cannot interact with the element.                                                                                                                                                                                                       | `boolean`                                                                                        | `false`        |
| `helperText`         | `helper-text`           | Text that is placed under the select and displayed when no error is detected.                                                                                                                                                                               | `string`                                                                                         | `''`           |
| `max`                | `max`                   | Only apply when `multiple` property is used.<br> The maximum amount of values that can be selected, which must not be less than its minimum (min attribute) value.                                                                                          | `number`                                                                                         | `undefined`    |
| `min`                | `min`                   | Only apply when `multiple` property is used.<br> The minimum amount of values that can be selected, which must not be greater than its maximum (max attribute) value.                                                                                       | `number`                                                                                         | `undefined`    |
| `multiple`           | `multiple`              | If `true`, the user can select more than one value.                                                                                                                                                                                                         | `boolean`                                                                                        | `false`        |
| `name`               | `name`                  | The name of the control, which is submitted with the form data.                                                                                                                                                                                             | `string`                                                                                         | `this.inputId` |
| `notEnoughErrorText` | `not-enough-error-text` | Only apply when `multiple` property is used.<br> Text that is placed under the select and displayed when the amount of selected option is below of the `min` property.                                                                                      | `string`                                                                                         | `''`           |
| `placeholder`        | `placeholder`           | Instructional text that shows before the input has a value.<br> <br> This property replace the `<option disabled selected>`                                                                                                                                 | `string`                                                                                         | `undefined`    |
| `readonly`           | `readonly`              | If `true`, the user cannot modify the value.                                                                                                                                                                                                                | `boolean`                                                                                        | `false`        |
| `required`           | `required`              | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                          | `boolean`                                                                                        | `false`        |
| `size`               | `size`                  | Change size of the component<br> Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.                                                                                                                                                                               | `"lg" \| "md" \| "sm" \| "xs"`                                                                   | `"md"`         |
| `tooManyErrorText`   | `too-many-error-text`   | Only apply when `multiple` property is used.<br> Text that is placed under the select and displayed when the amount of selected option is greater of the `max` property.                                                                                    | `string`                                                                                         | `''`           |
| `value`              | `value`                 | The value of a select is analogous to the value of a `<select>`,<br> it's only used when the toggle participates in a native `<form>`.                                                                                                                      | `any`                                                                                            | `null`         |


## Events

| Event        | Description                                                                                                                                                                                             | Type                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `didDismiss` | Emitted when the overlay is dismissed.                                                                                                                                                                  | `CustomEvent<void>`                         |
| `didPresent` | Emitted when the overlay is presented.                                                                                                                                                                  | `CustomEvent<void>`                         |
| `popBlur`    | Emitted when the input loses focus.                                                                                                                                                                     | `CustomEvent<void>`                         |
| `popChange`  | The `popChange` event is fired when the user modifies the select's value.<br> Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified. | `CustomEvent<SelectChangeEventDetail<any>>` |
| `popFocus`   | Emitted when the input has focus.                                                                                                                                                                       | `CustomEvent<void>`                         |


## Methods

### `dismiss() => Promise<boolean>`

Close the select dropdown

#### Returns

Type: `Promise<boolean>`

`true` if the select dropdown has been closed, otherwise `false`.

### `present() => Promise<boolean>`

Open the select dropdown

#### Returns

Type: `Promise<boolean>`

`true` if the select dropdown has been opened, otherwise `false`.

### `setFocus() => Promise<void>`

Sets focus on the native `select` in `pop-select`. Use this method instead of the global
`select.focus()`.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<boolean>`

Toggle the select dropdown

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot      | Description                       |
| --------- | --------------------------------- |
|           | Slot for the `pop-select-option`  |
| `"label"` | Slot for the content of the label |


## Parts

| Part         | Description                                      |
| ------------ | ------------------------------------------------ |
| `"backdrop"` |                                                  |
| `"content"`  |                                                  |
| `"label"`    | The native HTML label element that wrap the text |


## CSS Custom Properties

| Name              | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `--background`    | Background color for trgger and content                                                  |
| `--border-color`  | Border color for select trigger and content when `bordered` is set                       |
| `--border-radius` | Border radius for select trigger and content                                             |
| `--color`         | Change text color                                                                        |
| `--max-height`    | Change max-height for dropdown content (apply only when screen width is more than 640px) |
| `--opacity`       | Change background opacity                                                                |
| `--outline-color` | Outline color for focused select trigger, `--border-color` is used as fallback           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
