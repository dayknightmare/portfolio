import type { ReactNode } from 'react'

import * as S from './style'

type PanelProps = {
  minCol?: number
  className?: string
  children: ReactNode
}

export function Panel({ minCol, className, children }: PanelProps) {
  if (minCol === undefined) {
    return <S.Stack className={className}>{children}</S.Stack>
  }

  return (
    <S.Grid minCol={minCol} className={className}>
      {children}
    </S.Grid>
  )
}

export const PanelCell = S.Cell
