import { BoxImageProps } from '@/types'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { RootBoxImg } from './BoxImage.styled'
const SIZE_ICON = 52
export function BoxImage({
  children,
  width,
  height,
  src,
  customPadding,
  icon,
  altImg = 'box',
  customTranslate,
  customStylePositionIcon = {
    top: '-28px',
    left: '179px',
  },
}: PropsWithChildren<BoxImageProps>) {
  return (
    <RootBoxImg
      width={width}
      height={height}
      customPadding={customPadding}
      customTranslate={customTranslate}
    >
      {icon && (
        <Image
          src={icon}
          alt={'icon'}
          width={SIZE_ICON}
          height={SIZE_ICON}
          style={{ position: 'absolute', ...customStylePositionIcon }}
        />
      )}
      {src.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={altImg + index}
          width={width as number}
          height={height as number}
          style={{ position: 'absolute', top: 0 }}
        />
      ))}
      {children}
    </RootBoxImg>
  )
}
