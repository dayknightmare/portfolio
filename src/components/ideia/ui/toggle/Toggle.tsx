import * as S from './style'

type ToggleProps = {
  label: string
  active: boolean
  onToggle: () => void
}

export function Toggle({ label, active, onToggle }: ToggleProps) {
  return (
    <S.Button type="button" active={active} onClick={onToggle}>
      {label} · {active ? 'ON' : 'OFF'}
    </S.Button>
  )
}

export const ToggleRow = S.Row
