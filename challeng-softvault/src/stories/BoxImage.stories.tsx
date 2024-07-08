import { BoxImage, Layout, Section } from '@/components'
import { DATA } from '@/data'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BoxImage> = {
  title: 'Container/BoxImage',
  component: BoxImage,
  tags: ['box', 'image'],
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
type Story = StoryObj<typeof BoxImage>

const { box_image: box_image_left } = DATA[0]
export const BoxLeft: Story = {
  name: 'Box Image left',
  args: {
    altImg: box_image_left.alt,
    customTranslate: box_image_left.translate,
    height: box_image_left.size.height,
    icon: box_image_left.icon.src,
    customStylePositionIcon: {
      top: box_image_left.icon.top,
      left: box_image_left.icon.left,
    },
    src: box_image_left.images,
    width: box_image_left.size.width,
  },
}
const { box_image: box_image_center } = DATA[1]
export const BoxCenter: Story = {
  name: 'Box Image Center',
  args: {
    altImg: box_image_center.alt,
    customTranslate: box_image_center.translate,
    height: box_image_center.size.height,
    icon: box_image_center.icon.src,
    customStylePositionIcon: {
      top: box_image_center.icon.top,
      left: box_image_center.icon.left,
    },
    src: box_image_center.images,
    width: box_image_center.size.width,
  },
}
const { box_image: box_image_right } = DATA[2]
export const BoxRight: Story = {
  name: 'Box Image Right',
  args: {
    altImg: box_image_right.alt,
    customTranslate: box_image_right.translate,
    height: box_image_right.size.height,
    icon: box_image_right.icon.src,
    customStylePositionIcon: {
      top: box_image_right.icon.top,
      left: box_image_right.icon.left,
    },
    src: box_image_right.images,
    width: box_image_right.size.width,
  },
}
