type ValidationElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
type ValidationAnyElement = HTMLElement & {
  validity: ValidityState
  checkValidity: () => boolean
  value: string
  getAttribute: (name: string) => string | null
  validationMessage: string
}

export type ValidationTranslator = (key: string, params?: Record<string, string | number>, fallback?: string) => string

/**
 * English defaults for every `common.validation.*` key this module can request.
 * Used by `createFallbackValidationTranslator` when no i18n library is available.
 */
export const DEFAULT_VALIDATION_MESSAGES: Record<string, string> = {
  'common.validation.required': 'This field is required.',
  'common.validation.format.default': 'Please enter a valid value.',
  'common.validation.minLength': 'Must be at least {min} characters.',
  'common.validation.maxLength': 'Must be at most {max} characters.',
  'common.validation.min': 'Must be at least {min}.',
  'common.validation.max': 'Must be at most {max}.',
  'common.validation.pattern': 'Please match the requested format.',
  'common.validation.stepMismatch': 'Please enter a valid value.',
  'common.validation.badInput': 'Please enter a valid value.',
  'common.validation.customError': 'Invalid value.',
}

/**
 * Builds a `t()`-shaped translator from `DEFAULT_VALIDATION_MESSAGES`, for use
 * when no i18n library is installed on the consuming app.
 */
export function createFallbackValidationTranslator(): ValidationTranslator {
  return (key, params, fallback) => {
    let message = fallback ?? DEFAULT_VALIDATION_MESSAGES[key] ?? key
    if (params) {
      for (const [name, value] of Object.entries(params)) {
        message = message.replaceAll(`{${name}}`, String(value))
      }
    }
    return message
  }
}

/**
 * Reads element's validity state and returns a localized validation message.
 * Returns null when element is valid.
 *
 * This is a factory function that takes a `t()`-shaped translator, typically
 * vue-i18n's `useI18n().t`, or `createFallbackValidationTranslator()` when no
 * i18n library is installed on the consuming app.
 *
 * @param el - The input/textarea/select element to check
 * @param t - Translation function
 * @returns Localized error message or null if valid
 */
export function getValidationMessage(
  el: ValidationElement | ValidationAnyElement,
  t: ValidationTranslator,
): string | null {
  if (el.validity.valid) return null

  const validity = el.validity

  if (validity.valueMissing) return t('common.validation.required')
  if (validity.typeMismatch) {
    const type = el.getAttribute('type') || 'default'
    return t(`common.validation.format.${type}`, {}, t('common.validation.format.default'))
  }
  if (validity.tooShort) {
    const min = el.getAttribute('minLength')
    return t('common.validation.minLength', { min: min || '0' })
  }
  if (validity.tooLong) {
    const max = el.getAttribute('maxLength')
    return t('common.validation.maxLength', { max: max || '0' })
  }
  if (validity.rangeUnderflow) {
    const min = el.getAttribute('min')
    return t('common.validation.min', { min: min || '0' })
  }
  if (validity.rangeOverflow) {
    const max = el.getAttribute('max')
    return t('common.validation.max', { max: max || '0' })
  }
  if (validity.patternMismatch) {
    const title = el.getAttribute('title')
    if (title) return title
    return t('common.validation.pattern')
  }
  if (validity.stepMismatch) return t('common.validation.stepMismatch')
  if (validity.badInput) return t('common.validation.badInput')
  if (validity.customError) return el.validationMessage || t('common.validation.customError')

  // Fallback to browser's validation message
  return el.validationMessage || null
}
