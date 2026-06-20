<script lang="ts">
import { Badge } from '@/components/display/public'
import { Menu, MenuItem } from '@/components/navigation/public'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import { useSelectCounter } from '@/composables/use-select-counter'
import { getClass } from '@/utils/build-class.util'
import { ChevronDownIcon, LoaderCircleIcon, XIcon } from '@lucide/vue'
import { onClickOutside, useDebounceFn, useVirtualList } from '@vueuse/core'
import { computed, nextTick, onMounted, shallowRef, useAttrs, useId, useTemplateRef, watch } from 'vue'
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

const MAX_DROPDOWN_HEIGHT = 224

defineOptions({ inheritAttrs: false })

const emit = defineEmits<{
  clear: []
}>()

const containerEl = useTemplateRef('containerEl')
const triggerEl = useTemplateRef('triggerEl')
const searchInputEl = useTemplateRef('searchInputEl')
const ulRef = useTemplateRef('ulRef')
const highlightedIndex = shallowRef(-1)

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
const selectionCache = shallowRef<SelectOption<T>[]>([])

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
  if (!props.multiple || !Array.isArray(value.value)) {
    return 0
  }

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
  const current = value.value

  if (!current) {
    return []
  }

  const pool = [...(props.options ?? []), ...remoteOptions.value, ...selectionCache.value]

  if (props.multiple && Array.isArray(current)) {
    return (current as T[]).reduce<SelectOption<T>[]>((acc, v) => {
      const found = pool.find(o => isEqual(o.value, v))
      return found ? [...acc, found] : acc
    }, [])
  }

  const found = pool.find(o => isEqual(o.value, current as T))
  return found ? [found] : []
})

function isEqual(a: T, b: T): boolean {
  if (!props.equals) {
    return a === b
  }

  if (typeof props.equals === 'function') {
    return (props.equals as (a: T, b: T) => boolean)(a, b)
  }

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
  return option.disabled === true || (isAtMax.value && !isOptionSelected(option))
}

function setValue(next: ModelType): void {
  model.value = next

  if (field) {
    field.setValue(next)
    field.setDirty(true)
    clearError()
  }
}

function currentValues(): T[] {
  return (Array.isArray(value.value) ? value.value : []) as T[]
}

