import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import { bodyFont, headingFont } from '@/app/styles/fonts'

export const metadata: Metadata = {
  title: 'Matcha Meter',
  description: '[TODO]',
  keywords: ['TODO'],
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
