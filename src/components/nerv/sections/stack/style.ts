import styled from '@emotion/styled'

export const Section = styled.section`
    padding: 88px 56px;
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.alt};

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1px;
    background: ${(p) => p.theme.colors.border.hairline};
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
`

export const Group = styled.div`
    background: ${(p) => p.theme.colors.bg.panel};
    padding: 24px 22px;
`

export const GroupHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    letter-spacing: 0.22em;
    color: ${(p) => p.theme.colors.accent};
`

export const GroupCode = styled.span`
    color: ${(p) => p.theme.colors.text.faintest};
`

export const Items = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ItemHead = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12.5px;
    color: ${(p) => p.theme.colors.text.strong};
`

export const ItemLevel = styled.span`
    color: ${(p) => p.theme.colors.text.muted};
`

export const StackLine = styled.div`
    height: 3px;
    width: 100%;
    margin-top: 5px;
    background-color: ${(props) => props.theme.colors.grade.empty};
`

export const StackLineColor = styled.div<{ lv: number }>`
    ${(props) => `
        height: 100%;
        width: ${props.lv}%;
        background-color: ${
          props.lv > 80
            ? props.theme.colors.grade.highest
            : props.lv > 70
              ? props.theme.colors.grade.high
              : props.lv > 60
                ? props.theme.colors.grade.low
                : props.theme.colors.grade.lowest
        };
    `}
`
