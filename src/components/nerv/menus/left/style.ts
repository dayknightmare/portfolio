import styled from '@emotion/styled'

export const Menu = styled.div`
    position: fixed;
    top: 46px;
    bottom: 0;
    left: 0;
    width: 78px;
    z-index: 110;
    background: ${(p) => p.theme.colors.bg.alt};
    border-right: 1px solid ${(p) => p.theme.colors.border.frame};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 0;
    gap: 6px;
    
    @media (max-width: 512px) {
        display: none;
    }
`

export const Item = styled.div<{ active: boolean }>`
    width: 100%;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border-left: 3px solid ${(p) => (p.active ? p.theme.colors.accent : 'transparent')};
    color: ${(p) => (p.active ? p.theme.colors.accent : p.theme.colors.text.muted)};
`

export const ItemNum = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 15px;
`

export const ItemLabel = styled.span`
    font-size: 8px;
    letter-spacing: 0.14em;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    height: 74px;
    overflow: hidden;
`

export const Footer = styled.div`
    margin-top: auto;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 10px;
    color: ${(p) => p.theme.colors.text.ghost};
    writing-mode: vertical-rl;
    letter-spacing: 0.3em;
`
