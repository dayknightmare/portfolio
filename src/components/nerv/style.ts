import styled from '@emotion/styled'

export const Root = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: ${(p) => p.theme.colors.bg.base};
    color: ${(p) => p.theme.colors.text.soft};
    font-family: 'JetBrains Mono', monospace;
    overflow: hidden;
    animation: nvFlicker 7s infinite;
`

export const Scroller = styled.div`
    position: absolute;
    top: 46px;
    left: 78px;
    right: 180px;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 56px;

    @media (max-width: 768px) {
        right: 0;
    }

    @media (max-width: 512px) {
        left: 0;
    }
`
