import { LANGS, type Lang } from '@/components/copy'
import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

export class LangCommand implements Command<string[]> {
  handler(params: CommandParams<string[]>): TermLine[] {
    const lang = params.args[0] as Lang

    if (!LANGS.includes(lang)) {
      return [{ t: `lang ${lang} not supported`, c: (t) => t.colors.dangerBright }]
    }

    params.setLang(lang)
    return []
  }

  help(): TermLine[] {
    return [
      { t: 'lang en', c: (t) => t.colors.amber },
      { t: 'lang ja', c: (t) => t.colors.amber },
    ]
  }
}
