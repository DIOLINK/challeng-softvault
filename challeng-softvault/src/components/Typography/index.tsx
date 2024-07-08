import { TypographyProps } from '@/types'
import { ParagraphElement } from './Typography.styled'

export function Typography({ label, id, ...paragraphProps }: TypographyProps) {
  return (
    <ParagraphElement id={id} {...paragraphProps}>
      {label}
    </ParagraphElement>
  )
}
