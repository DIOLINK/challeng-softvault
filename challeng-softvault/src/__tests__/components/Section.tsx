import { Section } from '@/components'
import { render } from '@testing-library/react'
it('should render children correctly', () => {
  const { getByText } = render(
    <Section>
      <div>Test Child</div>
    </Section>,
  )
  expect(getByText('Test Child')).toBeInTheDocument()
})
