<script lang="ts">
import { defineComponent, h, type VNode } from 'vue'

export default defineComponent({
  name: 'JoinItem',
  setup(_, { slots }) {
    // Helper function to safely apply the class to actual DOM elements
    const formatChildren = (nodes: VNode[]): VNode[] => {
      return nodes.flatMap(node => {
        // If the node is a Fragment (common with slots), unwrap it and process its children
        if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
          return formatChildren(node.children as VNode[])
        }

        // If it's a valid HTML element or a component, inject the class
        if (typeof node.type === 'object' || typeof node.type === 'string') {
          return h(node, {
            class: ['join-item', node.props?.class].filter(Boolean),
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