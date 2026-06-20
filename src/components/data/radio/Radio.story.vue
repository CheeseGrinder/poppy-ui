<script lang="ts">
import FieldSet from '@/components/data/field-set/FieldSet.vue'
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import RadioGroup from '@/components/data/radio-group/RadioGroup.vue'
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
        <HstCheckbox v-model="(state.disabled as boolean)" title="disabled" />
        <HstCheckbox v-model="(state.required as boolean)" title="required" />
        <HstText v-model="state.description" title="description" />
        <HstText v-model="state.hint" title="hint" />
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

    <Variant title="With Hint" id="with-hint">
      <div class="flex flex-col gap-3">
        <Radio
          v-model="model"
          value="free"
          description="Free"
          hint="Up to 3 projects, community support"
        />
        <Radio
          v-model="model"
          value="pro"
          color="primary"
          description="Pro — 9€/month"
          hint="Unlimited projects, priority support"
        />
        <Radio
          v-model="model"
          value="enterprise"
          color="secondary"
          description="Enterprise"
          hint="Custom pricing, dedicated support"
        />
      </div>
    </Variant>

    <Variant title="Via RadioGroup" id="via-radio-group">
      <!-- RadioGroup manages the shared name + v-model when outside FormField -->
      <RadioGroup v-model="model">
        <div class="flex flex-col gap-2">
          <Radio value="free" description="Free" hint="Up to 3 projects" />
          <Radio value="pro" color="primary" description="Pro — 9€/month" hint="Unlimited projects" />
          <Radio value="enterprise" color="secondary" description="Enterprise" hint="Custom pricing" />
        </div>
      </RadioGroup>
    </Variant>

    <Variant title="Via RadioGroup inside FieldSet" id="radio-group-field-set">
      <FieldSet legend="Subscription plan" bordered>
        <RadioGroup v-model="model" class="mt-2">
          <div class="flex flex-col gap-2">
            <Radio value="free" description="Free" hint="Up to 3 projects" />
            <Radio value="pro" color="primary" description="Pro — 9€/month" hint="Unlimited projects" />
            <Radio value="enterprise" color="secondary" description="Enterprise" hint="Custom pricing" />
          </div>
        </RadioGroup>
      </FieldSet>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <!-- FormField provides the name automatically to all child Radio inputs -->
      <Form v-model="formData">
        <FormField name="plan" label="Plan">
          <div class="flex flex-col gap-2 mt-1">
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
Radios are grouped by sharing the same `v-model` / `name`, provided automatically by `<RadioGroup />` or `<FormField />`.

## API

### v-model

| Name         | Type                          | Modifiers | Description                                             |
|--------------|-------------------------------|-----------|---------------------------------------------------------|
| `modelValue` | `string \| number \| boolean` | -         | Bound group value. Checked when equal to `props.value`. |

### Props

| Prop          | Type                          | Default     | Configurable       | Description                                                                                |
|---------------|-------------------------------|-------------|--------------------|--------------------------------------------------------------------------------------------|
| `value`       | `string \| number \| boolean` | `undefined` | :x:                | The value this radio represents (required).                                                |
| `color`       | `RadioColor`                  | `undefined` | :white_check_mark: | Color variant.                                                                             |
| `size`        | `RadioSize`                   | `'md'`      | :white_check_mark: | Size.                                                                                      |
| `description` | `string`                      | `undefined` | :x:                | Primary label text displayed to the right of the radio button.                             |
| `hint`        | `string`                      | `undefined` | :x:                | Secondary hint text displayed below the description.                                       |
| `name`        | `string`                      | `undefined` | :x:                | Input group name. Inferred from `<FormField />` or `<RadioGroup />` when not provided.     |
| `disabled`    | `boolean`                     | `undefined` | :x:                | Native disabled.                                                                           |
| `required`    | `boolean`                     | `undefined` | :x:                | Native required. Displays `"*"` next to the description.                                   |

### Expose

| Name    | Type                   | Description                                    |
|---------|------------------------|------------------------------------------------|
| `$el`   | `HTMLInputElement ref` | Ref to the underlying `<input />` DOM element. |
| `focus` | `() => void`           | Programmatically focuses the radio button.     |

### Events

| Event     | Payload | Description                                                                                 |
|-----------|---------|---------------------------------------------------------------------------------------------|
| `@change` | `Event` | Emitted when this radio is selected (native change event).                                  |
| `@blur`   | `Event` | Emitted when the radio button loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot          | Bindings | Description                                              |
|---------------|----------|----------------------------------------------------------|
| `description` | -        | Primary label text displayed to the right of the radio.  |
| `hint`        | -        | Secondary hint text displayed below the description.     |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.radio` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Via RadioGroup (standalone, outside FormField) -->
<RadioGroup v-model="plan">
  <Radio value="free" description="Free" hint="Up to 3 projects" />
  <Radio value="pro" color="primary" description="Pro — 9€/month" />
</RadioGroup>

<!-- Via RadioGroup inside FieldSet -->
<FieldSet legend="Plan" bordered>
  <RadioGroup v-model="plan">
    <Radio value="free" description="Free" />
    <Radio value="pro" description="Pro" />
  </RadioGroup>
</FieldSet>

<!-- Inside FormField — name inferred automatically, no RadioGroup needed -->
<FormField name="plan" label="Plan">
  <Radio value="free" description="Free" required />
  <Radio value="pro" description="Pro — 9€/month" />
</FormField>
```
</docs>
