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
    icon: '/icon.jpg', // Tells the website to look for your logo named icon.jpg inside the public folder
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFFFFF', // Ensures mobile status bars load with a clean light layout background
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
  }
