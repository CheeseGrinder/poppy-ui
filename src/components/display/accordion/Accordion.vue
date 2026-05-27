<script lang="ts">
import { computed, provide, shallowRef } from 'vue'
import { ACCORDION_CONTEXT_KEY } from './accordion.context'
import type { AccordionProps } from './accordion.props'
</script>

<script setup lang="ts" generic="M extends boolean = false">
type ModelType = M extends true ? string[] : string | null
type NameType = M extends true ? string[] : string

const props = defineProps<AccordionProps<M>>()

/**
 * Controlled open state. Use `v-model` to bind reactively.
 * In single mode: the name of the open item, or `null` if none.
 * In multiple mode: an array of open item names.
 */
const model = defineModel<M extends true ? string[] : string | null>()

const emit = defineEmits<{
  change: [value: ModelType]
  open: [name: NameType]
  close: [name: NameType]
  toggle: [name: NameType, isOpen: boolean]
}>()

const internalValue = shallowRef<ModelType>((props.defaultOpen ?? (props.multiple ? [] : null)) as ModelType)

const value = computed(() => (model.value !== undefined ? model.value : internalValue.value))

function set(value: ModelType) {
  internalValue.value = value
  model.value = value
  emit('change', value)
}

// ── Core ─────────────────────────────────────────────────────────────────────

function toggle(name: string) {
  if (props.multiple) {
    const current = (value.value as string[]) ?? []
    const opening = !current.includes(name)
    const next = opening ? [...current, name] : current.filter(n => n !== name)

    set(next as ModelType)
    emit('toggle', next as NameType, opening)
    opening ? emit('open', next as NameType) : emit('close', next as NameType)
    return
  }

  const opening = value.value !== name
  const next = (opening ? name : null) as ModelType

  set(next)
  emit('toggle', (opening ? name : null) as NameType, opening)
  opening ? emit('open', name as NameType) : emit('close', name as NameType)
}

function isOpen(name: string): boolean {
  if (props.multiple) {
    return ((value.value as string[]) ?? []).includes(name)
  }
  return value.value === name
}

// ── Expose ───────────────────────────────────────────────────────────────────

function open(name: string) {
  if (isOpen(name)) {
    return
  }
  toggle(name)
}

function close(name: string) {
  if (!isOpen(name)) {
    return
  }
  toggle(name)
}

function openAll(names: string[]) {
  if (!props.multiple) {
    return
  }
  set(names as ModelType)
  emit('open', names as NameType)
}

function closeAll() {
  const next = (props.multiple ? [] : null) as ModelType
  set(next)
  emit('close', next as NameType)
}

provide(ACCORDION_CONTEXT_KEY, { multiple: props.multiple ?? false, modelValue: value, toggle, isOpen })

defineExpose({
  open,
  close,
  toggle,
  isOpen,
  openAll,
  closeAll,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <slot />
  </div>
</template>