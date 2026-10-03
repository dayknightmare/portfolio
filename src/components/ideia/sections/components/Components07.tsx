import type { ReactNode } from 'react'
import { COMPONENTS, SECTIONS } from '@/components/ideia/copy'
import { ConsoleSpecimen, SyncPortSpecimen, UnitCardSpecimen } from '@/components/ideia/specimen'
import { CaseHeading, InlineCode, Panel, PanelCell } from '@/components/ideia/ui'

import * as S from './style'

export function Components07() {
  const parts: {
    kicker: string
    title: string
    specimen: ReactNode
    note: ReactNode
  }[] = [
    {
      kicker: COMPONENTS.port.kicker,
      title: COMPONENTS.port.title,
      specimen: <SyncPortSpecimen />,
      note: COMPONENTS.port.body,
    },
    {
      kicker: COMPONENTS.unit.kicker,
      title: COMPONENTS.unit.title,
      specimen: <UnitCardSpecimen />,
      note: COMPONENTS.unit.note,
    },
    {
      kicker: COMPONENTS.console.kicker,
      title: COMPONENTS.console.title,
      specimen: <ConsoleSpecimen />,
      note: (
        <>
          A real command parser, not a prop. Nine commands, each of which either prints or navigates
          — <InlineCode small>about</InlineCode> scrolls the page,{' '}
          <InlineCode small>lang ja</InlineCode> switches the locale. It collapses by default so it
          never blocks the CV.
        </>
      ),
    },
  ]

  return (
    <S.Section>
      <CaseHeading {...SECTIONS.components} note={COMPONENTS.note} />

      <S.Body>
        <Panel minCol={300}>
          {parts.map((part) => (
            <PanelCell key={part.title}>
              <S.Part>
                <div>
                  <S.Kicker>{part.kicker}</S.Kicker>
                  <S.Title>{part.title}</S.Title>
                </div>
                {part.specimen}
                <S.Note>{part.note}</S.Note>
              </S.Part>
            </PanelCell>
          ))}
        </Panel>
      </S.Body>
    </S.Section>
  )
}
