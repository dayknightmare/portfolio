import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Body = styled.div`
    margin-top: 40px;
`

export const Card = styled.div`
    padding: 24px;
`

export const Title = styled.div`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 19px;
`

export const Note = styled.div`
    font-size: 14px;
    line-height: 1.8;
    color: ${(p) => p.theme.colors.text.bodyDim};
    margin-top: 10px;
`

export const Emphasis = styled.strong`
    color: ${(p) => p.theme.colors.text.bright};
`

export const Commands = styled.div`
    margin-top: 40px;
`
