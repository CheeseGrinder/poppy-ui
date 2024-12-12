/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@poppy-ui/core/components';

import { defineCustomElement as definePopAccordion } from '@poppy-ui/core/components/pop-accordion.js';
import { defineCustomElement as definePopAccordionGroup } from '@poppy-ui/core/components/pop-accordion-group.js';
import { defineCustomElement as definePopAvatar } from '@poppy-ui/core/components/pop-avatar.js';
import { defineCustomElement as definePopBadge } from '@poppy-ui/core/components/pop-badge.js';
import { defineCustomElement as definePopButton } from '@poppy-ui/core/components/pop-button.js';
import { defineCustomElement as definePopCard } from '@poppy-ui/core/components/pop-card.js';
import { defineCustomElement as definePopCardActions } from '@poppy-ui/core/components/pop-card-actions.js';
import { defineCustomElement as definePopCardBody } from '@poppy-ui/core/components/pop-card-body.js';
import { defineCustomElement as definePopCardTitle } from '@poppy-ui/core/components/pop-card-title.js';
import { defineCustomElement as definePopCheckbox } from '@poppy-ui/core/components/pop-checkbox.js';
import { defineCustomElement as definePopDivider } from '@poppy-ui/core/components/pop-divider.js';
import { defineCustomElement as definePopDrawer } from '@poppy-ui/core/components/pop-drawer.js';
import { defineCustomElement as definePopDropdown } from '@poppy-ui/core/components/pop-dropdown.js';
import { defineCustomElement as definePopImg } from '@poppy-ui/core/components/pop-img.js';
import { defineCustomElement as definePopIndicator } from '@poppy-ui/core/components/pop-indicator.js';
import { defineCustomElement as definePopInput } from '@poppy-ui/core/components/pop-input.js';
import { defineCustomElement as definePopInputFile } from '@poppy-ui/core/components/pop-input-file.js';
import { defineCustomElement as definePopItem } from '@poppy-ui/core/components/pop-item.js';
import { defineCustomElement as definePopJoin } from '@poppy-ui/core/components/pop-join.js';
import { defineCustomElement as definePopKbd } from '@poppy-ui/core/components/pop-kbd.js';
import { defineCustomElement as definePopList } from '@poppy-ui/core/components/pop-list.js';
import { defineCustomElement as definePopLoading } from '@poppy-ui/core/components/pop-loading.js';
import { defineCustomElement as definePopMask } from '@poppy-ui/core/components/pop-mask.js';
import { defineCustomElement as definePopModal } from '@poppy-ui/core/components/pop-modal.js';
import { defineCustomElement as definePopNavbar } from '@poppy-ui/core/components/pop-navbar.js';
import { defineCustomElement as definePopPopover } from '@poppy-ui/core/components/pop-popover.js';
import { defineCustomElement as definePopProgress } from '@poppy-ui/core/components/pop-progress.js';
import { defineCustomElement as definePopRadio } from '@poppy-ui/core/components/pop-radio.js';
import { defineCustomElement as definePopRadioGroup } from '@poppy-ui/core/components/pop-radio-group.js';
import { defineCustomElement as definePopRange } from '@poppy-ui/core/components/pop-range.js';
import { defineCustomElement as definePopSelect } from '@poppy-ui/core/components/pop-select.js';
import { defineCustomElement as definePopSelectOption } from '@poppy-ui/core/components/pop-select-option.js';
import { defineCustomElement as definePopSwap } from '@poppy-ui/core/components/pop-swap.js';
import { defineCustomElement as definePopTextarea } from '@poppy-ui/core/components/pop-textarea.js';
import { defineCustomElement as definePopToggle } from '@poppy-ui/core/components/pop-toggle.js';
import { defineCustomElement as definePopTooltip } from '@poppy-ui/core/components/pop-tooltip.js';


export const PopAccordion = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopAccordion>('pop-accordion', definePopAccordion, [
  'readonly',
  'disabled',
  'name',
  'open'
]) : defineStencilSSRComponent({
  tagName: 'pop-accordion',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'name': [String, "name"],
    'open': [Boolean, "open"]
  }
});


