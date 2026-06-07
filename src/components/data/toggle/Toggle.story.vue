<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Toggle from './Toggle.vue'
import type { ToggleProps } from './toggle.props'
</script>

<script setup lang="ts">
const model = ref<boolean>(false)

const state = reactive<ToggleProps>({
  size: 'md',
})

const formData = ref<Record<string, unknown>>({ notifications: false })
</script>

<template>
  <Story group="components" title="Data/Toggle" auto-props-disabled :setup-app="({ app }) => {
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
        <HstCheckbox v-model="(state.disabled as boolean)" title="disabled" />
        <HstCheckbox v-model="(state.required as boolean)" title="required" />
        <HstText v-model="state.description" title="description" />
      </template>

      <Toggle v-model="model" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-wrap gap-4 p-4">
        <Toggle v-model="model" color="neutral" />
        <Toggle v-model="model" color="primary" />
        <Toggle v-model="model" color="secondary" />
        <Toggle v-model="model" color="accent" />
        <Toggle v-model="model" color="info" />
        <Toggle v-model="model" color="success" />
        <Toggle v-model="model" color="warning" />
        <Toggle v-model="model" color="error" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex items-center gap-4 p-4">
        <Toggle v-model="model" size="xs" />
        <Toggle v-model="model" size="sm" />
        <Toggle v-model="model" size="md" />
        <Toggle v-model="model" size="lg" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <div class="flex gap-4">
        <Toggle v-model="model" disabled />
        <Toggle :model-value="true" disabled />
      </div>
    </Variant>

    <Variant title="With Description" id="with-description">
      <div class="flex flex-col gap-3">
        <Toggle v-model="model" description="Enable email notifications" />
        <Toggle v-model="model" color="primary" description="Dark mode" />
      </div>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="notifications" label="Notifications">
          <Toggle required />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Toggle

## Description

Toggle (switch) component built on the DaisyUI `toggle` element.
Works standalone with `v-model` or inside `<FormField />` for full form integration (validation, required indicator).

## API

### v-model

| Name      | Type      | Modifiers | Description          |
|-----------|-----------|-----------|----------------------|
| `v-model` | `boolean` | `-`       | Bound checked state. |

### Props

| Prop          | Type          | Default     | Configurable       | Description                                                |
|---------------|---------------|-------------|--------------------|------------------------------------------------------------|
| `color`       | `ToggleColor` | `undefined` | :white_check_mark: | Color variant.                                             |
| `size`        | `ToggleSize`  | `'md'`      | :white_check_mark: | Size.                                                      |
| `description` | `string`      | `undefined` | :x:                | Secondary text displayed next to the toggle.               |
| `disabled`    | `boolean`     | `undefined` | :x:                | Native disabled.                                           |
| `required`    | `boolean`     | `undefined` | :x:                | Native required. Signals `<FormField />` to display `"*"`. |

### Events

| Event     | Payload | Description                                                                           |
|-----------|---------|---------------------------------------------------------------------------------------|
| `@change` | `Event` | Emitted when the toggle state changes (native change event).                          |
| `@blur`   | `Event` | Emitted when the toggle loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot          | Scope | Description                                  |
|---------------|-------|----------------------------------------------|
| `description` | `-`   | Secondary text displayed next to the toggle. |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Toggle v-model="enabled" color="primary" />

<!-- With description -->
<Toggle v-model="enabled" description="Enable dark mode" />

<!-- Inside FormField -->
<FormField name="notifications" label="Notifications">
  <Toggle required />
</FormField>
```
</docs>