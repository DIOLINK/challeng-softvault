import { Sen, Syne } from 'next/font/google'

const sen = Sen({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sen',
})
const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export { sen, syne }
