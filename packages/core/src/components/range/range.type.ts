import type { Color } from 'src/interface';

export type RangeColor = Color | 'ghost';

export interface RangeChangeEventDetail {
  value: number;
}

export interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLPopRangeElement;
}
