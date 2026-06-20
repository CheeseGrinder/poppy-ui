<script lang="ts">
import { reactive } from 'vue'
import Link from './Link.vue'
import type { LinkProps } from './link.props'
</script>

<script setup lang="ts">
const state = reactive<LinkProps>({
  color: undefined,
  hover: false,
  to: '#',
})
</script>

<template>
  <Story group="components" title="Navigation/Link" auto-props-disabled>

    <Variant title="Default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="Color"
          :options="[
            { label: '-- default --', value: undefined },
            'neutral', 'primary', 'secondary', 'accent',
            'info', 'success', 'warning', 'error',
          ]"
        />
        <HstCheckbox v-model="(state.hover as boolean)" title="Hover only" />
      </template>
      <template #default>
        <Link v-bind="state">Click me</Link>
      </template>
      <template #source>
        <textarea v-pre>
          <Link to="/home" color="primary">Click me</Link>
        </textarea>
      </template>
    </Variant>

    <Variant title="Colors">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Link to="#" color="neutral">Neutral</Link>
          <Link to="#" color="primary">Primary</Link>
          <Link to="#" color="secondary">Secondary</Link>
          <Link to="#" color="accent">Accent</Link>
          <Link to="#" color="info">Info</Link>
          <Link to="#" color="success">Success</Link>
          <Link to="#" color="warning">Warning</Link>
          <Link to="#" color="error">Error</Link>
        </div>
      </template>
      <template #source>
        <textarea v-pre>
          <Link to="/home" color="primary">Primary</Link>
        </textarea>
      </template>
    </Variant>

    <Variant title="Hover only">
      <template #source>
        <textarea v-pre>
          <Link to="/home" hover>
            Underline on hover only
          </Link>
        </textarea>
      </template>

      <template #default>
        <Link to="#" :hover="true">Underline on hover only</Link>
      </template>
    </Variant>

    <Variant title="Inline in text">
      <template #default>
        <p>
          Tailwind CSS resets the style of links by default.
          Add the "link" class to make it look like a
          <Link to="#">normal link</Link>
          again.
        </p>
      </template>
      <template #source>
        <textarea v-pre>
          <p>
            Tailwind CSS resets the style of links by default.
            Add the "link" class to make it look like a
            <Link to="/home">normal link</Link>
            again.
          </p>
        </textarea>
      </template>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Link

## Description
Adds the missing underline style to links.
Supports Vue Router navigation, or native anchors (`#`, `#section`) for in-page links.

## Props
| Prop    | Type               | Default     | Required | Configurable       | Description                                                        |
|---------|--------------------|-------------|----------|--------------------|--------------------------------------------------------------------|
| `color` | `LinkColor`        | `undefined` | :x:      | :white_check_mark: | Color theme of the link                                            |
| `hover` | `boolean`          | `false`     | :x:      | :white_check_mark: | Only shows underline on hover                                      |
| `to`    | `RouteLocationRaw` | `undefined` | :x:      | :x:                | Vue Router location or anchor (`#`). Renders as `<a />` when `'#'` |

## Slots
| Slot      | Description  |
|-----------|--------------|
| `default` | Link content |

## Usage
```vue
<!-- Vue Router link -->
<Link to="/dashboard" color="primary">Dashboard</Link>

<!-- Native anchor -->
<Link to="#section">Jump to section</Link>

<!-- Hover only underline -->
<Link to="#" hover>Hover me</Link>
```
</docs>