import styled from '@emotion/styled'

export const Port = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.port};
    background: ${(p) => p.theme.colors.bg.sunken};
    display: flex;
`

export const Plug = styled.div`
    width: 22px;
    background: ${(p) => p.theme.colors.bg.plug};
    border-right: 1px solid ${(p) => p.theme.colors.border.port};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 8px 0;
`

export const PlugDot = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid ${(p) => p.theme.colors.green};
    background: ${(p) => p.theme.colors.green};
`

export const PlugLine = styled.div`
    width: 1px;
    flex: 1;
    background: linear-gradient(to bottom, ${(p) => p.theme.colors.green}, transparent);
`

export const PlugFoot = styled.div`
    width: 7px;
    height: 2px;
    background: ${(p) => p.theme.colors.green};
`

export const Body = styled.div`
    flex: 1;
    padding: 9px 10px;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const Name = styled.span`
    color: ${(p) => p.theme.colors.text.soft};
    font-size: 10.5px;
    letter-spacing: 0.16em;
`

export const Status = styled.span`
    color: ${(p) => p.theme.colors.green};
    font-size: 8.5px;
    letter-spacing: 0.14em;
`

export const GaugeSlot = styled.div`
    margin-top: 7px;
`

export const Metrics = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    color: ${(p) => p.theme.colors.text.label};
    font-size: 8.5px;
    letter-spacing: 0.1em;
`

export const MetricValue = styled.span`
    color: ${(p) => p.theme.colors.text.tag};
`
