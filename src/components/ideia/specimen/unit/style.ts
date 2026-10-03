import styled from '@emotion/styled'

export const Card = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.panel};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 11px;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Unit = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 11px;
    color: ${(p) => p.theme.colors.text.faintest};
    letter-spacing: 0.18em;
`

export const Status = styled.span`
    font-size: 9px;
    letter-spacing: 0.2em;
    color: ${(p) => p.theme.colors.green};
    border: 1px solid ${(p) => p.theme.colors.green};
    padding: 3px 7px;
`

export const Name = styled.div`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 19px;
    color: ${(p) => p.theme.colors.text.bright};
`

export const Body = styled.div`
    font-size: 11.5px;
    line-height: 1.8;
    color: ${(p) => p.theme.colors.text.dim};
`

export const Foot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 9.5px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.muted};
`

export const Lang = styled.span`
    color: ${(p) => p.theme.colors.amber};
`
