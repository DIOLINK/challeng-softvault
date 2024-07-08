import { COLORS } from '@/styles/Colors'
import { ParagraphProps } from '@/types'
import styled from 'styled-components'

export const ParagraphElement = styled.p<ParagraphProps>(
  ({
    customColor,
    customOpacity,
    isTitle = false,
    customWidth,
  }: ParagraphProps) => ({
    fontFamily: `var(${isTitle ? '--font-syne' : '--font-sen'})`,
    color: customColor ?? COLORS.white,
    opacity: customOpacity ?? 1,
    fontWeight: isTitle ? 700 : 400,
    fontSize: isTitle ? '20px' : '16px',
    lineHeight: isTitle ? '24px' : '19.25px',
    textAlign: 'center',
    width: customWidth ?? 'auto',
    margin: 0,
    cursor: 'default',
  }),
)
