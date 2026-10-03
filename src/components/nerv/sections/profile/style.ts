import styled from '@emotion/styled'

export const Section = styled.section`
    padding: 88px 56px;
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.alt};

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
`

export const Prose = styled.div`
    font-size: 14.5px;
    line-height: 2.05;
    color: ${(p) => p.theme.colors.text.bodyDim};

    p {
        margin: 0 0 18px;
        text-wrap: pretty;
    }

    p:last-of-type {
        margin: 0;
    }
`

export const Facts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: ${(p) => p.theme.colors.border.hairline};
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
    align-self: start;
`

export const FactRow = styled.div`
    background: ${(p) => p.theme.colors.bg.sunken};
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;
`

export const FactKey = styled.span`
    color: ${(p) => p.theme.colors.text.muted};
    letter-spacing: 0.18em;
`

export const FactValue = styled.span`
    color: ${(p) => p.theme.colors.text.soft};
    text-align: right;
`
