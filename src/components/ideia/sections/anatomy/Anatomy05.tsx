import { ANATOMY, SECTIONS } from '@/components/ideia/copy'
import { RailSpecimen, TopbarSpecimen } from '@/components/ideia/specimen'
import {
  CaseHeading,
  FootNotes,
  NoteCard,
  NoteCardGrid,
  Prose,
  SpecTable,
  Split,
  SubLabel,
} from '@/components/ideia/ui'

import * as S from './style'

export function Anatomy05() {
  return (
    <S.Section>
      <CaseHeading {...SECTIONS.anatomy} note={ANATOMY.note} />

      <SubLabel>{ANATOMY.topbar.label}</SubLabel>
      <S.Figure>
        <TopbarSpecimen />
      </S.Figure>
      <S.TopbarNotes>
        <NoteCardGrid minCol={215}>
          {ANATOMY.topbar.notes.map((n) => (
            <NoteCard key={n.title} title={n.title}>
              {n.body}
            </NoteCard>
          ))}
        </NoteCardGrid>
      </S.TopbarNotes>

      <SubLabel>{ANATOMY.rail.label}</SubLabel>
      <S.Figure>
        <Split minCol={300}>
          <RailSpecimen />
          <div>
            <Prose>
              <p>
                Numerals carry the navigation, not words — the vertical 8px label is a caption under
                a 15px Archivo Black figure. At 78px wide the rail costs almost nothing and gives
                the page a permanent index, the same way a control room labels its consoles.
              </p>
              <p>
                The only state change is a 3px border and a colour swap. No slide, no glow, no scale
                — a rail that animates while you scroll past six sections becomes noise fast.
              </p>
            </Prose>
            <S.Japanese>
              {ANATOMY.rail.jp} <S.JapaneseNote>{ANATOMY.rail.jpNote}</S.JapaneseNote>
            </S.Japanese>
          </div>
        </Split>
      </S.Figure>

      <SubLabel>{ANATOMY.states.label}</SubLabel>
      <S.Figure>
        <SpecTable head={ANATOMY.states.head} rows={ANATOMY.states.rows} monoCols={[1, 2]} />
      </S.Figure>

      <FootNotes items={ANATOMY.footnotes} />
    </S.Section>
  )
}
