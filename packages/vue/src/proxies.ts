/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

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


export const PopAccordion = /*@__PURE__*/ defineContainer<JSX.PopAccordion>('pop-accordion', definePopAccordion, [
  'readonly',
  'disabled',
  'name',
  'open'
]);


export const PopAccordionGroup = /*@__PURE__*/ defineContainer<JSX.PopAccordionGroup, JSX.PopAccordionGroup["active"]>('pop-accordion-group', definePopAccordionGroup, [
  'readonly',
  'disabled',
  'multiple',
  'active',
  'popChange',
  'popActiveChange'
],
'active', 'pop-change');


export const PopAvatar = /*@__PURE__*/ defineContainer<JSX.PopAvatar>('pop-avatar', definePopAvatar, [
  'placeholder'
]);


export const PopBadge = /*@__PURE__*/ defineContainer<JSX.PopBadge>('pop-badge', definePopBadge, [
  'color',
  'size',
  'outlined',
  'as'
]);


export const PopButton = /*@__PURE__*/ defineContainer<JSX.PopButton>('pop-button', definePopButton, [
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
]);


export const PopCard = /*@__PURE__*/ defineContainer<JSX.PopCard>('pop-card', definePopCard, [
  'compact'
]);


export const PopCardActions = /*@__PURE__*/ defineContainer<JSX.PopCardActions>('pop-card-actions', definePopCardActions);


export const PopCardBody = /*@__PURE__*/ defineContainer<JSX.PopCardBody>('pop-card-body', definePopCardBody);


export const PopCardTitle = /*@__PURE__*/ defineContainer<JSX.PopCardTitle>('pop-card-title', definePopCardTitle);


export const PopCheckbox = /*@__PURE__*/ defineContainer<JSX.PopCheckbox, JSX.PopCheckbox["checked"]>('pop-checkbox', definePopCheckbox, [
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
'checked', 'pop-change');


export const PopDivider = /*@__PURE__*/ defineContainer<JSX.PopDivider>('pop-divider', definePopDivider, [
  'orientation',
  'placement',
  'color'
]);


export const PopDrawer = /*@__PURE__*/ defineContainer<JSX.PopDrawer>('pop-drawer', definePopDrawer, [
  'trigger',
  'triggerAction',
  'side',
  'open',
  'popDidPresent',
  'popDidDismiss'
]);


export const PopDropdown = /*@__PURE__*/ defineContainer<JSX.PopDropdown>('pop-dropdown', definePopDropdown, [
  'side',
  'align',
  'open',
  'triggerAction',
  'debounce',
  'showBackdrop',
  'present',
  'dismiss'
]);


export const PopImg = /*@__PURE__*/ defineContainer<JSX.PopImg>('pop-img', definePopImg, [
  'src',
  'alt',
  'popWillLoad',
  'popDidLoad',
  'popError'
]);


export const PopIndicator = /*@__PURE__*/ defineContainer<JSX.PopIndicator>('pop-indicator', definePopIndicator, [
  'side',
  'position'
]);


export const PopInput = /*@__PURE__*/ defineContainer<JSX.PopInput, JSX.PopInput["value"]>('pop-input', definePopInput, [
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
'value', 'pop-input');


export const PopInputFile = /*@__PURE__*/ defineContainer<JSX.PopInputFile>('pop-input-file', definePopInputFile, [
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
]);


export const PopItem = /*@__PURE__*/ defineContainer<JSX.PopItem>('pop-item', definePopItem, [
  'disabled'
]);


export const PopJoin = /*@__PURE__*/ defineContainer<JSX.PopJoin>('pop-join', definePopJoin, [
  'orientation'
]);


export const PopKbd = /*@__PURE__*/ defineContainer<JSX.PopKbd>('pop-kbd', definePopKbd, [
  'size'
]);


export const PopList = /*@__PURE__*/ defineContainer<JSX.PopList>('pop-list', definePopList, [
  'size',
  'orientation'
]);


export const PopLoading = /*@__PURE__*/ defineContainer<JSX.PopLoading>('pop-loading', definePopLoading, [
  'type',
  'size'
]);


export const PopMask = /*@__PURE__*/ defineContainer<JSX.PopMask>('pop-mask', definePopMask, [
  'type'
]);


export const PopModal = /*@__PURE__*/ defineContainer<JSX.PopModal>('pop-modal', definePopModal, [
  'trigger',
  'component',
  'componentProps',
  'showBackdrop',
  'backdropDismiss',
  'open',
  'present',
  'dismiss'
]);


export const PopNavbar = /*@__PURE__*/ defineContainer<JSX.PopNavbar>('pop-navbar', definePopNavbar);


export const PopPopover = /*@__PURE__*/ defineContainer<JSX.PopPopover>('pop-popover', definePopPopover, [
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
]);


export const PopProgress = /*@__PURE__*/ defineContainer<JSX.PopProgress>('pop-progress', definePopProgress, [
  'value',
  'max',
  'color'
]);


export const PopRadio = /*@__PURE__*/ defineContainer<JSX.PopRadio, JSX.PopRadio["value"]>('pop-radio', definePopRadio, [
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
'value', 'pop-change');


export const PopRadioGroup = /*@__PURE__*/ defineContainer<JSX.PopRadioGroup, JSX.PopRadioGroup["value"]>('pop-radio-group', definePopRadioGroup, [
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
'value', 'pop-change');


export const PopRange = /*@__PURE__*/ defineContainer<JSX.PopRange, JSX.PopRange["value"]>('pop-range', definePopRange, [
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
'value', 'pop-change');


export const PopSelect = /*@__PURE__*/ defineContainer<JSX.PopSelect, JSX.PopSelect["value"]>('pop-select', definePopSelect, [
  'name',
  'placeholder',
  'value',
  'multiple',
  'min',
  'max',
  'required',
  'readonly',
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
  'present',
  'dismiss',
  'popChange',
  'popFocus',
  'popBlur'
],
'value', 'pop-change');


export const PopSelectOption = /*@__PURE__*/ defineContainer<JSX.PopSelectOption>('pop-select-option', definePopSelectOption, [
  'value',
  'disabled',
  'color',
  'size'
]);


export const PopSwap = /*@__PURE__*/ defineContainer<JSX.PopSwap, JSX.PopSwap["active"]>('pop-swap', definePopSwap, [
  'type',
  'active',
  'popSwap'
],
'active', 'pop-change');


export const PopTextarea = /*@__PURE__*/ defineContainer<JSX.PopTextarea, JSX.PopTextarea["value"]>('pop-textarea', definePopTextarea, [
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
'value', 'pop-input');


export const PopToggle = /*@__PURE__*/ defineContainer<JSX.PopToggle, JSX.PopToggle["checked"]>('pop-toggle', definePopToggle, [
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
'checked', 'pop-change');


export const PopTooltip = /*@__PURE__*/ defineContainer<JSX.PopTooltip>('pop-tooltip', definePopTooltip, [
  'value',
  'color',
  'position',
  'open'
]);

