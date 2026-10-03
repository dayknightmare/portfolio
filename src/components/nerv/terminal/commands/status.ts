import { COPY } from '@/components/copy'
import type {
  Command,
  CommandParams,
  TermLine,
} from '@/components/nerv/terminal/commands/commander'

export class StatusCommand implements Command {
  handler(params: CommandParams): TermLine[] {
    const c = COPY[params.lang]

    return [
      { t: 'EVA-00      ONLINE   load 84%', c: (t) => t.colors.green },
      { t: 'EVA-01      ONLINE   load 98%', c: (t) => t.colors.green },
      { t: 'EVA-02      ONLINE   load 92%', c: (t) => t.colors.green },
      { t: 'EVA-03      OFFLINE  load 22%', c: (t) => t.colors.amber },
      { t: c.term.syncStatus, c: (t) => t.colors.text.muted },
    ]
  }

  help(): TermLine[] {
    return []
  }
}
