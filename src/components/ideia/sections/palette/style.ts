import styled from '@emotion/styled'
import { MONO } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: 2px;
    margin-top: 40px;
`

export const Card = styled.div`
    background: ${(p) => p.theme.colors.bg.base};
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.border.rule};
`

export const Swatch = styled.div<{ ink: string }>`
    height: 104px;
    background: ${(p) => p.ink};
`

export const Meta = styled.div`
    padding: 16px;
`

export const Code = styled.div`
    font-family: ${MONO};
    font-size: 14px;
    font-weight: 700;
`

export const Name = styled.div`
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
    margin-top: 4px;
`

export const Body = styled.div`
    font-size: 13px;
    color: ${(p) => p.theme.colors.text.bodyDim};
    margin-top: 6px;
`
