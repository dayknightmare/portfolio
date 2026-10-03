import { lightTheme } from '@/components/themes/light'
import { theme } from '@/components/themes/theme'

export type Themes = 'default' | 'dark' | 'light'
export const THEMES: Themes[] = ['default', 'dark', 'light']

export type PortfolioTheme = {
  colors: {
    grade: {
      empty: string
      lowest: string
      low: string
      high: string
      highest: string
    }
    accent: string
    accentDeep: string
    amber: string
    danger: string
    dangerBright: string
    green: string
    greenDim: string
    bg: {
      base: string
      accentTint: string
      alt: string
      panel: string
      sunken: string
      door: string
      plug: string
      bar: string
      console: string
      boot: string
      track: string
      cellEmpty: string
      watermark: string
      channel: string
      heroGradient: string
    }
    border: {
      hairline: string
      rule: string
      subtle: string
      cta: string
      strong: string
      frame: string
      port: string
      boot: string
      console: string
    }
    text: {
      bright: string
      accentTint: string
      strong: string
      soft: string
      body: string
      bodyDim: string
      dim: string
      tag: string
      muted: string
      faint: string
      faintest: string
      nav: string
      label: string
      ghost: string
      ghostest: string
      console: string
    }
    line: {
      scan: string
      crt: string
      sweep: string
    }
    shadow: {
      door: string
      lead: string
      vignette: string
    }
  }
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends PortfolioTheme {}
}

export const getTheme = (t: Themes): PortfolioTheme => {
  switch (t) {
    case 'default':
      return theme
    case 'dark':
      return theme
    case 'light':
      return lightTheme
    default:
      return theme
  }
}
