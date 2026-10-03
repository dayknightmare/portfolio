import { useContext, useState } from 'react'
import type { Lang } from '@/components/copy'
import { GotoCommand } from '@/components/nerv/terminal/commands/goto'
import { HireCommand } from '@/components/nerv/terminal/commands/hire'
import { LangCommand } from '@/components/nerv/terminal/commands/lang'
import { StatusCommand } from '@/components/nerv/terminal/commands/status'
import { SudoCommand } from '@/components/nerv/terminal/commands/sudo'
import { ThemeSelectCommand } from '@/components/nerv/terminal/commands/themeSelect'
import { WhoAmiCommand } from '@/components/nerv/terminal/commands/whoami'
import type { PortfolioTheme, Themes } from '@/components/themes'
import { ThemeContextProvider } from '@/providers/themeContextProvider'

export interface TermLine {
  t: string
  c: (t: PortfolioTheme) => string
}

export type CommandParams<T = null> = {
  lang: Lang
  setLang: (lang: Lang) => void
  scrollTo: (i: number) => void
  setTheme: (theme: Themes) => void
  args: T
}

export interface Command<T = null> {
  handler(params: CommandParams<T>): TermLine[]
  help(): TermLine[]
}

const commands: Record<string, Command<unknown>> = {
  whoami: new WhoAmiCommand(),
  status: new StatusCommand(),
  hire: new HireCommand(),
  lang: new LangCommand(),
  theme: new ThemeSelectCommand(),
  sudo: new SudoCommand(),
  goto: new GotoCommand(),
}

type callProps = {
  setLang: (lang: Lang) => void
  command: string
  lang: Lang
  scrollTo: (i: number) => void
}

export const useCommander = () => {
  const { setTheme } = useContext(ThemeContextProvider)

  const [termLines, setTermLines] = useState<TermLine[]>([
    {
      t: 'MAGI console ready. type `help` for available commands.',
      c: (t) => t.colors.text.console,
    },
  ])

  const call = ({ command, lang, setLang, scrollTo }: callProps): TermLine[] => {
    command = command.trim()
    const commandSplit = command.toLowerCase().split(' ')

    if (commandSplit.length === 0) {
      return []
    }

    const commandName = commandSplit[0]
    const args = {
      lang,
      setLang,
      setTheme,
      scrollTo,
      args: commandSplit.slice(1),
    }

    const lines: TermLine[] = [{ t: `miguel@nerv:~$ ${command}`, c: (t) => t.colors.text.soft }]

    if (commandName === 'help') {
      for (const command of Object.keys(commands)) {
        lines.push({ t: command, c: (t) => t.colors.text.soft })
        lines.push(...commands[command].help().map((e) => ({ ...e, t: `    ${e.t}` })))
      }

      lines.push({ t: 'clear', c: (t) => t.colors.text.soft })
      setTermLines((prev) => prev.concat(lines))
      return lines
    }

    if (commandName === 'clear') {
      setTermLines([
        {
          t: 'MAGI console ready. type `help` for available commands.',
          c: (t) => t.colors.text.console,
        },
      ])
      return lines
    }

    if (!(commandName in commands)) {
      lines.push({ t: `command not found: ${commandName}`, c: (t) => t.colors.dangerBright })
      setTermLines((prev) => prev.concat(lines))
      return lines
    }

    lines.push(...commands[commandName].handler(args))
    setTermLines((prev) => prev.concat(lines))
    return lines
  }

  return {
    termLines,
    call,
  }
}
