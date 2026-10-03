import { FRAME, SECTIONS } from '@/components/ideia/copy'
import { FrameDiagram } from '@/components/ideia/specimen'
import { CaseHeading, InlineCode, Panel, PanelCell, Prose, Split } from '@/components/ideia/ui'

import * as S from './style'

export function Frame04() {
  return (
    <S.Section>
      <CaseHeading {...SECTIONS.frame} note={FRAME.note} />

      <S.Body>
        <Split minCol={300}>
          <FrameDiagram />

          <div>
            <Prose>
              <p>
                The chrome is <InlineCode>position:fixed</InlineCode> on all four edges, so the site
                never feels like a document — it feels like an application someone left running.
                Only the centre column scrolls, and scroll is driven both by the numbered rail and
                by console commands.
              </p>
            </Prose>

            <S.Metrics>
              <Panel>
                {FRAME.metrics.map((m) => (
                  <PanelCell key={m.label}>
                    <S.MetricRow>
                      <S.MetricLabel>{m.label}</S.MetricLabel>
                      <S.MetricValue>{m.value}</S.MetricValue>
                    </S.MetricRow>
                  </PanelCell>
                ))}
              </Panel>
            </S.Metrics>

            <S.Coda>
              Every grid uses <InlineCode small>auto-fit / minmax</InlineCode> with a 1px background
              showing through the gap — the rules are the gaps, so nothing needs a border and
              nothing double-strokes.
            </S.Coda>
          </div>
        </Split>
      </S.Body>
    </S.Section>
  )
}
