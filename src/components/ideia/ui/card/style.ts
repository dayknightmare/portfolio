import styled from '@emotion/styled'
import { DISPLAY, MONO } from '@/components/ideia/style'

export const Card = styled.div`
    background: ${(p) => p.theme.colors.bg.base};
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.border.rule};
    padding: 16px;
`

export const Media = styled.div`
    margin-bottom: 10px;
`

export const Title = styled.div<{ lead?: boolean }>`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: ${(p) => (p.lead ? '16px' : '15px')};
`

export const Code = styled.div`
    font-family: ${MONO};
    font-size: 12px;
    line-height: 1.7;
    margin-top: 8px;
    color: ${(p) => p.theme.colors.accentDeep};
    white-space: pre-line;
`

export const Body = styled.div`
    font-size: 13.5px;
    line-height: 1.7;
    color: ${(p) => p.theme.colors.text.bodyDim};
    margin-top: 6px;
`

export const Grid = styled.div<{ minCol: number }>`
    display: grid;
    grid-template-columns: ${(p) => `repeat(auto-fit, minmax(${p.minCol}px, 1fr))`};
    gap: 2px;
`
