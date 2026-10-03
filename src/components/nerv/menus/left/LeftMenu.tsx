import { useState } from 'react'
import { COPY, type Lang } from '@/components/copy'

import * as S from './style'

type LeftMenuProps = {
  lang: Lang
  scrollTo: (i: number) => void
}

export function LeftMenu({ lang, scrollTo }: LeftMenuProps) {
  const [active, setActive] = useState(0)

  const c = COPY[lang]
  const nav = c.navLabels.map((label, i) => ({
    num: `0${i + 1}`,
    label,
  }))

  return (
    <S.Menu>
      {nav.map((item, i) => (
        <S.Item
          key={item.num}
          onClick={() => {
            scrollTo(i)
            setActive(i)
          }}
          className="nv-hover-panel"
          active={active === i}
        >
          <S.ItemNum>{item.num}</S.ItemNum>
          <S.ItemLabel>{item.label}</S.ItemLabel>
        </S.Item>
      ))}
      <S.Footer>記録保管所</S.Footer>
    </S.Menu>
  )
}
