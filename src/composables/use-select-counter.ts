import { computed, type Ref } from 'vue'

export type SelectCounterFormatter = (count: number, min?: number, max?: number) => string

export function useSelectCounter(
  selectedCount: Ref<number>,
  options: {
    multiple?: Ref<boolean | undefined>
    min?: Ref<number | undefined>
    max?: Ref<number | undefined>
    formatter?: Ref<SelectCounterFormatter | undefined>
  },
) {
  const counterText = computed(() => {
    if (!options.multiple?.value) {
      return null
    }

    if (!options.min?.value && !options.max?.value) {
      return null
    }

    if (options.formatter?.value) {
      return options.formatter.value(selectedCount.value, options.min?.value, options.max?.value)
    }

    if (options.max?.value) {
      return `${selectedCount.value} / ${options.max.value}`
    }

    return `${selectedCount.value}`
  })

  const counterColor = computed(() => {
    if (options.max?.value && selectedCount.value > options.max.value) {
      return 'text-error'
    }

    if (options.min?.value && selectedCount.value < options.min.value) {
      return 'text-warning'
    }

    return 'opacity-40'
  })

  const isAtMax = computed(() => {
    if (!options.max?.value || !options.multiple?.value) {
      return false
    }

    return selectedCount.value >= options.max.value
  })

  return {
    counterText,
    counterColor,
    isAtMax,
  }
}
