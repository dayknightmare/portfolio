import styled from '@emotion/styled'

export const Section = styled.section`
    min-height: calc(100vh - 102px);
    padding: 64px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: ${(p) => p.theme.colors.bg.heroGradient};
    
    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const Watermark = styled.div`
    position: absolute;
    z-index: 0;
    top: 40px;
    right: 60px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 900;
    font-size: min(14vw, 190px);
    color: ${(p) => p.theme.colors.bg.watermark};
    letter-spacing: 0.1em;
    line-height: 0.9;
    pointer-events: none;
    user-select: none;
`

export const Kicker = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 11px;
    letter-spacing: 0.34em;
    color: ${(p) => p.theme.colors.accent};
`

export const KickerRule = styled.div`
    width: 56px;
    height: 1px;
    background: ${(p) => p.theme.colors.accent};
`

export const Title = styled.h1`
    position: relative;
    z-index: 1;
    margin: 22px 0 0;
    font-family: 'Archivo Black', sans-serif;
    font-size: min(9vw, 112px);
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.text.bright};
    text-wrap: balance;
`

export const Accent = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const Role = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 10px;
    font-family: 'Chakra Petch', sans-serif;
    font-size: min(3.4vw, 32px);
    letter-spacing: 0.06em;
    color: ${(p) => p.theme.colors.text.dim};
`

export const RoleAccent = styled.span`
    color: ${(p) => p.theme.colors.text.soft};
`

export const Intro = styled.p`
    max-width: 66ch;
    margin: 30px 0 0;
    font-size: 14.5px;
    line-height: 2;
    color: ${(p) => p.theme.colors.text.bodyDim};
    text-wrap: pretty;
`

export const CtaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 38px;
`

export const CtaPrimary = styled.div`
    cursor: pointer;
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.bg.base};
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    letter-spacing: 0.2em;
    padding: 16px 28px;
`

export const CtaSecondary = styled.div`
    cursor: pointer;
    border: 1px solid ${(p) => p.theme.colors.border.cta};
    color: ${(p) => p.theme.colors.text.body};
    font-size: 13px;
    letter-spacing: 0.2em;
    padding: 16px 28px;
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1px;
    margin-top: 56px;
    background: ${(p) => p.theme.colors.border.hairline};
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
`

export const StatCell = styled.div`
    background: ${(p) => p.theme.colors.bg.panel};
    padding: 18px 20px;
`

export const StatLabel = styled.div`
    font-size: 9.5px;
    letter-spacing: 0.22em;
    color: ${(p) => p.theme.colors.text.muted};
`

export const StatValue = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 30px;
    color: ${(p) => p.theme.colors.accent};
    margin-top: 8px;
`
