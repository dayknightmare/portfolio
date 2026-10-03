import type { ReactNode } from 'react'
import { SECTIONS, UX } from '@/components/ideia/copy'
import { CaseHeading, Panel, PanelCell, SpecTable } from '@/components/ideia/ui'

import * as S from './style'

export function Ux08() {
  const cards: { title: string; body: ReactNode }[] = [
    {
      title: UX.cards.boot.title,
      body: (
        <>
          Seven lines at 260ms, then out. It sets the premise before the first pixel of CV — but a
          recruiter with 30 seconds and the whole thing is under two seconds anyway.
        </>
      ),
    },
    { title: UX.cards.lang.title, body: UX.cards.lang.body },
    { title: UX.cards.nav.title, body: UX.cards.nav.body },
  ]

  return (
    <S.Section>
      <CaseHeading {...SECTIONS.ux} />

      <S.Body>
        <Panel minCol={280}>
          {cards.map((card) => (
            <PanelCell key={card.title}>
              <S.Card>
                <S.Title>{card.title}</S.Title>
                <S.Note>{card.body}</S.Note>
              </S.Card>
            </PanelCell>
          ))}
        </Panel>
      </S.Body>

      <S.Commands>
        <SpecTable head={UX.commands.head} rows={UX.commands.rows} monoCols={[0]} />
      </S.Commands>
    </S.Section>
  )
}
