import { useEffect, useState } from 'react'
import { BOOT, type Lang } from '@/components/copy'

import * as S from './style'

export default function Bootloader({ lang }: { lang: Lang }) {
  const [bootN, setBootN] = useState(0)
  const [booting, setBooting] = useState(true)

  const bootLines = BOOT[lang].slice(0, bootN)

  useEffect(() => {
    const boot = setInterval(() => {
      setBootN((n) => {
        if (n >= BOOT[lang].length) {
          return n
        }

        const next = n + 1
        if (next >= BOOT[lang].length) {
          clearInterval(boot)
          setTimeout(() => setBooting(false), 550)
        }
        return next
      })
    }, 260)
    return () => {
      clearInterval(boot)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    booting && (
      <S.Screen>
        <S.Header>
          <S.Title>SYSTEM BOOT</S.Title>
        </S.Header>
        <S.Log>
          {bootLines.map((line, i) => (
            <S.LogLine key={i}>
              <S.LogMark>▪</S.LogMark>
              <span>{line}</span>
            </S.LogLine>
          ))}
          <S.Blank>█</S.Blank>
        </S.Log>
        <S.Line>
          <S.LineAnimation />
        </S.Line>
      </S.Screen>
    )
  )
}
