<script lang="ts">
import { reactive } from 'vue'
import Carousel from './Carousel.vue'
import type { CarouselProps } from './carousel.props'
</script>

<script setup lang="ts">
const state = reactive<CarouselProps>({
  direction: 'horizontal',
  snap: 'start',
  indicators: false,
  autoplay: false,
  interval: 3000,
  initialIndex: 0,
})
</script>

<template>
  <Story title="Display/Carousel" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Direction" v-model="state.direction" :options="['horizontal', 'vertical']" />
          <HstSelect title="Snap" v-model="state.snap" :options="['start', 'center', 'end']" />
          <HstCheckbox title="Indicators" v-model="state.indicators" />
          <HstCheckbox title="Autoplay" v-model="state.autoplay" />
        </template>

        <div class="w-full max-w-lg mx-auto">
          <Carousel v-bind="state" class="rounded-box">
            <div v-for="i in 5" :key="i" class="flex items-center justify-center h-64 bg-primary/10 text-primary">
              <span class="text-2xl font-bold">Slide {{ i }}</span>
            </div>
          </Carousel>
        </div>
      </Variant>

      <Variant title="With images">
        <div class="w-full max-w-2xl mx-auto">
          <Carousel indicators snap="center" class="rounded-box">
            <img
              v-for="i in 4" :key="i"
              :src="`https://picsum.photos/seed/carousel${i}/800/400`"
              alt="Carousel image"
              class="w-full h-64 object-cover"
            />
          </Carousel>
        </div>
      </Variant>

      <Variant title="Direction Vertical">
        <div class="w-full max-w-xs mx-auto h-96">
          <Carousel direction="vertical" indicators class="h-full">
            <div v-for="i in 5" :key="i" class="flex items-center justify-center h-full bg-secondary/10 text-secondary">
              <span class="text-xl font-bold">Slide {{ i }}</span>
            </div>
          </Carousel>
        </div>
      </Variant>

      <Variant title="Snap positions">
        <div class="card-story card-story--row">
          <div v-for="snap in (['start', 'center', 'end'])" :key="snap" class="card-story--item">
            <span class="card-story--label">snap: {{ snap }}</span>
            <div class="w-full max-w-md">
              <Carousel :snap="snap" class="rounded-box">
                <div v-for="i in 3" :key="i" class="flex items-center justify-center h-40 bg-base-200">
                  <span class="text-lg font-bold">{{ snap }} - {{ i }}</span>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Variant>

      <Variant title="Custom controls">
        <div class="w-full max-w-lg mx-auto">
          <Carousel indicators>
            <div v-for="i in 3" :key="i" class="flex items-center justify-center h-64 bg-accent/10 text-accent">
              <span class="text-2xl font-bold">Content {{ i }}</span>
            </div>
            <template #prev-icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </template>
            <template #next-icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </template>
          </Carousel>
        </div>
      </Variant>

      <Variant title="Autoplay">
        <div class="w-full max-w-lg mx-auto">
          <Carousel autoplay :interval="2000" indicators class="rounded-box">
            <div v-for="i in 4" :key="i" class="flex items-center justify-center h-64 bg-info/10 text-info">
              <span class="text-2xl font-bold">Auto Slide {{ i }}</span>
            </div>
          </Carousel>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.card-story {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-story--row {
  align-items: flex-start;
}

.card-story--col {
  flex-direction: column;
}

.card-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.card-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Carousel

## Description

A responsive, accessible carousel/slider component built on DaisyUI's `carousel` class system. Supports horizontal and vertical layouts, autoplay, infinite looping, indicators, and custom controls.

## Carousel props

| Prop           | Type                | Default        | Required | Configurable | Description                                               |
|----------------|---------------------|----------------|----------|--------------|-----------------------------------------------------------|
| `direction`    | `CarouselDirection` | `'horizontal'` | ❌       | ✅          | Direction of the carousel. `'horizontal'` / `'vertical'`. |
| `snap`         | `CarouselSnap`      | `'start'`      | ❌       | ✅          | Snap alignment. `'start'` / `'center'` / `'end'`.         |
| `indicators`   | `Booleanish`        | `false`        | ❌       | ✅          | When `true`, shows navigation indicator dots.             |
| `controls`     | `Booleanish`        | `true`         | ❌       | ✅          | When `true`, shows prev/next navigation controls.         |
| `infinite`     | `Booleanish`        | `true`         | ❌       | ✅          | When `true`, enables infinite looping.                    |
| `autoplay`     | `Booleanish`        | `false`        | ❌       | ✅          | When `true`, enables autoplay.                            |
| `interval`     | `number`            | `3000`         | ❌       | ✅          | Autoplay interval in milliseconds.                        |
| `initialIndex` | `number`            | `0`            | ❌       | ❌          | Index of the initial slide.                               |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.carousel` option). See [Plugin Configuration](#) for more information.

## Slots

| Name        | Description                                                                                    |
|-------------|------------------------------------------------------------------------------------------------|
| `default`   | The carousel items content. Each direct child will receive the `carousel-item w-full` classes. |
| `prev-icon` | Custom previous button icon.                                                                   |
| `next-icon` | Custom next button icon.                                                                       |

## Usage

```vue
<!-- Basic -->
<Carousel>
  <div v-for="i in 5" :key="i">
    Slide {{ i }}
  </div>
</Carousel>

<!-- With images -->
<Carousel indicators>
  <img v-for="item in items" :key="item.id" :src="item.image" alt="" />
</Carousel>

<!-- Direction Vertical -->
<Carousel direction="vertical" class="h-96">
  <div v-for="i in 5" :key="i" class="h-full">
    Slide {{ i }}
  </div>
</Carousel>

<!-- Snap center -->
<Carousel snap="center">
  <div v-for="i in 4" :key="i">
    Slide {{ i }}
  </div>
</Carousel>

<!-- With autoplay -->
<Carousel autoplay :interval="5000" indicators>
  <img v-for="i in 4" :key="i" :src="`image${i}.jpg`" alt="" />
</Carousel>

<!-- Custom controls -->
<Carousel>
  <div v-for="i in 3" :key="i">
    Slide {{ i }}
  </div>
  <template #prev-icon>
    <MyCustomPrevIcon />
  </template>
  <template #next-icon>
    <MyCustomNextIcon />
  </template>
</Carousel>
```
</docs>
