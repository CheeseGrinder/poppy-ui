import type { Booleanish } from '@/types/utils.type'
import type { ModalPlacement } from './modal.types'

export interface ModalConfigurableProps {
  /**
   * Placement of the modal box on screen.
   * - `'top'`: Anchored to the top of the viewport.
   * - `'middle'`: Centered vertically (default browser behaviour).
   * - `'bottom'`: Anchored to the bottom of the viewport.
   * - `'start'`: Anchored to the inline-start edge (left in LTR).
   * - `'end'`: Anchored to the inline-end edge (right in LTR).
   *
   * @default undefined
   */
  placement?: ModalPlacement

  /**
   * When `true`, clicking the backdrop (outside the modal box) closes the modal.
   *
   * @default false
   */
  closeOnBackdrop?: Booleanish

  /**
   * When `true`, the modal content is rendered even while the modal is closed.
   * Useful to preserve internal component state between open/close cycles.
   * When `false`, content is only rendered after the modal has been opened at least once.
   *
   * @default false
   */
  loadContentWhenClose?: Booleanish
}

export interface ModalProps extends ModalConfigurableProps {
  /**
   * Controls the open state of the modal.
   * Use `v-model` to bind reactively.
   *
   * @default false
   */
  modelValue?: boolean
}