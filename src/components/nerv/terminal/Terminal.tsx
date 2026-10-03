import { useTheme } from '@emotion/react'
import { type SubmitEvent, useEffect, useRef, useState } from 'react'
import { COPY, type Lang } from '@/components/copy'
import { useCommander } from '@/components/nerv/terminal/commands/commander'
import * as S from './style'

type TerminalProps = {
  lang: Lang
  termOpen: boolean
  setTermOpen: (open: boolean) => void
  setLang: (lang: Lang) => void
  scrollTo: (i: number) => void
}

export default function Terminal({
  lang,
  setLang,
  termOpen,
  setTermOpen,
  scrollTo,
}: TerminalProps) {
  const [termInput, setTermInput] = useState('')
  const { termLines, call } = useCommander()
  const theme = useTheme()

  const termRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const c = COPY[lang]
  const termToggleLabel = termOpen ? c.term.toggleCollapse : c.term.toggleExpand

  function submit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setTermInput('')

    call({
      command: termInput,
      lang,
      setLang,
      scrollTo,
    })
  }

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight
    }
  }, [])

  return (
    <S.Console>
      <S.Toggle
        onClick={() => {
          setTermOpen(!termOpen)
        }}
        className="nv-hover-panel-alt"
      >
        <S.ToggleArrow>▲</S.ToggleArrow>
        <span>MAGI CONSOLE</span>
        <S.ToggleHint>{c.termHint}</S.ToggleHint>
        <S.ToggleLabel>{termToggleLabel}</S.ToggleLabel>
      </S.Toggle>
      <S.Drawer expanded={termOpen}>
        <S.Output ref={termRef}>
          {termLines.map((l, i) => (
            <S.OutputLine key={i} tone={l.c(theme)}>
              {l.t}
            </S.OutputLine>
          ))}
          <S.Prompt onSubmit={submit}>
            <S.PromptLabel>miguel@nerv:~$</S.PromptLabel>
            <S.Input
              ref={inputRef}
              value={termInput}
              onChange={(e) => setTermInput(e.target.value)}
              placeholder="help"
              spellCheck={false}
            />
          </S.Prompt>
        </S.Output>
      </S.Drawer>
    </S.Console>
  )
}
