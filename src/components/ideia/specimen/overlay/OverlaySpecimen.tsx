import { ThemeProvider } from '@emotion/react'
import { EFFECTS } from '@/components/ideia/copy'
import { getTheme } from '@/components/themes'

import * as S from './style'

const SHIPPED = getTheme('dark')

export type OverlayFlags = {
  scan: boolean
  vignette: boolean
  sweep: boolean
  flicker: boolean
}

export function OverlaySpecimen({ flags }: { flags: OverlayFlags }) {
  const c = EFFECTS.specimen

  return (
    <div>
      <S.Frame flicker={flags.flicker}>
        <ThemeProvider theme={SHIPPED}>
          <S.Screen>
            <S.Content>
              <S.Label>{c.label}</S.Label>
              <S.Name>
                {c.nameTop}
                <br />
                <S.NameAccent>{c.nameBottom}</S.NameAccent>
              </S.Name>
              <S.Body>
                {c.body[0]}
                <br />
                {c.body[1]}
              </S.Body>
            </S.Content>
            {flags.scan && <S.Scanlines />}
            {flags.vignette && <S.Vignette />}
            {flags.sweep && <S.Sweep />}
          </S.Screen>
        </ThemeProvider>
      </S.Frame>
      <S.Caption>{c.caption}</S.Caption>
    </div>
  )
}
