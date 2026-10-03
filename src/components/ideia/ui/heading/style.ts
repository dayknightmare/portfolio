import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Heading = styled.div`
    display: flex;
    align-items: baseline;
    gap: 24px;
    flex-wrap: wrap;
`

export const Num = styled.span`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 0.18em;
    color: ${(p) => p.theme.colors.accent};
`

export const Title = styled.h2`
    font-size: clamp(30px, 4.2vw, 48px);
`

export const Note = styled.span`
    font-size: 13px;
    color: ${(p) => p.theme.colors.text.muted};
`
