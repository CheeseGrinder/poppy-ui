<script lang="ts">
import Card from '@/components/display/card/Card.vue'
import CardBody from '@/components/display/card/CardBody.vue'
import Hover3d from './Hover3d.vue'
</script>

<script setup lang="ts">
const IMG_CARD   = 'https://img.daisyui.com/images/stock/creditcard.webp'
const IMG_1      = 'https://img.daisyui.com/images/stock/card-1.webp'
const IMG_2      = 'https://img.daisyui.com/images/stock/card-2.webp'
const IMG_3      = 'https://img.daisyui.com/images/stock/card-3.webp'
</script>

<template>
  <Story title="Display/Hover3d" auto-props-disabled>
    <template #default>

      <Variant title="Image">
        <template #source>
          <textarea v-pre>
            <Hover3d>
              <figure class="max-w-100 rounded-2xl">
                <img src="..." alt="3D card" />
              </figure>
            </Hover3d>
          </textarea>
        </template>

        <Hover3d class="my-12 mx-2">
          <figure class="max-w-xs rounded-2xl overflow-hidden">
            <img :src="IMG_CARD" alt="Credit card" />
          </figure>
        </Hover3d>
      </Variant>

      <Variant title="Card with RouterLink (to)">
        <template #source>
          <textarea v-pre>
            <Hover3d class="cursor-pointer my-12 mx-2">
              <Card class="w-80 bg-black text-white">
                <CardBody>
                  <div class="flex justify-between mb-10">
                    <div class="font-bold">BANK OF LATVERIA</div>
                    <div class="text-5xl opacity-10">❁</div>
                  </div>
                  <div class="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
                  <div class="flex justify-between">
                    <div>
                      <div class="text-xs opacity-20">CARD HOLDER</div>
                      <div>VICTOR VON D.</div>
                    </div>
                    <div>
                      <div class="text-xs opacity-20">EXPIRES</div>
                      <div>29/08</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Hover3d>
          </textarea>
        </template>

        <div class="hover3d-story hover3d-story--row">
          <Hover3d to="#" class="cursor-pointer my-12 mx-2">
            <Card class="w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
              <CardBody>
                <div class="flex justify-between mb-10">
                  <div class="font-bold">BANK OF LATVERIA</div>
                  <div class="text-5xl opacity-10">❁</div>
                </div>
                <div class="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
                <div class="flex justify-between">
                  <div>
                    <div class="text-xs opacity-20">CARD HOLDER</div>
                    <div>VICTOR VON D.</div>
                  </div>
                  <div>
                    <div class="text-xs opacity-20">EXPIRES</div>
                    <div>29/08</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Hover3d>
        </div>
      </Variant>

      <Variant title="Image gallery">
        <div class="hover3d-story hover3d-story--row">
          <Hover3d v-for="(src, i) in [IMG_1, IMG_2, IMG_3]" :key="i" class="my-12 mx-2">
            <figure class="w-48 rounded-2xl overflow-hidden">
              <img :src="src" alt="Gallery image" />
            </figure>
          </Hover3d>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.hover3d-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hover3d-story--row {
  align-items: center;
}
</style>

<docs lang="md">
# Hover3d

## Description

A wrapper that adds a 3D tilt effect on hover. Built on DaisyUI's `hover-3d` class system.
The effect works by placing 8 invisible hover zones over the content — these are injected automatically.

> Only use non-interactive content inside `Hover3d`. If you want the whole card to be clickable,
> use the `to` prop to render as a `RouterLink` instead of putting interactive elements inside.

## Props

| Prop | Type               | Default     | Required | Configurable | Description                                                                               |
|------|--------------------|-------------|----------|--------------|-------------------------------------------------------------------------------------------|
| `to` | `RouteLocationRaw` | `undefined` | ❌       | ❌          | If provided, renders as a `RouterLink`. Accepts a string path or a route location object. |

## Slots

| Slot      | Description                        |
|-----------|------------------------------------|
| `default` | Content to apply the 3D effect to. |

## Usage

```vue
<!-- Basic image -->
<Hover3d>
  <figure class="max-w-xs rounded-2xl overflow-hidden">
    <img src="..." alt="3D card" />
  </figure>
</Hover3d>

<!-- Clickable card via RouterLink -->
<Hover3d :to="{ name: 'product', params: { id: 1 } }" class="cursor-pointer">
  <Card class="w-80">
    <CardBody>...</CardBody>
  </Card>
</Hover3d>
```
</docs>