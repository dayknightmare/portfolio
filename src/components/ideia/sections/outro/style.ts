import styled from '@emotion/styled'
import { DISPLAY, MONO } from '@/components/ideia/style'

export const Section = styled.section`
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.bg.base};
    margin-top: 32px;
`

export const Inner = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    padding: 88px 48px;
`

export const Kicker = styled.div`
    font-size: 12px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    opacity: 0.85;
`

export const Title = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: clamp(38px, 6.4vw, 84px);
    line-height: 1.02;
    letter-spacing: -0.025em;
    margin-top: 16px;
    max-width: 20ch;
`

export const Foot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 48px;
    align-items: center;
`

export const Signature = styled.span`
    font-family: ${MONO};
    font-size: 13px;
    opacity: 0.9;
`
