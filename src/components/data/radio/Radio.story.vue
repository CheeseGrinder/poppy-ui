<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Radio from './Radio.vue'
import type { RadioProps } from './radio.props'
</script>

<script setup lang="ts">
const model = ref<string | number | boolean>('free')

const state = reactive<Omit<RadioProps, 'value'>>({
  size: 'md',
})

const formData = ref<Record<string, unknown>>({ plan: '' })
</script>

<template>
  <Story group="components" title="Data/Radio" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="color"
          :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']"
        />
        <HstSelect
          v-model="state.size"
          title="size"
          :options="['xs', 'sm', 'md', 'lg', 'xl']"
        />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstText v-model="state.description" title="description" />
      </template>

      <div class="flex gap-4">
        <Radio v-model="model" value="free" v-bind="state" />
        <Radio v-model="model" value="pro" v-bind="state" />
        <Radio v-model="model" value="enterprise" v-bind="state" />
      </div>
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-wrap gap-4 p-4">
        <Radio v-model="model" value="neutral" color="neutral" />
        <Radio v-model="model" value="primary" color="primary" />
        <Radio v-model="model" value="secondary" color="secondary" />
        <Radio v-model="model" value="accent" color="accent" />
        <Radio v-model="model" value="info" color="info" />
        <Radio v-model="model" value="success" color="success" />
        <Radio v-model="model" value="warning" color="warning" />
        <Radio v-model="model" value="error" color="error" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex items-center gap-4 p-4">
        <Radio v-model="model" value="xs" size="xs" />
        <Radio v-model="model" value="sm" size="sm" />
        <Radio v-model="model" value="md" size="md" />
        <Radio v-model="model" value="lg" size="lg" />
        <Radio v-model="model" value="xl" size="xl" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <div class="flex gap-4">
        <Radio v-model="model" value="free" disabled />
        <Radio v-model="model" value="pro" disabled />
      </div>
    </Variant>

    <Variant title="With Description" id="with-description">
      <div class="flex flex-col gap-3">
        <Radio v-model="model" value="free" description="Free — up to 3 projects" />
        <Radio v-model="model" value="pro" color="primary" description="Pro — unlimited projects, 9€/month" />
        <Radio v-model="model" value="enterprise" color="secondary" description="Enterprise — custom pricing" />
      </div>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <!-- FormField provides the `name` automatically to all child Radio inputs -->
      <Form v-model="formData">
        <FormField name="plan" label="Plan">
          <div class="flex flex-col gap-2">
            <Radio value="free" description="Free" required />
            <Radio value="pro" description="Pro — 9€/month" />
            <Radio value="enterprise" description="Enterprise" />
          </div>
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Radio

## Description

Radio button component built on the DaisyUI `radio` element.
Radio buttons are grouped by sharing the same `v-model` and `name`. When inside a `<FormField />`, the `name` is inferred automatically from the field name.

## API

### v-model

| Name         | Type                          | Modifiers | Description                                             |
|--------------|-------------------------------|-----------|---------------------------------------------------------|
| `modelValue` | `string \| number \| boolean` | -         | Bound group value. Checked when equal to `props.value`. |

### Props
| Prop          | Type                          | Default     | Configurable       | Description                                                             |
|---------------|-------------------------------|-------------|--------------------|-------------------------------------------------------------------------|
| `value`       | `string \| number \| boolean` | `undefined` | :x:                | The value this radio represents (required).                             |
| `color`       | `RadioColor`                  | `undefined` | :white_check_mark: | Color variant.                                                          |
| `size`        | `RadioSize`                   | `'md'`      | :white_check_mark: | Size.                                                                   |
| `description` | `string`                      | `undefined` | :x:                | Secondary text displayed next to the radio button.                      |
| `name`        | `string`                      | `undefined` | :x:                | Input group name. Inferred from `<FormField />` name when not provided. |
| `disabled`    | `boolean`                     | `undefined` | :x:                | Native disabled.                                                        |
| `required`    | `boolean`                     | `undefined` | :x:                | Native required. Signals `<FormField />` to display `"*"`.              |

### Events

| Event     | Payload | Description                                                                                 |
|-----------|---------|---------------------------------------------------------------------------------------------|
| `@change` | `Event` | Emitted when this radio is selected (native change event).                                  |
| `@blur`   | `Event` | Emitted when the radio button loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot          | Bindings | Description                                        |
|---------------|----------|----------------------------------------------------|
| `description` | -        | Secondary text displayed next to the radio button. |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone group -->
<Radio v-model="plan" value="free" description="Free tier" />
<Radio v-model="plan" value="pro" description="Pro — 9€/month" />

<!-- Inside FormField — name inferred automatically -->
<FormField name="plan" label="Plan">
  <div class="flex flex-col gap-2">
    <Radio value="free" description="Free" required />
    <Radio value="pro" description="Pro — 9€/month" />
  </div>
</FormField>
```
</docs>