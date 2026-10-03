import { ANATOMY } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function RailSpecimen() {
  const c = ANATOMY.rail

  return (
    <Specimen pad={18} tone="alt">
      <S.Layout>
        <S.Rail>
          {c.items.map((it) => (
            <S.Item key={it.num} state={it.state}>
              <S.Num>{it.num}</S.Num>
              <S.ItemLabel>{it.label}</S.ItemLabel>
            </S.Item>
          ))}
        </S.Rail>
        <S.Legend>
          {c.legend.map((l) => (
            <div key={l.title}>
              <S.LegendTitle state={l.state}>{l.title}</S.LegendTitle>
              <br />
              <S.LegendBody>{l.body}</S.LegendBody>
            </div>
          ))}
        </S.Legend>
      </S.Layout>
    </Specimen>
  )
}
