import styled from '@emotion/styled'

export const Scanlines = styled.div`
    position: fixed;
    inset: 0;
    z-index: 150;
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
    position: fixed;
    inset: 0;
    z-index: 151;
    pointer-events: none;
    background: radial-gradient(
        ellipse at center,
        transparent 55%,
        ${(p) => p.theme.colors.shadow.vignette} 100%
    );
    left: -70px;
    top: -27px;
`

export const Sweep = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    height: 120px;
    z-index: 152;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent, ${(p) => p.theme.colors.line.sweep}, transparent);
    animation: nvSweep 9s linear infinite;
`
