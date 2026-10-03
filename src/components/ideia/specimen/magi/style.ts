import styled from '@emotion/styled'

export type NodeTone = 'on' | 'warn'

export const Label = styled.div`
    font-size: 9.5px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.accent};
`

export const Nodes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 14px;
`

export const Node = styled.div<{ tone: NodeTone }>`
    border: 1px solid
        ${(p) => (p.tone === 'on' ? p.theme.colors.green : p.theme.colors.amber)};
    padding: 10px 8px;
`

export const NodeName = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    color: ${(p) => p.theme.colors.text.soft};
`

export const NodeStatus = styled.div<{ tone: NodeTone }>`
    font-size: 8.5px;
    letter-spacing: 0.14em;
    margin-top: 5px;
    color: ${(p) => (p.tone === 'on' ? p.theme.colors.green : p.theme.colors.amber)};
`

export const Umbilical = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 6px;
`

export const Strand = styled.div<{ side: 'left' | 'none' | 'right' }>`
    flex: 1;
    height: 14px;
    border-bottom: 1px solid ${(p) => p.theme.colors.greenDim};
    ${(p) => (p.side === 'none' ? '' : `border-${p.side}: 1px solid ${p.theme.colors.greenDim};`)}
`

export const Ratio = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.port};
    background: ${(p) => p.theme.colors.bg.sunken};
    padding: 12px;
    margin-top: 6px;
`

export const RatioHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.label};
`

export const RatioCode = styled.span`
    color: ${(p) => p.theme.colors.text.ghost};
`

export const RatioValue = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 26px;
    color: ${(p) => p.theme.colors.green};
    margin-top: 2px;
`

export const RatioTrack = styled.div`
    height: 4px;
    background: ${(p) => p.theme.colors.bg.track};
    margin-top: 6px;
`

export const RatioFill = styled.div`
    height: 100%;
    width: 98%;
    background: linear-gradient(
        to right,
        ${(p) => p.theme.colors.green},
        ${(p) => p.theme.colors.amber}
    );
`

export const RatioNote = styled.div`
    font-size: 8.5px;
    letter-spacing: 0.12em;
    color: ${(p) => p.theme.colors.text.label};
    margin-top: 8px;
`

export const Caption = styled.div`
    font-size: 9px;
    letter-spacing: 0.14em;
    color: ${(p) => p.theme.colors.text.console};
    margin-top: 12px;
`
