# pop-accordion


<!-- Auto Generated Below -->


## Overview

Accordion is used for showing and hiding content.

## Properties

| Property            | Attribute  | Description                                                                                                                                                                                                  | Type      | Default     |
| ------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `disabled`          | `disabled` | If `true`, the user cannot interact with the element.                                                                                                                                                        | `boolean` | `false`     |
| `name` _(required)_ | `name`     | name of the accordion                                                                                                                                                                                        | `string`  | `undefined` |
| `open`              | `open`     | If `true`, the accordion is open.<br> <br> The developer must not set this value to `true` if the accordion is used in `<accordion-group>` element and set the active property to the name of the accordion. | `boolean` | `false`     |
| `readonly`          | `readonly` | If `true`, the user cannot interact with the element.                                                                                                                                                        | `boolean` | `false`     |


## Methods

### `hide() => Promise<boolean>`

Close the accordion.
If the method returns `false`, the accordion was already closed. otherwise it returns `true`

#### Returns

Type: `Promise<boolean>`



### `show() => Promise<boolean>`

Open the accordion.
If the method returns `false`, the accordion was already open. otherwise it returns `true`

#### Returns

Type: `Promise<boolean>`



### `toggle() => Promise<void>`

Open or close the accordion depending on his actual state

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description                          |
| ---------- | ------------------------------------ |
|            | Content that will be hiding or shown |
| `"header"` | Content of the accordion header      |


## Parts

| Part        | Description              |
| ----------- | ------------------------ |
| `"content"` | Content of the accordion |
| `"header"`  | Header of the accordion  |


## CSS Custom Properties

| Name              | Description             |
| ----------------- | ----------------------- |
| `--animation`     | Change animation timing |
| `--background`    | Change background color |
| `--border-color`  | Change border color     |
| `--border-radius` | Change border radius    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
