import styled from '@emotion/styled'

export const DISPLAY = "'Archivo', system-ui, sans-serif"
export const MONO = "'JetBrains Mono', monospace"

export const Root = styled.div`
    width: 100%;
    background: ${(p) => p.theme.colors.bg.base};
    color: ${(p) => p.theme.colors.text.bright};
    font-family: ${DISPLAY};
    font-size: 15px;
    line-height: 1.55;

    h1,
    h2,
    h3,
    h4 {
        font-family: ${DISPLAY};
        font-weight: 800;
        margin: 0;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 48px;
    border-bottom: 2px solid ${(p) => p.theme.colors.border.rule};
    position: sticky;
    top: 0;
    background: ${(p) => p.theme.colors.bg.base};
    z-index: 20;
`

export const HeaderGroup = styled.div`
    display: flex;
    align-items: baseline;
    gap: 16px;
`

export const Brand = styled.span`
    font-family: ${DISPLAY};
    font-weight: 800;
    font-size: 15px;
    letter-spacing: 0.02em;
`

export const HeaderMeta = styled.span`
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.text.muted};
`

export const Container = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 48px;
`
