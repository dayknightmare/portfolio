'use client'

import { Global, useTheme } from '@emotion/react'
import dynamic from 'next/dynamic'
import EmotionCacheProvider from '@/providers/emoticon'
import { getGlobalStyles } from './globals'

function ThemeFallback() {
  return null
}

const PortfolioThemeProvider = dynamic(() => import('@/providers/themeProvider'), {
  ssr: false,
  loading: ThemeFallback,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const GlobalStyle = () => {
    const theme = useTheme()
    return <Global styles={getGlobalStyles(theme)} />
  }

  return (
    <EmotionCacheProvider>
      <PortfolioThemeProvider>
        <GlobalStyle />
        {children}
      </PortfolioThemeProvider>
    </EmotionCacheProvider>
  )
}