export const PopAccordionGroup = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopAccordionGroup, JSX.PopAccordionGroup["active"]>('pop-accordion-group', definePopAccordionGroup, [
  'readonly',
  'disabled',
  'multiple',
  'active',
  'popChange',
  'popActiveChange'
],
'active', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-accordion-group',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'multiple': [Boolean, "multiple"],
    'active': [String, "active"],
    'onPopChange': [Function],
    'onPopActiveChange': [Function]
  }
});


export const PopAvatar = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopAvatar>('pop-avatar', definePopAvatar, [
  'placeholder'
]) : defineStencilSSRComponent({
  tagName: 'pop-avatar',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'placeholder': [Boolean, "placeholder"]
  }
});


export const PopBadge = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopBadge>('pop-badge', definePopBadge, [
  'color',
  'size',
  'outlined',
  'as'
]) : defineStencilSSRComponent({
  tagName: 'pop-badge',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'color': [String, "color"],
    'size': [String, "size"],
    'outlined': [Boolean, "outlined"],
    'as': [String, "as"]
  }
});


export const PopButton = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopButton>('pop-button', definePopButton, [
  'type',
  'form',
  'disabled',
  'color',
  'size',
  'outlined',
  'shape',
  'expand',
  'active',
  'popFocus',
  'popBlur'
]) : defineStencilSSRComponent({
  tagName: 'pop-button',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'type': [String, "type"],
    'form': [String, "form"],
    'disabled': [Boolean, "disabled"],
    'color': [String, "color"],
    'size': [String, "size"],
    'outlined': [Boolean, "outlined"],
    'shape': [String, "shape"],
    'expand': [String, "expand"],
    'active': [Boolean, "active"],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopCard = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopCard>('pop-card', definePopCard, [
  'compact'
]) : defineStencilSSRComponent({
  tagName: 'pop-card',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'compact': [Boolean, "compact"]
  }
});


export const PopCardActions = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopCardActions>('pop-card-actions', definePopCardActions) : defineStencilSSRComponent({
  tagName: 'pop-card-actions',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    
  }
});


export const PopCardBody = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopCardBody>('pop-card-body', definePopCardBody) : defineStencilSSRComponent({
  tagName: 'pop-card-body',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    
  }
});


export const PopCardTitle = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopCardTitle>('pop-card-title', definePopCardTitle) : defineStencilSSRComponent({
  tagName: 'pop-card-title',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    
  }
});


export const PopCheckbox = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopCheckbox, JSX.PopCheckbox["checked"]>('pop-checkbox', definePopCheckbox, [
  'name',
  'value',
  'required',
  'readonly',
  'checked',
  'indeterminate',
  'disabled',
  'color',
  'size',
  'placement',
  'popChange',
  'popFocus',
  'popBlur'
],
'checked', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-checkbox',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [String, "value"],
    'required': [Boolean, "required"],
    'readonly': [Boolean, "readonly"],
    'checked': [Boolean, "checked"],
    'indeterminate': [Boolean, "indeterminate"],
    'disabled': [Boolean, "disabled"],
    'color': [String, "color"],
    'size': [String, "size"],
    'placement': [String, "placement"],
    'onPopChange': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopDivider = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopDivider>('pop-divider', definePopDivider, [
  'orientation',
  'placement',
  'color'
]) : defineStencilSSRComponent({
  tagName: 'pop-divider',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'orientation': [String, "orientation"],
    'placement': [String, "placement"],
    'color': [String, "color"]
  }
});


export const PopDrawer = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopDrawer>('pop-drawer', definePopDrawer, [
  'trigger',
  'triggerAction',
  'side',
  'open',
  'popDidPresent',
  'popDidDismiss'
]) : defineStencilSSRComponent({
  tagName: 'pop-drawer',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'trigger': [String, "trigger"],
    'triggerAction': [String, "trigger-action"],
    'side': [String, "side"],
    'open': [Boolean, "open"],
    'onPopDidPresent': [Function],
    'onPopDidDismiss': [Function]
  }
});


export const PopDropdown = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopDropdown>('pop-dropdown', definePopDropdown, [
  'side',
  'align',
  'open',
  'triggerAction',
  'debounce',
  'showBackdrop',
  'didPresent',
  'didDismiss'
]) : defineStencilSSRComponent({
  tagName: 'pop-dropdown',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'side': [String, "side"],
    'align': [String, "align"],
    'open': [Boolean, "open"],
    'triggerAction': [String, "trigger-action"],
    'debounce': [Number, "debounce"],
    'showBackdrop': [Boolean, "show-backdrop"],
    'onDidPresent': [Function],
    'onDidDismiss': [Function]
  }
});


