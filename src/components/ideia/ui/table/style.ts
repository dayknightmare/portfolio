import styled from '@emotion/styled'
import { MONO } from '@/components/ideia/style'

export const Scroller = styled.div`
    overflow-x: auto;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
`

export const Th = styled.th`
    text-align: left;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.text.muted};
    padding: 8px;
    border-bottom: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Tr = styled.tr`
    &:hover {
        background: ${(p) => p.theme.colors.bg.panel};
    }
`

export const Td = styled.td<{ mono?: boolean }>`
    padding: 8px;
    border-bottom: 1px solid ${(p) => p.theme.colors.border.rule};
    ${(p) => (p.mono ? `font-family: ${MONO};` : '')}
`
