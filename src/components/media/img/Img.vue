<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { getClass } from '@/utils/build-class.util'
import { computed, onMounted, onUnmounted, shallowRef, useTemplateRef, watch } from 'vue'
import { IMG_CONFIG } from './img.context'
import type { ImgProps } from './img.props'
import type { ImgFit, ImgRounded } from './img.types'

const fitClasses: Record<ImgFit, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
}

const roundedClasses: Record<ImgRounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}
</script>

<script setup lang="ts">
const props = defineProps<ImgProps>()
const config = useComponentConfig(IMG_CONFIG, props, {
  skeleton: true,
  threshold: 0,
  rootMargin: '200px',
})

const containerRef = useTemplateRef('containerRef')
const isIntersecting = shallowRef(false)
const isLoaded = shallowRef(false)
const hasError = shallowRef(false)
const activeSrc = shallowRef('')

let observer: IntersectionObserver | null = null

const aspectClass = computed(() => {
  const a = props.aspect
  if (!a || a === 'auto') {
    return undefined
  }

  if (a === 'square') {
    return 'aspect-square'
  }

  if (a === 'video') {
    return 'aspect-video'
  }

  return undefined
})

const aspectStyle = computed(() => {
  const a = props.aspect
  if (!a || a === 'auto' || a === 'square' || a === 'video') {
    return undefined
  }

  return { aspectRatio: a }
})

const fitClass = computed(() => getClass(fitClasses, config.value.fit))
const roundedClass = computed(() => getClass(roundedClasses, config.value.rounded))
const showSkeleton = computed(() => config.value.skeleton !== false && !isLoaded.value && !hasError.value)

function onLoad() {
  isLoaded.value = true
  hasError.value = false
}

function onError() {
  if (props.fallbackSrc && activeSrc.value !== props.fallbackSrc) {
    isLoaded.value = false
    activeSrc.value = props.fallbackSrc
  } else {
    hasError.value = true
  }
}

function load() {
  isIntersecting.value = true
  activeSrc.value = props.src
}

function startObserving() {
  if (!containerRef.value || props.eager) {
    load()
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        load()
        observer?.disconnect()
        observer = null
      }
    },
    {
      threshold: config.value.threshold,
      rootMargin: config.value.rootMargin,
    },
  )
  observer.observe(containerRef.value)
}

watch(
  () => props.src,
  (val) => {
    isLoaded.value = false
    hasError.value = false
    if (isIntersecting.value) activeSrc.value = val
  },
)

onMounted(() => {
  startObserving()
})
onUnmounted(() => {
  observer?.disconnect()
})

defineExpose({
  isLoaded,
  hasError,
})
</script>

<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden"
    :class="[aspectClass, roundedClass]"
    :style="aspectStyle"
  >
    <div v-if="showSkeleton" class="skeleton absolute inset-0 rounded-none" />

    <template v-if="!hasError">
      <picture v-if="sources?.length" class="block w-full h-full">
        <source
          v-for="source in sources"
          :key="source.srcset"
          :srcset="source.srcset"
          :media="source.media"
          :type="source.type"
        />
        <img
          :src="activeSrc || undefined"
          :alt="alt"
          :width="width"
          :height="height"
          class="w-full h-full"
          :class="[fitClass, { 'opacity-0': !isLoaded }]"
          style="transition: opacity 0.3s ease"
          @load="onLoad"
          @error="onError"
        />
      </picture>
      <img
        v-else
        :src="activeSrc || undefined"
        :alt="alt"
        :width="width"
        :height="height"
        class="w-full h-full"
        :class="[fitClass, { 'opacity-0': !isLoaded }]"
        style="transition: opacity 0.3s ease"
        @load="onLoad"
        @error="onError"
      />
    </template>

    <div
      v-if="hasError"
      class="absolute inset-0 flex items-center justify-center bg-base-200"
    >
      <slot name="fallback">
        <span class="text-base-content/40 text-sm select-none">Image unavailable</span>
      </slot>
    </div>
  </div>
</template>
