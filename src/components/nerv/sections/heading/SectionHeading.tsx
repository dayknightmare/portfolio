import * as S from './style'

type SectionHeadingProps = {
  num: string
  title: string
  jp: string
}

export function SectionHeading({ num, title, jp }: SectionHeadingProps) {
  return (
    <S.Heading>
      <S.Num>{num}</S.Num>
      <S.Title>{title}</S.Title>
      <S.Jp>{jp}</S.Jp>
      <S.Rule />
    </S.Heading>
  )
}
