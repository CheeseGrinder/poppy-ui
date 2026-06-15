import type { ComponentSize } from '@/types/size.type'
import type { InjectionKey } from 'vue'

export const COMPONENT_SIZE = Symbol('pop-component--size') as InjectionKey<ComponentSize>
