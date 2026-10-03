import styled from '@emotion/styled'

const TERM_HEIGHT = 230

export const Console = styled.div`
    position: fixed;
    left: 78px;
    right: 180px;
    bottom: 0;
    z-index: 130;
    background: ${(p) => p.theme.colors.bg.console};
    border-top: 1px solid ${(p) => p.theme.colors.border.subtle};
    font-size: 12px;
`

export const Toggle = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 9px 18px;
    cursor: pointer;
    color: ${(p) => p.theme.colors.green};
    letter-spacing: 0.2em;
    font-size: 10px;
`

export const ToggleArrow = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const ToggleHint = styled.span`
    color: ${(p) => p.theme.colors.text.console};
`

export const ToggleLabel = styled.span`
    margin-left: auto;
    color: ${(p) => p.theme.colors.text.console};
`

export const Drawer = styled.div<{ expanded: boolean }>`
    max-height: ${(p) => (p.expanded ? TERM_HEIGHT : 0)}px;
    overflow: hidden;
    transition: max-height 0.28s ease;
    border-top: 1px solid ${(p) => p.theme.colors.border.console};
`

export const Output = styled.div`
    height: ${TERM_HEIGHT}px;
    overflow-y: auto;
    padding: 16px 18px;
    line-height: 1.85;
    background: ${(p) => p.theme.colors.bg.console};
`

export const OutputLine = styled.div<{ tone: string }>`
    color: ${(p) => p.tone};
    white-space: pre-wrap;
`

export const Prompt = styled.form`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 8px;
`

export const PromptLabel = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const Input = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: ${(p) => p.theme.colors.green};
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    caret-color: ${(p) => p.theme.colors.green};
`
