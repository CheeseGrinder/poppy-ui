<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed, shallowRef, useTemplateRef, watch } from 'vue'
import { MODAL_CONFIG } from './modal.context'
import type { ModalProps } from './modal.props'
import type { ModalPlacement } from './modal.types'

const modalPlacements: Record<ModalPlacement, `modal-${ModalPlacement}`> = {
  top: 'modal-top',
  middle: 'modal-middle',
  bottom: 'modal-bottom',
  start: 'modal-start',
  end: 'modal-end',
}
</script>

<script setup lang="ts">
const dialogEl = useTemplateRef('dialog-el')

/**
 * Controls the open state of the modal.
 * Use `v-model` to bind reactively.
 *
 * @default false
 */
const isOpen = defineModel<boolean>({ default: false })

const props = defineProps<ModalProps>()
const config = useComponentConfig(MODAL_CONFIG, props, {
  placement: undefined,
  closeOnBackdrop: false,
  loadContentWhenClose: false,
})

const emit = defineEmits<{
  open: []
  close: []
}>()

const hasBeenOpened = shallowRef(false)

watch(isOpen, state => {
  if (state) {
    hasBeenOpened.value = true
  }
})

const shouldRenderContent = computed(() => {
  if (config.value.loadContentWhenClose) {
    return true
  }
  return isOpen.value || hasBeenOpened.value
})

watch(isOpen, state => {
  if (!dialogEl.value) {
    return
  }

  if (state) {
    dialogEl.value.showModal()
    emit('open')
  } else {
    dialogEl.value.close()
  }
}, { immediate: true })

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function onClose() {
  isOpen.value = false
  emit('close')
}

defineExpose({
  $el: dialogEl,
  open,
  close,
})
</script>

<template>
  <dialog
    ref="dialog-el"
    class="modal"
    :class="[config.placement && modalPlacements[config.placement]]"
    @close="onClose"
  >
    <div v-if="shouldRenderContent" class="modal-box">
      <slot></slot>
      <div v-if="$slots.actions" class="modal-action">
        <slot name="actions"></slot>
      </div>
    </div>

    <form v-if="!config.closeOnBackdrop" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>