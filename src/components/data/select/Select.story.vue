<script lang="ts">
import { Form, FormField } from '@/components/data/public'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Select from './Select.vue'
import type { SelectProps } from './select.props.ts'
</script>

<script setup lang="ts">
const model = ref<string>()
const multiModel = ref<string[]>([])
const multiSearchModel = ref<string[]>([])
const remoteDefaultModel = ref<string>('es')

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

async function searchCountries({ term, limit, page }: { term: string; limit: number; page: number; lastItem?: unknown }) {
  await new Promise(r => setTimeout(r, 600))
  const all = countries.filter(c => c.label.toLowerCase().includes(term.toLowerCase()))
  const start = (page - 1) * limit
  return all.slice(start, start + limit)
}
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
              search: 'Search…',
            },
          },
        },
      },
    }}))
  }" :layout="{ type: 'single', iframe: false }">

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
        <HstCheckbox v-model="state.readonly" title="readonly" />
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

    <Variant title="Readonly" id="readonly">
      <Select v-model="model" :options="countries" readonly clearable placeholder="Select a country…" />
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

    <Variant title="Searchable (local)" id="searchable-local">
      <Select
        v-model="model"
        :options="countries"
        searchable
        placeholder="Select a country…"
      />
    </Variant>

    <Variant title="Searchable (remote)" id="searchable-remote">
      <Select
        v-model="model"
        searchable
        :search="searchCountries"
        :limit="3"
        placeholder="Search countries…"
      />
    </Variant>

    <Variant title="Searchable multiple" id="searchable-multiple">
      <Select
        v-model="multiSearchModel"
        :options="countries"
        searchable
        multiple
        clearable
        placeholder="Search and select countries…"
      />
    </Variant>

    <Variant title="Searchable (remote) with default value" id="searchable-remote-default">
      <Select
        v-model="remoteDefaultModel"
        searchable
        :search="searchCountries"
        :limit="3"
        placeholder="Search countries…"
      />
    </Variant>

  </Story>
</template>

<docs lang="md">
# Select

## Description

Custom select component with a dropdown built on DaisyUI `select` styling.
Supports single and multiple selection, object values with custom equality, clearable mode, badges for multiple selection, and an item counter.
Add `searchable` for local filtering or pass a `search` callback for remote data with debounce, pagination, and infinite scroll.
Works standalone with `v-model` or inside `<FormField />` for full form integration.

## API

### v-model

| Name         | Type                    | Modifiers | Description                                       |
|--------------|-------------------------|-----------|---------------------------------------------------|
| `modelValue` | `T \| T[] \| undefined` | -         | Selected value. Array when `multiple` is enabled. |

### Props

| Prop               | Type                     | Default     | Configurable       | Description                                                                                          |
|--------------------|--------------------------|-------------|--------------------|------------------------------------------------------------------------------------------------------|
| `color`            | `SelectColor`            | `undefined` | :white_check_mark: | Color variant.                                                                                       |
| `size`             | `SelectSize`             | `'md'`      | :white_check_mark: | Size.                                                                                                |
| `variant`          | `SelectVariant`          | `undefined` | :white_check_mark: | Visual style variant. `'bordered'` or `'ghost'`.                                                     |
| `options`          | `SelectOption[]`         | `undefined` | :x:                | List of options. Required for local mode; optional when using `search`.                              |
| `equals`           | `keyof T \| EqualsArgFn` | `undefined` | :x:                | Key or function used for value equality comparison.                                                  |
| `multiple`         | `boolean`                | `false`     | :x:                | Enables multiple selection. Model becomes an array.                                                  |
| `clearable`        | `boolean`                | `false`     | :white_check_mark: | Shows a clear button when a value is selected (single mode). Hidden when `readonly`.                 |
| `counterFormatter` | `SelectCounterFormatter` | `undefined` | :white_check_mark: | Custom counter format function `(count, min?, max?) => string`.                                      |
| `placeholder`      | `string`                 | `undefined` | :x:                | Text shown when no value is selected.                                                                |
| `name`             | `string`                 | `undefined` | :x:                | Native input name. Inferred from `<FormField />` when not provided.                                  |
| `disabled`         | `boolean`                | `false`     | :x:                | Disables all interaction.                                                                            |
| `required`         | `boolean`                | `false`     | :x:                | Marks the field as required. Signals `<FormField />` to display `"*"`.                               |
| `readonly`         | `boolean`                | `false`     | :x:                | Shows the current value but prevents any change. Clear button and dropdown are disabled.             |
| `searchable`       | `boolean`                | `false`     | :x:                | Adds a search input inside the dropdown. Filters `options` locally, or delegates to `search`.        |
| `search`           | `SelectSearchFn`         | `undefined` | :x:                | Async callback for remote search. Called on open (empty term) and on input (debounced).              |
| `debounce`         | `number`                 | `300`       | :x:                | Debounce delay in ms before triggering `search` on input.                                            |
| `minChars`         | `number`                 | `0`         | :x:                | Minimum characters required to trigger `search` on input. Does not affect the initial fetch on open. |
| `limit`            | `number`                 | `20`        | :x:                | Items per page passed to `search`. Also used to detect whether more pages exist.                     |
| `itemHeight`       | `number`                 | `36`        | :x:                | Height in px of each item in the virtual list. Must match the actual rendered height.                |

