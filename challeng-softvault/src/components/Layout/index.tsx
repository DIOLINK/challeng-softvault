import { sen, syne } from '@/styles/Fonts'
import { PropsWithChildren } from 'react'
import { Container } from './styles'
interface LayoutProps {}
export function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <Container className={`${sen.variable} ${syne.variable}`}>
      {children}
    </Container>
  )
}
