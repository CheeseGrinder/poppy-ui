<script lang="ts" setup>
import { reactive } from 'vue'
import Loading from './Loading.vue'
import type { LoadingProps } from './loading.props'

const state = reactive<LoadingProps>({
  variant: 'spinner',
  size: 'md',
})
</script>

<template>
  <Story title="Feedback/Loading" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Variant" v-model="state.variant" :options="['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity']" />
          <HstSelect title="Size" v-model="state.size" :options="['xs', 'sm', 'md', 'lg', 'xl']" />
        </template>

        <Loading v-bind="state" />
      </Variant>

      <Variant title="Variants">
        <div class="loading-story loading-story--row">
          <div v-for="variant in (['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'])" :key="variant" class="loading-story--item">
            <Loading :variant="variant" size="md" />
            <span class="loading-story--label">{{ variant }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Sizes">
        <div class="loading-story loading-story--row">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="loading-story--item">
            <Loading variant="spinner" :size="size" />
            <span class="loading-story--label">{{ size }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Variants × Sizes">
        <div class="loading-story loading-story--col">
          <div v-for="variant in (['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'])" :key="variant" class="loading-story--matrix-row">
            <span class="loading-story--label loading-story--label-wide">{{ variant }}</span>
            <div class="loading-story loading-story--row">
              <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="loading-story--item">
                <Loading :variant="variant" :size="size" />
                <span class="loading-story--label">{{ size }}</span>
              </div>
            </div>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.loading-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.loading-story--row {
  align-items: flex-end;
}

.loading-story--col {
  flex-direction: column;
  gap: 0.75rem;
}

.loading-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.loading-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.loading-story--label-wide {
  min-width: 5rem;
}

.loading-story--matrix-row {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 0.5px solid #e5e7eb;
}

.loading-story--matrix-row:last-child {
  border-bottom: none;
}
</style>

<docs lang="md">
# Loading

## Description

An animated loading indicator built on DaisyUI's `loading` class system.
Supports multiple visual styles and sizes. Use it inline, inside buttons, or as a full-page overlay.

## Props

| Prop      | Type             | Default      | Required | Configurable | Description                                                               |
|-----------|------------------|--------------|----------|--------------|---------------------------------------------------------------------------|
| `variant` | `LoadingVariant` | `'spinner'`  | ❌       | ✅          | Visual style. `spinner` / `dots` / `ring` / `ball` / `bars` / `infinity`. |
| `size`    | `LoadingSize`    | `undefined`  | ❌       | ✅          | Size of the indicator. `xs` / `sm` / `md` / `lg` / `xl`.                  |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.loading` option). See [Plugin Configuration](#) for more information.

## Usage

```vue
<!-- Basic -->
<Loading />

<!-- With variant and size -->
<Loading variant="dots" size="lg" />

<!-- Inside a button -->
<Button :loading="true">
  <template #loading>
    <Loading variant="spinner" size="sm" />
  </template>
  Saving…
</Button>
```
</docs>