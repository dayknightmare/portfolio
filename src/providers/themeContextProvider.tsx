import { createContext } from 'react'
import type { Themes } from '@/components/themes'

export const ThemeContextProvider = createContext({
  theme: 'default' as Themes,
  setTheme: (_theme: Themes) => {},
})
