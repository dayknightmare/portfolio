import styled from '@emotion/styled'
import { DISPLAY } from '@/components/ideia/style'

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
`

export const Button = styled.button<{ active: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 14px;
    line-height: 1.2;
    padding: 8px 14.4px;
    background: transparent;
    border: 1px solid
        ${(p) => (p.active ? p.theme.colors.accent : p.theme.colors.border.rule)};
    color: ${(p) => (p.active ? p.theme.colors.accent : p.theme.colors.text.faint)};

    &:hover {
        background: ${(p) => p.theme.colors.bg.sunken};
    }
`
