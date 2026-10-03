import { ANATOMY } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function TopbarSpecimen() {
  const c = ANATOMY.topbar

  return (
    <Specimen scroll>
      <S.Bar>
        <S.HazardCap />
        <S.BrandBlock>
          <S.Ring />
          <S.Brand>{c.brand}</S.Brand>
        </S.BrandBlock>
        <S.Telemetry>
          {c.telemetry.map((t) => (
            <span key={t.label}>
              {t.label}&nbsp;<S.Value tone={t.tone}>{t.value}</S.Value>
            </span>
          ))}
          <S.Alert>{c.alert}</S.Alert>
        </S.Telemetry>
        <S.Controls>
          {c.langs.map((l, i) => (
            <S.LangButton key={l} active={i === 0}>
              {l}
            </S.LangButton>
          ))}
        </S.Controls>
        <S.HazardCap />
      </S.Bar>
    </Specimen>
  )
}
