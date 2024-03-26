# pop-radio-group


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                                                                   | Type                                                                                  | Default         |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------- |
| `allowEmpty` | `allow-empty` | If `true`, the radios can be deselected.                                                                                                                                                                                                                                                                      | `boolean`                                                                             | `false`         |
| `color`      | `color`       | The color to use from your application's color palette.<br> Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.<br> For more information on colors, see [theming](/docs/theming/basics).<br> <br> If the `pop-radio` as no color, it will apply to it | `"accent" \| "error" \| "info" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined`     |
| `compare`    | `compare`     | This property allows developers to specify a custom function<br> for comparing objects when determining the selected option in the<br> ion-radio-group. When not specified, the default behavior will use strict<br> equality (===) for comparison.                                                           | `((currentValue: any, newValue: any) => boolean) \| string`                           | `undefined`     |
| `disabled`   | `disabled`    | If `true`, apply the disabled property to all `pop-radio`.                                                                                                                                                                                                                                                    | `boolean`                                                                             | `false`         |
| `name`       | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                                                                               | `string`                                                                              | `this.#inputId` |
| `required`   | `required`    | If `true`, apply the required property to all `pop-radio`.                                                                                                                                                                                                                                                    | `boolean`                                                                             | `false`         |
| `size`       | `size`        | Change size of the component<br> Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.<br> <br> If the `pop-radio` as no size, it will apply to it                                                                                                                                                                     | `"lg" \| "md" \| "sm" \| "xs"`                                                        | `'md'`          |
| `value`      | `value`       | the value of the radio group.                                                                                                                                                                                                                                                                                 | `any`                                                                                 | `undefined`     |


## Events

| Event       | Description                                                                                                                                                      | Type                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `popChange` | The `popChange` event is fired when the user select an option.<br> Unlike the ionInput event, the `popChange` event is fired when the user click on the element. | `CustomEvent<RadioGroupChangeEventDetail<any>>` |


## Slots

| Slot | Description                     |
| ---- | ------------------------------- |
|      | Slot for all of the `pop-radio` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
