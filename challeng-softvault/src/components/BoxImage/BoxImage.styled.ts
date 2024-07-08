import { RootBoxImageProps } from '@/types'
import styled from 'styled-components'

export const RootBoxImg = styled.div<RootBoxImageProps>(
  ({ width, height, customPadding, customTranslate }: RootBoxImageProps) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    padding: customPadding,
    translate: customTranslate,
  }),
)

export const InsideBoxImg = styled.div<RootBoxImageProps>(
  ({ width, height, customTranslate }: RootBoxImageProps) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    height,
    translate: customTranslate,
  }),
)
