<script lang="ts">
import { reactive } from 'vue'
import Mask from './Mask.vue'
import type { MaskProps } from './mask.props'

const imageSrc = 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp'
</script>

<script setup lang="ts">
const state = reactive<MaskProps>({
  variant: 'squircle',
  half: undefined,
  inline: false,
})
</script>

<template>
  <Story group="components" title="Layout/Mask" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Variant" v-model="state.variant" :options="[
            'squircle', 'heart', 'hexagon', 'hexagon-2', 'decagon', 'pentagon', 
            'diamond', 'square', 'circle', 'star', 'star-2', 'triangle', 
            'triangle-2', 'triangle-3', 'triangle-4'
          ]" />
          <HstSelect title="Half" v-model="state.half" :options="[
            { label: '-- default --', value: undefined },
            'half-1', 'half-2'
          ]" />
          <HstCheckbox title="Inline" v-model="(state.inline as boolean)" />
        </template>

        <template #source>
          <textarea v-pre>
            <Mask variant="squircle">
              <img src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
            </Mask>
          </textarea>
        </template>

        <Mask v-bind="state" class="w-48 h-48">
          <img :src="imageSrc" class="w-full h-full object-cover" />
        </Mask>
      </Variant>

      <Variant title="Variants">
        <div class="mask-story mask-story--row">
          <div v-for="variant in [
            'squircle', 'heart', 'hexagon', 'hexagon-2', 'decagon', 'pentagon',
            'diamond', 'square', 'circle', 'star', 'star-2', 'triangle',
            'triangle-2', 'triangle-3', 'triangle-4'
          ]" :key="variant" class="mask-story--item">
            <Mask :variant="variant" inline class="w-32 h-32">
              <img :src="imageSrc" class="w-full h-full object-cover" />
            </Mask>
            <span class="mask-story--label">{{ variant }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Half Masks">
        <div class="mask-story mask-story--row">
          <div v-for="half in ['half-1', 'half-2']" :key="half" class="mask-story--item">
            <Mask variant="squircle" :half="half" inline class="w-32 h-32">
              <img :src="imageSrc" class="w-full h-full object-cover" />
            </Mask>
            <span class="mask-story--label">{{ half }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Composition">
        <template #source>
          <textarea v-pre>
            <div class="flex gap-4">
              <Mask variant="heart" inline>
                <img src="..." class="w-24 h-24 object-cover" />
              </Mask>
              <Mask variant="star" inline>
                <img src="..." class="w-24 h-24 object-cover" />
              </Mask>
              <Mask variant="hexagon" inline>
                <img src="..." class="w-24 h-24 object-cover" />
              </Mask>
            </div>
          </textarea>
        </template>

        <div class="flex gap-4">
          <Mask variant="heart" inline class="w-24 h-24">
            <img :src="imageSrc" class="w-full h-full object-cover" />
          </Mask>
          <Mask variant="star" inline class="w-24 h-24">
            <img :src="imageSrc" class="w-full h-full object-cover" />
          </Mask>
          <Mask variant="hexagon" inline class="w-24 h-24">
            <img :src="imageSrc" class="w-full h-full object-cover" />
          </Mask>
          <Mask variant="circle" inline class="w-24 h-24">
            <img :src="imageSrc" class="w-full h-full object-cover" />
          </Mask>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.mask-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.mask-story--row {
  align-items: center;
}

.mask-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.mask-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Mask

## Description

Applies CSS mask shapes to crop content into common geometric forms.
Built on DaisyUI's `mask` class system. Use it to create visually interesting image shapes,
icons, or any content that needs non-rectangular clipping.

## Props

| Prop      | Type          | Default     | Required | Configurable       | Description                                                                                                                                                     |
|-----------|---------------|-------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `variant` | `MaskVariant` | `undefined` | :x:      | :white_check_mark: | Shape of the mask: squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, star, star-2, triangle, triangle-2, triangle-3, triangle-4. |
| `half`    | `MaskHalf`    | `undefined` | :x:      | :white_check_mark: | When set, only masks half of the content: `'half-1'` or `'half-2'`.                                                                                             |
| `inline`  | `boolean`     | `false`     | :x:      | :x:                | When `true`, renders the mask as inline-block element.                                                                                                          |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.mask` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage

```vue
<!-- Basic squircle mask -->
<Mask variant="squircle">
  <img src="path/to/image.jpg" />
</Mask>

<!-- Heart-shaped image -->
<Mask variant="heart" inline class="w-32 h-32">
  <img src="path/to/image.jpg" class="w-full h-full object-cover" />
</Mask>

<!-- Half mask effect -->
<Mask variant="circle" half="half-1" class="w-40 h-40">
  <img src="path/to/image.jpg" class="w-full h-full object-cover" />
</Mask>

<!-- Inline mask in text -->
<div class="flex items-center gap-2">
  <Mask variant="star" inline class="w-8 h-8">
    <img src="path/to/icon.png" class="w-full h-full object-cover" />
  </Mask>
  <span>Premium Feature</span>
</div>
```
</docs>
