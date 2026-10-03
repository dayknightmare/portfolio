import { FRAME } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function FrameDiagram() {
  const d = FRAME.diagram

  return (
    <Specimen pad={14}>
      <S.Topbar>
        {d.topbar}
        <S.TopbarMeta>{d.topbarRight}</S.TopbarMeta>
      </S.Topbar>

      <S.Middle>
        <S.Rail>{d.rail}</S.Rail>
        <S.Scroll>
          <span>{d.scroll}</span>
          <S.ScrollMeta>
            {d.scrollMeta[0]}
            <br />
            {d.scrollMeta[1]}
          </S.ScrollMeta>
        </S.Scroll>
        <S.Magi>
          {d.magi[0]}
          <br />
          {d.magi[1]}
        </S.Magi>
      </S.Middle>

      <S.Dock>{d.dock}</S.Dock>
    </Specimen>
  )
}
