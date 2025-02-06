/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@poppy-ui/core';


@ProxyCmp({
  inputs: ['disabled', 'name', 'open', 'readonly'],
  methods: ['show', 'hide', 'toggle']
})
@Component({
  selector: 'pop-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'name', 'open', 'readonly'],
})
export class PopAccordion {
  protected el: HTMLPopAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopAccordion extends Components.PopAccordion {}


@ProxyCmp({
  inputs: ['active', 'disabled', 'multiple', 'readonly']
})
@Component({
  selector: 'pop-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'disabled', 'multiple', 'readonly'],
})
export class PopAccordionGroup {
  protected el: HTMLPopAccordionGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange']);
  }
}


import type { AccordionGroupChangeEventDetail as IPopAccordionGroupAccordionGroupChangeEventDetail } from '@poppy-ui/core';

export declare interface PopAccordionGroup extends Components.PopAccordionGroup {
  /**
   * The `popChange` event is fired when the user select an open of close an accordion.
   */
  popChange: EventEmitter<CustomEvent<IPopAccordionGroupAccordionGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['placeholder']
})
@Component({
  selector: 'pop-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['placeholder'],
})
export class PopAvatar {
  protected el: HTMLPopAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopAvatar extends Components.PopAvatar {}


@ProxyCmp({
  inputs: ['as', 'color', 'outlined', 'size']
})
@Component({
  selector: 'pop-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['as', 'color', 'outlined', 'size'],
})
export class PopBadge {
  protected el: HTMLPopBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopBadge extends Components.PopBadge {}


@ProxyCmp({
  inputs: ['active', 'color', 'disabled', 'expand', 'form', 'outlined', 'shape', 'size', 'type']
})
@Component({
  selector: 'pop-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'color', 'disabled', 'expand', 'form', 'outlined', 'shape', 'size', 'type'],
})
export class PopButton {
  protected el: HTMLPopButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popFocus', 'popBlur']);
  }
}


export declare interface PopButton extends Components.PopButton {
  /**
   * Emitted when the button has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['compact']
})
@Component({
  selector: 'pop-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['compact'],
})
export class PopCard {
  protected el: HTMLPopCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopCard extends Components.PopCard {}


@ProxyCmp({
})
@Component({
  selector: 'pop-card-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class PopCardActions {
  protected el: HTMLPopCardActionsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopCardActions extends Components.PopCardActions {}


@ProxyCmp({
})
@Component({
  selector: 'pop-card-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class PopCardBody {
  protected el: HTMLPopCardBodyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopCardBody extends Components.PopCardBody {}


@ProxyCmp({
})
@Component({
  selector: 'pop-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class PopCardTitle {
  protected el: HTMLPopCardTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopCardTitle extends Components.PopCardTitle {}


@ProxyCmp({
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'placement', 'readonly', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'placement', 'readonly', 'required', 'size', 'value'],
})
export class PopCheckbox {
  protected el: HTMLPopCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popFocus', 'popBlur']);
  }
}


import type { CheckboxChangeEventDetail as IPopCheckboxCheckboxChangeEventDetail } from '@poppy-ui/core';

export declare interface PopCheckbox extends Components.PopCheckbox {
  /**
   * Emitted when the user switches the toggle on or off.
   */
  popChange: EventEmitter<CustomEvent<IPopCheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'orientation', 'placement']
})
@Component({
  selector: 'pop-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'orientation', 'placement'],
})
export class PopDivider {
  protected el: HTMLPopDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopDivider extends Components.PopDivider {}


@ProxyCmp({
  inputs: ['open', 'side', 'trigger', 'triggerAction'],
  methods: ['present', 'dismiss', 'toggle']
})
@Component({
  selector: 'pop-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['open', 'side', 'trigger', 'triggerAction'],
})
export class PopDrawer {
  protected el: HTMLPopDrawerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popDidPresent', 'popDidDismiss']);
  }
}


export declare interface PopDrawer extends Components.PopDrawer {
  /**
   * Emitted when the drawer has been opened.
   */
  popDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the drawer has been opened.
   */
  popDidDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['align', 'debounce', 'open', 'showBackdrop', 'side', 'triggerAction'],
  methods: ['present', 'toggle', 'dismiss']
})
@Component({
  selector: 'pop-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'debounce', 'open', 'showBackdrop', 'side', 'triggerAction'],
})
export class PopDropdown {
  protected el: HTMLPopDropdownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss']);
  }
}


export declare interface PopDropdown extends Components.PopDropdown {
  /**
   * Emitted after the modal has presented.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the modal has dismissed.
   */
  didDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['alt', 'src']
})
@Component({
  selector: 'pop-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'src'],
})
export class PopImg {
  protected el: HTMLPopImgElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popWillLoad', 'popDidLoad', 'popError']);
  }
}


