<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { ChevronDownIcon, PlusIcon } from '@lucide/vue'
import { computed, inject } from 'vue'
import { ACCORDION_CONTEXT_KEY } from './accordion.context'
import { ACCORDION_ITEM_CONFIG } from './accordion-item.context'
import type { AccordionItemProps } from './accordion-item.props'
</script>

<script setup lang="ts">

const props = defineProps<AccordionItemProps>()
const config = useComponentConfig(ACCORDION_ITEM_CONFIG, props, {
  icon: 'arrow',
})

const emit = defineEmits<{
  open: []
  close: []
  toggle: [isOpen: boolean]
}>()

const ctx = inject(ACCORDION_CONTEXT_KEY, null)
const isOpen = computed(() => ctx?.isOpen(props.name) ?? false)

function toggle() {
  ctx?.toggle(props.name)
  const next = !isOpen.value

  emit('toggle', next)
  next ? emit('open') : emit('close')
}

function open() {
  if (!isOpen.value) {
    toggle()
  }
}

function close() {
  if (isOpen.value) {
    toggle()
  }
}

function requestFrame(callback: FrameRequestCallback) {
  requestAnimationFrame(callback)
}

defineExpose({
  open,
  close,
  toggle,
  isOpen,
})
</script>

<template>
  <div class="rounded-box border border-base-content/10 overflow-hidden">

    <!-- Header -->
    <div
      class="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none bg-base-200 hover:bg-base-300 transition-colors"
      @click="toggle"
    >
      <div class="flex-1 min-w-0">
        <slot name="title" :is-open="isOpen" />
      </div>

      <!-- Icon slot with fallback -->
      <slot name="icon" :is-open="isOpen">
        <PlusIcon
          v-if="config.icon === 'plus'"
          class="size-4 opacity-50 transition-transform shrink-0"
          :class="isOpen && 'rotate-45'"
        />
        <ChevronDownIcon
          v-else
          class="size-4 opacity-50 transition-transform shrink-0"
          :class="isOpen && 'rotate-180'"
        />
      </slot>
    </div>

    <!-- Content -->
    <Transition
      name="accordion"
      @enter="(el: any) => { el.style.maxHeight = el.scrollHeight + 'px' }"
      @after-enter="(el: any) => { el.style.maxHeight = 'none' }"
      @leave="(el: any) => { el.style.maxHeight = el.scrollHeight + 'px'; requestFrame(() => el.style.maxHeight = '0') }"
    >
      <div v-if="isOpen" class="px-4 py-3 bg-base-100">
        <slot :is-open="isOpen" />
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.2s ease, opacity 0.2s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0 !important;
  opacity: 0;
}
</style>