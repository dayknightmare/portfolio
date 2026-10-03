import type { ReactNode } from 'react'

import * as S from './style'

type NoteCardProps = {
  title: string
  code?: string
  media?: ReactNode
  lead?: boolean
  children: ReactNode
}

export function NoteCard({ title, code, media, lead, children }: NoteCardProps) {
  return (
    <S.Card>
      {media && <S.Media>{media}</S.Media>}
      <S.Title lead={lead}>{title}</S.Title>
      {code && <S.Code>{code}</S.Code>}
      <S.Body>{children}</S.Body>
    </S.Card>
  )
}

export const NoteCardGrid = S.Grid
