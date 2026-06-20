<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Checkbox from './Checkbox.vue'
import type { CheckboxProps } from './checkbox.props'
</script>

<script setup lang="ts">
const model = ref<boolean>(false)

const state = reactive<CheckboxProps>({
  size: 'md',
  indeterminate: false,
})

const formData = ref<Record<string, unknown>>({ agree: false })
</script>

<template>
  <Story group="components" title="Data/Checkbox" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="color"
          :options="[undefined, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']"
        />
        <HstSelect
          v-model="state.size"
          title="size"
          :options="['xs', 'sm', 'md', 'lg']"
        />
        <HstCheckbox v-model="(state.indeterminate as boolean)" title="indeterminate" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
        <HstText v-model="state.description" title="description" />
      </template>

      <Checkbox v-model="model" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-wrap gap-4 p-4">
        <Checkbox v-model="model" color="neutral" />
        <Checkbox v-model="model" color="primary" />
        <Checkbox v-model="model" color="secondary" />
        <Checkbox v-model="model" color="accent" />
        <Checkbox v-model="model" color="info" />
        <Checkbox v-model="model" color="success" />
        <Checkbox v-model="model" color="warning" />
        <Checkbox v-model="model" color="error" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex items-center gap-4 p-4">
        <Checkbox v-model="model" size="xs" />
        <Checkbox v-model="model" size="sm" />
        <Checkbox v-model="model" size="md" />
        <Checkbox v-model="model" size="lg" />
      </div>
    </Variant>

    <Variant title="Indeterminate" id="indeterminate">
      <Checkbox v-model="model" indeterminate />
    </Variant>

    <Variant title="Disabled" id="disabled">
      <div class="flex gap-4">
        <Checkbox v-model="model" disabled />
        <Checkbox :model-value="true" disabled />
      </div>
    </Variant>

    <Variant title="With Description" id="with-description">
      <div class="flex flex-col gap-3">
        <Checkbox v-model="model" description="Enable notifications for new messages" />
        <Checkbox v-model="model" color="primary" description="Subscribe to the newsletter" />
      </div>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="agree" label="Terms & conditions">
          <Checkbox required />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Checkbox

## Description

Checkbox component built on the DaisyUI `checkbox` element.
Works standalone with `v-model` or inside `<FormField />` for full form integration (validation, required indicator).

## API

### v-model

| Name      | Type      | Modifiers | Description          |
|-----------|-----------|-----------|----------------------|
| `v-model` | `boolean` | -         | Bound checked state. |

### Props

| Prop            | Type            | Default     | Configurable       | Description                                                |
|-----------------|-----------------|-------------|--------------------|------------------------------------------------------------|
| `color`         | `CheckboxColor` | `undefined` | :white_check_mark: | Color variant.                                             |
| `size`          | `CheckboxSize`  | `'md'`      | :white_check_mark: | Size.                                                      |
| `indeterminate` | `boolean`    | `false`     | :x:                | Renders the indeterminate visual state.                    |
| `description`   | `string`        | `undefined` | :x:                | Secondary text displayed next to the checkbox.             |
| `disabled`      | `boolean`       | `undefined` | :x:                | Native disabled.                                           |
| `required`      | `boolean`       | `undefined` | :x:                | Native required. Signals `<FormField />` to display `"*"`. |

### Events

| Event     | Payload | Description                                                                             |
|-----------|---------|-----------------------------------------------------------------------------------------|
| `@change` | `Event` | Emitted when the checked state changes (native change event).                           |
| `@blur`   | `Event` | Emitted when the checkbox loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot          | Bindings | Description                                    |
|---------------|----------|------------------------------------------------|
| `description` | -        | Secondary text displayed next to the checkbox. |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Checkbox v-model="accepted" color="primary" />

<!-- With description -->
<Checkbox v-model="accepted" description="Subscribe to the newsletter" />

<!-- Indeterminate -->
<Checkbox v-model="partialSelection" indeterminate />

<!-- Inside FormField -->
<FormField name="agree" label="Terms & conditions">
  <Checkbox required />
</FormField>
```
</docs>