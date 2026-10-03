import type {Metadata, Viewport} from 'next'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#000000',
}

export const metadata: Metadata = {
    title: 'MIGUEL COLOMBO // OPERATOR FILE // SOFTWARE ENGINEER',
    description: 'Backend Developer creating robust APIs and scalable systems with modern technologies and cloud infrastructure.',
    openGraph: {
        title: 'Miguel Colombo | Software Engineer',
        description: 'Backend Developer creating robust APIs and scalable systems with modern technologies and cloud infrastructure.',
        type: 'website',
        images: [
            {
                url: '/banner.png',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Miguel Colombo | Backend Developer Portfolio',
        description: 'Backend Developer creating robust APIs and scalable systems with modern technologies and cloud infrastructure.',
        images: ['/banner.png'],
    },
    authors: [
        { name: 'Miguel Vieira Colombo', url: 'https://www.linkedin.com/in/miguelvcolombo/' },
    ],
    creator: 'Miguel Vieira Colombo',
    category: 'Portfolio',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <head>
        <title>MIGUEL COLOMBO // OPERATOR FILE // SOFTWARE ENGINEER</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=JetBrains+Mono:wght@400;500;700&family=Archivo+Black&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
