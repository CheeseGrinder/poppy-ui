<script lang="ts">
import { defineComponent, h, type VNode } from 'vue'

export default defineComponent({
  name: 'ClassWrapper',
  props: {
    class: {
      type: String,
      default: undefined,
    },
    as: {
      type: String,
      defauilt: undefined,
    },
  },
  setup(props, { slots }) {
    const formatChildren = (nodes: VNode[]): VNode[] => {
      return nodes.flatMap(node => {
        // Unwrap fragments
        if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
          return formatChildren(node.children as VNode[])
        }

        // Render for plain text and function component
        if (typeof node.type === 'function' || node.type === Symbol.for('v-txt')) {
          return h(props.as || 'div', { class: props.class }, [node])
        }

        // Render everythings else
        return h(node, {
          class: [props.class, node.props?.class].filter(Boolean),
        })
      })
    }

    return () => {
      const rawChildren = slots.default?.() || []
      return formatChildren(rawChildren)
    }
  },
})
</script>