import { useState } from 'react'
import { EFFECTS, SECTIONS } from '@/components/ideia/copy'
import type { OverlayFlags } from '@/components/ideia/specimen'
import {
  AlertBlinkPreview,
  GaugePreview,
  HazardPreview,
  IdleRingPreview,
  OverlaySpecimen,
} from '@/components/ideia/specimen'
import {
  CaseHeading,
  FootNotes,
  NoteCard,
  NoteCardGrid,
  Panel,
  SpecTable,
  Split,
  SubLabel,
  Toggle,
  ToggleRow,
} from '@/components/ideia/ui'

import * as S from './style'

const MICRO_PREVIEWS = [
  <HazardPreview key="hazard" />,
  <IdleRingPreview key="ring" />,
  <AlertBlinkPreview key="blink" label="PATTERN BLUE" />,
  <GaugePreview key="gauge" />,
]

export function Effects06() {
  const [flags, setFlags] = useState<OverlayFlags>({
    scan: true,
    vignette: true,
    sweep: true,
    flicker: true,
  })

  const toggle = (key: keyof OverlayFlags) => () => setFlags((f) => ({ ...f, [key]: !f[key] }))

  return (
    <S.Section>
      <CaseHeading {...SECTIONS.effects} note={EFFECTS.note} />

      <ToggleRow>
        {EFFECTS.toggles.map((t) => (
          <Toggle key={t.key} label={t.label} active={flags[t.key]} onToggle={toggle(t.key)} />
        ))}
      </ToggleRow>

      <S.Body>
        <Split minCol={330}>
          <OverlaySpecimen flags={flags} />
          <Panel>
            {EFFECTS.overlays.map((o) => (
              <NoteCard key={o.title} title={o.title} code={o.code} lead>
                {o.body}
              </NoteCard>
            ))}
          </Panel>
        </Split>
      </S.Body>

      <SubLabel>{EFFECTS.microLabel}</SubLabel>
      <S.Micro>
        <NoteCardGrid minCol={215}>
          {EFFECTS.micro.map((m, i) => (
            <NoteCard key={m.title} title={m.title} code={m.code} media={MICRO_PREVIEWS[i]}>
              {m.body}
            </NoteCard>
          ))}
        </NoteCardGrid>
      </S.Micro>

      <S.Motion>
        <SpecTable head={EFFECTS.motion.head} rows={EFFECTS.motion.rows} monoCols={[1]} />
      </S.Motion>

      <FootNotes items={EFFECTS.footnotes} />
    </S.Section>
  )
}