export const PopImg = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopImg>('pop-img', definePopImg, [
  'src',
  'alt',
  'popWillLoad',
  'popDidLoad',
  'popError'
]) : defineStencilSSRComponent({
  tagName: 'pop-img',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'src': [String, "src"],
    'alt': [String, "alt"],
    'onPopWillLoad': [Function],
    'onPopDidLoad': [Function],
    'onPopError': [Function]
  }
});


export const PopIndicator = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopIndicator>('pop-indicator', definePopIndicator, [
  'side',
  'position'
]) : defineStencilSSRComponent({
  tagName: 'pop-indicator',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'side': [String, "side"],
    'position': [String, "position"]
  }
});


export const PopInput = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopInput, JSX.PopInput["value"]>('pop-input', definePopInput, [
  'name',
  'type',
  'placeholder',
  'value',
  'min',
  'max',
  'step',
  'minLength',
  'maxLength',
  'multiple',
  'pattern',
  'required',
  'readonly',
  'disabled',
  'autoFocus',
  'keyboard',
  'enterkeyhint',
  'spellcheck',
  'autoComplete',
  'autoCapitalize',
  'bordered',
  'color',
  'size',
  'helperText',
  'errorText',
  'counter',
  'counterFormatter',
  'debounce',
  'popChange',
  'popInput',
  'popFocus',
  'popBlur'
],
'value', 'pop-input') : defineStencilSSRComponent({
  tagName: 'pop-input',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'type': [String, "type"],
    'placeholder': [String, "placeholder"],
    'min': [Number, "min"],
    'step': [String, "step"],
    'minLength': [Number, "min-length"],
    'maxLength': [Number, "max-length"],
    'multiple': [Boolean, "multiple"],
    'pattern': [String, "pattern"],
    'required': [Boolean, "required"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'keyboard': [String, "keyboard"],
    'enterkeyhint': [String, "enterkeyhint"],
    'spellcheck': [Boolean, "spellcheck"],
    'autoComplete': [String, "auto-complete"],
    'autoCapitalize': [String, "auto-capitalize"],
    'bordered': [Boolean, "bordered"],
    'color': [String, "color"],
    'size': [String, "size"],
    'helperText': [String, "helper-text"],
    'errorText': [String, "error-text"],
    'counter': [Boolean, "counter"],
    'debounce': [Number, "debounce"],
    'onPopChange': [Function],
    'onPopInput': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopInputFile = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopInputFile>('pop-input-file', definePopInputFile, [
  'name',
  'value',
  'multiple',
  'required',
  'readonly',
  'disabled',
  'autoFocus',
  'bordered',
  'color',
  'size',
  'helperText',
  'errorText',
  'popChange',
  'popFocus',
  'popBlur'
]) : defineStencilSSRComponent({
  tagName: 'pop-input-file',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'multiple': [Boolean, "multiple"],
    'required': [Boolean, "required"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'bordered': [Boolean, "bordered"],
    'color': [String, "color"],
    'size': [String, "size"],
    'helperText': [String, "helper-text"],
    'errorText': [String, "error-text"],
    'onPopChange': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopItem = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopItem>('pop-item', definePopItem, [
  'disabled'
]) : defineStencilSSRComponent({
  tagName: 'pop-item',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'disabled': [Boolean, "disabled"]
  }
});


export const PopJoin = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopJoin>('pop-join', definePopJoin, [
  'orientation'
]) : defineStencilSSRComponent({
  tagName: 'pop-join',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'orientation': [String, "orientation"]
  }
});


export const PopKbd = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopKbd>('pop-kbd', definePopKbd, [
  'size'
]) : defineStencilSSRComponent({
  tagName: 'pop-kbd',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'size': [String, "size"]
  }
});


export const PopList = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopList>('pop-list', definePopList, [
  'size',
  'orientation'
]) : defineStencilSSRComponent({
  tagName: 'pop-list',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'size': [String, "size"],
    'orientation': [String, "orientation"]
  }
});


export const PopLoading = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopLoading>('pop-loading', definePopLoading, [
  'type',
  'size'
]) : defineStencilSSRComponent({
  tagName: 'pop-loading',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'type': [String, "type"],
    'size': [String, "size"]
  }
});


export const PopMask = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopMask>('pop-mask', definePopMask, [
  'type'
]) : defineStencilSSRComponent({
  tagName: 'pop-mask',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'type': [String, "type"]
  }
});


