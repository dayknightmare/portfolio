import { COPY, type Lang } from '@/components/copy'
import { SectionHeading } from '@/components/nerv/sections'

import * as S from './style'

type Profile02Props = {
  lang: Lang
  setRef: (el: HTMLElement | null) => void
}

export function Profile02({ lang, setRef }: Profile02Props) {
  const c = COPY[lang]

  return (
    <S.Section data-screen-label="02 ABOUT" ref={setRef}>
      <SectionHeading num="02" title={c.h2about} jp="要員資料" />
      <S.Grid>
        <S.Prose>
          <p>{c.about1}</p>
          <p>{c.about2}</p>
          <p>{c.about3}</p>
        </S.Prose>
        <S.Facts>
          {c.facts.map((f) => (
            <S.FactRow key={f.k}>
              <S.FactKey>{f.k}</S.FactKey>
              <S.FactValue>{f.v}</S.FactValue>
            </S.FactRow>
          ))}
        </S.Facts>
      </S.Grid>
    </S.Section>
  )
}
