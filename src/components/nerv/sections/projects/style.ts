import styled from '@emotion/styled'

export const Section = styled.section`
    position: relative;
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.base};
`

export const StickyWrap = styled.div`
    position: sticky;
    top: 0;
    z-index: 60;
    height: 0;
    overflow: visible;
    pointer-events: none;
`

export const DoorViewport = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 46px);
    overflow: hidden;
    clip-path: inset(0);
`

export const DoorPanel = styled.div<{ side: 'left' | 'right' }>`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50.2%;
    background: ${(p) => p.theme.colors.bg.door};
    transition: transform 0.12s linear;
    ${(p) =>
      p.side === 'left'
        ? `
        left: 0;
        border-right: 2px solid ${p.theme.colors.border.strong};
        box-shadow: 14px 0 40px ${p.theme.colors.shadow.door};
    `
        : `
        right: 0;
        border-left: 2px solid ${p.theme.colors.border.strong};
        box-shadow: -14px 0 40px ${p.theme.colors.shadow.door};
    `}
`

export const Scanlines = styled.div`
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        to bottom,
        ${(p) => p.theme.colors.line.scan} 0 2px,
        transparent 2px 26px
    );
`

export const DoorContentLeft = styled.div`
    position: absolute;
    top: 48px;
    left: 44px;
    right: 40px;
    bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DoorContentRight = styled.div`
    position: absolute;
    top: 48px;
    left: 44px;
    right: 44px;
    bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const LimitJp = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 13px;
    letter-spacing: 0.28em;
`

export const LimitEn = styled.div`
    font-size: 11px;
    letter-spacing: 0.3em;
`

export const Countdown = styled.div`
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    font-size: min(11vw, 116px);
    line-height: 0.9;
    letter-spacing: 0.06em;
`

export const PowerBlock = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const PowerRowBordered = styled.div`
    padding: 6px 12px;
    display: flex;
    align-items: baseline;
    gap: 12px;
`

export const PowerRowPlain = styled.div`
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 0 12px;
    opacity: 0.45;
`

export const PowerCard = styled.div`
    padding: 6px 12px;
`

export const PowerKanjiLg = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 900;
    font-size: 24px;
`

export const PowerLabel = styled.span`
    font-size: 12px;
    letter-spacing: 0.24em;
`

export const PowerCardJp = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    font-size: 16px;
`

export const PowerCardEn = styled.div`
    font-size: 11px;
    letter-spacing: 0.22em;
`

export const SealedRow = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 10.5px;
    letter-spacing: 0.26em;
`

export const SealedTag = styled.span`
    padding: 4px 10px;
`

export const SealedRule = styled.span`
    flex: 1;
    height: 1px;
    opacity: 0.4;
`

export const SealedJp = styled.span`
    font-family: 'Noto Sans JP', sans-serif;
`

export const RepoMiniGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
`

export const RepoMiniRow = styled.div`
    background: ${(p) => p.theme.colors.bg.door};
    padding: 11px 14px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
`

export const RepoMiniName = styled.span`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 15px;
`

export const RepoMiniLang = styled.span`
    font-size: 9px;
    letter-spacing: 0.16em;
    opacity: 0.6;
`

export const ModeRow = styled.div`
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
`

export const Mode = styled.span`
    font-size: 10px;
    letter-spacing: 0.22em;
    padding: 5px 12px;
`

export const Danger = styled.span`
    margin-left: auto;
    font-family: 'Archivo Black', sans-serif;
    font-size: 14px;
    letter-spacing: 0.2em;
    color: ${(p) => p.theme.colors.dangerBright};
    animation: nvBlink 0.7s infinite;
`

export const ScrollHint = styled.span`
    font-size: 10px;
    letter-spacing: 0.24em;
    opacity: 0.7;
`

export const Content = styled.div`
    padding: 88px 56px;

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 18px;
`

export const Card = styled.div`
    text-decoration: none;
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.panel};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-height: 210px;
`

export const CardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
`

export const CardUnit = styled.span`
    font-family: 'Archivo Black', sans-serif;
    font-size: 12px;
    color: ${(p) => p.theme.colors.text.faintest};
    letter-spacing: 0.18em;
`

export const CardStatus = styled.span<{status: string}>`
    ${props => `
        font-size: 9.5px;
        letter-spacing: 0.2em;
        padding: 4px 8px;
        color: ${
            props.status === 'ACTIVE' ? 
                props.theme.colors.green :
                props.status === 'STABLE' ?
                    props.theme.colors.amber :
                    props.theme.colors.danger    
        };
        border: 1px solid ${
            props.status === 'ACTIVE' ?
                props.theme.colors.green :
                props.status === 'STABLE' ?
                    props.theme.colors.amber :
                    props.theme.colors.danger
        };
    `}
`

export const CardName = styled.div`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 23px;
    letter-spacing: 0.02em;
    color: ${(p) => p.theme.colors.text.bright};
`

export const CardDesc = styled.div`
    font-size: 13px;
    line-height: 1.85;
    color: ${(p) => p.theme.colors.text.dim};
    text-wrap: pretty;
`

export const CardFoot = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10.5px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.muted};
`

export const CardLang = styled.span`
    color: ${(p) => p.theme.colors.amber};
`

export const Runway = styled.div`
    height: 129vh;
`
