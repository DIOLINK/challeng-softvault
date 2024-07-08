import { Layout } from '@/components'
import { Main } from '@/components/Layout/styles'
import { render } from '@testing-library/react'
it('should render children correctly', () => {
  const { getByText } = render(
    <Layout>
      <div>Test Child</div>
    </Layout>,
  )
  expect(getByText('Test Child')).toBeInTheDocument()
})
it('should render main style correctly', () => {
  const { getByText } = render(
    <Layout>
      <Main>Test Child</Main>
    </Layout>,
  )

  expect(getByText('Test Child')).toHaveStyle(`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  `)
})
