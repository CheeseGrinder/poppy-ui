# pop-popover



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                   | Default     |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `animated`        | `animated`         | If `true`, the popover will animate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `boolean`                              | `true`      |
| `backdropDismiss` | `backdrop-dismiss` | If `true`, the popover will be dismissed when the backdrop is clicked.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `boolean`                              | `true`      |
| `component`       | `component`        | The component to display inside of the popover. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just slot your component inside of `pop-popover`.                                                                                                                                                                                                                                                                                                                                  | `Function \| HTMLElement \| string`    | `undefined` |
| `componentProps`  | `component-props`  | The data to pass to the popover component. You only need to use this if you are not using a JavaScript framework. Otherwise, you can just set the props directly on your component.                                                                                                                                                                                                                                                                                                                                          | `Function \| HTMLElement \| string`    | `undefined` |
| `event`           | --                 | The event to pass to the popover animation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `Event`                                | `undefined` |
| `open`            | `open`             | If `true`, the popover will open. If `false`, the popover will close. Use this if you need finer grained control over presentation, otherwise just use the popoverController or the `trigger` property. Note: `open` will not automatically be set back to `false` when the popover dismisses. You will need to do that in your code.                                                                                                                                                                                        | `boolean`                              | `false`     |
| `showBackdrop`    | `show-backdrop`    | If `true`, a backdrop will be displayed behind the popover. This property controls whether or not the backdrop darkens the screen when the popover is presented. It does not control whether or not the backdrop is active or present in the DOM.                                                                                                                                                                                                                                                                            | `boolean`                              | `true`      |
| `trigger`         | `trigger`          | An ID corresponding to the trigger element that causes the popover to open. Use the `trigger-action` property to customize the interaction that results in the popover opening.                                                                                                                                                                                                                                                                                                                                              | `string`                               | `undefined` |
| `triggerAction`   | `trigger-action`   | Describes what kind of interaction with the trigger that should cause the popover to open. Does not apply when the `trigger` property is `undefined`. If `"click"`, the popover will be presented when the trigger is left clicked. If `"hover"`, the popover will be presented when a pointer hovers over the trigger. If `"context-menu"`, the popover will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing. | `"click" \| "context-menu" \| "hover"` | `'click'`   |


## Events

| Event         | Description                               | Type                |
| ------------- | ----------------------------------------- | ------------------- |
| `didDismiss`  | Emitted after the popover has dismissed.  | `CustomEvent<void>` |
| `didPresent`  | Emitted after the popover has presented.  | `CustomEvent<void>` |
| `willDismiss` | Emitted before the popover has dismissed. | `CustomEvent<void>` |
| `willPresent` | Emitted before the popover has presented. | `CustomEvent<void>` |


## Methods

### `dismiss() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `present() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"content"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