export const PopModal = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopModal>('pop-modal', definePopModal, [
  'trigger',
  'component',
  'componentProps',
  'showBackdrop',
  'backdropDismiss',
  'open',
  'present',
  'dismiss'
]) : defineStencilSSRComponent({
  tagName: 'pop-modal',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'trigger': [String, "trigger"],
    'component': [String, "component"],
    'showBackdrop': [Boolean, "show-backdrop"],
    'backdropDismiss': [Boolean, "backdrop-dismiss"],
    'open': [Boolean, "open"],
    'onPresent': [Function],
    'onDismiss': [Function]
  }
});


export const PopNavbar = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopNavbar>('pop-navbar', definePopNavbar) : defineStencilSSRComponent({
  tagName: 'pop-navbar',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    
  }
});


export const PopPopover = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopPopover>('pop-popover', definePopPopover, [
  'open',
  'animated',
  'showBackdrop',
  'backdropDismiss',
  'event',
  'trigger',
  'triggerAction',
  'component',
  'componentProps',
  'willPresent',
  'didPresent',
  'willDismiss',
  'didDismiss'
]) : defineStencilSSRComponent({
  tagName: 'pop-popover',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'open': [Boolean, "open"],
    'showBackdrop': [Boolean, "show-backdrop"],
    'backdropDismiss': [Boolean, "backdrop-dismiss"],
    'trigger': [String, "trigger"],
    'triggerAction': [String, "trigger-action"],
    'component': [String, "component"],
    'onWillPresent': [Function],
    'onDidPresent': [Function],
    'onWillDismiss': [Function],
    'onDidDismiss': [Function]
  }
});


export const PopProgress = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopProgress>('pop-progress', definePopProgress, [
  'value',
  'max',
  'color'
]) : defineStencilSSRComponent({
  tagName: 'pop-progress',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'value': [Number, "value"],
    'max': [Number, "max"],
    'color': [String, "color"]
  }
});


export const PopRadio = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopRadio, JSX.PopRadio["value"]>('pop-radio', definePopRadio, [
  'name',
  'value',
  'checked',
  'required',
  'disabled',
  'autoFocus',
  'color',
  'size',
  'popFocus',
  'popBlur'
],
'value', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-radio',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'checked': [Boolean, "checked"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'color': [String, "color"],
    'size': [String, "size"],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopRadioGroup = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopRadioGroup, JSX.PopRadioGroup["value"]>('pop-radio-group', definePopRadioGroup, [
  'name',
  'value',
  'required',
  'disabled',
  'allowEmpty',
  'compare',
  'color',
  'size',
  'popChange',
  'popValueChange'
],
'value', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-radio-group',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'allowEmpty': [Boolean, "allow-empty"],
    'compare': [String, "compare"],
    'color': [String, "color"],
    'size': [String, "size"],
    'onPopChange': [Function],
    'onPopValueChange': [Function]
  }
});


