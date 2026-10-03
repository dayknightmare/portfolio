import { COPY, type Lang } from '@/components/copy'
import { SectionHeading } from '@/components/nerv/sections'

import * as S from './style'

type Experience03Props = {
  lang: Lang
  setRef: (el: HTMLElement | null) => void
}

export function Experience03({ lang, setRef }: Experience03Props) {
  const c = COPY[lang]

  return (
    <S.Section data-screen-label="03 EXPERIENCE" ref={setRef}>
      <SectionHeading num="03" title={c.h2exp} jp="勤務記録" />
      <S.List>
        {c.jobs.map((job) => (
          <S.Card key={job.company + job.period}>
            <S.Aside>
              <S.Period>{job.period}</S.Period>
              <S.Company>{job.company}</S.Company>
              <S.Place>{job.place}</S.Place>
            </S.Aside>
            <S.Body>
              <S.Role>{job.role}</S.Role>
              <S.Bullets>
                {job.bullets.map((b, i) => (
                  <S.Bullet key={i}>
                    <S.BulletMark>▸</S.BulletMark>
                    <S.BulletText>{b}</S.BulletText>
                  </S.Bullet>
                ))}
              </S.Bullets>
              <S.Tags>
                {job.tags.map((tg) => (
                  <S.Tag key={tg}>{tg}</S.Tag>
                ))}
              </S.Tags>
            </S.Body>
          </S.Card>
        ))}
      </S.List>
    </S.Section>
  )
}
