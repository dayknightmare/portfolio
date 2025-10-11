import './globals.scss';

import { Cursor } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miguel Colombo | Backend Developer Portfolio',
  description: 'Backend Developer creating robust APIs and scalable systems with modern technologies and cloud infrastructure.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#ffffff',
  openGraph: {
    title: 'Miguel Colombo | Backend Developer Portfolio',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
