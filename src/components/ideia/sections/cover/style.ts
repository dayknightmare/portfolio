import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 96px 0 72px;
`

export const Kicker = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 12px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
`

export const KickerRule = styled.span`
    width: 64px;
    height: 2px;
    background: ${(p) => p.theme.colors.accent};
`

export const Title = styled.h1`
    margin: 24px 0 0;
    font-size: clamp(56px, 8.4vw, 116px);
    line-height: 0.92;
    letter-spacing: -0.03em;
`

export const TitleAccent = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const Stats = styled.div`
    margin-top: 56px;
`

export const StatCell = styled.div`
    padding: 16px 24px;
`

export const StatLabel = styled.div`
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.text.muted};
`

export const StatValue = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 22px;
    margin-top: 6px;
`
