'use client'

import { useEffect, useRef, useState } from 'react'
import Bootloader from '@/components/bootloader/Bootloader'
import PageEffects from '@/components/nerv/effects/PageEffects'
import { LeftMenu, RightMenu, TopMenu } from '@/components/nerv/menus'
import {
  Contact06,
  Experience03,
  Hero01,
  Profile02,
  Projects05,
  Stack04,
} from '@/components/nerv/sections'
import Terminal from '@/components/nerv/terminal/Terminal'
import { LANGS, type Lang } from '../copy'

import * as S from './style'

export default function Nerv() {
  const [lang, setLangState] = useState<Lang>('en')
  const [t, setT] = useState(0)
  const [termOpen, setTermOpen] = useState(false)
  const [doorP, setDoorP] = useState(0)

  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const scrollHandlerRef = useRef<(() => void) | null>(null)

  function setLang(l: Lang) {
    if (!LANGS.includes(l)) {
      l = 'en'
    }

    if (l === lang) {
      return
    }

    localStorage.setItem('lang', l)
    setLangState(l)
  }

  function scrollTo(i: number) {
    const el = sectionRefs.current[i]
    const container = scrollRef.current

    if (el && container) {
      container.scrollTo({ top: el.offsetTop - 4, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const tick = setInterval(() => setT((s) => s + 1), 1000)
    const lang = (localStorage.getItem('lang') as Lang | null) || 'en'
    setLang(lang)

    return () => {
      clearInterval(tick)
    }
  }, [])

  useEffect(() => {
    let attachedTo: HTMLDivElement | null = null
    const raf = requestAnimationFrame(() => {
      const sc = scrollRef.current
      if (!sc) {
        return
      }

      const onScroll = () => {
        const sec = sectionRefs.current[4]
        if (!sec) {
          return
        }

        const run = Math.max(240, sc.clientHeight * 1.4)
        const p = (sc.scrollTop - (sec.offsetTop - 40)) / run
        const clamped = Math.max(0, Math.min(1, p))
        setDoorP((prev) => (Math.abs(clamped - prev) > 0.004 ? clamped : prev))
      }

      sc.addEventListener('scroll', onScroll, { passive: true })
      onScroll()

      attachedTo = sc
      scrollHandlerRef.current = onScroll
    })
    return () => {
      cancelAnimationFrame(raf)
      if (attachedTo && scrollHandlerRef.current) {
        attachedTo.removeEventListener('scroll', scrollHandlerRef.current)
      }
    }
  }, [])

  return (
    <S.Root>
      <Bootloader lang={lang} />
      <PageEffects />
      <TopMenu lang={lang} setLang={setLang} t={t} />
      <LeftMenu lang={lang} scrollTo={scrollTo} />
      <RightMenu lang={lang} t={t} />

      <S.Scroller ref={scrollRef}>
        <Hero01
          lang={lang}
          scrollTo={scrollTo}
          setTermOpen={setTermOpen}
          setRef={(el) => (sectionRefs.current[0] = el)}
        />
        <Profile02 lang={lang} setRef={(el) => (sectionRefs.current[1] = el)} />
        <Experience03 lang={lang} setRef={(el) => (sectionRefs.current[2] = el)} />
        <Stack04 lang={lang} setRef={(el) => (sectionRefs.current[3] = el)} />
        <Projects05
          lang={lang}
          t={t}
          doorP={doorP}
          setRef={(el) => (sectionRefs.current[4] = el)}
        />
        <Contact06 lang={lang} setRef={(el) => (sectionRefs.current[5] = el)} />
      </S.Scroller>

      <Terminal
        lang={lang}
        termOpen={termOpen}
        setTermOpen={setTermOpen}
        setLang={setLang}
        scrollTo={scrollTo}
      />
    </S.Root>
  )
}
