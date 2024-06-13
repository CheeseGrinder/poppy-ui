export interface AccordionGroupChangeEventDetail {
  value: string | string[];
}

export interface AccordionGroupCustomEvent extends CustomEvent {
  detail: AccordionGroupChangeEventDetail;
  target: HTMLPopAccordionGroupElement;
}
