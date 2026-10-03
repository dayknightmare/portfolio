import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'
import { THEMES, type Themes } from '@/components/themes'

export class ThemeSelectCommand implements Command<string[]> {
  handler(params: CommandParams<string[]>): TermLine[] {
    const theme = params.args[0] as Themes

    if (!THEMES.includes(theme)) {
      return [{ t: `theme ${theme} not supported`, c: (t) => t.colors.dangerBright }]
    }

    params.setTheme(theme)
    return []
  }

  help(): TermLine[] {
    return [
      { t: 'theme dark', c: (t) => t.colors.amber },
      { t: 'theme light', c: (t) => t.colors.amber },
    ]
  }
}
