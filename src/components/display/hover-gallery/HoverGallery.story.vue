<script lang="ts">
import Card from '@/components/display/card/Card.vue'
import CardBody from '@/components/display/card/CardBody.vue'
import CardTitle from '@/components/display/card/CardTitle.vue'
import HoverGallery from './HoverGallery.vue'
</script>

<script setup lang="ts">
const IMG_HAT_1 = 'https://img.daisyui.com/images/stock/daisyui-hat-1.webp'
const IMG_HAT_2 = 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp'
const IMG_HAT_3 = 'https://img.daisyui.com/images/stock/daisyui-hat-3.webp'
const IMG_HAT_4 = 'https://img.daisyui.com/images/stock/daisyui-hat-4.webp'
</script>

<template>
  <Story title="Display/HoverGallery" auto-props-disabled>
    <template #default>

      <Variant title="Basic">
        <template #source>
          <textarea v-pre>
            <HoverGallery class="max-w-60">
              <img src="..." />
              <img src="..." />
              <img src="..." />
              <img src="..." />
            </HoverGallery>
          </textarea>
        </template>

        <HoverGallery class="max-w-60">
          <img :src="IMG_HAT_1" alt="Hat 1" />
          <img :src="IMG_HAT_2" alt="Hat 2" />
          <img :src="IMG_HAT_3" alt="Hat 3" />
          <img :src="IMG_HAT_4" alt="Hat 4" />
        </HoverGallery>
      </Variant>

      <Variant title="In a card">
        <template #source>
          <textarea v-pre>
            <Card class="bg-base-200 max-w-60 shadow">
              <HoverGallery>
                <img src="..." />
                <img src="..." />
                <img src="..." />
                <img src="..." />
              </HoverGallery>
              <CardBody>
                <CardTitle class="flex justify-between">
                  Product Name
                  <span class="font-normal">$25</span>
                </CardTitle>
                <p>Product description</p>
              </CardBody>
            </Card>
          </textarea>
        </template>

        <Card class="bg-base-200 max-w-60 shadow">
          <HoverGallery>
            <img :src="IMG_HAT_1" alt="Hat 1" />
            <img :src="IMG_HAT_2" alt="Hat 2" />
            <img :src="IMG_HAT_3" alt="Hat 3" />
            <img :src="IMG_HAT_4" alt="Hat 4" />
          </HoverGallery>
          <CardBody>
            <CardTitle class="flex justify-between">
              daisyUI Hat
              <span class="font-normal">$25</span>
            </CardTitle>
            <p>High Quality classic cap hat with stitch logo</p>
          </CardBody>
        </Card>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# HoverGallery

## Description

A container that creates a hover gallery effect. The first image is visible by default, and hovering horizontally reveals other images. Built on DaisyUI's `hover-gallery` class. Always renders as a `<figure />` element.

> Hover Gallery can include up to 10 images.

## Slots

| Slot      | Description                              |
|-----------|------------------------------------------|
| `default` | Images to display in the hover gallery.   |

## Usage

```vue
<!-- Basic usage -->
<HoverGallery class="max-w-60">
  <img src="image-1.webp" alt="Image 1" />
  <img src="image-2.webp" alt="Image 2" />
  <img src="image-3.webp" alt="Image 3" />
  <img src="image-4.webp" alt="Image 4" />
</HoverGallery>

<!-- In a card -->
<Card class="bg-base-200 max-w-60 shadow">
  <HoverGallery>
    <img src="..." />
    <img src="..." />
    <img src="..." />
  </HoverGallery>
  <CardBody>
    <CardTitle>Product Name</CardTitle>
    <p>Product description</p>
  </CardBody>
</Card>

```
</docs>
