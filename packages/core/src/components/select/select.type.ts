export type SelectCompareFn<T = any> = (currentValue: T, newValue: T) => boolean;

export interface SelectChangeEventDetail<T = any> {
  value: T;
}

export interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLPopSelectElement;
}
