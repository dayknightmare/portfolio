import styled from '@emotion/styled'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Body = styled.div`
    margin-top: 40px;
`

export const VerdictCell = styled.div`
    padding: 16px 24px;
`

export const VerdictLabel = styled.div`
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
`

export const VerdictBody = styled.div`
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.7;
`

export const Conventions = styled.div`
    margin-top: 24px;
`

export const Mapping = styled.div`
    margin-top: 40px;
`

export const Readout = styled.div`
    margin-top: 12px;
`
