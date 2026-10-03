import { OUTRO } from '@/components/ideia/copy'

import * as S from './style'

export function Outro() {
  return (
    <S.Section>
      <S.Inner>
        <S.Kicker>{OUTRO.kicker}</S.Kicker>
        <S.Title>{OUTRO.title}</S.Title>
        <S.Foot>
          <S.Signature>{OUTRO.signature}</S.Signature>
        </S.Foot>
      </S.Inner>
    </S.Section>
  )
}
