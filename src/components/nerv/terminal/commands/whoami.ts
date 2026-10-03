import { COPY } from '@/components/copy'
import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

export class WhoAmiCommand implements Command {
  handler(params: CommandParams): TermLine[] {
    const c = COPY[params.lang]

    return [
      {
        t: c.term.whoami,
        c: (t) => t.colors.text.soft,
      },
    ]
  }

  help(): TermLine[] {
    return []
  }
}
