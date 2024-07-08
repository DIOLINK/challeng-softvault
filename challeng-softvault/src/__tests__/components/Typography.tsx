import { Layout, Typography } from '@/components'
import { DATA } from '@/data'
import { COLORS } from '@/styles/Colors'
import { render } from '@testing-library/react'
it('should render a paragraph element with the correct label text', () => {
  const { getByText } = render(<Typography label="Test Label" id="test-id" />)
  const paragraphElement = getByText('Test Label')
  expect(paragraphElement).toBeInTheDocument()
  expect(paragraphElement).toHaveAttribute('id', 'test-id')
})

it('should render a paragraph title element with the correct attribute', () => {
  const { inside_box } = DATA[0]
  const { container } = render(
    <Layout>
      <Typography
        id={inside_box.title.id}
        label={inside_box.title.label}
        customWidth={inside_box.title?.size.width}
        customOpacity={inside_box.content.opacity}
        isTitle={true}
      />
    </Layout>,
  )
  const paragraphElement = container.querySelector('p')
  expect(paragraphElement).toHaveAttribute('id', inside_box.title.id)
  expect(paragraphElement).toHaveAttribute(
    'customWidth',
    inside_box.title?.size.width,
  )
  expect(paragraphElement).toHaveStyle(`
  font-family: var(--font-syne);
  color: #FFFFFF;
  opacity: 1;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 50%;
  margin: 0;
  cursor: default;
  `)
})
it('should render a paragraph title element with the correct styles', () => {
  const { inside_box } = DATA[0]
  const { container } = render(
    <Layout>
      <Typography
        id={inside_box.title.id}
        label={inside_box.title.label}
        customWidth={inside_box.title?.size.width}
        customOpacity={inside_box.content.opacity}
        isTitle
      />
    </Layout>,
  )
  const paragraphElement = container.querySelector('p')

  expect(paragraphElement).toHaveStyle(`
  font-family: var(--font-syne);
  color: #FFFFFF;
  opacity: 1;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 50%;
  margin: 0;
  cursor: default;
  `)
})
it('should render a paragraph content element with the correct styles', () => {
  const { inside_box } = DATA[0]
  const { container } = render(
    <Layout>
      <Typography
        id={inside_box.content.id}
        label={inside_box.content.label}
        customWidth={inside_box.content?.size.width}
        customOpacity={inside_box.content.opacity}
      />
    </Layout>,
  )
  const paragraphElement = container.querySelector('p')
  expect(paragraphElement).toHaveStyle(`
  font-family: var(--font-sen);
  color: #FFFFFF;
  opacity: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.25px;
  text-align: center;
  width: 70%;
  margin: 0;
  cursor: default;
  `)
})
it('should render a paragraph content element opacity with the correct styles', () => {
  const { inside_box } = DATA[1]
  const { container } = render(
    <Layout>
      <Typography
        id={inside_box.content.id}
        label={inside_box.content.label}
        customWidth={inside_box.content?.size.width}
        customOpacity={inside_box.content.opacity}
      />
    </Layout>,
  )
  const paragraphElement = container.querySelector('p')
  expect(paragraphElement).toHaveStyle(`
  font-family: var(--font-sen);
  color: #FFFFFF;
  opacity: 0.5;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.25px;
  text-align: center;
  width: 93%;
  margin: 0;
  cursor: default;
  `)
})
it('should render a paragraph title element with the correct styles', () => {
  const { container } = render(
    <Layout>
      <Typography
        id="footer"
        label="Below are some of the key technologies we use in our projects:"
        isTitle
        customColor={COLORS.medium_aquamarine}
      />
    </Layout>,
  )
  const paragraphElement = container.querySelector('p')
  expect(paragraphElement).toHaveStyle(`
  font-family: var(--font-syne);
  color: #00F4AC;
  opacity: 1;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: auto;
  margin: 0;
  cursor: default;
  `)
})
