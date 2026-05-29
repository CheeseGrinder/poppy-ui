<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed, onMounted, onUnmounted, shallowRef, useTemplateRef } from 'vue'
import CarouselItem from './CarouselItem.vue'
import { CAROUSEL_CONFIG } from './carousel.context'
import type { CarouselProps } from './carousel.props'
import type { CarouselDirection, CarouselSnap } from './carousel.types'

const directionClasses: Record<CarouselDirection, string> = {
  horizontal: '',
  vertical: 'carousel-vertical',
}

const snapClasses: Record<CarouselSnap, string> = {
  start: 'carousel-start',
  center: 'carousel-center',
  end: 'carousel-end',
}
</script>

<script setup lang="ts">
const props = defineProps<CarouselProps>()
const config = useComponentConfig(CAROUSEL_CONFIG, props, {
  direction: 'horizontal',
  snap: 'start',
  indicators: false,
  controls: false,
  autoplay: false,
  interval: 3000,
  initialIndex: 0,
})

const carouselRef = useTemplateRef('carouselRef')
const currentIndex = shallowRef(props.initialIndex ?? 0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const isVertical = computed(() => config.value.direction === 'vertical')

function getItemCount(): number {
  if (!carouselRef.value) {
    return 0
  }

  return carouselRef.value.querySelectorAll('.carousel-item').length
}

function getItems(): HTMLElement[] {
  if (!carouselRef.value) {
    return []
  }

  return Array.from(carouselRef.value.querySelectorAll('.carousel-item')) as HTMLElement[]
}

function scrollTo(index: number) {
  const items = getItems()
  if (!items.length || index < 0 || index >= items.length) {
    return
  }

  items[index].scrollIntoView({
    behavior: 'smooth',
    block: isVertical.value ? 'nearest' : undefined,
    inline: isVertical.value ? undefined : 'nearest',
  })
  currentIndex.value = index
}

function goTo(index: number) {
  const count = getItemCount()
  if (count === 0) {
    return
  }

  const target = index % count
  scrollTo(target < 0 ? count + target : target)
}

function next() {
  goTo(currentIndex.value + 1)
}

function prev() {
  goTo(currentIndex.value - 1)
}

function startAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }

  if (isTrue(config.value.autoplay) && getItemCount() > 1) {
    autoplayTimer = setInterval(next, config.value.interval)
  }
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const count = computed(() => getItemCount())

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    ref="carouselRef"
    class="carousel w-full"
    :class="[
      getClass(directionClasses, config.direction),
      getClass(snapClasses, config.snap),
    ]"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <CarouselItem>
      <slot />
    </CarouselItem>

    <template v-if="isTrue(config.indicators) && count > 1">
      <div class="carousel-indicators absolute bottom-4 left-4 flex gap-2">
        <button
          v-for="(_, index) in count"
          :key="index"
          class="carousel-indicator btn btn-xs btn-circle"
          :class="{ 'btn-active': currentIndex === index }"
          @click="goTo(index)"
        />
      </div>
    </template>
  </div>

  <template v-if="isTrue(config.controls) && count > 1">
    <button class="carousel-control carousel-prev absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle" @click="prev">
      <slot name="prev-icon">
        <ChevronLeftIcon class="size-6" />
      </slot>
    </button>
    <button class="carousel-control carousel-next absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle" @click="next">
      <slot name="next-icon">
        <ChevronRightIcon class="size-6" />
      </slot>
    </button>
  </template>
</template>
