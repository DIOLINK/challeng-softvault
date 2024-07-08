import { BoxImage } from '@/components'
import { DATA } from '@/data'
import { render } from '@testing-library/react'
const { box_image } = DATA[2]
it('should render correctly with given width and height', () => {
  const { getByAltText } = render(
    <BoxImage
      width={100}
      height={100}
      src={box_image.images}
      altImg="test image"
    />,
  )
  const image0 = getByAltText('test image0')
  const image1 = getByAltText('test image1')
  expect(image0).toBeInTheDocument()
  expect(image0).toHaveAttribute('width', '100')
  expect(image0).toHaveAttribute('height', '100')
  expect(image1).toBeInTheDocument()
  expect(image1).toHaveAttribute('width', '100')
  expect(image1).toHaveAttribute('height', '100')
})

it('should render a images', () => {
  const { getByAltText } = render(
    <BoxImage
      width={box_image.size.width}
      height={box_image.size.height}
      icon={box_image.icon}
      src={box_image.images}
      altImg={box_image.alt}
    />,
  )
  const image0 = getByAltText(`${box_image.alt}0`)
  const image1 = getByAltText(`${box_image.alt}1`)
  const image2 = getByAltText(`icon`)
  expect(image0).toBeInTheDocument()
  expect(image1).toBeInTheDocument()
  expect(image2).toBeInTheDocument()
})
