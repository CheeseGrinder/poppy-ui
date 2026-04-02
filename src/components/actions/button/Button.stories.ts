import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'
import type { ButtonColor, ButtonShape, ButtonSize, ButtonVariant } from './button.types'

// Configuration de base
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // On mappe les types pour avoir des contrôles propres dans l'interface Storybook
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as ButtonColor[],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'dash', 'soft', 'ghost', 'link'] as ButtonVariant[],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[],
    },
    shape: {
      control: 'select',
      options: ['wide', 'block', 'square', 'circle'] as ButtonShape[],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    default: 'Click Me', // Contenu du slot par défaut
  },
}

export default meta
type Story = StoryObj<typeof Button>

// 1. Story de base
export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
  },
}

// 2. Toutes les couleurs
export const Colors: Story = {
  render: args => ({
    components: { Button },
    setup() {
      const colors: ButtonColor[] = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
      return { colors, args }
    },
    template: `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <Button v-bind="args">
          {{ 'No color' }}
        </Button>
        <Button v-for="color in colors" :key="color" v-bind="args" :color="color">
          {{ color }}
        </Button>
      </div>
    `,
  }),
}

// 3. Toutes les variantes
export const Variants: Story = {
  render: args => ({
    components: { Button },
    setup() {
      const variants: ButtonVariant[] = ['solid', 'outline', 'dash', 'soft', 'ghost', 'link']
      return { variants, args }
    },
    template: `
      <div style="display: flex; gap: 10px; flex-wrap: wrap; padding: 20px; border-radius: 8px;">
        <Button v-for="v in variants" :key="v" v-bind="args" :variant="v" color="primary">
          {{ v }}
        </Button>
      </div>
    `,
  }),
}

// 4. État de chargement
export const Loading: Story = {
  args: {
    loading: true,
    color: 'primary',
    default: 'Wait for it...',
  },
}

// 5. Formes et Tailles
export const ShapesAndSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 10px; align-items: center;">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
        <div style="display: flex; gap: 10px;">
          <Button shape="square">■</Button>
          <Button shape="circle">●</Button>
          <Button shape="wide">Wide Button</Button>
        </div>
      </div>
    `,
  }),
}
