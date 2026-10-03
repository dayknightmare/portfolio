import type { ReactNode } from 'react'
import type { TagTone } from './style'
import * as S from './style'

export function Tag({ tone = 'outline', children }: { tone?: TagTone; children: ReactNode }) {
  return <S.Chip tone={tone}>{children}</S.Chip>
}

export const TagRow = S.Row
