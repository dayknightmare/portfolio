import { MAGI } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function MagiReadout() {
  return (
    <Specimen pad={22}>
      <S.Label>{MAGI.label}</S.Label>

      <S.Nodes>
        {MAGI.nodes.map((n) => (
          <S.Node key={n.name} tone={n.tone}>
            <S.NodeName>{n.name}</S.NodeName>
            <S.NodeStatus tone={n.tone}>{n.status}</S.NodeStatus>
          </S.Node>
        ))}
      </S.Nodes>

      <S.Umbilical>
        <S.Strand side="left" />
        <S.Strand side="none" />
        <S.Strand side="right" />
      </S.Umbilical>

      <S.Ratio>
        <S.RatioHead>
          <span>{MAGI.ratioLabel}</span>
          <S.RatioCode>{MAGI.ratioCode}</S.RatioCode>
        </S.RatioHead>
        <S.RatioValue>{MAGI.ratioValue}</S.RatioValue>
        <S.RatioTrack>
          <S.RatioFill />
        </S.RatioTrack>
        <S.RatioNote>{MAGI.ratioNote}</S.RatioNote>
      </S.Ratio>

      <S.Caption>{MAGI.caption}</S.Caption>
    </Specimen>
  )
}
