import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

const COMMAND_SECTION: Record<string, number> = {
  about: 1,
  experience: 2,
  exp: 2,
  stack: 3,
  projects: 4,
  contact: 5,
  home: 0,
  hero: 0,
}

export class GotoCommand implements Command<string[]> {
  handler(params: CommandParams<string[]>): TermLine[] {
    if (COMMAND_SECTION[params.args[0]] !== undefined) {
      params.scrollTo(COMMAND_SECTION[params.args[0]])
    }

    return []
  }

  help(): TermLine[] {
    return Object.keys(COMMAND_SECTION).map((section) => ({
      t: `goto ${section}`,
      c: (t) => t.colors.amber,
    }))
  }
}
