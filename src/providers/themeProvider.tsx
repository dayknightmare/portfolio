'use client'

import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { getTheme, type Themes } from '@/components/themes'
import { ThemeContextProvider } from '@/providers/themeContextProvider'

const THEMES: Themes[] = ['default', 'dark', 'light']
const STORAGE_KEY = 'theme'

function readStoredTheme(): Themes {
  const stored = localStorage.getItem(STORAGE_KEY) as Themes | null
  return stored && THEMES.includes(stored) ? stored : 'default'
}

export default function PortfolioThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<Themes>(readStoredTheme)

  const setTheme = (t: Themes) => {
    localStorage.setItem(STORAGE_KEY, t)
    setThemeName(t)
  }

  return (
    <ThemeContextProvider.Provider value={{ theme: themeName, setTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>{children}</ThemeProvider>
    </ThemeContextProvider.Provider>
  )
}
