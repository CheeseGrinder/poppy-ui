<script lang="ts">
import { MenuIcon, MoonIcon, SunIcon, VolumeIcon, VolumeXIcon, XIcon } from '@lucide/vue'
import { logEvent } from 'histoire/client'
import { reactive, ref } from 'vue'
import Swap from './Swap.vue'
import type { SwapProps } from './swap.props'
</script>

<script setup lang="ts">
const state = reactive<SwapProps>({
  variant: undefined,
  indeterminate: false,
})
const stateModel = ref(false)

const rotateModel = ref(false)
const flipModel = ref(false)
const volumeModel = ref(true)
const hamburgerModel = ref(false)
const indeterminateModel = ref(false)
const isIndeterminate = ref(false)
const controlledModel = ref(false)
</script>

<template>
  <Story group="components" title="Actions/Swap" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Variant" v-model="state.variant" :options="[{ label: '-- default --', value: undefined }, 'rotate', 'flip']" />
          <HstCheckbox title="Indeterminate" v-model="(state.indeterminate as boolean)" />
        </template>

        <template #source>
          <textarea v-pre>
            <Swap v-model="active">
              <template #on>ON</template>
              <template #off>OFF</template>
            </Swap>
          </textarea>
        </template>

        <Swap v-model="stateModel" v-bind="state" @update:model-value="logEvent('update:modelValue', $event)">
          <template #on>ON</template>
          <template #indeterminate>—</template>
          <template #off>OFF</template>
        </Swap>
      </Variant>

      <Variant title="Rotate effect">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active" variant="rotate">
              <template #on><SunIcon class="w-10 h-10" /></template>
              <template #off><MoonIcon class="w-10 h-10" /></template>
            </Swap>
          </textarea>
        </template>

        <Swap v-model="rotateModel" variant="rotate">
          <template #on><SunIcon class="w-10 h-10" /></template>
          <template #off><MoonIcon class="w-10 h-10" /></template>
        </Swap>
      </Variant>

      <Variant title="Flip effect">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active" variant="flip" class="text-9xl">
              <template #on>😈</template>
              <template #off>😇</template>
            </Swap>
          </textarea>
        </template>

        <Swap v-model="flipModel" variant="flip" class="text-7xl">
          <template #on>😈</template>
          <template #off>😇</template>
        </Swap>
      </Variant>

      <Variant title="Volume toggle">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active">
              <template #on><VolumeIcon class="w-10 h-10" /></template>
              <template #off><VolumeXIcon class="w-10 h-10" /></template>
            </Swap>
          </textarea>
        </template>

        <Swap v-model="volumeModel">
          <template #on><VolumeIcon class="w-10 h-10" /></template>
          <template #off><VolumeXIcon class="w-10 h-10" /></template>
        </Swap>
      </Variant>

      <Variant title="Hamburger button">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active" variant="rotate" class="btn btn-circle">
              <template #on><XIcon class="w-6 h-6" /></template>
              <template #off><MenuIcon class="w-6 h-6" /></template>
            </Swap>
          </textarea>
        </template>

        <Swap v-model="hamburgerModel" variant="rotate" class="btn btn-circle">
          <template #on><XIcon class="w-6 h-6" /></template>
          <template #off><MenuIcon class="w-6 h-6" /></template>
        </Swap>
      </Variant>

      <Variant title="Indeterminate slot">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active" :indeterminate="isIndeterminate">
              <template #on>🥵</template>
              <template #indeterminate>🤔</template>
              <template #off>🥶</template>
            </Swap>
          </textarea>
        </template>

        <div class="swap-story swap-story--col">
          <p class="swap-story--hint">
            When <code>indeterminate</code> is <code>true</code>, the <code>#indeterminate</code> slot
            is shown regardless of <code>v-model</code>.
          </p>
          <div class="swap-story swap-story--row">
            <Swap v-model="indeterminateModel" :indeterminate="isIndeterminate" class="text-5xl">
              <template #on>🥵</template>
              <template #indeterminate>🤔</template>
              <template #off>🥶</template>
            </Swap>
            <div class="swap-story--col" style="gap: 0.25rem;">
              <label class="swap-story--toggle-label">
                <input type="checkbox" v-model="isIndeterminate" />
                indeterminate
              </label>
            </div>
          </div>
        </div>
      </Variant>

      <Variant title="Controlled">
        <template #source>
          <textarea v-pre>
            <Swap v-model="active">
              <template #on>ON</template>
              <template #off>OFF</template>
            </Swap>
            <button @click="active = true">Force ON</button>
            <button @click="active = false">Force OFF</button>
          </textarea>
        </template>

        <div class="swap-story swap-story--col">
          <Swap v-model="controlledModel" @update:model-value="logEvent('update:modelValue', $event)">
            <template #on><span class="text-lg font-bold">ON</span></template>
            <template #off><span class="text-lg font-bold">OFF</span></template>
          </Swap>
          <div class="swap-story swap-story--row">
            <button class="swap-story--btn" @click="controlledModel = true">Force ON</button>
            <button class="swap-story--btn" @click="controlledModel = false">Force OFF</button>
            <button class="swap-story--btn" @click="controlledModel = !controlledModel">Toggle</button>
          </div>
          <span class="swap-story--label">v-model: {{ controlledModel }}</span>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.swap-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.swap-story--row {
  align-items: center;
}

