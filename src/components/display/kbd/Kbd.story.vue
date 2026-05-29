<script lang="ts">
import { reactive } from 'vue'
import Kbd from './Kbd.vue'
import type { KbdProps } from './kbd.props'
</script>

<script setup lang="ts">
const state = reactive<KbdProps>({
  size: 'md',
})
</script>

<template>
  <Story group="components" title="Display/Kbd" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Size" v-model="state.size" :options="['xs', 'sm', 'md', 'lg', 'xl']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Kbd>K</Kbd>
          </textarea>
        </template>

        <Kbd v-bind="state">K</Kbd>
      </Variant>

      <Variant title="Sizes">
        <div class="kbd-story kbd-story--row" style="align-items: flex-end;">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="kbd-story--item">
            <Kbd :size="size">{{ size }}</Kbd>
            <span class="kbd-story--label">{{ size }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Key combination">
        <template #source>
          <textarea v-pre>
            <Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>del</Kbd>
          </textarea>
        </template>

        <div class="kbd-story kbd-story--row">
          <Kbd>ctrl</Kbd>
          <span class="kbd-story--separator">+</span>
          <Kbd>shift</Kbd>
          <span class="kbd-story--separator">+</span>
          <Kbd>del</Kbd>
        </div>
      </Variant>

      <Variant title="Function keys">
        <template #source>
          <textarea v-pre>
            <Kbd>⌘</Kbd> <Kbd>⌥</Kbd> <Kbd>⇧</Kbd> <Kbd>⌃</Kbd>
          </textarea>
        </template>

        <div class="kbd-story kbd-story--row">
          <Kbd>⌘</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌃</Kbd>
        </div>
      </Variant>

      <Variant title="Arrow keys">
        <div class="kbd-story kbd-story--arrows">
          <div class="kbd-story--arrows-top">
            <Kbd>▲</Kbd>
          </div>
          <div class="kbd-story--arrows-middle">
            <Kbd>◀︎</Kbd>
            <Kbd>▼</Kbd>
            <Kbd>▶︎</Kbd>
          </div>
        </div>
      </Variant>

      <Variant title="In text">
        <template #source>
          <textarea v-pre>
            Press <Kbd size="sm">F</Kbd> to pay respects.
          </textarea>
        </template>

        <p class="kbd-story--text">
          Press <Kbd size="sm">F</Kbd> to pay respects.
        </p>
      </Variant>

      <Variant title="Full keyboard">
        <div class="kbd-story kbd-story--keyboard">
          <div class="kbd-story--keyboard-row">
            <Kbd v-for="key in ['q','w','e','r','t','y','u','i','o','p']" :key="key" size="sm">{{ key }}</Kbd>
          </div>
          <div class="kbd-story--keyboard-row">
            <Kbd v-for="key in ['a','s','d','f','g','h','j','k','l']" :key="key" size="sm">{{ key }}</Kbd>
          </div>
          <div class="kbd-story--keyboard-row">
            <Kbd v-for="key in ['z','x','c','v','b','n','m','/']" :key="key" size="sm">{{ key }}</Kbd>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.kbd-story {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.kbd-story--row {
  align-items: center;
}

.kbd-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.kbd-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.kbd-story--separator {
  font-size: 0.875rem;
  color: #9ca3af;
}

.kbd-story--text {
  font-size: 0.875rem;
}

.kbd-story--arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.kbd-story--arrows-top {
  display: flex;
  justify-content: center;
}

.kbd-story--arrows-middle {
  display: flex;
  gap: 0.25rem;
}

.kbd-story--keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.kbd-story--keyboard-row {
  display: flex;
  gap: 0.25rem;
}
</style>

<docs lang="md">
# Kbd

## Description

Displays keyboard shortcuts and key combinations.
Built on DaisyUI's `kbd` class system. Renders a semantic `<kbd />` HTML element.

## Props

| Prop   | Type      | Default | Required | Configurable | Description                                        |
|--------|-----------|---------|----------|--------------|----------------------------------------------------|
| `size` | `KbdSize` | `'md'`  | ❌       | ✅          | Size of the key. `xs` / `sm` / `md` / `lg` / `xl`. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.kbd` option). See [Plugin Configuration](#) for more information.

## Slots

| Slot      | Description                        |
|-----------|------------------------------------|
| `default` | The key label (text or symbol).    |

## Usage

```vue
<!-- Single key -->
<Kbd>K</Kbd>

<!-- Key combination -->
<Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>

<!-- Mac function keys -->
<Kbd>⌘</Kbd> <Kbd>⌥</Kbd> <Kbd>⇧</Kbd> <Kbd>⌃</Kbd>

<!-- Inline in text -->
<p>Press <Kbd size="sm">F</Kbd> to pay respects.</p>
```
</docs>