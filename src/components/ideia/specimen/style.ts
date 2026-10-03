import styled from '@emotion/styled'

export const Outer = styled.div<{ framed: boolean; scroll: boolean }>`
    ${(p) => (p.framed ? `border: 2px solid ${p.theme.colors.border.rule};` : '')}
    ${(p) => (p.scroll ? 'overflow-x: auto;' : '')}
`

export const Inner = styled.div<{ pad: number; tone: 'base' | 'alt' | 'console' }>`
    background: ${(p) => p.theme.colors.bg[p.tone]};
    padding: ${(p) => `${p.pad}px`};
    font-family: 'JetBrains Mono', monospace;
`