> The item counter is controlled via native `min` and `max` HTML attributes passed directly to the component.

### SearchParams

The `search` callback receives a `SearchParams` object:

| Field      | Type             | Description                                                                |
|------------|------------------|----------------------------------------------------------------------------|
| `term`     | `string`         | Current search query (empty string on initial open).                       |
| `limit`    | `number`         | Number of items per page (from the `limit` prop).                          |
| `page`     | `number`         | Current page number, starting at `1`. Increments on infinite scroll.       |
| `lastItem` | `T \| undefined` | Value of the last fetched item. Use as cursor for cursor-based pagination. |

### Events

| Event   | Payload | Description                               |
|---------|---------|-------------------------------------------|
| `clear` | -       | Emitted when the clear button is clicked. |

### Slots

| Slot           | Bindings                      | Description                                                          |
|----------------|-------------------------------|----------------------------------------------------------------------|
| `option`       | `{ option, selected, index }` | Custom rendering for each option in the dropdown.                    |
| `selected`     | `{ option, remove }`          | Custom rendering for the selected value(s).                          |
| `empty`        | `{ query }`                   | Content shown when the option list is empty.                         |
| `loading`      | `{ query }`                   | Content shown during the initial remote fetch.                       |
| `loading-more` | `{ page }`                    | Content shown at the bottom of the list while loading the next page. |
| `error`        | `{ query, retry }`            | Content shown when `search` throws. `retry` re-triggers the fetch.   |

### Expose

| Name     | Type                    | Description                                 |
|----------|-------------------------|---------------------------------------------|
| `$el`    | `HTMLButtonElement ref` | Ref to the underlying trigger `<button />`. |
| `open`   | `() => void`            | Opens the dropdown programmatically.        |
| `close`  | `() => void`            | Closes the dropdown programmatically.       |
| `toggle` | `() => void`            | Toggles the dropdown.                       |
| `clear`  | `() => void`            | Clears the current selection.               |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.select` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Single -->
<Select v-model="country" :options="countries" placeholder="Select a country…" clearable />

<!-- Multiple with counter -->
<Select v-model="tags" :options="tagOptions" multiple :max="3" />

<!-- Object values with key equality -->
<Select v-model="user" :options="users" equals="id" />

<!-- Searchable local -->
<Select v-model="country" :options="countries" searchable placeholder="Search a country…" />

<!-- Remote search with offset pagination -->
<Select
  v-model="user"
  searchable
  :search="({ term, limit, page }) => fetchUsers({ term, limit, page })"
/>

<!-- Remote search with cursor-based pagination -->
<Select
  v-model="user"
  searchable
  :search="({ term, limit, lastItem }) => fetchUsers({ term, limit, after: lastItem?.id })"
/>

<!-- Inside FormField -->
<FormField name="country" label="Country">
  <Select :options="countries" required placeholder="Select a country…" />
</FormField>
```
</docs>