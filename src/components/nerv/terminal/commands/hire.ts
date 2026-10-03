import { COPY } from '@/components/copy'
import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

export class HireCommand implements Command {
  handler(params: CommandParams): TermLine[] {
    const c = COPY[params.lang]

    return [{ t: c.term.hire, c: (t) => t.colors.amber }]
  }

  help(): TermLine[] {
    return []
  }
}
