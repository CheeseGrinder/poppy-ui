type CompareFn<T = any> = (currentValue: T, compareValue: T) => boolean;

/**
 * Uses the compareWith param to compare two values to determine if they are equal.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
export const compareOptions = (
  currentValue: any,
  compareValue: any,
  compareWith?: CompareFn | string | null,
): boolean => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  }
  if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  }
  return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
};

/**
 * Compares a value against the current value(s) to determine if it is selected.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
export const isOptionSelected = (
  currentValue: any[] | any,
  compareValue: any,
  compareWith?: string | CompareFn | null,
) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  }
  return compareOptions(currentValue, compareValue, compareWith);
};
