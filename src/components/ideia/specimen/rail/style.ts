import styled from '@emotion/styled'

export type ItemState = 'active' | 'hover' | 'idle'

export const Layout = styled.div`
    display: flex;
    gap: 22px;
`

export const Rail = styled.div`
    width: 78px;
    border-right: 1px solid ${(p) => p.theme.colors.border.frame};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`

export const Item = styled.div<{ state: ItemState }>`
    width: 100%;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-left: 3px solid
        ${(p) => (p.state === 'active' ? p.theme.colors.accent : 'transparent')};
    background: ${(p) => (p.state === 'hover' ? p.theme.colors.bg.watermark : 'transparent')};
    color: ${(p) => (p.state === 'active' ? p.theme.colors.accent : p.theme.colors.text.muted)};
`

export const Num = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 15px;
`

export const ItemLabel = styled.span`
    font-size: 8px;
    letter-spacing: 0.14em;
    writing-mode: vertical-rl;
`

export const Legend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 26px;
    font-size: 10.5px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.muted};
`

export const LegendTitle = styled.span<{ state: ItemState }>`
    color: ${(p) =>
      p.state === 'active'
        ? p.theme.colors.accent
        : p.state === 'hover'
          ? p.theme.colors.text.soft
          : p.theme.colors.text.tag};
`

export const LegendBody = styled.span`
    font-size: 9.5px;
`
