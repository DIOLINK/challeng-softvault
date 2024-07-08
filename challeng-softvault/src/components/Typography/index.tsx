import { TypographyProps } from '@/types'
import { ParagraphElement } from './Typography.styled'

export function Typography({ label, id, ...paragraphProps }: TypographyProps) {
  return (
    <ParagraphElement id={id} title={label} {...paragraphProps}>
      {label}
    </ParagraphElement>
  )
}
