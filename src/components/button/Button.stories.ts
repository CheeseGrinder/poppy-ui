import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info']
    },
    style: {
      control: 'select',
       options: ['outline', 'dash', 'soft', 'ghost', 'link']
      },
    behavior: {
       control: 'select',
       options: ['active', 'disabled']
      },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    modifier: {
      control: 'select',
      options: ['wide', 'block', 'square', 'circle']
    },
  },
  parameters: {
    slots: {
      default: {
        type: 'string',
        description: 'The content of the button',
        defaultValue: 'Button',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args, options) => {
  console.log({
    args,
    options,
  })
  return {
    props: Object.keys(options.argTypes),
    components: { Button },
    template:
      `
      <Button @onClick="onClick" v-bind="$props">
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
      </Button>
    `,
  }
}

export const Demo = Template.bind({}) as Story;
Demo.args = {
  default: `Button`,
}
