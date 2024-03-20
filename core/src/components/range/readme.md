# pop-range



<!-- Auto Generated Below -->


## Overview

Range slider is used to select a value by sliding a handle.



## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                                                   | Type                                                                                             | Default       |
|-------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------|
| `autoFocus` | `auto-focus` | If `true`, the element will be focused on page load.                                                                                                                                                                                                          | `boolean`                                                                                        | `false`       |
| `color`     | `color`      | The color to use from your application's color palette.<br>Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.<br>For more information on colors, see [theming](/docs/theming/basics).     | `"accent" \| "error" \| "ghost" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined`   |
| `debounce`  | `debounce`   | Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.                                                                                                                                                          | `number`                                                                                         | `0`           |
| `disabled`  | `disabled`   | If `true`, the user cannot interact with the element.                                                                                                                                                                                                         | `boolean`                                                                                        | `false`       |
| `max`       | `max`        | The maximum value, which must not be less than its minimum (min attribute) value.                                                                                                                                                                             | `number`                                                                                         | `100`         |
| `min`       | `min`        | The minimum value, which must not be greater than its maximum (max attribute) value.                                                                                                                                                                          | `number`                                                                                         | `0`           |
| `name`      | `name`       | The name of the control, which is submitted with the form data.                                                                                                                                                                                               | `string`                                                                                         | `this.#inputId`|
| `required`  | `required`   | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                            | `boolean`                                                                                        | `false`       |
| `size`      | `size`       | Change size of the component<br>Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.                                                                                                                                                                                  | `"lg" \| "md" \| "sm" \| "xs"`                                                                   | `'md'`        |
| `step`      | `step`       | Works with the min and max attributes to limit the increments at which a value can be set.                                                                                                                                                                    | `number`                                                                                         | `1`           |
| `value`     | `value`      | The value of the toggle does not mean if it's checked or not, use the `checked`<br>property for that.<br>The value of a toggle is analogous to the value of a `<input type="checkbox">`,<br>it's only used when the toggle participates in a native `<form>`. | `number`                                                                                         | `undefined`   |


## Events

| Event       | Description                                                                                                                                                                                           | Type                                  |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `popBlur`   | Emitted when the input loses focus.                                                                                                                                                                   | `CustomEvent<void>`                   |
| `popChange` | The `popChange` event is fired when the user modifies the input's value.<br>Unlike the popInput event, the `popChange` event is fired when the element loses focus after its value has been modified. | `CustomEvent<RangeChangeEventDetail>` |
| `popFocus`  | Emitted when the input has focus.                                                                                                                                                                     | `CustomEvent<void>`                   |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input` in `pop-range`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`



## Shadow Parts

| Part     | Description                      |
|----------|----------------------------------|
| `native` | The native HTML input element.   |

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
