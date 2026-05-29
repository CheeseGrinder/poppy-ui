<script lang="ts">
import Diff from './Diff.vue'
</script>

<script setup lang="ts">
const IMG   = 'https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp'
const IMG_B = 'https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp'
</script>

<template>
  <Story group="components" title="Display/Diff" auto-props-disabled>
    <template #default>

      <Variant title="Images">
        <template #source>
          <textarea v-pre>
            <Diff class="aspect-16/9">
              <template #item-1>
                <img alt="original" src="..." />
              </template>
              <template #item-2>
                <img alt="modified" src="..." />
              </template>
            </Diff>
          </textarea>
        </template>

        <Diff class="aspect-16/9 w-full max-w-2xl">
          <template #item-1>
            <img :src="IMG" alt="original" />
          </template>
          <template #item-2>
            <img :src="IMG_B" alt="blurred" />
          </template>
        </Diff>
      </Variant>

      <Variant title="Text">
        <template #source>
          <textarea v-pre>
            <Diff class="aspect-16/9">
              <template #item-1>
                <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black">
                  POPPY
                </div>
              </template>
              <template #item-2>
                <div class="bg-base-200 grid place-content-center text-9xl font-black">
                  POPPY
                </div>
              </template>
            </Diff>
          </textarea>
        </template>

        <Diff class="aspect-16/9 w-full max-w-2xl">
          <template #item-1>
            <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black h-full">
              POPPY
            </div>
          </template>
          <template #item-2>
            <div class="bg-base-200 grid place-content-center text-9xl font-black h-full">
              POPPY
            </div>
          </template>
        </Diff>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Diff

## Description

A side-by-side comparison component with a draggable resizer.
Built on DaisyUI's `diff` class system. Works with any content — images, text, UI components.

## Slots

| Slot       | Description                         |
|------------|-------------------------------------|
| `item-1`   | Left/front content (`diff-item-1`). |
| `item-2`   | Right/back content (`diff-item-2`). |

The resizer handle is rendered automatically.

## Usage

```vue
<!-- Images -->
<Diff class="aspect-16/9">
  <template #item-1>
    <img src="original.jpg" alt="original" />
  </template>
  <template #item-2>
    <img src="modified.jpg" alt="modified" />
  </template>
</Diff>

<!-- Text -->
<Diff class="aspect-16/9">
  <template #item-1>
    <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black h-full">
      Before
    </div>
  </template>
  <template #item-2>
    <div class="bg-base-200 grid place-content-center text-9xl font-black h-full">
      After
    </div>
  </template>
</Diff>
```
</docs>