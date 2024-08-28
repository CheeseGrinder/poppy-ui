# pop-drawer


<!-- Auto Generated Below -->


## Overview

Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                   | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `open`          | `open`           | Forces the drawer to be open                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `boolean`                              | `false`     |
| `side`          | `side`           | Where to place the sidebar relative to the screen.<br> - `"start"`: The sidebar will appear to the left of the screen in LTR and to the right in RTL.<br> - `"end"`: The sidebar will appear to the right of the screen in LTR and to the left in RTL.                                                                                                                                                                                                                                                                                            | `"end" \| "start"`                     | `"start"`   |
| `trigger`       | `trigger`        | An ID corresponding to the trigger element that<br> causes the drawer to open. Use the `trigger-action`<br> property to customize the interaction that results in<br> the sidebar opening.                                                                                                                                                                                                                                                                                                                                                        | `string`                               | `undefined` |
| `triggerAction` | `trigger-action` | Describes what kind of interaction with the trigger that should<br> cause the sidebar to open. Does not apply when the `trigger` property is `undefined`.<br> - `"click"`: the sidebar will be presented when the trigger is left clicked.<br> - `"hover"`: the sidebar will be presented when a pointer hovers over the trigger.<br> - `"context-menu"`: the sidebar will be presented when the trigger is right<br> clicked on desktop and long pressed on mobile. This will also prevent your<br> device's normal context menu from appearing. | `"click" \| "context-menu" \| "hover"` | `"click"`   |


## Events

| Event           | Description                              | Type                |
| --------------- | ---------------------------------------- | ------------------- |
| `popDidDismiss` | Emitted when the drawer has been opened. | `CustomEvent<void>` |
| `popDidPresent` | Emitted when the drawer has been opened. | `CustomEvent<void>` |


## Methods

### `dismiss() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `present() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Slots

| Slot     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
|          | Container for all page content                                              |
| `"side"` | Content is placed in the drawer and is shown or hidden based on open state. |


## Parts

| Part         | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `"backdrop"` | The backdrop that appears over the main content when the menu is open |
| `"side"`     | The container for the menu content.                                   |


## CSS Custom Properties

| Name                    | Description                      |
| ----------------------- | -------------------------------- |
| `--background`          | Change sidebar background        |
| `--background-backdrop` | Change backdrop background color |
| `--color`               | Change sidebar text color        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
