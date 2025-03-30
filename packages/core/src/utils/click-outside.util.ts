// Code from https://github.com/jarrvis/stencil-click-outside
// Since the maintenainer doesnt accept PR or push on this repo
// I copy paste the code in case we need to make an evolution

import type { ComponentInterface } from '@stencil/core';

interface ClickOutsideOptions {
  triggerEvents?: string | string[];
  exclude?: string;
}

const ClickOutsideOptionsDefaults: ClickOutsideOptions = {
  triggerEvents: 'click',
  exclude: '',
};

export class ClickOutsideController {
  private component: ComponentInterface;
  private element: HTMLElement;
  private callback: VoidFunction;
  private options: ClickOutsideOptions;

  static new() {
    return new ClickOutsideController();
  }

  register(component: ComponentInterface, element: HTMLElement, callback: VoidFunction, options?: ClickOutsideOptions) {
    this.component = component;
    this.element = element;
    this.callback = callback;
    this.options = options ?? ClickOutsideOptionsDefaults;

    const excludedNodes = getExcludedNodes(this.options);
    for (const triggerEvent of getTriggerEvents(this.options)) {
      window.addEventListener(
        triggerEvent,
        (e: Event) => {
          this.initClickOutside(e, excludedNodes);
        },
        false,
      );
    }
  }

  remove() {
    for (const triggerEvent of getTriggerEvents(this.options)) {
      window.removeEventListener(
        triggerEvent,
        (e: Event) => {
          this.initClickOutside(e);
        },
        false,
      );
    }
  }

  private initClickOutside(event: Event, excludedNodes?: HTMLElement[]) {
    const target = event.target as HTMLElement;
    if (!this.element.contains(target) && !isExcluded(target, excludedNodes)) {
      this.callback.call(this.component);
    }
  }
}

function getTriggerEvents(opt: ClickOutsideOptions): string[] {
  if (!opt.triggerEvents) {
    return ['click'];
  }
  if (Array.isArray(opt.triggerEvents)) {
    return opt.triggerEvents;
  }
  return opt.triggerEvents.split(',').map(e => e.trim());
}

function getExcludedNodes(opt: ClickOutsideOptions): HTMLElement[] {
  if (opt.exclude) {
    try {
      return Array.from(document.querySelectorAll(opt.exclude));
    } catch (err) {
      console.warn(
        `@ClickOutside: Exclude: '${opt.exclude}' will not be evaluated. Check your exclude selector syntax.`,
        err,
      );
    }
  }
  return;
}

function isExcluded(target: HTMLElement, excudedNodes?: HTMLElement[]): boolean {
  if (target && excudedNodes) {
    for (const excludedNode of excudedNodes) {
      if (excludedNode.contains(target)) {
        return true;
      }
    }
  }

  return false;
}
