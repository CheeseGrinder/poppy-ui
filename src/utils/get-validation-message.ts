type ValidationElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
type ValidationAnyElement = HTMLElement & {
  validity: ValidityState
  checkValidity: () => boolean
  value: string
  getAttribute: (name: string) => string | null
  validationMessage: string
}

/**
 * Reads element's validity state and returns a localized validation message.
 * Returns null when element is valid.
 *
 * This is a factory function that takes a translation function (t) from vue-i18n.
 * The consumer is responsible for providing the translation function.
 *
 * @param el - The input/textarea/select element to check
 * @param t - Translation function from vue-i18n's useI18n()
 * @returns Localized error message or null if valid
 */
export function getValidationMessage(
  el: ValidationElement | ValidationAnyElement,
  t: (key: string, params?: Record<string, string | number>, fallback?: string) => string,
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
