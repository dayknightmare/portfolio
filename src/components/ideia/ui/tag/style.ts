import styled from '@emotion/styled'

export type TagTone = 'solid' | 'outline'

export const Chip = styled.span<{ tone: TagTone }>`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    ${(p) =>
      p.tone === 'solid'
        ? `background: ${p.theme.colors.bg.accentTint}; color: ${p.theme.colors.text.accentTint};`
        : `border: 1px solid ${p.theme.colors.accent}; color: ${p.theme.colors.accent};`}
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
`
