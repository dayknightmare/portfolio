import styled from '@emotion/styled'

export const Heading = styled.div`
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 44px;
    flex-wrap: wrap;
`

export const Num = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    color: ${(p) => p.theme.colors.accent};
    letter-spacing: 0.2em;
`

export const Title = styled.h2`
    margin: 0;
    font-family: 'Archivo Black', sans-serif;
    font-size: min(6vw, 54px);
    letter-spacing: -0.01em;
    color: ${(p) => p.theme.colors.text.bright};
`

export const Jp = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 15px;
    color: ${(p) => p.theme.colors.text.faint};
`

export const Rule = styled.div`
    flex: 1;
    height: 1px;
    background: ${(p) => p.theme.colors.border.hairline};
`
