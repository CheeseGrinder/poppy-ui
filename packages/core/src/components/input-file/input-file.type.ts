import type { Color } from 'src/components';

export type InputFileColor = Color | 'ghost';

export interface InputFileChangeEventDetail {
  value: File[];
}

export interface InputFileCustomEvent extends CustomEvent {
  detail: InputFileChangeEventDetail;
  target: HTMLPopInputFileElement;
}
