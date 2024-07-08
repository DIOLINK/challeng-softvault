import { Layout, Section, Typography } from '@/components'
import { DATA } from '@/data'
import { Meta, StoryObj } from '@storybook/react'
import { InsideBoxImg } from '../components/BoxImage/BoxImage.styled'

const meta: Meta<typeof InsideBoxImg> = {
  title: 'Container/InsideBoxImg',
  component: InsideBoxImg,
  tags: ['box', 'image', 'inside'],
  decorators: [
    (Story) => (
      <Layout>
        <Section>
          <Story />
        </Section>
      </Layout>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof InsideBoxImg>

const { inside_box: inside_box_left } = DATA[0]
export const InsideBoxLeft: Story = {
  name: 'Box Image left',
  args: {
    customTranslate: inside_box_left.translate,
    height: inside_box_left.size.height,
    width: inside_box_left.size.width,
  },
  render: (args) => (
    <InsideBoxImg {...args}>
      <Typography
        id={inside_box_left.title.id}
        label={inside_box_left.title.label}
        customWidth={inside_box_left.title?.size.width}
        isTitle
      />
      <Typography
        id={inside_box_left.content.id}
        label={inside_box_left.content.label}
        customWidth={inside_box_left.content.size.width}
        customOpacity={inside_box_left.content.opacity}
      />
    </InsideBoxImg>
  ),
}
const { inside_box: inside_box_center } = DATA[1]
export const InsideBoxCenter: Story = {
  name: 'Box Image Center',
  args: {
    customTranslate: inside_box_center.translate,
    height: inside_box_center.size.height,
    width: inside_box_center.size.width,
  },
  render: (args) => (
    <InsideBoxImg {...args}>
      <Typography
        id={inside_box_center.title.id}
        label={inside_box_center.title.label}
        customWidth={inside_box_center.title?.size.width}
        isTitle
      />
      <Typography
        id={inside_box_center.content.id}
        label={inside_box_center.content.label}
        customWidth={inside_box_center.content.size.width}
        customOpacity={inside_box_center.content.opacity}
      />
    </InsideBoxImg>
  ),
}
