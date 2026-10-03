import styled from '@emotion/styled'

export const Frame = styled.div<{ flicker: boolean }>`
    position: relative;
    overflow: hidden;
    border: 2px solid ${(p) => p.theme.colors.border.rule};
    height: 300px;
    ${(p) => (p.flicker ? 'animation: nvFlicker 4s infinite;' : '')}
`

export const Screen = styled.div`
    position: absolute;
    inset: 0;
    background: ${(p) => p.theme.colors.bg.base};
`

export const Content = styled.div`
    position: absolute;
    inset: 0;
    padding: 26px;
    color: ${(p) => p.theme.colors.text.soft};
`

export const Label = styled.div`
    font-size: 10px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.accent};
`

export const Name = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 44px;
    line-height: 0.95;
    margin-top: 16px;
    color: ${(p) => p.theme.colors.text.bright};
`

export const NameAccent = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const Body = styled.div`
    font-size: 12px;
    line-height: 1.9;
    margin-top: 14px;
    color: ${(p) => p.theme.colors.text.bodyDim};
`

export const Scanlines = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
        to bottom,
        ${(p) => p.theme.colors.line.crt} 0px,
        ${(p) => p.theme.colors.line.crt} 1px,
        transparent 1px,
        transparent 3px
    );
    mix-blend-mode: multiply;
`

export const Vignette = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
        ellipse at center,
        transparent 55%,
        ${(p) => p.theme.colors.shadow.vignette} 100%
    );
`

export const Sweep = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    height: 120px;
    pointer-events: none;
    background: linear-gradient(
        to bottom,
        transparent,
        ${(p) => p.theme.colors.line.sweep},
        transparent
    );
    animation: nvSweep 5s linear infinite;
`

export const Caption = styled.div`
    font-size: 12px;
    color: ${(p) => p.theme.colors.text.muted};
    margin-top: 8px;
`
