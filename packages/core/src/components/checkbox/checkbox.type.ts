export type CheckboxPlacement = 'start' | 'end';

export interface CheckboxChangeEventDetail<T = any> {
  checked: boolean;
  value: T;
}

export interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLPopCheckboxElement;
}
