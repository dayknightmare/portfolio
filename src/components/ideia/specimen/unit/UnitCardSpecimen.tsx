import { COMPONENTS } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function UnitCardSpecimen() {
  const c = COMPONENTS.unit

  return (
    <Specimen framed={false} pad={14}>
      <S.Card>
        <S.Head>
          <S.Unit>{c.unit}</S.Unit>
          <S.Status>{c.status}</S.Status>
        </S.Head>
        <S.Name>{c.name}</S.Name>
        <S.Body>{c.body}</S.Body>
        <S.Foot>
          <S.Lang>{c.lang}</S.Lang>
          <span>{c.stars}</span>
        </S.Foot>
      </S.Card>
    </Specimen>
  )
}
