import FormComponent from './form/Form.vue'
import FormFieldComponent from './form-field/FormField.vue'

export { default as Checkbox } from './checkbox/Checkbox.vue'
export { default as FieldSet } from './field-set/FieldSet.vue'

/**
 * `Form.Field` is an alias for the standalone `FormField` export, for
 * consumers coming from libraries with compound-component form APIs.
 * `Form` and `FormField` remain independent named exports.
 */
export const Form = Object.assign(FormComponent, { Field: FormFieldComponent })
export const FormField = FormFieldComponent

export { default as Input } from './input/Input.vue'
export { default as Radio } from './radio/Radio.vue'
export { default as RadioGroup } from './radio-group/RadioGroup.vue'
export { default as Rating } from './rating/Rating.vue'
export { default as Select } from './select/Select.vue'
export { default as Slider } from './slider/Slider.vue'
export { default as Textarea } from './textarea/Textarea.vue'
export { default as Toggle } from './toggle/Toggle.vue'
