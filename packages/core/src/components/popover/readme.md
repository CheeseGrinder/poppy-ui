# pop-popover


<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                                   | Default     |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `animated`        | `animated`         | If `true`, the popover will animate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `boolean`                              | `true`      |
| `backdropDismiss` | `backdrop-dismiss` | If `true`, the popover will be dismissed when the backdrop is clicked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `boolean`                              | `false`     |
| `component`       | `component`        | The component to display inside of the popover.<br> You only need to use this if you are not using<br> a JavaScript framework. Otherwise, you can just<br> slot your component inside of `pop-popover`.                                                                                                                                                                                                                                                                                                                                                  | `Function \| HTMLElement \| string`    | `undefined` |
| `componentProps`  | --                 | The data to pass to the popover component.<br> You only need to use this if you are not using<br> a JavaScript framework. Otherwise, you can just<br> set the props directly on your component.                                                                                                                                                                                                                                                                                                                                                          | `{ [key: string]: any; }`              | `undefined` |
| `event`           | --                 | The event to pass to the popover animation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `Event`                                | `undefined` |
| `open`            | `open`             | If `true`, the popover will open. If `false`, the popover will close.<br> Use this if you need finer grained control over presentation, otherwise<br> just use the popoverController or the `trigger` property.<br> Note: `open` will not automatically be set back to `false` when<br> the popover dismisses. You will need to do that in your code.                                                                                                                                                                                                    | `boolean`                              | `false`     |
| `showBackdrop`    | `show-backdrop`    | If `true`, a backdrop will be displayed behind the popover.<br> This property controls whether or not the backdrop<br> darkens the screen when the popover is presented.<br> It does not control whether or not the backdrop<br> is active or present in the DOM.                                                                                                                                                                                                                                                                                        | `boolean`                              | `false`     |
| `trigger`         | `trigger`          | An ID corresponding to the trigger element that<br> causes the popover to open. Use the `trigger-action`<br> property to customize the interaction that results in<br> the popover opening.                                                                                                                                                                                                                                                                                                                                                              | `string`                               | `undefined` |
| `triggerAction`   | `trigger-action`   | Describes what kind of interaction with the trigger that<br> should cause the popover to open. Does not apply when the `trigger`<br> property is `undefined`.<br> If `"click"`, the popover will be presented when the trigger is left clicked.<br> If `"hover"`, the popover will be presented when a pointer hovers over the trigger.<br> If `"context-menu"`, the popover will be presented when the trigger is right<br> clicked on desktop and long pressed on mobile. This will also prevent your<br> device's normal context menu from appearing. | `"click" \| "context-menu" \| "hover"` | `'click'`   |


## Events

| Event         | Description                               | Type                |
| ------------- | ----------------------------------------- | ------------------- |
| `didDismiss`  | Emitted after the popover has dismissed.  | `CustomEvent<void>` |
| `didPresent`  | Emitted after the popover has presented.  | `CustomEvent<void>` |
| `willDismiss` | Emitted before the popover has dismissed. | `CustomEvent<void>` |
| `willPresent` | Emitted before the popover has presented. | `CustomEvent<void>` |


## Methods

### `dismiss(data?: any) => Promise<boolean>`



#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `data` | `any` |             |

#### Returns

Type: `Promise<boolean>`



### `present() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




## Parts

| Part        | Description |
| ----------- | ----------- |
| `"content"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
