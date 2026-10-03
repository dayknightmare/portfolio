import * as S from './style'

type CaseHeadingProps = {
  num: string
  title: string
  note?: string
}

export function CaseHeading({ num, title, note }: CaseHeadingProps) {
  return (
    <S.Heading>
      <S.Num>{num}</S.Num>
      <S.Title>{title}</S.Title>
      {note && <S.Note>{note}</S.Note>}
    </S.Heading>
  )
}
