import type { ReactNode } from 'react'

import * as S from './style'

export function SubLabel({ children }: { children: ReactNode }) {
  return <S.Label>{children}</S.Label>
}
