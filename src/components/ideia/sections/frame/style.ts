import styled from '@emotion/styled'
import { MONO } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Body = styled.div`
    margin-top: 40px;
`

export const Metrics = styled.div`
    margin-top: 24px;
`

export const MetricRow = styled.div`
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    font-size: 14px;
`

export const MetricLabel = styled.span`
    color: ${(p) => p.theme.colors.text.bodyDim};
`

export const MetricValue = styled.span`
    font-family: ${MONO};
`

export const Coda = styled.p`
    font-size: 15px;
    line-height: 1.8;
    color: ${(p) => p.theme.colors.text.bodyDim};
    margin: 24px 0 0;
`
