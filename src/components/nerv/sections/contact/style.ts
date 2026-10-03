import styled from '@emotion/styled'

export const Section = styled.section`
    position: relative;
    padding: 88px 56px 120px;
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.base};
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const DotField = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0.22;
    background-image: linear-gradient(${(p) => p.theme.colors.text.bright} 0 0),
        linear-gradient(${(p) => p.theme.colors.text.bright} 0 0);
    background-size: 14px 1.5px, 1.5px 14px;
    background-position: center center;
    background-repeat: repeat;
    mask-image: radial-gradient(circle at 50% 50%, #000 0 3px, transparent 3.5px);
    mask-size: 88px 88px;
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 0 3px, transparent 3.5px);
    -webkit-mask-size: 88px 88px;
`

export const Corner = styled.div<{ pos: 'tl' | 'tr' | 'bl' | 'br' }>`
    position: absolute;
    width: 34px;
    height: 34px;
    z-index: 2;
    opacity: 0.35;
    pointer-events: none;
    ${(p) => (p.pos === 'tl' || p.pos === 'tr' ? 'top: 20px;' : 'bottom: 20px;')}
    ${(p) => (p.pos === 'tl' || p.pos === 'bl' ? 'left: 20px;' : 'right: 20px;')}
    ${(p) =>
      p.pos === 'tl' || p.pos === 'tr'
        ? `border-top: 2px solid ${p.theme.colors.text.bright};`
        : `border-bottom: 2px solid ${p.theme.colors.text.bright};`}
    ${(p) =>
      p.pos === 'tl' || p.pos === 'bl'
        ? `border-left: 2px solid ${p.theme.colors.text.bright};`
        : `border-right: 2px solid ${p.theme.colors.text.bright};`}
`

export const Rec = styled.div`
    position: absolute;
    top: 26px;
    right: 66px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 9.5px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.text.soft};
    pointer-events: none;
`

export const RecDot = styled.span`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.danger};
    animation: nvBlink 1.2s infinite;
`

export const Header = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 44px;
    flex-wrap: wrap;
`

export const HeaderNum = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    color: ${(p) => p.theme.colors.accent};
    letter-spacing: 0.2em;
`

export const HeaderTitle = styled.h2`
    margin: 0;
    font-family: 'Archivo Black', sans-serif;
    font-size: min(6vw, 54px);
    color: ${(p) => p.theme.colors.text.bright};
`

export const HeaderJp = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 15px;
    color: ${(p) => p.theme.colors.text.faint};
`

export const HeaderRule = styled.div`
    flex: 1;
    height: 1px;
    background: ${(p) => p.theme.colors.border.hairline};
`

export const Lead = styled.div<{ ja?: boolean }>`
    position: relative;
    z-index: 2;
    font-family: ${(p) => (p.ja ? "'Noto Sans JP', sans-serif" : "'Archivo Black', sans-serif")};
    font-weight: 900;
    font-size: min(6.4vw, 60px);
    line-height: 1.06;
    color: ${(p) => p.theme.colors.text.bright};
    max-width: 24ch;
    text-shadow: 0 2px 18px ${(p) => p.theme.colors.shadow.lead};
`

export const Channels = styled.div`
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1px;
    margin-top: 48px;
    background: ${(p) => p.theme.colors.border.hairline};
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
`

export const Channel = styled.a`
    text-decoration: none;
    background: ${(p) => p.theme.colors.bg.channel};
    padding: 24px 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ChannelLabel = styled.span`
    font-size: 9.5px;
    letter-spacing: 0.24em;
    color: ${(p) => p.theme.colors.accent};
`

export const ChannelValue = styled.span`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 17px;
    color: ${(p) => p.theme.colors.text.soft};
    word-break: break-all;
`

export const Footer = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 56px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: ${(p) => p.theme.colors.text.faintest};
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    padding-top: 20px;
`
