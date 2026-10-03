import type { Level } from './style'
import * as S from './style'

type GaugeProps = {
  levels: Level[]
  thickness?: number
}

export function Gauge({ levels, thickness = 6 }: GaugeProps) {
  return (
    <S.Bar thickness={thickness}>
      {levels.map((level, i) => (
        <S.Cell key={i} level={level} />
      ))}
    </S.Bar>
  )
}

export const GAUGE_STEADY: Level[] = [
  ...(Array(7).fill('on') as Level[]),
  'warn',
  ...(Array(4).fill('off') as Level[]),
]

export const GAUGE_FULL: Level[] = [
  ...(Array(10).fill('on') as Level[]),
  ...(Array(2).fill('off') as Level[]),
]
