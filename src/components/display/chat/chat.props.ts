import type { ChatColor, ChatSide } from './chat.types'

export interface ChatConfigurableProps {
  /**
   * Color theme applied to the chat bubble.
   */
  color?: ChatColor
}

export interface ChatProps extends ChatConfigurableProps {
  /**
   * Side of the chat bubble.
   * - `'start'`: Left side (incoming message).
   * - `'end'`: Right side (outgoing message).
   *
   * @default 'start'
   */
  side?: ChatSide
}
