import { COPY, type Lang } from '@/components/copy'

import * as S from './style'

type RightMenuProps = {
  lang: Lang
  t: number
}

type PortKey = 'on' | 'warm' | 'off'

const PORT_BASE: { name: string; load: number; metric: string }[] = [
  { name: 'EVA-00', load: 0.73, metric: '1.2M rpm' },
  { name: 'EVA-01', load: 0.82, metric: '340k rpm' },
  { name: 'EVA-02', load: 0.47, metric: '88k rpm' },
  { name: 'EVA-03', load: 0.54, metric: '12 lag' },
]

export function RightMenu({ lang, t }: RightMenuProps) {
  const c = COPY[lang]

  const waveform = Array.from(
    { length: 24 },
    (_, i) => `${Math.round(30 + Math.abs(Math.sin((t + i * 4) / 2.4)) * 70)}%`,
  )

  const sync = `${(97.5 + (t % 7) * 0.24).toFixed(2)}%`

  const ports = PORT_BASE.map((p, i) => {
    let value = p.load + Math.sin((t + i * 3) / 2.4) * 0.05

    if (Math.random() * 100 < 10) {
      value = 0.1 + Math.random() * 0.15
    }

    const live = Math.max(0.18, Math.min(0.98, value))
    const filled = Math.round(live * 12)
    const load = filled / 12
    const key = (load > 0.5 ? 'on' : load > 0.25 ? 'warm' : 'off') as PortKey

    return {
      name: p.name,
      key: key,
      load: filled / 12,
      state: c.portStates[key],
      metricLabel: c.portMetrics[i],
      metric: p.metric,
      cells: Array.from({ length: 12 }, (_, k) => k < filled),
    }
  })

  return (
    <S.Menu>
      <S.Title>
        {c.magiTitle}
        <S.TitleJp>接続端子</S.TitleJp>
      </S.Title>
      {ports.map((p) => (
        <S.Port key={p.name}>
          <S.Plug>
            <S.PlugHead load={p.load} status={p.key} />
            <S.PlugCable load={p.load} />
            <S.PlugPin load={p.load} />
          </S.Plug>
          <S.PortBody>
            <S.PortHead>
              <S.PortName>{p.name}</S.PortName>
              <S.PortState load={p.load}>{p.state}</S.PortState>
            </S.PortHead>
            <S.Cells>
              {p.cells.map((filled, i) => (
                <S.Cell key={i} load={p.load} filled={filled} />
              ))}
            </S.Cells>
            <S.PortFoot>
              <span>{p.metricLabel}</span>
              <S.PortMetric>{p.metric}</S.PortMetric>
            </S.PortFoot>
          </S.PortBody>
        </S.Port>
      ))}
      <S.SyncPanel>
        <S.SyncHead>
          <span>{c.syncLabel}</span>
          <S.SyncCode>A-01</S.SyncCode>
        </S.SyncHead>
        <S.SyncValue>{sync}</S.SyncValue>
        <S.SyncTrack>
          <S.SyncFill style={{ width: sync }} />
        </S.SyncTrack>
        <S.PanelFoot>
          <span>{c.harmonics}</span>
          <S.SyncMark>◆</S.SyncMark>
        </S.PanelFoot>
      </S.SyncPanel>
      <S.UmbilicalPanel>
        <S.UmbilicalHead>
          <span>{c.umbilical}</span>
          <S.Connected>{c.connected}</S.Connected>
        </S.UmbilicalHead>
        <S.Waveform>
          {waveform.map((h, i) => (
            <S.WaveBar key={`${h}-${i}`} style={{ height: h }} />
          ))}
        </S.Waveform>
        <S.PowerNote>{c.powerNote}</S.PowerNote>
      </S.UmbilicalPanel>
      <S.Emergency>
        緊急時対応要員
        <br />
        非常口 →
      </S.Emergency>
    </S.Menu>
  )
}
