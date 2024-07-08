import { SectionProps } from '@/types'
import { PropsWithChildren } from 'react'
import { SectionElement } from './Section.styled'

export const Section = ({ children, id }: PropsWithChildren<SectionProps>) => {
  return <SectionElement id={id}>{children}</SectionElement>
}
