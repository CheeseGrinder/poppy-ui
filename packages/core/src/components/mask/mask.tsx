import { componentConfig } from '#config';
import { Component, Host, Prop, h } from '@stencil/core';

type MaskParallelogram = 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4';
type MaskStar = 'star' | 'star-2';
type MaskTriangle = 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4';
type MaskComplexe = 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon';
type MaskClassic = 'squircle' | 'square' | 'circle' | 'heart' | 'diamond';

export type MaskType = MaskClassic | MaskComplexe | MaskTriangle | MaskStar | MaskParallelogram;

/**
 * Mask crops the content of the element to common shapes.
 *
 * @slot - content that get croped
 */
@Component({
  tag: 'pop-mask',
  styleUrl: 'mask.scss',
  shadow: true,
})
export class Mask {
  /**
   * Mask that should be applied
   *
   * @config @default 'squircle
   */
  @Prop({ reflect: true, mutable: true }) type: MaskType;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-mask', {
      type: 'squircle',
    });
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
