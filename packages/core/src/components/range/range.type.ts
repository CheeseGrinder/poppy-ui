export interface RangeChangeEventDetail {
  value: number;
}

export interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLPopRangeElement;
}
