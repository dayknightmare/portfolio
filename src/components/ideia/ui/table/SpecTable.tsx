import type { ReactNode } from 'react'

import * as S from './style'

type SpecTableProps = {
  head: string[]
  rows: ReactNode[][]
  monoCols?: number[]
}

export function SpecTable({ head, rows, monoCols = [] }: SpecTableProps) {
  return (
    <S.Scroller>
      <S.Table>
        <thead>
          <tr>
            {head.map((h) => (
              <S.Th key={h}>{h}</S.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <S.Tr key={r}>
              {row.map((cell, c) => (
                <S.Td key={c} mono={monoCols.includes(c)}>
                  {cell}
                </S.Td>
              ))}
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </S.Scroller>
  )
}
