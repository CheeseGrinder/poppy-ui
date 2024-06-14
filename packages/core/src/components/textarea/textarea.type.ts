import { Color } from 'src/components';

export type TextareaColor = Color | 'ghost';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#wrap
export type Wrap = 'hard' | 'soft';

export interface TextareaChangeEventDetail {
  value: string;
}
export interface TextareaInputEventDetail {
  value: string;
}

export interface TextareaCustomEvent<T = TextareaChangeEventDetail> extends CustomEvent {
  detail: T;
  target: HTMLPopTextareaElement;
}
