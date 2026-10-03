import styled from '@emotion/styled'

export const Bar = styled.div`
    display: flex;
    align-items: stretch;
    height: 46px;
    min-width: 940px;
    background: ${(p) => p.theme.colors.bg.bar};
    border-bottom: 1px solid ${(p) => p.theme.colors.border.frame};
    font-size: 9.5px;
    white-space: nowrap;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.nav};
`

export const HazardCap = styled.div`
    width: 16px;
    flex: none;
    background: repeating-linear-gradient(
        45deg,
        ${(p) => p.theme.colors.accent} 0 8px,
        ${(p) => p.theme.colors.bg.bar} 8px 16px
    );
`

export const BrandBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 18px;
    border-right: 1px solid ${(p) => p.theme.colors.border.frame};
`

export const Ring = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    border-top-color: transparent;
    animation: nvSpin 3s linear infinite;
`

export const Brand = styled.span`
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 0.3em;
    color: ${(p) => p.theme.colors.accent};
`

export const Telemetry = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 0 16px;
    flex: 1;
`

export const Value = styled.span<{ tone: 'soft' | 'green' }>`
    color: ${(p) => (p.tone === 'green' ? p.theme.colors.green : p.theme.colors.text.soft)};
`

export const Alert = styled.span`
    color: ${(p) => p.theme.colors.danger};
    animation: nvBlink 1.4s infinite;
`

export const Controls = styled.div`
    display: flex;
    align-items: stretch;
    border-left: 1px solid ${(p) => p.theme.colors.border.frame};
`

export const LangButton = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    padding: 0 14px;
    ${(p) =>
      p.active
        ? `background: ${p.theme.colors.accent}; color: ${p.theme.colors.bg.base};`
        : `border-left: 1px solid ${p.theme.colors.border.frame};
           font-family: 'Noto Sans JP', sans-serif;`}
`
