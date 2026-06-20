import type { AvatarPresence, AvatarShape, AvatarSize } from './avatar.types'
export interface AvatarConfigurableProps {
  /**
   * Size of the avatar. Mapped to Tailwind `w-*` utilities.
   * - `xs` → `w-8`
   * - `sm` → `w-16`
   * - `md` → `w-20`
   * - `lg` → `w-24`
   * - `xl` → `w-32`
   */
  size?: AvatarSize
  /**
   * Shape of the avatar image container.
   * - `'rounded'`: Slightly rounded corners.
   * - `'rounded-xl'`: Rounded with larger radius.
   * - `'rounded-full'`: Fully circular.
   * - `'rounded-none'`: No rounding (square).
   *
   * @default 'rounded-full'
   */
  shape?: AvatarShape
  /**
   * Shows a presence indicator dot.
   * - `'online'`: Green dot.
   * - `'offline'`: Gray dot.
   */
  presence?: AvatarPresence
}
export interface AvatarProps extends AvatarConfigurableProps {
  /**
   * When `true`, renders as an `avatar-group` container
   * to stack multiple avatars with overlap.
   *
   * @default false
   */
  group?: boolean
  /**
   * When `true`, adds the `avatar-placeholder` modifier.
   * Use with text initials instead of an image.
   *
   * @default false
   */
  placeholder?: boolean
}
