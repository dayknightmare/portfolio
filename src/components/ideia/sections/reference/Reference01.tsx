import { REFERENCE, SECTIONS } from '@/components/ideia/copy'
import { MagiReadout } from '@/components/ideia/specimen'
import {
  CaseHeading,
  FootNotes,
  InlineCode,
  Measure,
  NoteCard,
  NoteCardGrid,
  Panel,
  PanelCell,
  Prose,
  SpecTable,
  Split,
  SubLabel,
  Tag,
  TagRow,
} from '@/components/ideia/ui'

import * as S from './style'

export function Reference01() {
  return (
    <S.Section>
      <CaseHeading {...SECTIONS.reference} />

      <S.Body>
        <Split>
          <div>
            <Prose>
              <p>
                The starting point was the operations UI language of 1990s Japanese sci-fi —
                specifically the command-centre screens of <em>Neon Genesis Evangelion</em>:
                monospaced status readouts, hazard stripes, vertical Japanese labels, an
                amber-on-black palette and a permanent sense that something is being monitored.
              </p>
              <p>
                Three rules kept it from becoming costume: the chrome never covers content, every
                readout maps to something real (services, languages, roles), and the copy stays
                plain-spoken. The fiction is the frame; the CV is the payload.
              </p>
            </Prose>
            <TagRow>
              {REFERENCE.tags.map((t, i) => (
                <Tag key={t} tone={i === 0 ? 'solid' : 'outline'}>
                  {t}
                </Tag>
              ))}
            </TagRow>
          </div>

          <Panel>
            {[REFERENCE.borrowed, REFERENCE.rejected].map((v) => (
              <PanelCell key={v.label}>
                <S.VerdictCell>
                  <S.VerdictLabel>{v.label}</S.VerdictLabel>
                  <S.VerdictBody>{v.body}</S.VerdictBody>
                </S.VerdictCell>
              </PanelCell>
            ))}
          </Panel>
        </Split>
      </S.Body>

      <SubLabel>A · The interface language being quoted</SubLabel>
      <Measure>
        Evangelion&apos;s command centre is a UI style before it is a story device: readouts drawn
        as flat type on black, no gloss, no icons, almost no curves. What the series actually
        contributes is a set of conventions — and each one had to justify a place in a CV before it
        was allowed in.
      </Measure>
      <S.Conventions>
        <NoteCardGrid minCol={240}>
          {REFERENCE.conventions.map((c) => (
            <NoteCard key={c.title} title={c.title}>
              {c.body}
            </NoteCard>
          ))}
        </NoteCardGrid>
      </S.Conventions>

      <SubLabel>B · MAGI — three systems, one verdict</SubLabel>
      <S.Readout>
        <Split>
          <Prose>
            <p>
              In the series, MAGI is a decision system built as three independent machines that
              vote: a proposal is approved only when they agree, and a split is displayed openly as
              a split. That is the one idea worth stealing — not the look, the <em>shape</em>:
              parallel independent nodes, each with its own state, resolving into a single readable
              verdict.
            </p>
            <p>
              It maps almost too neatly onto a backend engineer&apos;s skill matrix. Three runtimes
              carry the work — Go, Node, Python — each with its own load, each honest about being
              partial rather than perfect, and the aggregate is the &quot;sync ratio&quot; at the
              bottom of the rail. A skills list would say the same thing and be read by nobody.
            </p>
            <p>
              The console inherits the same name because it is the same conceit taken to its end: a
              place to interrogate the nodes and get an answer back. <InlineCode>status</InlineCode>{' '}
              is the vote, printed.
            </p>
          </Prose>
          <MagiReadout />
        </Split>
      </S.Readout>

      <S.Mapping>
        <SpecTable head={REFERENCE.mapping.head} rows={REFERENCE.mapping.rows} />
      </S.Mapping>
      <FootNotes items={REFERENCE.footnotes} />
    </S.Section>
  )
}
