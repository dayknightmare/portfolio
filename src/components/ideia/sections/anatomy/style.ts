import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Section = styled.section`
    padding: 72px 0;
    border-top: 2px solid ${(p) => p.theme.colors.border.rule};
`

export const Figure = styled.div`
    margin-top: 12px;
`

export const TopbarNotes = styled.div`
    margin-top: 2px;
`

export const Japanese = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 15px;
    letter-spacing: 0.3em;
    color: ${(p) => p.theme.colors.text.muted};
    margin-top: 16px;
`

export const JapaneseNote = styled.span`
    font-family: ${DISPLAY};
    font-size: 13px;
    letter-spacing: 0;
`
