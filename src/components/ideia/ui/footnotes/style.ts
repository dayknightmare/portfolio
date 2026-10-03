import styled from '@emotion/styled'

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 16px;
    font-size: 13px;
    color: ${(p) => p.theme.colors.text.bodyDim};
`

export const Label = styled.strong`
    color: ${(p) => p.theme.colors.text.bright};
`
