import { DATA } from '@/data'
import Home from '@/pages'
import { render, screen } from '@testing-library/react'

it('should render Box Image Footer component correctly', () => {
  render(<Home />)
  expect(
    screen.getByText(
      'Below are some of the key technologies we use in our projects:',
    ),
  ).toBeInTheDocument()
})
it('should render Box Image Left component correctly', () => {
  render(<Home />)
  expect(screen.getByText(DATA[0].inside_box.title.label)).toBeInTheDocument()
  expect(screen.getByText(DATA[0].inside_box.content.label)).toBeInTheDocument()
})
it('should render Box Image Center component correctly', () => {
  render(<Home />)
  expect(screen.getByText(DATA[1].inside_box.title.label)).toBeInTheDocument()
  expect(screen.findAllByText(DATA[1].inside_box.content.label))
})
it('should render Box Image Right component correctly', () => {
  render(<Home />)
  expect(screen.getByText(DATA[2].inside_box.title.label)).toBeInTheDocument()
  expect(screen.findAllByText(DATA[2].inside_box.content.label))
})
