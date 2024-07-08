import { sen, syne } from '@/styles/Fonts'
import { AppProps } from 'next/app'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props: AppProps) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
