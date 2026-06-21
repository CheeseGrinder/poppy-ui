<script lang="ts">
import { reactive } from 'vue'
import Img from './Img.vue'
import type { ImgProps } from './img.props'
</script>

<script setup lang="ts">
const state = reactive<Partial<ImgProps> & Pick<ImgProps, 'src' | 'alt'>>({
  src: 'https://picsum.photos/seed/poppy/800/600',
  alt: 'Sample image',
  fit: 'cover',
  rounded: undefined,
  skeleton: true,
  aspect: 'video',
  eager: false,
})
</script>

<template>
  <Story group="components" title="Media/Img" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstText title="src" v-model="state.src" />
          <HstText title="alt" v-model="state.alt" />
          <HstSelect title="aspect" v-model="state.aspect" :options="[{ label: '-- none --', value: undefined }, 'auto', 'square', 'video', '4/3', '3/2']" />
          <HstSelect title="fit" v-model="state.fit" :options="[{ label: '-- none --', value: undefined }, 'cover', 'contain', 'fill', 'none', 'scale-down']" />
          <HstSelect title="rounded" v-model="state.rounded" :options="[{ label: '-- none --', value: undefined }, 'none', 'sm', 'md', 'lg', 'xl', 'full']" />
          <HstCheckbox title="skeleton" v-model="state.skeleton" />
          <HstCheckbox title="eager" v-model="state.eager" />
        </template>

        <div class="w-80">
          <Img v-bind="state" />
        </div>
      </Variant>

      <Variant title="Fallback on error">
        <div class="flex gap-4 flex-wrap">
          <div class="w-64">
            <p class="text-xs text-base-content/50 mb-2">Default fallback slot</p>
            <Img src="/does-not-exist.jpg" alt="Broken image" aspect="video" fit="cover" :eager="true" />
          </div>
          <div class="w-64">
            <p class="text-xs text-base-content/50 mb-2">Custom fallback slot</p>
            <Img src="/does-not-exist.jpg" alt="Broken image" aspect="video" :eager="true">
              <template #fallback>
                <div class="flex flex-col items-center gap-1 text-base-content/40">
                  <span class="text-2xl">🖼️</span>
                  <span class="text-xs">Not found</span>
                </div>
              </template>
            </Img>
          </div>
          <div class="w-64">
            <p class="text-xs text-base-content/50 mb-2">With fallback-src</p>
            <Img
              src="/does-not-exist.jpg"
              fallback-src="https://picsum.photos/seed/fallback/400/300"
              alt="Image with fallback src"
              aspect="video"
              fit="cover"
              :eager="true"
            />
          </div>
        </div>
      </Variant>

      <Variant title="Art direction (sources / picture)">
        <div class="w-80">
          <Img
            src="https://picsum.photos/seed/desktop/800/450"
            alt="Art direction example"
            aspect="video"
            fit="cover"
            :eager="true"
            :sources="[
              { srcset: 'https://picsum.photos/seed/mobile/400/600', media: '(max-width: 640px)' },
              { srcset: 'https://picsum.photos/seed/desktop/800/450', media: '(min-width: 641px)' },
            ]"
          />
          <p class="text-xs text-base-content/50 mt-2">Resize the window to see a different image below 640px.</p>
        </div>
      </Variant>

      <Variant title="Rounded">
        <div class="flex gap-4 flex-wrap items-end">
          <div v-for="r in ['none', 'sm', 'md', 'lg', 'xl', 'full']" :key="r" class="flex flex-col items-center gap-2">
            <div class="w-24 h-24">
              <Img
                src="https://picsum.photos/seed/rounded/200/200"
                alt="Rounded image"
                aspect="square"
                fit="cover"
                :rounded="r"
                :eager="true"
              />
            </div>
            <span class="text-xs text-base-content/50 font-mono">{{ r }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Object fit">
        <div class="flex gap-4 flex-wrap">
          <div v-for="f in ['cover', 'contain', 'fill', 'none', 'scale-down']" :key="f" class="flex flex-col items-center gap-2">
            <div class="w-40 h-28 border border-base-300">
              <Img
                src="https://picsum.photos/seed/fit/300/150"
                alt="Object fit demo"
                :fit="f"
                :eager="true"
              />
            </div>
            <span class="text-xs text-base-content/50 font-mono">{{ f }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Aspect ratios">
        <div class="flex gap-4 flex-wrap">
          <div v-for="[label, a] in [['auto', undefined], ['square', 'square'], ['video', 'video'], ['4/3', '4/3'], ['3/2', '3/2']]" :key="label" class="flex flex-col items-center gap-2">
            <div class="w-40">
              <Img
                src="https://picsum.photos/seed/aspect/400/300"
                alt="Aspect ratio demo"
                fit="cover"
                :aspect="a"
                :eager="true"
              />
            </div>
            <span class="text-xs text-base-content/50 font-mono">{{ label }}</span>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Img

## Description

A smart image wrapper with IntersectionObserver-based lazy loading, skeleton placeholder, error fallback,
and `<picture />` art-direction support.

## API

### Props

| Prop          | Type                                      | Default     | Required           | Configurable       | Description                                               |
|---------------|-------------------------------------------|-------------|--------------------|--------------------|-----------------------------------------------------------|
| `src`         | `string`                                  | -           | :white_check_mark: | :x:                | Image source URL.                                         |
| `alt`         | `string`                                  | -           | :white_check_mark: | :x:                | Accessible alt text.                                      |
| `fallbackSrc` | `string`                                  | `undefined` | :x:                | :x:                | Secondary URL used when the primary image fails to load.  |
| `sources`     | `ImgSource[]`                             | `undefined` | :x:                | :x:                | `<source />` descriptors for `<picture />` art direction. |
| `width`       | `number \| string`                        | `undefined` | :x:                | :x:                | Intrinsic width forwarded to `<img />` (CLS prevention).  |
| `height`      | `number \| string`                        | `undefined` | :x:                | :x:                | Intrinsic height forwarded to `<img />` (CLS prevention). |
| `aspect`      | `'auto' \| 'square' \| 'video' \| string` | `'auto'`    | :x:                | :x:                | Forced aspect ratio of the container.                     |
| `fit`         | `ImgFit`                                  | `undefined` | :x:                | :white_check_mark: | Tailwind `object-*` sizing mode.                          |
| `rounded`     | `ImgRounded`                              | `undefined` | :x:                | :white_check_mark: | Border radius of the container.                           |
| `skeleton`    | `boolean`                                 | `true`      | :x:                | :white_check_mark: | Show skeleton placeholder while loading.                  |
| `threshold`   | `number`                                  | `0`         | :x:                | :white_check_mark: | IntersectionObserver threshold.                           |
| `rootMargin`  | `string`                                  | `'200px'`   | :x:                | :white_check_mark: | IntersectionObserver rootMargin.                          |
| `eager`       | `boolean`                                 | `false`     | :x:                | :x:                | Disable lazy loading and load immediately.                |

### Slots

| Slot       | Bindings | Description                                                                                  |
|------------|----------|----------------------------------------------------------------------------------------------|
| `fallback` | —        | Shown when the image (and `fallbackSrc`) fail to load. Defaults to "Image unavailable" text. |

### Exposed

| Name       | Type      | Description                   |
|------------|-----------|-------------------------------|
| `isLoaded` | `boolean` | `true` once the image loaded. |
| `hasError` | `boolean` | `true` if all sources failed. |

## Usage

```vue
<!-- Basic -->
<Img src="/photo.jpg" alt="A photo" aspect="video" fit="cover" />

<!-- With fallback src -->
<Img src="/photo.jpg" fallback-src="/placeholder.jpg" alt="Photo" aspect="video" fit="cover" />

<!-- With custom fallback slot -->
<Img src="/photo.jpg" alt="Photo" aspect="square">
  <template #fallback>
    <span>Could not load image</span>
  </template>
</Img>

<!-- Art direction -->
<Img
  src="/hero-desktop.jpg"
  alt="Hero"
  aspect="video"
  fit="cover"
  :sources="[
    { srcset: '/hero-mobile.webp', media: '(max-width: 640px)', type: 'image/webp' },
    { srcset: '/hero-desktop.webp', type: 'image/webp' },
  ]"
/>

<!-- Eager (above the fold) -->
<Img src="/logo.png" alt="Logo" :eager="true" />
```
</docs>
