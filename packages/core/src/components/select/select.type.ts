import { Color } from 'src/interface';

export type SelectCompareFn<T = any> = (currentValue: T, newValue: T) => boolean;
export type SelectColor = Color | 'ghost';

export interface SelectChangeEventDetail<T = any> {
  value: T;
}

export interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLPopSelectElement;
}
