import { ThemeProvider } from '@emotion/react'
import type { ReactNode } from 'react'
import { getTheme } from '@/components/themes'

import * as S from './style'

const SHIPPED = getTheme('dark')

type SpecimenProps = {
  framed?: boolean
  scroll?: boolean
  pad?: number
  tone?: 'base' | 'alt' | 'console'
  children: ReactNode
}

export function Specimen({
  framed = true,
  scroll = false,
  pad = 0,
  tone = 'base',
  children,
}: SpecimenProps) {
  return (
    <S.Outer framed={framed} scroll={scroll}>
      <ThemeProvider theme={SHIPPED}>
        <S.Inner pad={pad} tone={tone}>
          {children}
        </S.Inner>
      </ThemeProvider>
    </S.Outer>
  )
}
