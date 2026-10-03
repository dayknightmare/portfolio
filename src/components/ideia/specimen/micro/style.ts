import styled from '@emotion/styled'

export const Stage = styled.div<{ inset: boolean }>`
    background: ${(p) => p.theme.colors.bg.base};
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(p) => (p.inset ? 'padding: 0 16px;' : '')}
`

export const Hazard = styled.div`
    width: 100%;
    height: 16px;
    background: repeating-linear-gradient(
        45deg,
        ${(p) => p.theme.colors.accent} 0 8px,
        ${(p) => p.theme.colors.bg.bar} 8px 16px
    );
`

export const Ring = styled.div`
    width: 26px;
    height: 26px;
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    border-top-color: transparent;
    animation: nvSpin 3s linear infinite;
`

export const Alert = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.18em;
    color: ${(p) => p.theme.colors.danger};
`

export const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.danger};
    animation: nvBlink 1.4s infinite;
`

export const GaugeSlot = styled.div`
    width: 100%;
`
