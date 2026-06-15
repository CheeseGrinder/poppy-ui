import { COMPONENT_SIZE } from '@/config/size.context'
import { inject } from 'vue'

export function useSizeConfig() {
  return inject(COMPONENT_SIZE, 'md')
}
