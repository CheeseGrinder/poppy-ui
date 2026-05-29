<script lang="ts">
import { defineComponent, h, type VNode } from 'vue'

export default defineComponent({
  name: 'CarouselItem',
  setup(_, { slots }) {
    const formatChildren = (nodes: VNode[]): VNode[] => {
      return nodes.flatMap(node => {
        if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
          return formatChildren(node.children as VNode[])
        }

        if (typeof node.type === 'object' || typeof node.type === 'string') {
          return h(node, {
            class: ['carousel-item', 'w-full', node.props?.class].filter(Boolean),
          })
        }

        return node
      })
    }

    return () => {
      const rawChildren = slots.default?.() || []
      return formatChildren(rawChildren)
    }
  },
})
</script>
