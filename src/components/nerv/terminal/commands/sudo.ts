import { COPY } from '@/components/copy'
import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

export class SudoCommand implements Command {
  handler(params: CommandParams): TermLine[] {
    const c = COPY[params.lang]

    return [{ t: c.term.sudo, c: (t) => t.colors.text.muted }]
  }

  help(): TermLine[] {
    return []
  }
}
