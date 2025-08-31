import type { Metadata } from 'next'
import { Jost, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Indra's Ironing - Professional Ironing Services",
  description: "Professional ironing services with free collection and delivery. 24-hour turnaround. Serving Bracknell and surrounding areas.",
  keywords: 'ironing, laundry, dry cleaning, Bracknell, collection, delivery',
  authors: [{ name: "Indra's Ironing" }],
  openGraph: {
    title: "Indra's Ironing - Professional Ironing Services",
    description: "Professional ironing services with free collection and delivery. 24-hour turnaround.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} ${ibmPlexSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-ibm-plex antialiased">
        {children}
      </body>
    </html>
  )
}
