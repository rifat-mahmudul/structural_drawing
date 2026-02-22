import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Structural Drawing Foundation Class — 100% FREE',
  description: 'শুরু করো Professional Structural Career-এর সঠিক পথে। Foundation for Structural Drawing & Detailing — এখন সম্পূর্ণ বিনামূল্যে।',
  keywords: 'structural drawing, civil engineering Bangladesh, RCC detailing, free class',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={`${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Hind Siliguri', var(--font-poppins), sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
