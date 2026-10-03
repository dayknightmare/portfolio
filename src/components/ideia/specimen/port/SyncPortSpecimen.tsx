import { COMPONENTS } from '@/components/ideia/copy'
import { GAUGE_FULL, Gauge } from '@/components/ideia/specimen/gauge/Gauge'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function SyncPortSpecimen() {
  const c = COMPONENTS.port

  return (
    <Specimen framed={false} pad={14}>
      <S.Port>
        <S.Plug>
          <S.PlugDot />
          <S.PlugLine />
          <S.PlugFoot />
        </S.Plug>
        <S.Body>
          <S.Head>
            <S.Name>{c.name}</S.Name>
            <S.Status>{c.status}</S.Status>
          </S.Head>
          <S.GaugeSlot>
            <Gauge levels={GAUGE_FULL} thickness={5} />
          </S.GaugeSlot>
          <S.Metrics>
            <span>{c.metricLabel}</span>
            <S.MetricValue>{c.metricValue}</S.MetricValue>
          </S.Metrics>
        </S.Body>
      </S.Port>
    </Specimen>
  )
}
