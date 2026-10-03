import { HISTORY, SECTIONS } from '@/components/ideia/copy'
import { CaseHeading } from '@/components/ideia/ui'

import * as S from './style'

export function History09() {
  return (
    <S.Section>
      <CaseHeading {...SECTIONS.history} />

      <S.List>
        {HISTORY.passes.map((p) => (
          <S.Row key={p.pass}>
            <S.Pass>{p.pass}</S.Pass>
            <S.Title>{p.title}</S.Title>
            <S.Body>{p.body}</S.Body>
          </S.Row>
        ))}
      </S.List>
    </S.Section>
  )
}
