import { COPY, type Lang, repoUnitLabel } from '@/components/copy'
import { SectionHeading } from '@/components/nerv/sections'
import * as S from './style'

type Projects05Props = {
  lang: Lang
  setRef: (el: HTMLElement | null) => void
  t: number
  doorP: number
}

const REPO_NAMES = [
  'iFood × Uber account linking',
  'iFood × Decolar loyalty integration',
  '1Doc analytics platform',
  'Unides NASA hackathon',
  'Vupy social network',
  '1Doc mobile app',
]

const REPO_URLS = [
  'https://www.uber.com/br/pt-br/newsroom/ifood-e-uber-iniciam-parceria-que-conecta-apps-e-programas-de-fidelidade/',
  'https://institucional.ifood.com.br/releases/clube-ifood-decolar/',
  'https://1doc.com.br',
  '',
  '',
  'https://apps.apple.com/br/app/1doc-atendimento/id1494746128',
]

const REPO_LANGS = [
  'Go | Java',
  'Go | Java',
  'Python | Apache Druid',
  'Python',
  'Python | Go',
  'Flutter | Dart',
]

export function Projects05({ lang, setRef, t, doorP }: Projects05Props) {
  const c = COPY[lang]

  const doorOpen = Math.max(0, Math.min(1, (doorP - 0.5) / 0.42))
  const timeLeft = Math.max(0, 300 - t)
  const doorExpired = timeLeft === 0
  const doorUrgent = timeLeft < 270
  const dColor = doorUrgent ? '#ff2020' : '#e8c000'
  const modeIdx = doorExpired ? 0 : doorUrgent ? 3 : 2

  const doorShift = `${(doorOpen * 102).toFixed(2)}%`
  const chromeOp = doorExpired ? '0.1' : String(1 - doorOpen)
  const countdown = `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`
  const dGlow = doorUrgent ? 'rgba(255,32,32,0.5)' : 'rgba(232,192,0,0.35)'
  const dLine = doorUrgent ? 'rgba(255,32,32,0.3)' : 'rgba(232,192,0,0.28)'
  const dBlink = doorExpired ? 'nvBlink 0.6s infinite' : 'none'
  const modes = c.modes.map((label, i) => ({
    label,
    fg: i === modeIdx ? '#0c0c11' : dColor,
    bg: i === modeIdx ? dColor : 'transparent',
  }))

  const repos = REPO_NAMES.map((n, i) => ({
    unit: repoUnitLabel(lang, i),
    name: n,
    desc: c.repoDescs[i],
    lang: REPO_LANGS[i],
    status: c.statuses[i],
    url: REPO_URLS[i],
  }))

  return (
    <S.Section data-screen-label="05 PROJECTS" ref={setRef}>
      <S.StickyWrap>
        <S.DoorViewport>
          <S.DoorPanel side="left" style={{ transform: `translateX(-${doorShift})` }}>
            <S.Scanlines />
            <S.DoorContentLeft>
              <S.LimitJp style={{ color: dColor }}>活動限界まであと</S.LimitJp>
              <S.LimitEn style={{ color: dColor, opacity: chromeOp }}>
                ACTIVE TIME REMAINING
              </S.LimitEn>
              <S.Countdown
                style={{ color: dColor, textShadow: `0 0 26px ${dGlow}`, animation: dBlink }}
              >
                {countdown}
              </S.Countdown>
              <S.PowerBlock style={{ opacity: chromeOp }}>
                <S.PowerRowBordered style={{ border: `2px solid ${dColor}` }}>
                  <S.PowerKanjiLg style={{ color: dColor }}>内部</S.PowerKanjiLg>
                  <S.PowerLabel style={{ color: dColor }}>INTERNAL</S.PowerLabel>
                </S.PowerRowBordered>
                <S.PowerCard style={{ border: `2px solid ${dColor}` }}>
                  <S.PowerCardJp style={{ color: dColor }}>主電源供給システム</S.PowerCardJp>
                  <S.PowerCardEn style={{ color: dColor }}>MAIN ENERGY SUPPLY SYSTEM</S.PowerCardEn>
                </S.PowerCard>
                <S.PowerRowPlain>
                  <S.PowerKanjiLg style={{ color: dColor }}>外部</S.PowerKanjiLg>
                  <S.PowerLabel style={{ color: dColor }}>EXTERNAL</S.PowerLabel>
                </S.PowerRowPlain>
              </S.PowerBlock>
            </S.DoorContentLeft>
          </S.DoorPanel>

          <S.DoorPanel side="right" style={{ transform: `translateX(${doorShift})` }}>
            <S.Scanlines />
            <S.DoorContentRight style={{ opacity: chromeOp }}>
              <S.SealedRow style={{ color: dColor }}>
                <S.SealedTag style={{ border: `1px solid ${dColor}` }}>{c.sealedLabel}</S.SealedTag>
                <S.SealedRule style={{ background: dColor }} />
                <S.SealedJp>封鎖中</S.SealedJp>
              </S.SealedRow>
              <S.RepoMiniGrid style={{ background: dLine, border: `1px solid ${dLine}` }}>
                {repos.map((r) => (
                  <S.RepoMiniRow key={r.name}>
                    <S.RepoMiniName style={{ color: dColor }}>{r.name}</S.RepoMiniName>
                    <S.RepoMiniLang style={{ color: dColor }}>{r.lang}</S.RepoMiniLang>
                  </S.RepoMiniRow>
                ))}
              </S.RepoMiniGrid>
              <S.ModeRow>
                {modes.map((m) => (
                  <S.Mode
                    key={m.label}
                    style={{ border: `1px solid ${dColor}`, color: m.fg, background: m.bg }}
                  >
                    {m.label}
                  </S.Mode>
                ))}
                <S.Danger>DANGER</S.Danger>
                <S.ScrollHint style={{ color: dColor }}>{c.scrollHint} ▼</S.ScrollHint>
              </S.ModeRow>
            </S.DoorContentRight>
          </S.DoorPanel>
        </S.DoorViewport>
      </S.StickyWrap>

      <S.Runway />

      <S.Content>
        <SectionHeading num="05" title={c.h2repos} jp="実戦配備" />
        <S.CardGrid>
          {repos.map((r) => (
            <S.Card
              key={r.name}
              onClick={r.url ? () => window.open(r.url, '_blank') : undefined}
              className="nv-hover-card"
            >
              <S.CardHead>
                <S.CardUnit>{r.unit}</S.CardUnit>
                <S.CardStatus status={r.status}>{r.status}</S.CardStatus>
              </S.CardHead>
              <S.CardName>{r.name}</S.CardName>
              <S.CardDesc>{r.desc}</S.CardDesc>
              <S.CardFoot>
                <S.CardLang>◆ {r.lang}</S.CardLang>
                <span>★</span>
              </S.CardFoot>
            </S.Card>
          ))}
        </S.CardGrid>
      </S.Content>
    </S.Section>
  )
}
