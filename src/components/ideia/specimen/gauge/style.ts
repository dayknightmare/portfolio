import styled from '@emotion/styled'

export type Level = 'on' | 'warn' | 'off'

export const Bar = styled.div<{ thickness: number }>`
    height: ${(p) => `${p.thickness}px`};
    width: 100%;
    background: ${(p) => p.theme.colors.bg.track};
    display: flex;
    gap: 1px;
    padding: 1px;
`

export const Cell = styled.div<{ level: Level }>`
    flex: 1;
    background: ${(p) =>
      p.level === 'on'
        ? p.theme.colors.green
        : p.level === 'warn'
          ? p.theme.colors.amber
          : p.theme.colors.bg.cellEmpty};
`