export declare interface PopImg extends Components.PopImg {
  /**
   * Emitted when the img src has been set
   */
  popWillLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the image has finished loading
   */
  popDidLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the img fails to load
   */
  popError: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['position', 'side']
})
@Component({
  selector: 'pop-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position', 'side'],
})
export class PopIndicator {
  protected el: HTMLPopIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopIndicator extends Components.PopIndicator {}


@ProxyCmp({
  inputs: ['autoCapitalize', 'autoComplete', 'autoFocus', 'bordered', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'helperText', 'keyboard', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoCapitalize', 'autoComplete', 'autoFocus', 'bordered', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'helperText', 'keyboard', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
})
export class PopInput {
  protected el: HTMLPopInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popInput', 'popFocus', 'popBlur']);
  }
}


import type { InputChangeEventDetail as IPopInputInputChangeEventDetail } from '@poppy-ui/core';
import type { InputInputEventDetail as IPopInputInputInputEventDetail } from '@poppy-ui/core';

export declare interface PopInput extends Components.PopInput {
  /**
   * The `popChange` event is fired when the user modifies the input's value.
Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  popChange: EventEmitter<CustomEvent<IPopInputInputChangeEventDetail>>;
  /**
   * The `popInput` event is fired each time the user modifies the Input's value.
Unlike the `popChange` event, the `popInput` event is fired for each alteration to the input's value.
This typically happens for each keystroke as the user types.

This event can be debounced by the `debounce` property.
   */
  popInput: EventEmitter<CustomEvent<IPopInputInputInputEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autoFocus', 'bordered', 'color', 'disabled', 'errorText', 'helperText', 'multiple', 'name', 'readonly', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'bordered', 'color', 'disabled', 'errorText', 'helperText', 'multiple', 'name', 'readonly', 'required', 'size', 'value'],
})
export class PopInputFile {
  protected el: HTMLPopInputFileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popFocus', 'popBlur']);
  }
}


import type { InputFileChangeEventDetail as IPopInputFileInputFileChangeEventDetail } from '@poppy-ui/core';

export declare interface PopInputFile extends Components.PopInputFile {
  /**
   * The `popChange` event is fired when the user modifies the input-file's value.
   */
  popChange: EventEmitter<CustomEvent<IPopInputFileInputFileChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'pop-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class PopItem {
  protected el: HTMLPopItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopItem extends Components.PopItem {}


@ProxyCmp({
  inputs: ['orientation']
})
@Component({
  selector: 'pop-join',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation'],
})
export class PopJoin {
  protected el: HTMLPopJoinElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopJoin extends Components.PopJoin {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'pop-kbd',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class PopKbd {
  protected el: HTMLPopKbdElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopKbd extends Components.PopKbd {}


@ProxyCmp({
  inputs: ['orientation', 'size']
})
@Component({
  selector: 'pop-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation', 'size'],
})
export class PopList {
  protected el: HTMLPopListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopList extends Components.PopList {}


@ProxyCmp({
  inputs: ['size', 'type']
})
@Component({
  selector: 'pop-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'type'],
})
export class PopLoading {
  protected el: HTMLPopLoadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopLoading extends Components.PopLoading {}


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'pop-mask',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class PopMask {
  protected el: HTMLPopMaskElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopMask extends Components.PopMask {}


@ProxyCmp({
  inputs: ['backdropDismiss', 'component', 'componentProps', 'open', 'showBackdrop', 'trigger'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'pop-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'component', 'componentProps', 'open', 'showBackdrop', 'trigger'],
})
export class PopModal {
  protected el: HTMLPopModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss']);
  }
}


export declare interface PopModal extends Components.PopModal {
  /**
   * Emitted after the modal has presented.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the modal has dismissed.
   */
  didDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'pop-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class PopNavbar {
  protected el: HTMLPopNavbarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopNavbar extends Components.PopNavbar {}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'event', 'open', 'showBackdrop', 'trigger', 'triggerAction'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'pop-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'event', 'open', 'showBackdrop', 'trigger', 'triggerAction'],
})
export class PopPopover {
  protected el: HTMLPopPopoverElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['willPresent', 'didPresent', 'willDismiss', 'didDismiss']);
  }
}


export declare interface PopPopover extends Components.PopPopover {
  /**
   * Emitted before the popover has presented.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the popover has presented.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has dismissed.
   */
  willDismiss: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the popover has dismissed.
   */
  didDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'max', 'value']
})
@Component({
  selector: 'pop-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'max', 'value'],
})
export class PopProgress {
  protected el: HTMLPopProgressElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopProgress extends Components.PopProgress {}


@ProxyCmp({
  inputs: ['autoFocus', 'checked', 'color', 'disabled', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'checked', 'color', 'disabled', 'size', 'value'],
})
export class PopRadio {
  protected el: HTMLPopRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popFocus', 'popBlur']);
  }
}


export declare interface PopRadio extends Components.PopRadio {
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['allowEmpty', 'compare', 'disabled', 'name', 'readonly', 'required', 'value']
})
@Component({
  selector: 'pop-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowEmpty', 'compare', 'disabled', 'name', 'readonly', 'required', 'value'],
})
export class PopRadioGroup {
  protected el: HTMLPopRadioGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange']);
  }
}


