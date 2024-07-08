import { Layout } from '@/components'
import { Typography } from '@/components/Typography'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Typography> = {
  title: 'Founts/Typography',
  component: Typography,
  tags: ['typography'],
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof Typography>

export const Title: Story = {
  name: 'Title font-syne',
  args: {
    customColor: 'red',
    label: 'Understanding needs',
    isTitle: true,
  },
}

export const Description: Story = {
  name: 'Description font-sen',
  args: {
    customColor: 'red',
    label:
      'Eiusmod sit aliquip consequat fugiat velit reprehenderit. Elit tempor officia reprehenderit non irure nostrud. Amet irure aute labore adipisicing non excepteur voluptate exercitation. Magna occaecat dolore cillum id qui aute. Consequat eu laboris Lorem elit enim et magna laborum consequat cillum reprehenderit duis. Sunt voluptate irure veniam voluptate pariatur elit. Laborum anim sint duis nostrud pariatur Lorem cupidatat duis.',
    isTitle: false,
  },
}
