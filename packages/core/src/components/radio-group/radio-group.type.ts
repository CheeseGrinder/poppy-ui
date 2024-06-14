export type RadioGroupCompareFn<T = any> = (currentValue: T, newValue: T) => boolean;

export interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}

export interface RadioGroupCustomEvent<T = any> extends CustomEvent {
  detail: RadioGroupChangeEventDetail<T>;
  target: HTMLPopRadioGroupElement;
}
