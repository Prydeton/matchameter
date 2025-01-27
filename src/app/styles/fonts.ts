import { Lato, Montserrat } from 'next/font/google'

export const headingFont = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-heading',
})

export const bodyFont = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-body',
})
