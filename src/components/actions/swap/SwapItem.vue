<script lang="ts">
import { defineComponent, h, type VNode } from 'vue'

export default defineComponent({
  name: 'SwapItem',
  props: {
    /**
     * DaisyUI swap class injected on the wrapper element.
     * Typically `'swap-on'`, `'swap-off'`, or `'swap-indeterminate'`.
     */
    name: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const formatChildren = (nodes: VNode[]): VNode[] => {
      return nodes.flatMap(node => {
        // Unwrap fragments
        if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
          return formatChildren(node.children as VNode[])
        }

        // HTML elements (div, span, etc.) — inject class directly
        if (typeof node.type === 'string') {
          return h(node, {
            class: [props.name, node.props?.class].filter(Boolean),
          })
        }

        // Everything else (text nodes, Vue components, SVG components like Lucide)
        // wrap in a div so the class is always applied reliably
        return h('div', { class: props.name }, [node])
      })
    }

    return () => {
      const rawChildren = slots.default?.() || []
      return formatChildren(rawChildren)
    }
  },
})
</script>