import type { RadioGroupChangeEventDetail as IPopRadioGroupRadioGroupChangeEventDetail } from '@poppy-ui/core';

export declare interface PopRadioGroup extends Components.PopRadioGroup {
  /**
   * The `popChange` event is fired when the user select an option.
Unlike the ionInput event, the `popChange` event is fired when the user click on the element.
   */
  popChange: EventEmitter<CustomEvent<IPopRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['autoFocus', 'color', 'debounce', 'disabled', 'max', 'min', 'name', 'required', 'size', 'step', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'color', 'debounce', 'disabled', 'max', 'min', 'name', 'required', 'size', 'step', 'value'],
})
export class PopRange {
  protected el: HTMLPopRangeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popFocus', 'popBlur']);
  }
}


import type { RangeChangeEventDetail as IPopRangeRangeChangeEventDetail } from '@poppy-ui/core';

export declare interface PopRange extends Components.PopRange {
  /**
   * The `popChange` event is fired when the user modifies the input's value.
Unlike the popInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  popChange: EventEmitter<CustomEvent<IPopRangeRangeChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autoFocus', 'bordered', 'color', 'compare', 'disabled', 'helperText', 'max', 'min', 'multiple', 'name', 'notEnoughErrorText', 'placeholder', 'readonly', 'required', 'size', 'tooManyErrorText', 'value'],
  methods: ['setFocus', 'present', 'toggle', 'dismiss']
})
@Component({
  selector: 'pop-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'bordered', 'color', 'compare', 'disabled', 'helperText', 'max', 'min', 'multiple', 'name', 'notEnoughErrorText', 'placeholder', 'readonly', 'required', 'size', 'tooManyErrorText', 'value'],
})
export class PopSelect {
  protected el: HTMLPopSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss', 'popChange', 'popFocus', 'popBlur']);
  }
}


import type { SelectChangeEventDetail as IPopSelectSelectChangeEventDetail } from '@poppy-ui/core';

export declare interface PopSelect extends Components.PopSelect {
  /**
   * Emitted when the overlay is presented.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the overlay is dismissed.
   */
  didDismiss: EventEmitter<CustomEvent<void>>;
  /**
   * The `popChange` event is fired when the user modifies the select's value.
Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  popChange: EventEmitter<CustomEvent<IPopSelectSelectChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'pop-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'value'],
})
export class PopSelectOption {
  protected el: HTMLPopSelectOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopSelectOption extends Components.PopSelectOption {}


@ProxyCmp({
  inputs: ['active', 'type']
})
@Component({
  selector: 'pop-swap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'type'],
})
export class PopSwap {
  protected el: HTMLPopSwapElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popSwap']);
  }
}


import type { SwapChangeEventDetail as IPopSwapSwapChangeEventDetail } from '@poppy-ui/core';

export declare interface PopSwap extends Components.PopSwap {
  /**
   * Emitted when the swap active attribut change
   */
  popSwap: EventEmitter<CustomEvent<IPopSwapSwapChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['autoCapitalize', 'autoFocus', 'bordered', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'helperText', 'keyboard', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoCapitalize', 'autoFocus', 'bordered', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'helperText', 'keyboard', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'spellcheck', 'value', 'wrap'],
})
export class PopTextarea {
  protected el: HTMLPopTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popInput', 'popFocus', 'popBlur']);
  }
}


import type { TextareaChangeEventDetail as IPopTextareaTextareaChangeEventDetail } from '@poppy-ui/core';
import type { TextareaInputEventDetail as IPopTextareaTextareaInputEventDetail } from '@poppy-ui/core';

export declare interface PopTextarea extends Components.PopTextarea {
  /**
   * The `popChange` event is fired when the user modifies the textarea's value.
Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  popChange: EventEmitter<CustomEvent<IPopTextareaTextareaChangeEventDetail>>;
  /**
   * The `popInput` event is fired each time the user modifies the textarea's value.
Unlike the `popChange` event, the `popInput` event is fired for each alteration to the textarea's value.
This typically happens for each keystroke as the user types.

This event can be debouced by the `debounce` property.
   */
  popInput: EventEmitter<CustomEvent<IPopTextareaTextareaInputEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'readonly', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'pop-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'readonly', 'required', 'size', 'value'],
})
export class PopToggle {
  protected el: HTMLPopToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popChange', 'popFocus', 'popBlur']);
  }
}


import type { ToggleChangeEventDetail as IPopToggleToggleChangeEventDetail } from '@poppy-ui/core';

export declare interface PopToggle extends Components.PopToggle {
  /**
   * Emitted when the input checked attribut change
   */
  popChange: EventEmitter<CustomEvent<IPopToggleToggleChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  popFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  popBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'open', 'position', 'value']
})
@Component({
  selector: 'pop-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'open', 'position', 'value'],
})
export class PopTooltip {
  protected el: HTMLPopTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PopTooltip extends Components.PopTooltip {}


