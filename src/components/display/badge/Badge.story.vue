<script lang="ts">
import { reactive } from 'vue'
import Badge from './Badge.vue'
import type { BadgeProps } from './badge.props'
</script>

<script setup lang="ts">
const state = reactive<BadgeProps>({
  color: undefined,
  variant: undefined,
  size: 'md',
})
</script>

<template>
  <Story group="components" title="Display/Badge" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Color" v-model="state.color" :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" />
          <HstSelect title="Variant" v-model="state.variant" :options="[{ label: '-- default --', value: undefined }, 'outline', 'soft', 'dash']" />
          <HstSelect title="Size" v-model="state.size" :options="['xs', 'sm', 'md', 'lg', 'xl']" />
        </template>

        <Badge v-bind="state">Badge</Badge>
      </Variant>

      <Variant title="Colors">
        <div class="badge-story badge-story--colors">
          <Badge>default</Badge>
          <Badge color="neutral">neutral</Badge>
          <Badge color="primary">primary</Badge>
          <Badge color="secondary">secondary</Badge>
          <Badge color="accent">accent</Badge>
          <Badge color="info">info</Badge>
          <Badge color="success">success</Badge>
          <Badge color="warning">warning</Badge>
          <Badge color="error">error</Badge>
        </div>
      </Variant>

      <Variant title="Variants">
        <div class="badge-story badge-story--variants">
          <Badge>default</Badge>
          <Badge variant="outline">outline</Badge>
          <Badge variant="soft">soft</Badge>
          <Badge variant="dash">dash</Badge>
        </div>
      </Variant>

      <Variant title="Sizes">
        <div class="badge-story badge-story--sizes">
          <Badge size="xs">xs</Badge>
          <Badge size="sm">sm</Badge>
          <Badge size="md">md</Badge>
          <Badge size="lg">lg</Badge>
          <Badge size="xl">xl</Badge>
        </div>
      </Variant>

      <Variant title="Colors × Variants">
        <div class="badge-story badge-story--matrix">
          <div v-for="variant in ([undefined, 'outline', 'soft', 'dash'])" :key="variant ?? 'default'" class="badge-story--matrix-row">
            <span class="badge-story--label">{{ variant ?? 'default' }}</span>
            <div class="badge-story--matrix-cells">
              <Badge :variant="variant" color="primary">primary</Badge>
              <Badge :variant="variant" color="secondary">secondary</Badge>
              <Badge :variant="variant" color="accent">accent</Badge>
              <Badge :variant="variant" color="info">info</Badge>
              <Badge :variant="variant" color="success">success</Badge>
              <Badge :variant="variant" color="warning">warning</Badge>
              <Badge :variant="variant" color="error">error</Badge>
            </div>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.badge-story {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.badge-story--matrix {
  flex-direction: column;
  gap: 0.75rem;
}

.badge-story--matrix-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.badge-story--matrix-cells {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
  min-width: 4rem;
}
</style>

<docs lang="md">
# Badge

## Description

A small inline label used to highlight status, categories, counts, or metadata.
Built on DaisyUI's `badge` class system with support for colors, variants, and sizes.

## API

### Props

| Prop      | Type           | Default     | Required | Configurable       | Description                                             |
|-----------|----------------|-------------|----------|--------------------|-------------------------------------------------------- |
| `color`   | `BadgeColor`   | `undefined` | :x:      | :white_check_mark: | Color theme of the badge based on the DaisyUI palette.  |
| `variant` | `BadgeVariant` | `undefined` | :x:      | :white_check_mark: | Visual style of the badge. `outline` / `soft` / `dash`. |
| `size`    | `BadgeSize`    | `'md'`      | :x:      | :white_check_mark: | Size of the badge. `xs` / `sm` / `md` / `lg` / `xl`.    |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.badge` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

### Slots
| Slot      | Description                       |
|-----------|-----------------------------------|
| `default` | Text or content inside the badge. |

## Usage

```vue
<!-- Basic -->
<Badge>New</Badge>

<!-- With color -->
<Badge color="success">Active</Badge>

<!-- With variant -->
<Badge color="primary" variant="outline">Draft</Badge>

<!-- Small -->
<Badge color="error" size="sm">3</Badge>
```
</docs>