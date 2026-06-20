<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { clsx, getClass } from '@/utils/build-class.util'
import { useAttrs, useId, useTemplateRef } from 'vue'
import { DROPDOWN_CONFIG } from './dropdown.context'
import type { DropdownProps } from './dropdown.props'
import type { DropdownAlign, DropdownSide, DropdownTriggerAction } from './dropdown.types'

const dropdownAlign: ComponentClass<'dropdown', DropdownAlign> = {
  center: 'dropdown-center',
  end: 'dropdown-end',
  start: 'dropdown-start',
}
const dropdownSide: ComponentClass<'dropdown', DropdownSide> = {
  bottom: 'dropdown-bottom',
  top: 'dropdown-top',
  left: 'dropdown-left',
  right: 'dropdown-right',
}
</script>

<script setup lang="ts">
const popoverRef = useTemplateRef('popover-el')

const id = useId()
const dropdownId = `dropdown-${id}`
const anchorName = `--anchor-${id}`

const emit = defineEmits<{
  open: []
  close: []
}>()

const props = defineProps<DropdownProps>()
const config = useComponentConfig(DROPDOWN_CONFIG, props, {
  align: 'start',
  side: 'bottom',
  triggerAction: 'click',
  open: false,
  debounce: 500,
})

const { class: classAttr, ...attrs } = useAttrs()

// ── Popover helpers ──────────────────────────────────────────────────────────

function open() {
  popoverRef.value?.showPopover()
}

function close() {
  popoverRef.value?.hidePopover()
}

function toggle() {
  const el = popoverRef.value
  if (!el) {
    return
  }

  const isOpen = el.matches(':popover-open')
  isOpen ? close() : open()
}

// ── Trigger with ─────────────────────────────────────────────────────────────

let triggeredWith: DropdownTriggerAction | undefined;

// ── Click ────────────────────────────────────────────────────────────────────

function onTriggerClick() {
  // Early return if the "triggerAction" is not click or hover
  if (config.value.triggerAction !== 'click' && config.value.triggerAction !== 'hover') {
    return;
  }

  // Special case:
  // The dropdown has been triggered by a click to stay open in "hover" mode
  // Since the dropdown is open we need to close it if the user click on the dropdown "trigger"
  if (triggeredWith === 'click' && config.value.triggerAction === 'hover') {
    close();
    return;
  }

  // Special case:
  // If the dropdown trigger action is hover
  // We want to indicate that the dropdown has been triggered with "click" too
  // it prevent to close the dropdown from the "debounce" timer
  if (config.value.triggerAction === 'hover') {
    triggeredWith = 'click';
    open()
    return;
  }

  // Handle the default case
  triggeredWith = 'click';
  toggle();
}

// ── Hover debounce ───────────────────────────────────────────────────────────

let debounceTimer: ReturnType<typeof setTimeout> | undefined;

function onHover() {
  if (config.value.triggerAction !== 'hover') {
    return;
  }

  triggeredWith = 'hover';
  clearTimeout(debounceTimer);
  open();
}

function onBlur() {
  if (config.value.triggerAction !== 'hover') {
    return;
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (triggeredWith === 'hover') {
      close();
    }
  }, config.value.debounce);
}

// ── Context menu ─────────────────────────────────────────────────────────────

function onContextMenu(ev: MouseEvent) {
  if (config.value.triggerAction !== 'context-menu') {
    return;
  }

  ev.preventDefault();
  triggeredWith = 'context-menu';
  toggle();
}

// ── Keyboard ─────────────────────────────────────────────────────────────────

function onKeyUp(ev: KeyboardEvent) {
  if (!['Enter', ' ', 'Escape'].includes(ev.key)) {
    return;
  }

  ev.preventDefault();

  if (ev.key === 'Escape') {
    close();
  } else {
    toggle();
  }
}

// ── beforetoggle ─────────────────────────────────────────────────────────────

function onBeforeToggle(ev: ToggleEvent) {
  if (ev.newState === 'open') {
    emit('open');
  } else {
    emit('close');
  }
}

defineExpose({
  open,
  close,
  toggle,
  $el: popoverRef,
});
</script>

<template>
  <div v-bind="attrs">
    <button
      class="dropdown-trigger"
      :class="config.triggerClass"
      @click="onTriggerClick"
      @mouseenter="onHover"
      @mouseleave="onBlur"
      @contextmenu="onContextMenu"
      @keyup="onKeyUp"
    >
      <slot name="trigger" />
    </button>

    <Teleport to="body">
      <div
        ref="popover-el"
        popover
        :id="dropdownId"
        class="dropdown"
        :class="clsx([
          getClass(dropdownSide, config.side),
          getClass(dropdownAlign, config.align),
          classAttr,
          config.contentClass,
        ])"
        @mouseenter="onHover"
        @mouseleave="onBlur"
        @beforetoggle="onBeforeToggle"
      >
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.dropdown-trigger {
  anchor-name: v-bind(anchorName);
}

.dropdown {
  position-anchor: v-bind(anchorName);
}
</style>