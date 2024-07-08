export interface ParagraphProps {
  customColor?: string
  customOpacity?: number
  isTitle?: boolean
  customWidth?: string
  id?: string
}

export interface TypographyProps extends ParagraphProps {
  label: string
}

export interface BoxImageProps {
  width: number | string
  height: number | string
  src: string[]
  altImg: string
  customPadding?: string
  icon?: string
  customTranslate?: string
  customStylePositionIcon?: {
    top: string
    left: string
  }
}

export interface RootBoxImageProps
  extends Omit<BoxImageProps, 'src' | 'altImg' | 'icon'> {}

export enum FlexDirection {
  row = 'row',
  column = 'column',
  'row-reverse' = 'row-reverse',
  'column-reverse' = 'column-reverse',
}
export interface SectionProps {
  id?: string
  customDirection?: FlexDirection
}
