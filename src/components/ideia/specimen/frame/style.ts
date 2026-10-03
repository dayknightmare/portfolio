import styled from '@emotion/styled'

const dashed = (color: string) => `border: 1px dashed ${color};`

export const Topbar = styled.div`
    ${(p) => dashed(p.theme.colors.text.faint)}
    display: flex;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: ${(p) => p.theme.colors.accent};
    font-size: 10px;
    letter-spacing: 0.16em;
`

export const TopbarMeta = styled.span`
    color: ${(p) => p.theme.colors.text.muted};
`

export const Middle = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    height: 270px;
`

export const Rail = styled.div`
    ${(p) => dashed(p.theme.colors.text.faint)}
    width: 56px;
    color: ${(p) => p.theme.colors.accent};
    font-size: 9px;
    letter-spacing: 0.14em;
    writing-mode: vertical-rl;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Scroll = styled.div`
    ${(p) => dashed(p.theme.colors.text.faint)}
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${(p) => p.theme.colors.text.soft};
    font-size: 11px;
    letter-spacing: 0.14em;
`

export const ScrollMeta = styled.span`
    color: ${(p) => p.theme.colors.text.muted};
    font-size: 9.5px;
    text-align: center;
    line-height: 1.9;
`

export const Magi = styled.div`
    ${(p) => dashed(p.theme.colors.text.faint)}
    width: 110px;
    color: ${(p) => p.theme.colors.accent};
    font-size: 9px;
    letter-spacing: 0.14em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Dock = styled.div`
    ${(p) => dashed(p.theme.colors.text.faint)}
    display: flex;
    height: 38px;
    margin-top: 8px;
    align-items: center;
    padding: 0 10px;
    color: ${(p) => p.theme.colors.green};
    font-size: 10px;
    letter-spacing: 0.16em;
`
