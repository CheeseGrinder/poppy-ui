<script lang="ts">
import Badge from '@/components/display/Badge.vue'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import { useSelectCounter } from '@/composables/use-select-counter'
import { getClass } from '@/utils/build-class.util'
import { ChevronDownIcon, XIcon } from '@lucide/vue'
import { onClickOutside } from '@vueuse/core'
import { computed, shallowRef, useAttrs, useId, useTemplateRef } from 'vue'
import { SELECT_CONFIG } from './select.context'
import type { SelectProps } from './select.props'
import type { SelectColor, SelectOption, SelectSize, SelectVariant } from './select.types'

const selectColors: Record<SelectColor, `select-${SelectColor}`> = {
  neutral: 'select-neutral',
  primary: 'select-primary',
  secondary: 'select-secondary',
  accent: 'select-accent',
  info: 'select-info',
  success: 'select-success',
  warning: 'select-warning',
  error: 'select-error',
}

const selectSizes: Record<SelectSize, `select-${SelectSize}`> = {
  xs: 'select-xs',
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg',
  xl: 'select-xl',
}

const selectVariants: Record<SelectVariant, `select-${SelectVariant}`> = {
  bordered: 'select-bordered',
  ghost: 'select-ghost',
}
</script>

<script setup lang="ts" generic="T = any, M extends boolean = false">
type ModelType = M extends true ? T[] : T | undefined

defineOptions({ inheritAttrs: false })

const emit = defineEmits<{
  clear: []
}>()

const containerEl = useTemplateRef('containerEl')
const triggerEl = useTemplateRef('triggerEl')

const model = defineModel<ModelType>()
const props = defineProps<SelectProps<T, M>>()

// @ts-expect-error - Ignored due to the genereic in script
const config = useComponentConfig(SELECT_CONFIG, props, {
  size: 'md',
  clearable: false,
})

const anchorName = `--select-anchor-${useId()}`
const attrs = useAttrs()
const isOpen = shallowRef(false)

const { field, fieldValue, hasServerError, onBlur, clearError } = useFormField<ModelType>({
  required: computed(() => props.required ?? false),
})

onClickOutside(containerEl, () => {
  if (isOpen.value) {
    isOpen.value = false
    onBlur()
  }
})

const value = computed(() => field ? fieldValue.value : model.value)

const minItems = computed(() => (attrs.min ? Number(attrs.min) : undefined))
const maxItems = computed(() => (attrs.max ? Number(attrs.max) : undefined))

const selectedCount = computed(() => {
  if (!props.multiple || !Array.isArray(value.value)) return 0
  return (value.value as T[]).length
})

const { counterText, counterColor, isAtMax } = useSelectCounter(selectedCount, {
  multiple: computed(() => props.multiple),
  min: minItems,
  max: maxItems,
  formatter: computed(() => config.value.counterFormatter),
})

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(value.value) && (value.value as T[]).length > 0
  }
  return value.value !== undefined && value.value !== null && value.value !== ''
})

const selectedOptions = computed(() => {
  if (!props.options) return []
  const current = value.value
  if (!current) return []
  if (props.multiple && Array.isArray(current)) {
    return props.options.filter(o => (current as T[]).some(v => isEqual(o.value, v)))
  }
  const found = props.options.find(o => isEqual(o.value, current as T))
  return found ? [found] : []
})

function isEqual(a: T, b: T): boolean {
  if (!props.equals) return a === b
  if (typeof props.equals === 'function') return (props.equals as (a: T, b: T) => boolean)(a, b)
  return (a as any)?.[props.equals] === (b as any)?.[props.equals]
}

function isOptionSelected(option: SelectOption<T>): boolean {
  const current = value.value
  if (props.multiple && Array.isArray(current)) {
    return (current as T[]).some(v => isEqual(v, option.value))
  }
  return isEqual(current as T, option.value)
}

function isOptionDisabled(option: SelectOption<T>): boolean {
  return isAtMax.value && !isOptionSelected(option)
}

function setValue(next: ModelType): void {
  model.value = next
  if (field) {
    field.setValue(next)
    field.setDirty(true)
    clearError()
  }
}

function select(option: SelectOption<T>): void {
  if (isOptionDisabled(option)) return

  if (props.multiple) {
    const current = (Array.isArray(value.value) ? value.value : []) as T[]
    const exists = current.some(v => isEqual(v, option.value))
    const next = exists
      ? current.filter(v => !isEqual(v, option.value))
      : [...current, option.value]
    setValue(next as ModelType)
    return
  }

  if (isOptionSelected(option)) {
    if (config.value.clearable) {
      setValue(undefined as ModelType)
      isOpen.value = false
    }
    return
  }

  setValue(option.value as ModelType)
  isOpen.value = false
}