function select(option: SelectOption<T>): void {
  if (isOptionDisabled(option)) {
    return
  }

  if (!selectionCache.value.some(o => isEqual(o.value, option.value))) {
    selectionCache.value = [...selectionCache.value, option]
  }

  if (props.multiple) {
    const current = currentValues()
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
  if (!props.multiple) {
    return
  }

  setValue(currentValues().filter(v => !isEqual(v, option.value)) as ModelType)
}

function onClear(): void {
  setValue((props.multiple ? [] : undefined) as ModelType)
  emit('clear')
}

function open(): void {
  if (props.disabled || props.readonly) {
    return
  }

  isOpen.value = true
}

function close(): void {
  if (props.disabled) {
    return
  }

  isOpen.value = false
}

function toggle(): void {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

// ─── Search ──────────────────────────────────────────────────────────────────

const searchQuery = shallowRef('')
const isLoading = shallowRef(false)
const isLoadingMore = shallowRef(false)
const searchError = shallowRef<Error | null>(null)
const remoteOptions = shallowRef<SelectOption<T>[]>([])
const currentPage = shallowRef(1)
const hasMore = shallowRef(true)

const filteredLocalOptions = computed<SelectOption<T>[]>(() => {
  const opts = props.options ?? []

  if (!searchQuery.value) {
    return opts
  }

  const q = searchQuery.value.toLowerCase()
  return opts.filter(o => o.label.toLowerCase().includes(q))
})

const displayedOptions = computed<SelectOption<T>[]>(() => {
  if (props.search) {
    return remoteOptions.value
  }

  if (props.searchable) {
    return filteredLocalOptions.value
  }

  return props.options ?? []
})

const itemH = computed(() => props.itemHeight ?? 36)

const virtualContainerHeight = computed(() => {
  const count = displayedOptions.value.length

  if (count === 0) {
    return 0
  }

  return Math.min(count * itemH.value, MAX_DROPDOWN_HEIGHT)
})

const { list: virtualList, containerProps, wrapperProps, scrollTo } = useVirtualList(displayedOptions, {
  itemHeight: () => itemH.value,
  overscan: 5,
})

function onVirtualScroll(e: Event): void {
  containerProps.onScroll()

  if (!props.search || !hasMore.value || isLoadingMore.value) {
    return
  }

  const el = e.target as HTMLElement

  if (el.scrollHeight - el.scrollTop - el.clientHeight < 50) {
    const nextPage = currentPage.value + 1
    currentPage.value = nextPage
    fetchPage(searchQuery.value, nextPage, true)
  }
}

async function fetchPage(term: string, page: number, append: boolean): Promise<void> {
  if (!props.search) {
    return
  }

  const limit = props.limit ?? 20

  if (append) {
    isLoadingMore.value = true
  } else {
    isLoading.value = true
    searchError.value = null
  }

  try {
    const lastItem = append ? remoteOptions.value.at(-1)?.value : undefined
    const results = await props.search({ term, limit, page, lastItem })
    remoteOptions.value = append ? [...remoteOptions.value, ...results] : results
    hasMore.value = results.length >= limit

    // All results fit without scrolling — load next page immediately to fill the list
    if (hasMore.value && remoteOptions.value.length * itemH.value <= MAX_DROPDOWN_HEIGHT) {
      currentPage.value = page + 1
      fetchPage(term, currentPage.value, true)
      return
    }
  } catch (err) {
    searchError.value = err instanceof Error ? err : new Error(String(err))

    if (!append) {
      remoteOptions.value = []
    }
  }

  isLoading.value = false
  isLoadingMore.value = false
}

function retrySearch(): void {
  fetchPage(searchQuery.value, 1, false)
}

const debouncedRemoteSearch = useDebounceFn((term: string) => {
  currentPage.value = 1
  fetchPage(term, 1, false)
}, computed(() => props.debounce ?? 300))

function onSearchInput(val: string): void {
  searchQuery.value = val
  highlightedIndex.value = -1

  if (!props.search) {
    return
  }

  if (val.length >= (props.minChars ?? 0)) {
    debouncedRemoteSearch(val)
  } else {
    remoteOptions.value = []
    hasMore.value = true
  }
}

onMounted(() => {
  if (props.search && hasValue.value) {
    fetchPage('', 1, false)
  }
})

watch(isOpen, async (opened) => {
  if (opened) {
    highlightedIndex.value = -1

    if (props.searchable) {
      await nextTick()
      searchInputEl.value?.focus()
    }

    if (props.search && remoteOptions.value.length === 0) {
      fetchPage('', 1, false)
    }

    return
  }

  highlightedIndex.value = -1

  // Discard filtered results on close so next open re-fetches the initial list
  if (searchQuery.value !== '') {
    remoteOptions.value = []
    currentPage.value = 1
    searchError.value = null
    hasMore.value = true
  }

  searchQuery.value = ''
})

// ─── Keyboard navigation ─────────────────────────────────────────────────────

function scrollToHighlighted(): void {
  if (props.searchable || props.search) {
    scrollTo(highlightedIndex.value)
    return
  }

  nextTick(() => {
    // ulRef points to the Menu component instance — $el is the underlying <ul>
    const ul = (ulRef.value as any)?.$el as HTMLElement | undefined
    ul?.children[highlightedIndex.value]?.scrollIntoView({ block: 'nearest' })
  })
}

function highlightNext(): void {
  const opts = displayedOptions.value

  if (opts.length === 0) {
    return
  }

  highlightedIndex.value = highlightedIndex.value >= opts.length - 1 ? 0 : highlightedIndex.value + 1
  scrollToHighlighted()
}

function highlightPrev(): void {
  const opts = displayedOptions.value

  if (opts.length === 0) {
    return
  }

  highlightedIndex.value = highlightedIndex.value <= 0 ? opts.length - 1 : highlightedIndex.value - 1
  scrollToHighlighted()
}

function selectHighlighted(): void {
  const opt = displayedOptions.value[highlightedIndex.value]

  if (opt) {
    select(opt)
  }
}

function onTriggerKeydown(e: KeyboardEvent): void {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) {
        open()
        nextTick(highlightNext)
      } else {
        highlightNext()
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (!isOpen.value) {
        open()
        nextTick(highlightPrev)
      } else {
        highlightPrev()
      }
      break
    case 'Enter':
    case ' ':
      if (isOpen.value && highlightedIndex.value >= 0) {
        e.preventDefault()
        selectHighlighted()
      }
      break
    case 'Escape':
      if (isOpen.value) {
        e.preventDefault()
        close()
      }
      break
    case 'Tab':
      if (isOpen.value) {
        close()
      }
      break
  }
}

function onSearchKeydown(e: KeyboardEvent): void {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      highlightNext()
      break
    case 'ArrowUp':
      e.preventDefault()
      highlightPrev()
      break
    case 'Enter':
      if (highlightedIndex.value >= 0) {
        e.preventDefault()
        selectHighlighted()
      }
      break
    case 'Escape':
      e.preventDefault()
      close()
      break
    case 'Tab':
      close()
      break
  }
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
          readonly && 'cursor-default',
        ]"
        :tabindex="disabled ? '-1' : undefined"
        :disabled="disabled"
        :aria-readonly="readonly || undefined"
        @click="toggle()"
        @keydown="onTriggerKeydown"
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
                v-if="!readonly"
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
        v-if="config.clearable && hasValue && !readonly"
        type="button"
        class="absolute right-8 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle opacity-50 hover:opacity-100"
        @click="onClear"
      >
        <XIcon class="size-3" />
      </button>

      <Transition name="dropdown">
        <div
          v-if="isOpen && (options || searchable || search)"
          class="anchor-dropdown absolute z-50 w-full bg-base-100 border border-base-300 rounded-box shadow-lg overflow-hidden"
        >
          <!-- Search input -->
          <div v-if="searchable" class="p-2 border-b border-base-200">
            <input
              ref="searchInputEl"
              :value="searchQuery"
              type="text"
              class="input input-sm w-full"
              :placeholder="$t('common.field.select.search')"
              @input="onSearchInput(($event.target as HTMLInputElement).value)"
              @keydown="onSearchKeydown"
            />
          </div>

          <!-- Virtual list area (searchable or remote) -->
          <template v-if="searchable || search">
            <!-- Initial loading -->
            <div v-if="isLoading" class="px-4 py-6 flex justify-center">
              <slot name="loading" :query="searchQuery">
                <LoaderCircleIcon class="size-4 animate-spin opacity-40" />
              </slot>
            </div>

            <!-- Error -->
            <div v-else-if="searchError" class="px-4 py-3 text-sm text-center text-error">
              <slot name="error" :query="searchQuery" :retry="retrySearch">
                {{ searchError.message }}
              </slot>
            </div>

            <template v-else>
              <!-- Virtual list -->
              <div
                v-if="displayedOptions.length > 0"
                :ref="containerProps.ref"
                :style="{ height: `${virtualContainerHeight}px`, overflowY: 'auto' }"
                @scroll="onVirtualScroll"
              >
                <Menu :size="config.size" class="flex-nowrap" v-bind="wrapperProps">
                  <MenuItem
                    v-for="{ data: option, index } in virtualList"
                    :key="String(option.value)"
                    :active="isOptionSelected(option)"
                    :disabled="isOptionDisabled(option)"
                    :style="{ height: `${itemH}px` }"
                    :class="index === highlightedIndex && !isOptionSelected(option) && 'highlighted'"
                    @click.prevent="select(option)"
                  >
                    <slot name="option" :option="option" :selected="isOptionSelected(option)" :index="index">
                      {{ option.label }}
                    </slot>
                  </MenuItem>
                </Menu>
              </div>

              <!-- Empty -->
              <div v-else class="px-4 py-3 text-sm opacity-40 text-center">
                <slot name="empty" :query="searchQuery">
                  {{ $t('common.field.select.empty') }}
                </slot>
              </div>
            </template>

            <!-- Loading more (pagination) -->
            <div v-if="isLoadingMore" class="px-4 py-2 flex justify-center">
              <slot name="loading-more" :page="currentPage">
                <LoaderCircleIcon class="size-3 animate-spin opacity-40" />
              </slot>
            </div>
          </template>

          <!-- Non-searchable -->
          <Menu ref="ulRef" v-else :size="config.size" class="max-h-56 overflow-y-auto w-full flex-nowrap">
            <MenuItem
              v-for="(option, index) in (options ?? [])"
              :key="String(option.value)"
              :active="isOptionSelected(option)"
              :disabled="isOptionDisabled(option)"
              :class="index === highlightedIndex && !isOptionSelected(option) && 'highlighted'"
              @click.prevent="select(option)"
            >
              <slot name="option" :option="option" :selected="isOptionSelected(option)">
                {{ option.label }}
              </slot>
            </MenuItem>

            <li v-if="(options ?? []).length === 0" class="px-4 py-3 text-sm opacity-40 text-center pointer-events-none">
              <slot name="empty" :query="''">
                {{ $t('common.field.select.empty') }}
              </slot>
            </li>
          </Menu>
        </div>
      </Transition>
    </div>

    <div v-if="multiple && counterText" class="flex justify-end">
      <span class="text-xs" :class="counterColor">{{ counterText }}</span>
    </div>
  </div>
</template>

<style scoped>
:deep(.highlighted > a),
:deep(.highlighted > button) {
  background-color: var(--color-base-200);
}

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
