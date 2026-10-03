import type { ReactNode } from 'react'

import * as S from './style'

export function InlineCode({ small, children }: { small?: boolean; children: ReactNode }) {
  return <S.Code small={small}>{children}</S.Code>
}
