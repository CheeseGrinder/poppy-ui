import type { Color } from 'src/interface';

export type ToggleColor = Color | 'ghost';

export interface ToggleChangeEventDetail<T = any> {
  checked: boolean;
  value: T | null;
}

export interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLPopToggleElement;
}
