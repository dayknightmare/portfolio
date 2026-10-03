import styled from '@emotion/styled'

export const Log = styled.div`
    font-size: 11.5px;
    line-height: 1.9;
`

export const Line = styled.div<{ tone: 'prompt' | 'green' | 'amber' | 'muted' }>`
    color: ${(p) =>
      p.tone === 'prompt'
        ? p.theme.colors.accent
        : p.tone === 'green'
          ? p.theme.colors.green
          : p.tone === 'amber'
            ? p.theme.colors.amber
            : p.theme.colors.text.muted};
`

export const Cursor = styled.div`
    color: ${(p) => p.theme.colors.accent};
    margin-top: 4px;
`

export const Caret = styled.span`
    color: ${(p) => p.theme.colors.green};
`