.swap-story--col {
  flex-direction: column;
  gap: 0.75rem;
}

.swap-story--hint {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  border-left: 3px solid #d1d5db;
  padding: 0.6rem 0.875rem;
  border-radius: 0 4px 4px 0;
  max-width: 480px;
}

.swap-story--hint code {
  font-size: 0.8rem;
  background: #e5e7eb;
  padding: 1px 4px;
  border-radius: 3px;
}

.swap-story--toggle-label {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8rem;
  color: #374151;
  cursor: pointer;
}

.swap-story--btn {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  cursor: pointer;
  color: #374151;
}

.swap-story--btn:hover {
  background: #f3f4f6;
}

.swap-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Swap

## Description

Toggles the visibility of two (or three) elements using a reactive `v-model`.
Built on DaisyUI's `swap` class system — no native checkbox involved, state is managed via `swap-active`.
Supports rotate and flip transition effects.

## API

### v-model

| Name      | Type      | Modifiers | Description          |
|-----------|-----------|-----------|----------------------|
| `v-model` | `boolean` | `undefined` | Bound checked state. |

### Props

| Prop            | Type          | Default     | Required | Configurable       | Description                                                           |
|-----------------|---------------|-------------|----------|--------------------|-----------------------------------------------------------------------|
| `variant`       | `SwapVariant` | `undefined` | :x:      | :white_check_mark: | Transition effect. `'rotate'` / `'flip'`.                             |
| `indeterminate` | `Booleanish`  | `false`     | :x:      | :x:                | When `true`, shows the `#indeterminate` slot regardless of `v-model`. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.swap` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

### Slots

| Slot            | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| `on`            | Visible when `v-model` is `true`.                               |
| `off`           | Visible when `v-model` is `false`.                              |
| `indeterminate` | Visible when `indeterminate` is `true`, overrides `on` / `off`. |

## Usage

```vue
<!-- Basic text swap -->
<Swap v-model="active">
  <template #on>ON</template>
  <template #off>OFF</template>
</Swap>

<!-- Sun / Moon with rotate effect -->
<Swap v-model="isDark" variant="rotate">
  <template #on><SunIcon class="w-10 h-10" /></template>
  <template #off><MoonIcon class="w-10 h-10" /></template>
</Swap>

<!-- Hamburger menu with rotate effect -->
<Swap v-model="menuOpen" variant="rotate" class="btn btn-circle">
  <template #on><XIcon class="w-6 h-6" /></template>
  <template #off><MenuIcon class="w-6 h-6" /></template>
</Swap>

<!-- With indeterminate state -->
<Swap v-model="active" :indeterminate="isLoading">
  <template #on>✓</template>
  <template #indeterminate>...</template>
  <template #off>✗</template>
</Swap>
```
</docs>