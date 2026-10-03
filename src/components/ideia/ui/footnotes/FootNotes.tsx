import type { FootNote } from '@/components/ideia/copy'

import * as S from './style'

export function FootNotes({ items }: { items: FootNote[] }) {
  return (
    <S.Row>
      {items.map((it) => (
        <span key={it.label}>
          <S.Label>{it.label}</S.Label> {it.text}
        </span>
      ))}
    </S.Row>
  )
}
