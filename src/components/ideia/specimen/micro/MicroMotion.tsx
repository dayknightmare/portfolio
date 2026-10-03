import type { ReactNode } from 'react'
import { GAUGE_STEADY, Gauge } from '@/components/ideia/specimen/gauge/Gauge'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

function Stage({ inset, children }: { inset?: boolean; children: ReactNode }) {
  return (
    <Specimen framed={false}>
      <S.Stage inset={inset ?? false}>{children}</S.Stage>
    </Specimen>
  )
}

export function HazardPreview() {
  return (
    <Stage>
      <S.Hazard />
    </Stage>
  )
}

export function IdleRingPreview() {
  return (
    <Stage>
      <S.Ring />
    </Stage>
  )
}

export function AlertBlinkPreview({ label }: { label: string }) {
  return (
    <Stage>
      <S.Alert>
        <S.Dot />
        {label}
      </S.Alert>
    </Stage>
  )
}

export function GaugePreview() {
  return (
    <Stage inset>
      <S.GaugeSlot>
        <Gauge levels={GAUGE_STEADY} />
      </S.GaugeSlot>
    </Stage>
  )
}
