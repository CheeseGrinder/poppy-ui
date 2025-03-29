# pop-tooltip


<!-- Auto Generated Below -->


## Overview

Tooltip can be used to show a message when hovering over an element.

## Properties

| Property             | Attribute  | Description                                                                                                                                                                                                                                      | Type                                                                                  | Default     |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ----------- |
| `color`              | `color`    | The color to use from your application's color palette.<br> Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.<br> For more information on colors, see [theming](/docs/theming/basics). | `"accent" \| "error" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined` |
| `open`               | `open`     | Force open tooltip                                                                                                                                                                                                                               | `boolean`                                                                             | `false`     |
| `position`           | `position` | Define the position of tooltip<br> By default the tootip appear on top                                                                                                                                                                           | `"bottom" \| "left" \| "right" \| "top"`                                              | `"top"`     |
| `value` _(required)_ | `value`    | Text to show on hover                                                                                                                                                                                                                            | `string`                                                                              | `undefined` |


## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Slot for the content of the tooltip |


## CSS Custom Properties

| Name                                    | Description        |
| --------------------------------------- | ------------------ |
| `--pop-tooltip-background`              | Background color   |
| `--pop-tooltip-background-transparency` | Background opacity |
| `--pop-tooltip-color`                   | Text color         |
| `--pop-tooltip-color-transparency`      | Text opacity       |
| `--pop-tooltip-tail`                    | Tooltip arrow size |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
