import styled from '@emotion/styled'

export const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    z-index: 120;
    background: ${(p) => p.theme.colors.bg.bar};
    border-bottom: 1px solid ${(p) => p.theme.colors.border.frame};
    display: flex;
    align-items: stretch;
    font-size: 10.5px;
    letter-spacing: 0.22em;
`

export const Clearance = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`

export const Time = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`

export const Hazard = styled.div`
    width: 16px;
    background: repeating-linear-gradient(
        45deg,
        ${(p) => p.theme.colors.accent} 0 8px,
        ${(p) => p.theme.colors.bg.bar} 8px 16px
    );
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 18px;
    border-right: 1px solid ${(p) => p.theme.colors.border.frame};

    @media (max-width: 588px) {
        display: none;
    }
`

export const Spinner = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    border-top-color: transparent;
    animation: nvSpin 3s linear infinite;
`

export const BrandName = styled.span`
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 0.3em;
    color: ${(p) => p.theme.colors.accent};
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 0 20px;
    color: ${(p) => p.theme.colors.text.nav};
    flex: 1;
    overflow: hidden;
`

export const InfoValue = styled.span`
    color: ${(p) => p.theme.colors.text.soft};
`

export const Uptime = styled.span`
    color: ${(p) => p.theme.colors.green};
`

export const Alert = styled.span<{ blue: boolean }>`
    ${(props) => `
        color: ${props.blue ? props.theme.colors.dangerBright : props.theme.colors.green};
        ${props.blue ? 'animation: nvBlink 1.4s infinite;' : ''}
    `}

    @media (max-width: 425px) {
        display: none;
    }
`

export const LangSwitch = styled.div`
    display: flex;
    align-items: stretch;
    border-left: 1px solid ${(p) => p.theme.colors.border.frame};
`

export const LangOption = styled.div<{ active: boolean; ja?: boolean }>`
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
    color: ${(p) => (p.active ? p.theme.colors.bg.base : p.theme.colors.text.muted)};
    background: ${(p) => (p.active ? p.theme.colors.accent : 'transparent')};
    ${(p) =>
      p.ja &&
      `
        border-left: 1px solid ${p.theme.colors.border.frame};
        font-family: 'Noto Sans JP', sans-serif;
    `}
`
