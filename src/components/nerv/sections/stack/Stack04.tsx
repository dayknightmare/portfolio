import { COPY, type Lang } from '@/components/copy'
import { SectionHeading } from '@/components/nerv/sections'

import * as S from './style'

type Stack04Props = {
  lang: Lang
  setRef: (el: HTMLElement | null) => void
}

export function Stack04({ lang, setRef }: Stack04Props) {
  const c = COPY[lang]

  const stack = [
    {
      name: c.stackNames[0],
      code: 'LNG',
      items: [
        { n: 'Python', lv: 95 },
        { n: 'Go', lv: 90 },
        { n: 'TypeScript / Node', lv: 82 },
        { n: 'Rust', lv: 78 },
        { n: 'Java', lv: 75 },
        { n: 'Kotlin', lv: 75 },
        { n: 'Dart / Flutter', lv: 70 },
      ],
    },
    {
      name: c.stackNames[1],
      code: 'DAT',
      items: [
        { n: 'PostgreSQL', lv: 93 },
        { n: 'MySQL', lv: 88 },
        { n: 'Redis', lv: 86 },
        { n: 'Apache Druid', lv: 78 },
        { n: 'Clickhouse', lv: 78 },
        { n: 'Kafka', lv: 72 },
        { n: 'DynamoDB', lv: 65 },
      ],
    },
    {
      name: c.stackNames[2],
      code: 'PLT',
      items: [
        { n: 'Docker', lv: 96 },
        { n: 'Nginx', lv: 89 },
        { n: 'Terraform / Terragrunt', lv: 88 },
        { n: 'CI/CD', lv: 85 },
        { n: 'AWS', lv: 82 },
        { n: 'Kong GW', lv: 80 },
        { n: 'Kubernetes', lv: 75 },
      ],
    },
    {
      name: c.stackNames[3],
      code: 'OBS',
      items: [
        { n: 'OAuth2', lv: 93 },
        { n: 'OIDC', lv: 90 },
        { n: 'Slack', lv: 90 },
        { n: 'New Realic', lv: 87 },
        { n: 'Sentry', lv: 83 },
        { n: 'Datadog', lv: 78 },
        { n: 'MCP & agents', lv: 70 },
      ],
    },
  ]

  return (
    <S.Section data-screen-label="04 STACK" ref={setRef}>
      <SectionHeading num="04" title={c.h2stack} jp="装備一覧" />

      <S.Grid>
        {stack.map((grp) => (
          <S.Group key={grp.code}>
            <S.GroupHead>
              {grp.name}
              <S.GroupCode>{grp.code}</S.GroupCode>
            </S.GroupHead>
            <S.Items>
              {grp.items.map((it) => (
                <div key={it.n}>
                  <S.ItemHead>
                    <span>{it.n}</span>
                    <S.ItemLevel>{it.lv}%</S.ItemLevel>
                  </S.ItemHead>
                  <S.StackLine>
                    <S.StackLineColor lv={it.lv}></S.StackLineColor>
                  </S.StackLine>
                </div>
              ))}
            </S.Items>
          </S.Group>
        ))}
      </S.Grid>
    </S.Section>
  )
}
