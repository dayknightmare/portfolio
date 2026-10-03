import styled from '@emotion/styled'
import type { PortfolioTheme } from '@/components/themes'

const getColor = (theme: PortfolioTheme, load: number) => {
  if (load > 0.5) return theme.colors.green
  if (load > 0.25) return theme.colors.amber
  return theme.colors.dangerBright
}

export const Menu = styled.div`
    position: fixed;
    top: 46px;
    bottom: 0;
    right: 0;
    width: 180px;
    z-index: 110;
    background: ${(p) => p.theme.colors.bg.alt};
    border-left: 1px solid ${(p) => p.theme.colors.border.frame};
    padding: 16px 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 9.5px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.muted};
    overflow-y: auto;
  
    @media (max-width: 768px) {
      display: none;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(p) => p.theme.colors.accent};
    letter-spacing: 0.26em;
`

export const TitleJp = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
    color: ${(p) => p.theme.colors.text.ghost};
    font-size: 9px;
`

export const Port = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.port};
    background: ${(p) => p.theme.colors.bg.sunken};
    display: flex;
    align-items: stretch;
    gap: 0;
`

export const Plug = styled.div`
    width: 22px;
    flex: none;
    background: ${(p) => p.theme.colors.bg.plug};
    border-right: 1px solid ${(p) => p.theme.colors.border.port};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 8px 0;
`

export const PlugHead = styled.div<{ load: number; status: 'on' | 'warm' | 'off' }>`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid ${(p) => getColor(p.theme, p.load)};
    background: ${(p) => getColor(p.theme, p.load)};
    animation: ${(p) => (p.status === 'warm' || p.status === 'off' ? 'nvBlink 1.6s infinite' : 'none')};
`

export const PlugCable = styled.div<{ load: number }>`
    width: 1px;
    flex: 1;
    background: linear-gradient(to bottom, ${(p) => getColor(p.theme, p.load)}, transparent);
`

export const PlugPin = styled.div<{ load: number }>`
    width: 7px;
    height: 2px;
    background: ${(p) => getColor(p.theme, p.load)};
`

export const PortBody = styled.div`
    flex: 1;
    min-width: 0;
    padding: 9px 10px;
`

export const PortHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 6px;
`

export const PortName = styled.span`
    color: ${(p) => p.theme.colors.text.soft};
    font-size: 10.5px;
    letter-spacing: 0.16em;
`

export const PortState = styled.span<{ load: number }>`
    color: ${(p) => getColor(p.theme, p.load)};
    font-size: 8.5px;
    letter-spacing: 0.14em;
`

export const Cells = styled.div`
    margin-top: 7px;
    height: 5px;
    background: ${(p) => p.theme.colors.bg.track};
    display: flex;
    gap: 1px;
    padding: 1px;
`

export const Cell = styled.div<{ load: number; filled: boolean }>`
    flex: 1;
    background: ${(p) => (p.filled ? getColor(p.theme, p.load) : p.theme.colors.bg.cellEmpty)};
`

export const PortFoot = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    color: ${(p) => p.theme.colors.text.label};
    font-size: 8.5px;
    letter-spacing: 0.1em;
`

export const PortMetric = styled.span`
    color: ${(p) => p.theme.colors.text.tag};
`

export const Panel = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.port};
    padding: 11px;
    background: ${(p) => p.theme.colors.bg.sunken};
    color: ${(p) => p.theme.colors.text.label};
`

export const SyncPanel = styled(Panel)`
    line-height: 1.8;
`

export const SyncHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const SyncCode = styled.span`
    color: ${(p) => p.theme.colors.text.ghost};
    font-size: 8.5px;
`

export const SyncValue = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 26px;
    color: ${(p) => p.theme.colors.green};
    letter-spacing: 0.04em;
`

export const SyncTrack = styled.div`
    height: 4px;
    background: ${(p) => p.theme.colors.bg.track};
    margin: 5px 0 8px;
`

export const SyncFill = styled.div`
    height: 100%;
    background: linear-gradient(to right, ${(p) => p.theme.colors.green}, ${(p) => p.theme.colors.amber});
`

export const PanelFoot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 8.5px;
    letter-spacing: 0.1em;
`

export const SyncMark = styled.span`
    color: ${(p) => p.theme.colors.green};
`

export const UmbilicalPanel = styled(Panel)`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

export const UmbilicalHead = styled(PanelFoot)`
    letter-spacing: 0.12em;
`

export const Connected = styled.span`
    color: ${(p) => p.theme.colors.amber};
`

export const Waveform = styled.div`
    display: flex;
    gap: 2px;
    align-items: flex-end;
    height: 24px;
`

export const WaveBar = styled.div`
    flex: 1;
    background: ${(p) => p.theme.colors.greenDim};
`

export const PowerNote = styled.div`
    font-size: 8.5px;
    letter-spacing: 0.12em;
    color: ${(p) => p.theme.colors.text.ghost};
`

export const Emergency = styled.div`
    margin-top: auto;
    font-family: 'Noto Sans JP', sans-serif;
    color: ${(p) => p.theme.colors.text.ghostest};
    font-size: 9px;
    line-height: 2;
`
