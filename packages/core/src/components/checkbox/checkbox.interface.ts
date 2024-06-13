export interface CheckboxChangeEventDetail<T = any> {
  checked: boolean;
  value: T;
}

export interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLPopCheckboxElement;
}
