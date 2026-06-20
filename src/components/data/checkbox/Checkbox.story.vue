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
          :options="['xs', 'sm', 'md', 'lg', 'xl']"
        />
        <HstCheckbox v-model="(state.indeterminate as boolean)" title="indeterminate" />
        <HstCheckbox v-model="(state.disabled as boolean)" title="disabled" />
        <HstCheckbox v-model="(state.readonly as boolean)" title="readonly" />
        <HstCheckbox v-model="(state.required as boolean)" title="required" />
        <HstText v-model="state.description" title="description" />
        <HstText v-model="state.hint" title="hint" />
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
        <Checkbox v-model="model" size="xl" />
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

    <Variant title="Readonly" id="readonly">
      <div class="flex gap-4">
        <Checkbox v-model="model" readonly />
        <Checkbox :model-value="true" readonly description="Cannot be toggled" />
      </div>
    </Variant>

    <Variant title="With Description" id="with-description">
      <div class="flex flex-col gap-3">
        <Checkbox v-model="model" description="Enable notifications for new messages" />
        <Checkbox v-model="model" color="primary" description="Subscribe to the newsletter" />
      </div>
    </Variant>

    <Variant title="With Hint" id="with-hint">
      <div class="flex flex-col gap-3">
        <Checkbox
          v-model="model"
          description="Enable two-factor authentication"
          hint="Adds an extra layer of security to your account"
        />
        <Checkbox
          v-model="model"
          color="primary"
          description="Subscribe to the newsletter"
          hint="You can unsubscribe at any time"
        />
      </div>
    </Variant>

    <Variant title="Required" id="required">
      <Checkbox v-model="model" description="I accept the terms and conditions" required />
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="agree" label="Terms & conditions">
          <Checkbox required description="I agree to the terms and conditions" />
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

| Name         | Type      | Modifiers | Description          |
|--------------|-----------|-----------|----------------------|
| `modelValue` | `boolean` | -         | Bound checked state. |

### Props

| Prop            | Type            | Default     | Configurable       | Description                                                      |
|-----------------|-----------------|-------------|--------------------|--------------------------------------------------------------------|
| `color`         | `CheckboxColor` | `undefined` | :white_check_mark: | Color variant.                                                   |
| `size`          | `CheckboxSize`  | `'md'`      | :white_check_mark: | Size.                                                            |
| `indeterminate` | `boolean`       | `false`     | :x:                | Renders the indeterminate visual state.                          |
| `description`   | `string`        | `undefined` | :x:                | Primary label text displayed to the right of the checkbox.       |
| `hint`          | `string`        | `undefined` | :x:                | Secondary hint text displayed below the description.             |
| `disabled`      | `boolean`       | `undefined` | :x:                | Native disabled.                                                 |
| `readonly`      | `boolean`       | `undefined` | :x:                | Prevents toggling without disabling the visual state.            |
| `required`      | `boolean`       | `undefined` | :x:                | Native required. Displays `"*"` next to the description.         |

### Expose

| Name    | Type                   | Description                                    |
|---------|------------------------|------------------------------------------------|
| `$el`   | `HTMLInputElement ref` | Ref to the underlying `<input />` DOM element. |
| `focus` | `() => void`           | Programmatically focuses the checkbox.         |

### Events

| Event     | Payload | Description                                                                             |
|-----------|---------|-----------------------------------------------------------------------------------------|
| `@change` | `Event` | Emitted when the checked state changes (native change event).                           |
| `@blur`   | `Event` | Emitted when the checkbox loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot          | Bindings | Description                                                    |
|---------------|----------|----------------------------------------------------------------|
| `description` | -        | Primary label text displayed to the right of the checkbox.     |
| `hint`        | -        | Secondary hint text displayed below the description.           |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.checkbox` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Checkbox v-model="accepted" color="primary" />

<!-- With description -->
<Checkbox v-model="accepted" description="Subscribe to the newsletter" />

<!-- With description and hint -->
<Checkbox
  v-model="enabled"
  description="Enable two-factor authentication"
  hint="Adds an extra layer of security"
/>

<!-- Required -->
<Checkbox v-model="agreed" description="I accept the terms" required />

<!-- Indeterminate -->
<Checkbox v-model="partialSelection" indeterminate />

<!-- Inside FormField -->
<FormField name="agree" label="Terms & conditions">
  <Checkbox required description="I agree to the terms and conditions" />
</FormField>
```
</docs>
