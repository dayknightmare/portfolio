'use client'

import { useRouter } from 'next/navigation'
import { COPY, type Lang } from '@/components/copy'
import * as S from './style'

type Hero01Props = {
  lang: Lang
  scrollTo: (i: number) => void
  setTermOpen: (open: boolean) => void
  setRef: (el: HTMLElement | null) => void
}

export function Hero01({ lang, scrollTo, setRef, setTermOpen }: Hero01Props) {
  const c = COPY[lang]
  const router = useRouter()

  return (
    <S.Section data-screen-label="01 HERO" ref={setRef}>
      <S.Watermark>第壱号</S.Watermark>
      <S.Kicker>
        <S.KickerRule />
        {c.kicker}
      </S.Kicker>
      <S.Title>
        MIGUEL
        <br />
        <S.Accent>COLOMBO</S.Accent>
      </S.Title>
      <S.Role>
        {c.role} — <S.RoleAccent>iFood</S.RoleAccent>
      </S.Role>
      <S.Intro>{c.intro}</S.Intro>
      <S.CtaRow>
        <S.CtaPrimary onClick={() => scrollTo(5)} className="nv-hover-amber">
          {c.ctaContact}
        </S.CtaPrimary>
        <S.CtaSecondary onClick={() => setTermOpen(true)} className="nv-hover-green">
          {c.ctaTerm}
        </S.CtaSecondary>
        <S.CtaSecondary onClick={() => router.push('/ideia')} className="nv-hover-amber">
          {c.ctaIdeia}
        </S.CtaSecondary>
      </S.CtaRow>
      <S.StatsGrid>
        {c.stats.map((st) => (
          <S.StatCell key={st.label}>
            <S.StatLabel>{st.label}</S.StatLabel>
            <S.StatValue>{st.value}</S.StatValue>
          </S.StatCell>
        ))}
      </S.StatsGrid>
    </S.Section>
  )
}
