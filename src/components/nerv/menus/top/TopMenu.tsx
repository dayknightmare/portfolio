import { useContext } from 'react'
import { COPY, type Lang } from '@/components/copy'
import { ThemeContextProvider } from '@/providers/themeContextProvider'
import * as S from './style'

type TopMenuProps = {
  t: number
  setLang: (l: Lang) => void
  lang: Lang
}

export function TopMenu({ t, setLang, lang }: TopMenuProps) {
  const { theme, setTheme } = useContext(ThemeContextProvider)

  const now = new Date()

  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')
  const uptime = `${hh}:${mm}:${ss}`

  const c = COPY[lang]
  const alertLabel = t % 20 < 10 ? c.alertPatternBlue : c.alertStandby

  return (
    <S.Bar>
      <S.Hazard />
      <S.Brand>
        <S.Spinner />
        <S.BrandName>M. COLOMBO</S.BrandName>
      </S.Brand>
      <S.Info>
        <S.Clearance>
          CLEARANCE&nbsp;<S.InfoValue>A-01</S.InfoValue>
        </S.Clearance>
        <span>
          NODE&nbsp;<S.InfoValue>SAO-PAULO / BR</S.InfoValue>
        </span>
        <S.Time>
          TIME&nbsp;<S.Uptime>{uptime}</S.Uptime>
        </S.Time>
        <S.Alert blue={t % 20 < 10}>● {alertLabel}</S.Alert>
      </S.Info>
      <S.LangSwitch>
        <S.LangOption
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
          className="nv-hover-orange"
          active={false}
        >
          {theme === 'default' || theme === 'dark' ? 'DARK' : theme.toUpperCase()}
        </S.LangOption>
        <S.LangOption
          onClick={() => setLang('en')}
          className="nv-hover-orange"
          active={lang !== 'ja'}
        >
          EN
        </S.LangOption>
        <S.LangOption
          onClick={() => setLang('ja')}
          className="nv-hover-orange"
          active={lang === 'ja'}
          ja
        >
          日本語
        </S.LangOption>
      </S.LangSwitch>
      <S.Hazard />
    </S.Bar>
  )
}
