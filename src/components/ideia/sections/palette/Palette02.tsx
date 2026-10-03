import { PALETTE, SECTIONS } from '@/components/ideia/copy'
import { CaseHeading, FootNotes } from '@/components/ideia/ui'
import { getTheme } from '@/components/themes'

import * as S from './style'

const SHIPPED = getTheme('dark').colors

const INK: Record<string, string> = {
  'bg.base': SHIPPED.bg.base,
  'bg.panel': SHIPPED.bg.panel,
  accent: SHIPPED.accent,
  amber: SHIPPED.amber,
  green: SHIPPED.green,
  danger: SHIPPED.danger,
  'text.soft': SHIPPED.text.soft,
  'text.muted': SHIPPED.text.muted,
}

export function Palette02() {
  return (
    <S.Section>
      <CaseHeading {...SECTIONS.palette} note={PALETTE.note} />

      <S.Grid>
        {PALETTE.swatches.map((s) => (
          <S.Card key={s.code}>
            <S.Swatch ink={INK[s.token]} />
            <S.Meta>
              <S.Code>{s.code}</S.Code>
              <S.Name>{s.name}</S.Name>
              <S.Body>{s.body}</S.Body>
            </S.Meta>
          </S.Card>
        ))}
      </S.Grid>

      <FootNotes items={PALETTE.footnotes} />
    </S.Section>
  )
}
