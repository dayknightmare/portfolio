# Project conventions

Personal portfolio (Next.js 16 App Router, React 19, Emotion, Biome). The UI is an EVA/NERV-style
"operator console": `src/components/nerv/Nerv.tsx` composes the menus, sections and terminal.

## Layout

```
src/
  app/
    layout.tsx               # root <html>, fonts, metadata (server component)
    (pages)/layout.tsx       # client: Emotion cache + theme provider + global styles
    (pages)/globals.ts       # global styles and @keyframes (nvBlink, nvSweep, ...) as Emotion css
    (pages)/ideia/page.tsx   # design reference / prototype, not part of the live site
  components/
    <feature>/<Component>.tsx + style.ts
    nerv/menus/{top,left,right}, nerv/sections/<name>, nerv/terminal, nerv/effects
    copy.ts                  # all user-facing text, keyed by Lang ('en' | 'ja')
    themes/                  # PortfolioTheme type, dark (theme.ts) and light (light.ts) palettes
  providers/                 # Emotion SSR cache, theme provider and theme context
```

## Styling

- No inline `style={{...}}`. Every component folder has a `style.ts` with Emotion `styled`
  components, imported as `import * as S from './style'` and used as `<S.Name />`.
- Colors always come from the theme (`${(p) => p.theme.colors...}`), never hard-coded hex.
  When a new color is needed, add a token to `PortfolioTheme` in `themes/index.ts` **and** to
  both `theme.ts` and `light.ts`.
- Discrete variants (active, expanded, side, status...) are typed props on the styled component.
  Avoid prop names that are valid HTML attributes (`color`, `open`, ...) because Emotion forwards
  them to the DOM; prefer names like `tone`, `portColor`, `expanded`.
- Values that change continuously (per scroll/tick: widths, heights, transforms) stay in
  `style={{}}` on the styled component, so Emotion does not generate a class per value.
- Shared animations are `@keyframes` in `(pages)/globals.ts`; reference them by name
  (`animation: nvBlink 1.2s infinite`).

## Theme

- `Themes` is `'default' | 'dark' | 'light'`; `getTheme(name)` returns the palette.
- The selected theme is persisted in `localStorage` (`theme` key).
- `providers/themeProvider.tsx` reads it synchronously on first render. It is loaded with
  `next/dynamic({ ssr: false, loading })` in `(pages)/layout.tsx`, which wraps it in a Suspense
  boundary, so the page only renders once the stored theme is known (the tree below it is
  client-rendered).
- Read or change the theme with `useContext(ThemeContextProvider)` (`{ theme, setTheme }`);
  `setTheme` also persists it.

## Copy and i18n

- Text lives in `components/copy.ts` (`COPY[lang]`, `BOOT[lang]`). Add new strings to both `en`
  and `ja` and to the `Copy` interface; components receive `lang` as a prop.

## Tooling

- `npm run lint` / `npm run lint:fix` run Biome (2-space indent, single quotes, no semicolons,
  100-column lines). There is no ESLint or Prettier.
- Verify changes with `npx tsc --noEmit` and `npm run build`.