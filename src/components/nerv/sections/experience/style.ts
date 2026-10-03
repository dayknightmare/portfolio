import styled from '@emotion/styled'

export const Section = styled.section`
    padding: 88px 56px;
    border-top: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.base};

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Card = styled.div`
    border: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.panel};
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const Aside = styled.div`
    padding: 26px 24px;
    border-right: 1px solid ${(p) => p.theme.colors.border.hairline};
    background: ${(p) => p.theme.colors.bg.sunken};
`

export const Period = styled.div`
    font-size: 10px;
    letter-spacing: 0.22em;
    color: ${(p) => p.theme.colors.accent};
`

export const Company = styled.div`
    font-family: 'Archivo Black', sans-serif;
    font-size: 22px;
    margin-top: 10px;
    color: ${(p) => p.theme.colors.text.bright};
`

export const Place = styled.div`
    font-size: 11px;
    color: ${(p) => p.theme.colors.text.muted};
    margin-top: 6px;
    letter-spacing: 0.14em;
`

export const Body = styled.div`
    padding: 26px;
`

export const Role = styled.div`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 19px;
    letter-spacing: 0.04em;
    color: ${(p) => p.theme.colors.amber};
`

export const Bullets = styled.div`
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Bullet = styled.div`
    display: flex;
    gap: 12px;
    font-size: 13.5px;
    line-height: 1.85;
    color: ${(p) => p.theme.colors.text.bodyDim};
`

export const BulletMark = styled.span`
    color: ${(p) => p.theme.colors.accent};
`

export const BulletText = styled.span`
    text-wrap: pretty;
`

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
`

export const Tag = styled.span`
    font-size: 10px;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.colors.text.tag};
    border: 1px solid ${(p) => p.theme.colors.border.subtle};
    padding: 5px 10px;
`
