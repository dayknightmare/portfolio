import styled from '@emotion/styled'
import { DISPLAY, MONO } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Specs = styled.div`
    margin-top: 40px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: 24px;
    padding: 24px;
`

export const Family = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 19px;
`

export const Role = styled.div`
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
    margin-top: 6px;
`

export const Note = styled.div`
    font-size: 13px;
    color: ${(p) => p.theme.colors.text.bodyDim};
    margin-top: 8px;
`

export const Display = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: clamp(34px, 5.6vw, 62px);
    line-height: 0.95;
    letter-spacing: -0.02em;
    align-self: center;
`

export const SubDisplay = styled.div`
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 600;
    font-size: clamp(22px, 3.2vw, 34px);
    line-height: 1.25;
    align-self: center;
`

export const Interface = styled.div`
    font-family: ${MONO};
    align-self: center;
`

export const InterfaceLabel = styled.div`
    font-size: 10px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.accent};
`

export const InterfaceBody = styled.div`
    font-size: 15px;
    line-height: 1.9;
    margin-top: 10px;
    color: ${(p) => p.theme.colors.text.body};
`

export const Japanese = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 900;
    font-size: clamp(38px, 6vw, 68px);
    line-height: 1;
    letter-spacing: 0.08em;
    align-self: center;
    color: ${(p) => p.theme.colors.text.faintest};
`

export const JapaneseTail = styled.span`
    color: ${(p) => p.theme.colors.text.bright};
    font-size: 0.42em;
    letter-spacing: 0.14em;
`
