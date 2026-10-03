import styled from '@emotion/styled'
import { DISPLAY, MONO } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 130px) minmax(0, 220px) minmax(0, 1fr);
    gap: 24px;
    padding: 24px 0;
    border-bottom: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Pass = styled.div`
    font-family: ${MONO};
    font-size: 13px;
    letter-spacing: 0.12em;
    color: ${(p) => p.theme.colors.accent};
`

export const Title = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 19px;
`

export const Body = styled.div`
    font-size: 15px;
    line-height: 1.8;
    color: ${(p) => p.theme.colors.text.bodyDim};
`
