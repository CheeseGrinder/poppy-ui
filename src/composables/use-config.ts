import { COMPONENT_SIZE } from '@/symbol'
import { inject } from 'vue'

export function useSizeConfig() {
  return inject(COMPONENT_SIZE, 'md')
}
