import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prakriti Roots - 100% Natural Handcrafted Ayurvedic Soaps',
  description: 'Pure by nature, made for you. Experience luxury 100% natural handcrafted Ayurvedic soaps. Chemical-free, eco-friendly. Made in small batches with care.',
  keywords: [
    'Ayurvedic soaps',
    'natural soaps',
    'handmade soaps',
    'organic skincare',
    'neem soap',
    'herbal soap',
    'chemical free',
    'sustainable skincare',
    'eco-friendly soaps',
  ],
  authors: [{ name: 'Prakriti Roots' }],
  creator: 'Prakriti Roots',
  publisher: 'Prakriti Roots',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prakritiroots.co',
    siteName: 'Prakriti Roots',
    title: 'Prakriti Roots - 100% Natural Handcrafted Soaps',
    description: 'Luxury Ayurvedic soaps made with nature. Chemical-free, handcrafted, eco-friendly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakriti Roots - Natural Ayurvedic Soaps',
    description: '100% natural, handcrafted, chemical-free soaps rooted in Ayurveda.',
    creator: '@prakritiroots',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F4EC' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
