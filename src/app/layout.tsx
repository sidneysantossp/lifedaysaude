import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://saude-bem-estar.com'),
  title: {
    default: 'Saúde & Bem-Estar - Dicas para uma Vida Mais Saudável',
    template: '%s | Saúde & Bem-Estar'
  },
  description: 'Descubra as melhores dicas de saúde, bem-estar, nutrição e qualidade de vida. Guias completos sobre energia, imunidade, longevidade, menopausa, sono e muito mais.',
  keywords: ['saúde', 'bem-estar', 'energia', 'imunidade', 'longevidade', 'menopausa', 'sono', 'vitaminas', 'nutrição', 'qualidade de vida'],
  authors: [{ name: 'Equipe Saúde & Bem-Estar', url: 'https://saude-bem-estar.com' }],
  creator: 'Saúde & Bem-Estar',
  publisher: 'Saúde & Bem-Estar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://saude-bem-estar.com',
    title: 'Saúde & Bem-Estar - Dicas para uma Vida Mais Saudável',
    description: 'Descubra as melhores dicas de saúde, bem-estar, nutrição e qualidade de vida. Guias completos para transformar sua vida.',
    siteName: 'Saúde & Bem-Estar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saúde & Bem-Estar - Vida Mais Saudável',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saúde & Bem-Estar - Dicas para uma Vida Mais Saudável',
    description: 'Descubra as melhores dicas de saúde, bem-estar, nutrição e qualidade de vida.',
    siteId: '123456789',
    creator: '@saudebemestar',
    creatorId: '123456789',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  alternates: {
    canonical: 'https://saude-bem-estar.com',
  },
  other: {
    'theme-color': '#10b981',
    'msapplication-TileColor': '#10b981',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Saúde & Bem-Estar',
    'application-name': 'Saúde & Bem-Estar',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Saúde & Bem-Estar",
              "description": "Descubra as melhores dicas de saúde, bem-estar, nutrição e qualidade de vida. Guias completos para transformar sua vida.",
              "url": "https://saude-bem-estar.com",
              "author": {
                "@type": "Organization",
                "name": "Saúde & Bem-Estar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Saúde & Bem-Estar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://saude-bem-estar.com/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://saude-bem-estar.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "Article",
                    "name": "Energia",
                    "url": "https://saude-bem-estar.com/categoria/energia"
                  },
                  {
                    "@type": "Article", 
                    "name": "Imunidade",
                    "url": "https://saude-bem-estar.com/categoria/imunidade"
                  },
                  {
                    "@type": "Article",
                    "name": "Longevidade", 
                    "url": "https://saude-bem-estar.com/categoria/longevidade"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}