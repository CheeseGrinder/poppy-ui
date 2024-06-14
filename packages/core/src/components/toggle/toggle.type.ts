export interface ToggleChangeEventDetail<T = any> {
  checked: boolean;
  value: T;
}

export interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLPopToggleElement;
}