export const PopRange = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopRange, JSX.PopRange["value"]>('pop-range', definePopRange, [
  'name',
  'value',
  'min',
  'max',
  'step',
  'required',
  'disabled',
  'autoFocus',
  'color',
  'size',
  'debounce',
  'popChange',
  'popFocus',
  'popBlur'
],
'value', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-range',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [Number, "value"],
    'min': [Number, "min"],
    'max': [Number, "max"],
    'step': [Number, "step"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'color': [String, "color"],
    'size': [String, "size"],
    'debounce': [Number, "debounce"],
    'onPopChange': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopSelect = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopSelect, JSX.PopSelect["value"]>('pop-select', definePopSelect, [
  'name',
  'placeholder',
  'value',
  'multiple',
  'min',
  'max',
  'required',
  'disabled',
  'autoFocus',
  'bordered',
  'color',
  'size',
  'selectedText',
  'helperText',
  'notEnoughErrorText',
  'tooManyErrorText',
  'compare',
  'popDismiss',
  'popChange',
  'popFocus',
  'popBlur'
],
'value', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-select',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'placeholder': [String, "placeholder"],
    'multiple': [Boolean, "multiple"],
    'min': [Number, "min"],
    'max': [Number, "max"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'bordered': [Boolean, "bordered"],
    'color': [String, "color"],
    'size': [String, "size"],
    'selectedText': [String, "selected-text"],
    'helperText': [String, "helper-text"],
    'notEnoughErrorText': [String, "not-enough-error-text"],
    'tooManyErrorText': [String, "too-many-error-text"],
    'compare': [String, "compare"],
    'onPopDismiss': [Function],
    'onPopChange': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopSelectOption = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopSelectOption>('pop-select-option', definePopSelectOption, [
  'value',
  'disabled',
  'color',
  'size'
]) : defineStencilSSRComponent({
  tagName: 'pop-select-option',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'disabled': [Boolean, "disabled"],
    'color': [String, "color"],
    'size': [String, "size"]
  }
});


export const PopSwap = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopSwap, JSX.PopSwap["active"]>('pop-swap', definePopSwap, [
  'type',
  'active',
  'popSwap'
],
'active', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-swap',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'type': [String, "type"],
    'active': [Boolean, "active"],
    'onPopSwap': [Function]
  }
});


export const PopTextarea = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopTextarea, JSX.PopTextarea["value"]>('pop-textarea', definePopTextarea, [
  'name',
  'placeholder',
  'value',
  'minLength',
  'maxLength',
  'cols',
  'rows',
  'required',
  'readonly',
  'disabled',
  'autoFocus',
  'keyboard',
  'enterkeyhint',
  'spellcheck',
  'autoCapitalize',
  'wrap',
  'bordered',
  'color',
  'size',
  'helperText',
  'errorText',
  'counter',
  'counterFormatter',
  'debounce',
  'popChange',
  'popInput',
  'popFocus',
  'popBlur'
],
'value', 'pop-input') : defineStencilSSRComponent({
  tagName: 'pop-textarea',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'placeholder': [String, "placeholder"],
    'value': [String, "value"],
    'minLength': [Number, "min-length"],
    'maxLength': [Number, "max-length"],
    'cols': [Number, "cols"],
    'rows': [Number, "rows"],
    'required': [Boolean, "required"],
    'readonly': [Boolean, "readonly"],
    'disabled': [Boolean, "disabled"],
    'autoFocus': [Boolean, "auto-focus"],
    'keyboard': [String, "keyboard"],
    'enterkeyhint': [String, "enterkeyhint"],
    'spellcheck': [Boolean, "spellcheck"],
    'autoCapitalize': [String, "auto-capitalize"],
    'wrap': [String, "wrap"],
    'bordered': [Boolean, "bordered"],
    'color': [String, "color"],
    'size': [String, "size"],
    'helperText': [String, "helper-text"],
    'errorText': [String, "error-text"],
    'counter': [Boolean, "counter"],
    'debounce': [Number, "debounce"],
    'onPopChange': [Function],
    'onPopInput': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopToggle = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopToggle, JSX.PopToggle["checked"]>('pop-toggle', definePopToggle, [
  'name',
  'value',
  'required',
  'readonly',
  'checked',
  'indeterminate',
  'disabled',
  'color',
  'size',
  'popChange',
  'popFocus',
  'popBlur'
],
'checked', 'pop-change') : defineStencilSSRComponent({
  tagName: 'pop-toggle',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'name': [String, "name"],
    'value': [String, "value"],
    'required': [Boolean, "required"],
    'readonly': [Boolean, "readonly"],
    'checked': [Boolean, "checked"],
    'indeterminate': [Boolean, "indeterminate"],
    'disabled': [Boolean, "disabled"],
    'color': [String, "color"],
    'size': [String, "size"],
    'onPopChange': [Function],
    'onPopFocus': [Function],
    'onPopBlur': [Function]
  }
});


export const PopTooltip = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.PopTooltip>('pop-tooltip', definePopTooltip, [
  'value',
  'color',
  'position',
  'open'
]) : defineStencilSSRComponent({
  tagName: 'pop-tooltip',
  hydrateModule: import('@poppy-ui/core/hydrate'),
  props: {
    'value': [String, "value"],
    'color': [String, "color"],
    'position': [String, "position"],
    'open': [Boolean, "open"]
  }
});

