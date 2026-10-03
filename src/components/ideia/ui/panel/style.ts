import styled from '@emotion/styled'

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: ${(p) => p.theme.colors.border.rule};
    border: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Grid = styled.div<{ minCol: number }>`
    display: grid;
    grid-template-columns: ${(p) => `repeat(auto-fit, minmax(${p.minCol}px, 1fr))`};
    gap: 2px;
    background: ${(p) => p.theme.colors.border.rule};
    border: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Cell = styled.div`
    background: ${(p) => p.theme.colors.bg.base};
`
