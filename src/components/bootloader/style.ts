import styled from '@emotion/styled'

export const LineAnimation = styled.div`
    ${(props) => `
        height: 100%;
        background: ${props.theme.colors.grade.highest};
        animation: nvBar 2.4s ease-in-out infinite alternate;
    `}
`

export const Line = styled.div`
    ${(props) => `
        height: 3px;
        background: ${props.theme.colors.grade.empty};
        overflow: hidden;
    `}
`

export const Blank = styled.div`
    ${(props) => `
        color: ${props.theme.colors.accent};
        animation: nvBlink 0.9s infinite;
    `}
`

export const Screen = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
    background: ${(p) => p.theme.colors.bg.boot};
    padding: 6vh 6vw;
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 13px;
    line-height: 1.9;
    color: ${(p) => p.theme.colors.green};
    font-family: 'JetBrains Mono', monospace;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(p) => p.theme.colors.border.boot};
    padding-bottom: 14px;
`

export const Title = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 26px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.accent};
`

export const Log = styled.div`
    flex: 1;
    overflow: hidden;
`

export const LogLine = styled.div`
    display: flex;
    gap: 16px;
`

export const LogMark = styled.span`
    color: ${(p) => p.theme.colors.greenDim};
`
