import { COPY, type Lang } from '@/components/copy'

import * as S from './style'

type Contact06Props = {
  lang: Lang
  setRef: (el: HTMLElement | null) => void
}

export function Contact06({ lang, setRef }: Contact06Props) {
  const c = COPY[lang]

  const channels = [
    {
      label: c.channelLabels[0],
      value: 'miguecolombo3@gmail.com',
      url: 'mailto:miguecolombo3@gmail.com',
    },
    {
      label: c.channelLabels[1],
      value: 'github.com/dayknightmare',
      url: 'https://github.com/dayknightmare',
    },
    {
      label: c.channelLabels[2],
      value: 'linkedin.com/in/miguelvcolombo',
      url: 'https://www.linkedin.com/in/miguelvcolombo',
    },
    { label: c.channelLabels[3], value: c.resumeValue, url: '#' },
  ]

  return (
    <S.Section data-screen-label="06 CONTACT" ref={setRef}>
      <S.DotField />
      <S.Corner pos="tl" />
      <S.Corner pos="tr" />
      <S.Corner pos="bl" />
      <S.Corner pos="br" />
      <S.Rec>
        <S.RecDot />
        {c.rec}
      </S.Rec>
      <S.Header>
        <S.HeaderNum>06</S.HeaderNum>
        <S.HeaderTitle>{c.h2contact}</S.HeaderTitle>
        <S.HeaderJp>通信回線</S.HeaderJp>
        <S.HeaderRule />
      </S.Header>
      <S.Lead ja={lang === 'ja'}>{c.contactLead}</S.Lead>
      <S.Channels>
        {channels.map((ch) => (
          <S.Channel
            key={ch.label}
            href={ch.url}
            target="_blank"
            rel="noreferrer"
            className="nv-hover-card-dark"
          >
            <S.ChannelLabel>{ch.label}</S.ChannelLabel>
            <S.ChannelValue>{ch.value}</S.ChannelValue>
          </S.Channel>
        ))}
      </S.Channels>
      <S.Footer>
        <span>{c.footer}</span>
        <span>REV 2026.10</span>
      </S.Footer>
    </S.Section>
  )
}
