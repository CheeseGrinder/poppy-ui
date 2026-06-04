<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Select from './Select.vue'
import type { SelectProps } from './select.props.ts'
</script>

<script setup lang="ts">
const model = ref<string>()
const multiModel = ref<string[]>([])

const state = reactive<SelectProps>({
  size: 'md',
  clearable: true,
})

const countries = [
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'pt', label: 'Portugal' },
]

const tags = [
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
  { value: 'solid', label: 'Solid' },
]

const formData = ref<Record<string, unknown>>({ country: undefined, stack: [] })
</script>

<template>
  <Story group="components" title="Data/Select" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({ legacy: false, locale: 'en', messages: {
      en: {
        common: {
          field: {
            select: {
              placeholder: 'Select an option…',
              empty: 'No options available',
            },
          },
        },
      },
    }}))
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
        <HstSelect
          v-model="state.variant"
          title="variant"
          :options="[{ label: '-- default --', value: undefined }, 'bordered', 'ghost']"
        />
        <HstCheckbox v-model="state.clearable" title="clearable" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
        <HstText v-model="state.placeholder" title="placeholder" />
      </template>

      <Select v-model="model" :options="countries" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-2 p-4">
        <Select v-model="model" :options="countries" color="neutral" placeholder="neutral" />
        <Select v-model="model" :options="countries" color="primary" placeholder="primary" />
        <Select v-model="model" :options="countries" color="secondary" placeholder="secondary" />
        <Select v-model="model" :options="countries" color="accent" placeholder="accent" />
        <Select v-model="model" :options="countries" color="info" placeholder="info" />
        <Select v-model="model" :options="countries" color="success" placeholder="success" />
        <Select v-model="model" :options="countries" color="warning" placeholder="warning" />
        <Select v-model="model" :options="countries" color="error" placeholder="error" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <Select v-model="model" :options="countries" disabled placeholder="Disabled" />
    </Variant>

    <Variant title="Clearable" id="clearable">
      <Select v-model="model" :options="countries" clearable placeholder="Select a country…" />
    </Variant>

    <Variant title="Multiple" id="multiple">
      <Select v-model="multiModel" :options="tags" multiple placeholder="Select technologies…" />
    </Variant>

    <Variant title="Multiple with Counter" id="multiple-counter">
      <Select
        v-model="multiModel"
        :options="tags"
        multiple
        :min="1"
        :max="3"
        placeholder="Select up to 3…"
      />
    </Variant>

    <Variant title="Custom option slot" id="custom-option">
      <Select v-model="model" :options="countries" placeholder="Select a country…">
        <template #option="{ option, selected }">
          <span class="flex items-center gap-2">
            <span>{{ selected ? '✓' : '○' }}</span>
            <span>{{ option.label }}</span>
          </span>
        </template>
      </Select>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="country" label="Country" hint="Where are you based?">
          <Select :options="countries" required placeholder="Select a country…" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Multiple inside FormField" id="multiple-inside-form-field">
      <Form v-model="formData">
        <FormField name="stack" label="Tech stack">
          <Select :options="tags" multiple :max="3" placeholder="Select up to 3 technologies…" />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Select

## Description
Custom select component with a dropdown built on DaisyUI `select` styling.
Supports single and multiple selection, object values with custom equality, clearable mode, badges for multiple selection, and an item counter.
Works standalone with `v-model` or inside `<FormField />` for full form integration.

## defineModel
| Name         | Type                    | Modifiers | Description                                                        |
|--------------|-------------------------|-----------|--------------------------------------------------------------------|
| `modelValue` | `T \| T[] \| undefined` | —         | Selected value. Array when `multiple` is enabled.                  |

## Props
| Prop               | Type                     | Default | Configurable       | Description                                                            |
|--------------------|--------------------------|---------|--------------------|------------------------------------------------------------------------|
| `color`            | `SelectColor`            | `—`     | :white_check_mark: | Color variant.                                                         |
| `size`             | `SelectSize`             | `'md'`  | :white_check_mark: | Size.                                                                  |
| `variant`          | `SelectVariant`          | `—`     | :white_check_mark: | Visual style variant. `'bordered'` or `'ghost'`.                       |
| `options`          | `SelectOption[]`         | `—`     | :x:                | List of options to display.                                            |
| `equals`           | `keyof T \| EqualsArgFn` | `—`     | :x:                | Key or function used for value equality comparison.                    |
| `multiple`         | `boolean`                | `false` | :x:                | Enables multiple selection. Model becomes an array.                    |
| `clearable`        | `boolean`                | `false` | :x:                | Shows a clear button when a value is selected (single mode).           |
| `counterFormatter` | `SelectCounterFormatter` | `—`     | :white_check_mark: | Custom counter format function `(count, min?, max?) => string`.        |
| `placeholder`      | `string`                 | `—`     | :x:                | Text shown when no value is selected.                                  |
| `name`             | `string`                 | `—`     | :x:                | Native input name. Inferred from `<FormField />` when not provided.    |
| `disabled`         | `boolean`                | `false` | :x:                | Disables all interaction.                                              |
| `required`         | `boolean`                | `false` | :x:                | Marks the field as required. Signals `<FormField />` to display `"*"`. |

> The item counter is controlled via native `min` and `max` HTML attributes passed directly to the component.

## Events
| Event   | Payload | Description                               |
|---------|---------|-------------------------------------------|
| `clear` | —       | Emitted when the clear button is clicked. |

## Slots
| Slot       | Scope                  | Description                                       |
|------------|------------------------|---------------------------------------------------|
| `option`   | `{ option, selected }` | Custom rendering for each option in the dropdown. |
| `selected` | `{ option, remove }`   | Custom rendering for the selected value(s).       |

## Exposed
| Name     | Description                           |
|----------|---------------------------------------|
| `open`   | Opens the dropdown programmatically.  |
| `close`  | Closes the dropdown programmatically. |
| `toggle` | Toggles the dropdown.                 |
| `clear`  | Clears the current selection.         |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Single -->
<Select v-model="country" :options="countries" placeholder="Select a country…" clearable />

<!-- Multiple with counter -->
<Select v-model="tags" :options="tagOptions" multiple :max="3" />

<!-- Object values with key equality -->
<Select v-model="user" :options="users" equals="id" />

<!-- Inside FormField -->
<FormField name="country" label="Country">
  <Select :options="countries" required placeholder="Select a country…" />
</FormField>
```
</docs>