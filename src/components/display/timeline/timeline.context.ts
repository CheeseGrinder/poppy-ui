import { createComponentConfigKey } from '@/config/symbol'
import type { InjectionKey, Ref } from 'vue'
import type { TimelineItemColor } from './timeline-item.types'

export const TIMELINE_CONFIG = createComponentConfigKey('timeline')

export type TimelineItemState = {
  checked: boolean
  color: TimelineItemColor | undefined
}

export type TimelineContext = {
  registerItem: (id: symbol, state: Ref<TimelineItemState>) => void
  unregisterItem: (id: symbol) => void
  items: Ref<symbol[]>
  getItemState: (id: symbol) => TimelineItemState | undefined
}

export const TIMELINE_CONTEXT_KEY = Symbol('timeline-context') as InjectionKey<TimelineContext>
