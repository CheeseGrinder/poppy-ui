<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { isTrue } from '@/utils/is-true'
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

const open = defineModel<boolean>({ default: false })

const props = defineProps<ModalProps>()
const config = useComponentConfig(MODAL_CONFIG, props, {
  placement: undefined,
  closeOnBackdrop: false,
  loadContentWhenClose: false,
})

const emit = defineEmits<{
  close: []
}>()

const hasBeenOpened = shallowRef(false)

watch(open, isOpen => {
  if (isOpen) {
    hasBeenOpened.value = true
  }
})

const shouldRenderContent = computed(() => {
  if (isTrue(config.value.loadContentWhenClose)) {
    return true
  }
  return open.value || hasBeenOpened.value
})

watch(open, isOpen => {
  if (!dialogEl.value) {
    return
  }

  if (isOpen) {
    dialogEl.value.showModal()
  } else {
    dialogEl.value.close()
  }
}, { immediate: true })

function present() {
  open.value = true
}

function dismiss() {
  open.value = false
}

function onClose() {
  open.value = false
  emit('close')
}

defineExpose({
  present, 
  dismiss,
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

    <form v-if="!isTrue(config.closeOnBackdrop)" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>