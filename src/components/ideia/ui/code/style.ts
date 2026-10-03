import styled from '@emotion/styled'
import { MONO } from '@/components/ideia/style'

export const Code = styled.code<{ small?: boolean }>`
    font-family: ${MONO};
    font-size: ${(p) => (p.small ? '13px' : '14px')};
    background: ${(p) => p.theme.colors.bg.cellEmpty};
    padding: 1px 5px;
`