function removeSelected(option: SelectOption<T>): void {
  if (!props.multiple) return
  const current = (Array.isArray(value.value) ? value.value : []) as T[]
  setValue(current.filter(v => !isEqual(v, option.value)) as ModelType)
}

function onClear(): void {
  setValue((props.multiple ? [] : undefined) as ModelType)
  emit('clear')
}

function open(): void {
  if (props.disabled) return
  isOpen.value = true
}

function close(): void {
  if (props.disabled) return
  isOpen.value = false
}

function toggle(): void {
  isOpen.value ? close() : open()
}

defineExpose({
  $el: triggerEl,
  clear: onClear,
  open,
  close,
  toggle,
})
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <div ref="containerEl" class="relative w-full anchor-trigger" v-bind="$attrs">
      <input type="hidden" :name="field?.name ?? name" :value="(model as any)" />

      <button
        ref="triggerEl"
        type="button"
        class="select w-full text-left min-h-10 h-auto py-2 pr-10"
        :class="[
          getClass(selectColors, config.color),
          getClass(selectSizes, config.size),
          getClass(selectVariants, config.variant),
          disabled && 'select-disabled',
          hasServerError && 'select-error',
        ]"
        :tabindex="disabled ? '-1' : undefined"
        :disabled="disabled"
        @click="toggle()"
      >
        <div v-if="multiple && selectedOptions.length > 0" class="flex flex-wrap gap-1">
          <slot
            v-for="opt in selectedOptions"
            :key="String(opt.value)"
            name="selected"
            :option="opt"
            :remove="() => removeSelected(opt)"
          >
            <Badge color="primary" size="sm" class="gap-1 cursor-default">
              {{ opt.label }}
              <button
                type="button"
                class="hover:opacity-70"
                @click.stop="removeSelected(opt)"
              >
                <XIcon class="size-3" />
              </button>
            </Badge>
          </slot>
        </div>

        <template v-else-if="!multiple && selectedOptions.length > 0">
          <slot name="selected" :option="selectedOptions[0]" :remove="onClear">
            <span>{{ selectedOptions[0]?.label }}</span>
          </slot>
        </template>

        <span v-else class="opacity-40">
          {{ placeholder || $t('common.field.select.placeholder') }}
        </span>
      </button>

      <ChevronDownIcon
        class="absolute right-3 top-1/2 -translate-y-1/2 size-4 opacity-40 pointer-events-none transition-transform"
        :class="isOpen && 'rotate-180'"
      />

      <button
        v-if="config.clearable && hasValue"
        type="button"
        class="absolute right-8 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle opacity-50 hover:opacity-100"
        @click="onClear"
      >
        <XIcon class="size-3" />
      </button>

      <Transition name="dropdown">
        <div
          v-if="isOpen && options"
          class="anchor-dropdown absolute z-50 w-full bg-base-100 border border-base-300 rounded-box shadow-lg overflow-hidden"
        >
          <ul class="max-h-56 overflow-y-auto py-1">
            <li
              v-for="option in options"
              :key="String(option.value)"
              class="px-4 py-2 text-sm cursor-pointer hover:bg-base-200"
              :class="[
                isOptionSelected(option) && 'bg-primary/10 text-primary',
                isOptionDisabled(option) && 'opacity-30 cursor-not-allowed pointer-events-none',
              ]"
              @mousedown.prevent="select(option)"
            >
              <slot name="option" :option="option" :selected="isOptionSelected(option)">
                {{ option.label }}
              </slot>
            </li>

            <li v-if="options.length === 0" class="px-4 py-3 text-sm opacity-40 text-center">
              {{ $t('common.field.select.empty') }}
            </li>
          </ul>
        </div>
      </Transition>
    </div>

    <div v-if="multiple && counterText" class="flex justify-end">
      <span class="text-xs" :class="counterColor">{{ counterText }}</span>
    </div>
  </div>
</template>

<style scoped>
.select {
  background-image: initial;
  background-position: initial;
  background-size: initial;
  background-repeat: initial;
}

.anchor-trigger {
  anchor-name: v-bind(anchorName);
}

.anchor-dropdown {
  position-anchor: v-bind(anchorName);
  position-area: block-end center;
  position-try-fallbacks: flip-block, flip-inline;
  position-try-order: most-height;
  left: anchor(left);
  right: anchor(right);
  margin-block-start: 4px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>