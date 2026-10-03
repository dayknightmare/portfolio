import styled from '@emotion/styled'

export const Prose = styled.div<{ dim?: boolean }>`
    font-size: ${(p) => (p.dim ? '15px' : '16px')};
    line-height: 1.8;
    color: ${(p) => (p.dim ? p.theme.colors.text.bodyDim : p.theme.colors.text.body)};

    p {
        margin: 0 0 18px;
        text-wrap: pretty;
    }

    p:last-of-type {
        margin: 0;
    }
`

export const Lede = styled.p`
    max-width: 62ch;
    margin: 32px 0 0;
    font-size: 17px;
    line-height: 1.75;
    color: ${(p) => p.theme.colors.text.body};
`

export const Split = styled.div<{ minCol?: number }>`
    display: grid;
    grid-template-columns: ${(p) => `repeat(auto-fit, minmax(${p.minCol ?? 320}px, 1fr))`};
    gap: 48px;
    align-items: start;
`

export const Measure = styled.p`
    max-width: 78ch;
    margin: 12px 0 0;
    font-size: 16px;
    line-height: 1.8;
    color: ${(p) => p.theme.colors.text.body};
`
