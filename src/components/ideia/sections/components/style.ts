import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Body = styled.div`
    margin-top: 40px;
`

export const Part = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Kicker = styled.div`
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
`

export const Title = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 21px;
    margin-top: 4px;
`

export const Note = styled.div`
    font-size: 14px;
    line-height: 1.75;
    color: ${(p) => p.theme.colors.text.bodyDim};
`
