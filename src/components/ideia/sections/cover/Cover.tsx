import { COVER } from '@/components/ideia/copy'
import { Lede, Panel, PanelCell } from '@/components/ideia/ui'

import * as S from './style'

export function Cover() {
  return (
    <S.Section>
      <S.Kicker>
        <S.KickerRule />
        {COVER.kicker}
      </S.Kicker>

      <S.Title>
        {COVER.titleTop}
        <br />
        {COVER.titleMid}
        <br />
        <S.TitleAccent>{COVER.titleAccent}</S.TitleAccent>
      </S.Title>

      <Lede>{COVER.lede}</Lede>

      <S.Stats>
        <Panel minCol={190}>
          {COVER.stats.map((s) => (
            <PanelCell key={s.label}>
              <S.StatCell>
                <S.StatLabel>{s.label}</S.StatLabel>
                <S.StatValue>{s.value}</S.StatValue>
              </S.StatCell>
            </PanelCell>
          ))}
        </Panel>
      </S.Stats>
    </S.Section>
  )
}
