import { COMPONENTS } from '@/components/ideia/copy'
import { Specimen } from '@/components/ideia/specimen/Specimen'

import * as S from './style'

export function ConsoleSpecimen() {
  const c = COMPONENTS.console

  return (
    <Specimen framed={false} pad={14} tone="console">
      <S.Log>
        <S.Line tone="prompt">
          {c.prompt} {c.command}
        </S.Line>
        {c.lines.map((l) => (
          <S.Line key={l.text} tone={l.tone}>
            {l.text}
          </S.Line>
        ))}
        <S.Cursor>
          {c.prompt} <S.Caret>█</S.Caret>
        </S.Cursor>
      </S.Log>
    </Specimen>
  )
}
