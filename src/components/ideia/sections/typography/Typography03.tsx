import type { ReactNode } from 'react'
import { SECTIONS, TYPOGRAPHY } from '@/components/ideia/copy'
import { CaseHeading, Panel, PanelCell } from '@/components/ideia/ui'

import * as S from './style'

export function Typography03() {
  const samples: ReactNode[] = [
    <S.Display key="display">{TYPOGRAPHY.samples.display}</S.Display>,
    <S.SubDisplay key="sub">{TYPOGRAPHY.samples.subDisplay}</S.SubDisplay>,
    <S.Interface key="interface">
      <S.InterfaceLabel>{TYPOGRAPHY.samples.monoLabel}</S.InterfaceLabel>
      <S.InterfaceBody>{TYPOGRAPHY.samples.monoBody}</S.InterfaceBody>
    </S.Interface>,
    <S.Japanese key="jp">
      {TYPOGRAPHY.samples.jpLead} <S.JapaneseTail>{TYPOGRAPHY.samples.jpTail}</S.JapaneseTail>
    </S.Japanese>,
  ]

  return (
    <S.Section>
      <CaseHeading {...SECTIONS.typography} note={TYPOGRAPHY.note} />

      <S.Specs>
        <Panel>
          {TYPOGRAPHY.specs.map((spec, i) => (
            <PanelCell key={spec.family}>
              <S.Row>
                <div>
                  <S.Family>{spec.family}</S.Family>
                  <S.Role>{spec.role}</S.Role>
                  <S.Note>{spec.body}</S.Note>
                </div>
                {samples[i]}
              </S.Row>
            </PanelCell>
          ))}
        </Panel>
      </S.Specs>
    </S.Section>
  )
}
