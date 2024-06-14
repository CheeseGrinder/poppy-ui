export type SwapType = 'rotate' | 'flip';

export interface SwapChangeEventDetail {
  active: boolean;
}

export interface SwapCustomEvent extends CustomEvent {
  detail: SwapChangeEventDetail;
  target: HTMLPopSwapElement;
}
