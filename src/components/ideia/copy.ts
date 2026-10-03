export interface Stat {
  label: string
  value: string
}

export interface Note {
  title: string
  body: string
}

export interface CodeNote extends Note {
  code: string
}

export interface Swatch {
  token: string
  code: string
  name: string
  body: string
}

export interface FootNote {
  label: string
  text: string
}

export interface TypeSpec {
  family: string
  role: string
  body: string
}

export interface Pass {
  pass: string
  title: string
  body: string
}

export interface Pair {
  label: string
  value: string
}

export const COVER = {
  kicker: 'Case study · design & front-end process',
  titleTop: 'HOW THE NERV',
  titleMid: 'PORTFOLIO',
  titleAccent: 'WAS BUILT',
  lede:
    'A personal site for a backend engineer, built as an operations terminal instead of a ' +
    'résumé page. This page documents the references, the token set, the layout frame, the ' +
    'screen effects and the interaction decisions behind it — every value taken straight from ' +
    'the shipped source.',
  stats: [
    { label: 'Subject', value: 'Personal site' },
    { label: 'Sections', value: '6 + console' },
    { label: 'Languages', value: 'EN / 日本語' },
    { label: 'Build', value: 'NextJS' },
  ] as Stat[],
}

export const HEADER = {
  brand: 'M. COLOMBO',
  meta: 'Build file / 2026',
}

export const REFERENCE = {
  tags: [
    'HUD / telemetry chrome',
    'Terminal UIs',
    'Japanese signage',
    'CRT artefacts',
    'Hazard stripes',
  ],
  borrowed: {
    label: 'Borrowed',
    body:
      'Monospace status bar · vertical kana labels · numbered sections · sync-ratio gauges · ' +
      'red alert blink · scanline overlay',
  },
  rejected: {
    label: 'Rejected',
    body:
      'Franchise logos and characters · fake damage/error states · unreadable type in the name ' +
      'of atmosphere · sound on by default',
  },
  conventions: [
    {
      title: 'Type as instrumentation',
      body:
        'Monospaced labels in wide tracking, all caps, no sentence case anywhere in the chrome. ' +
        'Adopted wholesale — it is the single cheapest way to make a page read as a machine.',
    },
    {
      title: 'Oversized numerals',
      body:
        'Unit and section numbers set far larger than their labels. Became the numbered rail ' +
        'and the 01–06 section marks.',
    },
    {
      title: 'Kana as texture',
      body:
        'Vertical Japanese set small and dim, or huge and nearly invisible behind the hero. ' +
        'Never load-bearing for a non-JA reader — until the locale switch makes it the whole ' +
        'interface.',
    },
    {
      title: 'Alert grammar',
      body:
        'Hazard stripes, a hard-cut blinking dot, a colour-coded pattern call. Kept to one dot ' +
        'and four uses of red — the series can afford klaxons; a portfolio cannot.',
    },
    {
      title: 'Everything is monitored',
      body:
        'Gauges, ratios and umbilical feeds running whether or not anyone is watching. Became ' +
        'the right rail — but wired to real facts about the stack.',
    },
    {
      title: 'Text on a dark field',
      body:
        'Warm bone rather than white, orange rather than cyan. The warmth is what separates the ' +
        'reference from generic "hacker green" terminals.',
    },
  ] as Note[],
  mapping: {
    head: ['Reference', 'In the portfolio', 'What it actually says'],
    rows: [
      [
        'MAGI — three voting systems',
        'Right-rail sync ports',
        'Three runtimes I work in, with honest proficiency levels',
      ],
      [
        'Sync ratio',
        'Aggregate gauge under the ports',
        'A single glanceable "how deep does this go"',
      ],
      [
        'Umbilical / power reserve',
        'Waveform tile',
        'Pure atmosphere — the one readout with no data behind it',
      ],
      [
        'Pattern classification',
        'Topbar status, alternating',
        'The page is live, and it has moods',
      ],
      ['Personnel file', 'Section 02 fact table', 'Location, timezone, languages, availability'],
      ['Deployment units', 'Section 05 repo cards', 'Open-source work, one line each'],
      [
        'Command console',
        'Bottom dock',
        'An invitation to poke at it — the shibboleth for technical readers',
      ],
    ],
  },
  footnotes: [
    {
      label: 'Boundary:',
      text:
        'no logos, characters, plot or franchise marks — only interface conventions and one ' +
        'system metaphor.',
    },
  ] as FootNote[],
}

export const MAGI = {
  label: 'MAGI — CONSENSUS READOUT',
  nodes: [
    { name: 'GO-01', status: 'LINKED · 82%', tone: 'on' as const },
    { name: 'NODE-02', status: 'LINKED · 64%', tone: 'on' as const },
    { name: 'PY-03', status: 'PARTIAL · 47%', tone: 'warn' as const },
  ],
  ratioLabel: 'SYNC RATIO',
  ratioCode: 'A-01',
  ratioValue: '98.4%',
  ratioNote: '2 LINKED · 1 PARTIAL — HARMONICS NOMINAL',
  caption: '▸ the split is shown, not hidden — that is the whole borrowed idea',
}

export const PALETTE = {
  note: 'Four inks on near-black. Status colours are functional, never decorative.',
  swatches: [
    {
      token: 'bg.base',
      code: '#07070A',
      name: 'Void',
      body: 'Page ground. Not pure black — keeps the vignette readable.',
    },
    {
      token: 'bg.panel',
      code: '#0A0A0F / #1C1C24',
      name: 'Panel / rule',
      body: 'Card fill and the 1px hairline that draws every grid cell.',
    },
    {
      token: 'accent',
      code: '#FF6A00',
      name: 'Signal orange',
      body: 'The single accent: headings, active nav, primary CTA, prompt.',
    },
    {
      token: 'amber',
      code: '#FFB000',
      name: 'Amber',
      body: 'Secondary emphasis and warning state on gauges.',
    },
    {
      token: 'green',
      code: '#6DFF8F',
      name: 'Terminal green',
      body: 'Console output, healthy nodes, sync ratio.',
    },
    {
      token: 'danger',
      code: '#FF2D2D',
      name: 'Alert red',
      body: 'Blinking status dot and command errors only. Used four times.',
    },
    {
      token: 'text.soft',
      code: '#E9E3D5',
      name: 'Bone',
      body: 'Body text. Warm off-white so the screen never reads clinical.',
    },
    {
      token: 'text.muted',
      code: '#6B6B76',
      name: 'Muted',
      body: 'Labels, meta, inactive nav. Everything the eye should skip.',
    },
  ] as Swatch[],
  footnotes: [
    { label: 'Ratio held:', text: '~92% ground and panel, ~6% bone text, ~2% accent.' },
    {
      label: 'Contrast:',
      text: 'bone on void = 14.6:1; orange reserved for large type and chrome.',
    },
  ] as FootNote[],
}

export const TYPOGRAPHY = {
  note: 'Four families, one job each — no family appears outside its role.',
  specs: [
    {
      family: 'Archivo Black',
      role: 'Display',
      body:
        'Name, section numbers, stat figures. min(9vw, 112px) at the top, 30px on stats. ' +
        'Letter-spacing −0.02em.',
    },
    {
      family: 'Chakra Petch',
      role: 'Sub-display',
      body:
        'Job titles, repo names, contact values. Squared terminals give the technical read ' +
        'without shouting. 17–32px.',
    },
    {
      family: 'JetBrains Mono',
      role: 'Interface & body',
      body:
        'Everything else: body 14.5px/2.0, labels 9.5–11px with 0.2em tracking, console 12px. ' +
        'The tracking is what makes it read as instrumentation.',
    },
    {
      family: 'Noto Sans JP',
      role: 'Texture & JA locale',
      body:
        'Weight 900 for the oversized watermark behind the hero, and the whole interface when ' +
        'the language switches to 日本語.',
    },
  ] as TypeSpec[],
  samples: {
    display: 'MIGUEL COLOMBO',
    subDisplay: 'Software Engineer — Backend · go-ratelimit',
    monoLabel: 'CLEARANCE A-01 · NODE SAO-PAULO / BR',
    monoBody: 'I build and operate high-throughput backend services in Go, Node and Python.',
    jpLead: '第壱号',
    jpTail: '要員記録 / 技術開発部',
  },
}

export const FRAME = {
  note: 'Fixed chrome on four edges; one scroll region in the middle.',
  diagram: {
    topbar: 'TOPBAR — 46px fixed',
    topbarRight: 'status · lang',
    rail: 'RAIL — 78px',
    scroll: 'SCROLL REGION',
    scrollMeta: ['6 sections · 88px vertical padding', '56px gutters · 66ch measure'],
    magi: ['MAGI PANEL', '180px'],
    dock: 'CONSOLE DOCK — 34px collapsed / 264px open',
  },
  metrics: [
    { label: 'Section rhythm', value: '88px / 56px' },
    { label: 'Cell divider', value: '1px #1C1C24 via grid gap' },
    { label: 'Card minimums', value: '260 / 300 / 320px' },
    { label: 'Corner radius', value: '0 everywhere' },
  ] as Pair[],
}

export const ANATOMY = {
  note: 'The chrome, dissected piece by piece.',
  topbar: {
    label: 'A · Topbar — 46px',
    brand: 'M. COLOMBO',
    telemetry: [
      { label: 'CLEARANCE', value: 'A-01', tone: 'soft' as const },
      { label: 'NODE', value: 'SAO-PAULO / BR', tone: 'soft' as const },
      { label: 'UPTIME', value: '12:04:18', tone: 'green' as const },
    ],
    alert: '● PATTERN BLUE',
    langs: ['EN', '日本語'],
    notes: [
      {
        title: 'Hazard caps',
        body:
          '16px of 45° orange stripes at both ends. Frames the bar as machinery and stops the ' +
          'topbar dissolving into the page edge.',
      },
      {
        title: 'Idle spinner',
        body:
          'A 16px ring with a transparent top border, 3s per turn. Slow enough to read as ' +
          '"running", not "loading".',
      },
      {
        title: 'Telemetry run',
        body:
          'Label in muted grey, value in bone: clearance, timezone node, a live uptime clock, ' +
          'and a status that alternates every 10s.',
      },
      {
        title: 'Controls, far right',
        body:
          'Language are the only two real controls up here — filled orange when active, so ' +
          'state is legible at a glance.',
      },
    ] as Note[],
  },
  rail: {
    label: 'B · Left rail — 78px, three states',
    items: [
      { num: '01', label: 'HERO', state: 'active' as const },
      { num: '02', label: 'PROFILE', state: 'hover' as const },
      { num: '03', label: 'RECORD', state: 'idle' as const },
    ],
    legend: [
      { state: 'active' as const, title: 'ACTIVE', body: '3px orange bar · orange label' },
      { state: 'hover' as const, title: 'HOVER', body: '#12121A fill · no motion' },
      { state: 'idle' as const, title: 'IDLE', body: '#6B6B76 label · transparent bar' },
    ],
    jp: '記録保管所',
    jpNote: "— pinned to the rail's bottom, vertical, purely textural",
  },
  states: {
    label: 'C · Interaction states',
    head: ['Element', 'Rest', 'Hover / active'],
    rows: [
      ['Nav rail item', '#6B6B76 · no bar', 'bg #12121A → 3px #FF6A00 bar + orange label'],
      ['Primary CTA', 'bg #FF6A00 · ink #07070A', 'bg #FFB000'],
      ['Ghost CTA', '1px #3A3A46 · text #C9C9D4', 'border + text #6DFF8F'],
      ['Repo card', '1px #1C1C24 · bg #0A0A0F', 'border #FF6A00 · bg #0E0C0B'],
      ['Contact channel', 'rgba(10,10,15,.94)', 'rgba(20,16,16,.96)'],
      [
        'Console input',
        'transparent · no border',
        'green caret only — the prompt is the affordance',
      ],
    ],
  },
  footnotes: [
    { label: 'Rule:', text: 'every hover changes colour or fill — never size or position.' },
    { label: 'Cursor:', text: 'pointer only on things that actually do something.' },
  ] as FootNote[],
}

export const EFFECTS = {
  note: 'Four overlays, all pointer-events:none. Toggle them on the live specimen.',
  toggles: [
    { key: 'scan' as const, label: 'SCANLINES' },
    { key: 'vignette' as const, label: 'VIGNETTE' },
    { key: 'sweep' as const, label: 'SWEEP' },
    { key: 'flicker' as const, label: 'FLICKER' },
  ],
  specimen: {
    label: 'SPECIMEN · LIVE OVERLAY STACK',
    nameTop: 'MIGUEL',
    nameBottom: 'COLOMBO',
    body: ['Backend engineer · Go / Node / Python', 'Pattern blue — all systems nominal.'],
    caption: 'Rendered with the same CSS as the shipped site — nothing here is an image.',
  },
  overlays: [
    {
      title: 'Scanlines',
      code: 'repeating-linear-gradient(…0.32 1px, transparent 3px)\nmix-blend-mode: multiply',
      body:
        'A 3px cycle. Any tighter and it moirés on scroll; any looser and it reads as stripes, ' +
        'not a CRT.',
    },
    {
      title: 'Vignette',
      code: 'radial-gradient(ellipse, transparent 55%, rgba(0,0,0,.75))',
      body: 'Bends the flat page into a tube. Transparent through 55% so no content is ever dimmed.',
    },
    {
      title: 'Sweep',
      code: 'translateY(−20% → 120%) · 9s linear infinite',
      body:
        'A 5%-opacity orange band drifting down the viewport. Slow enough to notice only on the ' +
        'second look.',
    },
    {
      title: 'Flicker',
      code: 'opacity 1 → .78 → 1 across 2% of a 7s loop',
      body:
        'One dip every seven seconds. The restraint is the whole trick — a constant flicker is ' +
        'unreadable and hostile.',
    },
  ] as CodeNote[],
  microLabel: 'Micro-motion — the parts that never stop',
  micro: [
    {
      title: 'Hazard stripes',
      code: 'static · 45° · 8px cycle',
      body: 'Two 16px caps on the topbar. The only ornament with no data behind it.',
    },
    {
      title: 'Idle ring',
      code: 'rotate 360° · 3s linear infinite',
      body: 'Signals a live session. Deliberately slower than any real spinner.',
    },
    {
      title: 'Alert blink',
      code: 'opacity 1 → .12 · 1.4s (0.9s on cursor)',
      body: 'Hard cut, no fade — a fading blink reads as a breathing app, not a warning light.',
    },
    {
      title: 'Gauge breathing',
      code: 'sin((t + i·3) / 4) · ±6% · 1s clock',
      body: 'Not CSS: a 1s state tick drives every meter, each offset so they never pulse in unison.',
    },
  ] as CodeNote[],
  motion: {
    head: ['Motion', 'Duration', 'Driver', 'Purpose'],
    rows: [
      ['Page flicker', '7s infinite', 'CSS keyframes', 'One dip per loop — the CRT tell'],
      ['Orange sweep', '9s linear', 'CSS keyframes', 'Vertical drift, ambient only'],
      ['Idle ring', '3s linear', 'CSS keyframes', 'Session is live'],
      ['Alert dot / cursor', '1.4s / 0.9s', 'CSS keyframes', 'Attention, hard-cut'],
      [
        'Boot progress bar',
        '2.4s ease-in-out',
        'CSS keyframes',
        'Indeterminate width, deliberately fake',
      ],
      ['Gauges & waveform', '1s tick', 'setInterval + sine', 'Data-shaped, never random'],
      ['Console open', '0.28s ease', 'max-height transition', 'The one transition a user triggers'],
      ['Boot lines', '260ms / line', 'setInterval', 'Reads as typed, not as a loading screen'],
    ],
  },
  footnotes: [
    {
      label: 'Cost:',
      text: 'zero images and zero libraries — every effect is a gradient, a keyframe or a number.',
    },
    { label: 'Ceiling:', text: 'nothing above 8% opacity ever sits on top of text.' },
  ] as FootNote[],
}

export const COMPONENTS = {
  note: 'Three parts carry the whole interface.',
  port: {
    kicker: 'Right rail',
    title: 'MAGI sync port',
    name: 'GO-01',
    status: 'LINKED',
    metricLabel: 'THROUGHPUT',
    metricValue: '1.2M rpm',
    body:
      'A skill bar dressed as a hardware plug. The 12-cell meter breathes on a sine wave tied ' +
      'to the page clock, so the sidebar is alive without ever demanding attention. Green = ' +
      'healthy, amber = partial, and the label is a real runtime figure.',
  },
  unit: {
    kicker: 'Section 05',
    title: 'Deployed unit card',
    unit: 'UNIT 01',
    status: 'ACTIVE',
    name: 'go-ratelimit',
    body: 'Distributed token-bucket limiter with Redis backing and a lock-free local fast path.',
    lang: '◆ Go',
    stars: '★ 412',
    note:
      'A repo tile with the fiction confined to two tokens — the unit number and the status ' +
      'badge. Everything else is what a developer actually scans: name, one sentence, language, ' +
      'stars. Hover moves the border to orange and warms the fill.',
  },
  console: {
    kicker: 'Bottom dock',
    title: 'MAGI console',
    prompt: 'miguel@nerv:~$',
    lines: [
      { text: 'GO-01 ONLINE load 82%', tone: 'green' as const },
      { text: 'NODE-02 ONLINE load 64%', tone: 'green' as const },
      { text: 'PY-03 ONLINE load 47%', tone: 'amber' as const },
      { text: 'sync ratio 98.4% — harmonics nominal', tone: 'muted' as const },
    ],
    command: 'status',
  },
}

export const UX = {
  cards: {
    lang: {
      title: 'EN / 日本語',
      body:
        'Not a decoration: every string ships twice, including boot lines, console output and ' +
        'the display font, which swaps to Noto Sans JP weight 900 so the Japanese headline ' +
        'holds the same visual weight as Archivo Black.',
    },
    nav: {
      title: 'Two ways to navigate',
      body:
        'The numbered rail for everyone; the console for the people who will try it. Both call ' +
        'the same scroll function, so the easter egg can never fall out of sync with the UI.',
    },
    boot: { title: 'Boot sequence' },
  },
  commands: {
    head: ['Command', 'Result', 'Why it exists'],
    rows: [
      ['help', 'Lists all commands', 'The console is useless without a first move'],
      ['whoami', 'One-line bio', 'The fastest possible answer to the actual question'],
      [
        'about · exp · stack · repos · contact',
        'Scrolls to that section',
        'Keyboard-first navigation for technical visitors',
      ],
      ['status', 'Prints node health', 'Pays off the sidebar fiction with something to read'],
      ['lang en|ja', 'Switches locale', 'Same switch as the topbar, reachable without the mouse'],
      ['sudo', 'Refuses, in character', 'One joke, for the people who will definitely type it'],
    ],
  },
}

export const HISTORY = {
  passes: [
    {
      pass: 'PASS 01',
      title: 'Plain CV page',
      body:
        'Standard dark portfolio: hero, experience, skills, contact. Correct, complete, and ' +
        'indistinguishable from a thousand others. Kept the content skeleton and threw the ' +
        'surface away.',
    },
    {
      pass: 'PASS 02',
      title: 'Terminal frame',
      body:
        'Fixed topbar, numbered left rail and a mono type stack. This is where the page stopped ' +
        'being a document. The right-hand telemetry panel arrived here too, at first as pure ' +
        'decoration.',
    },
    {
      pass: 'PASS 03',
      title: 'Make it mean something',
      body:
        'Every gauge was rewired to real data — the sync ports became the skill matrix, the ' +
        'node list became the stack. Decoration that carries information stops being decoration.',
    },
    {
      pass: 'PASS 04',
      title: 'Boot, console, JA',
      body:
        'The three pieces that make it a place rather than a page. All three are skippable, ' +
        'collapsible or optional — the CV reads fine with every one of them ignored.',
    },
    {
      pass: 'PASS 05',
      title: 'Turn it down',
      body:
        'Flicker cut to one dip per 7s, sweep slowed to 9s, red reduced to four instances. ' +
        'Nearly every final edit was a subtraction.',
    },
  ] as Pass[],
}

export const OUTRO = {
  kicker: 'End of file',
  title: 'DECORATION THAT CARRIES DATA STOPS BEING DECORATION.',
  signature: 'Miguel Colombo · Software Engineer · São Paulo, BR',
}

export const SECTIONS = {
  reference: { num: '01', title: 'THE REFERENCE' },
  palette: { num: '02', title: 'PALETTE' },
  typography: { num: '03', title: 'TYPOGRAPHY' },
  frame: { num: '04', title: 'THE FRAME' },
  anatomy: { num: '05', title: 'UI ANATOMY' },
  effects: { num: '06', title: 'SCREEN EFFECTS' },
  components: { num: '07', title: 'COMPONENTS' },
  ux: { num: '08', title: 'UX DECISIONS' },
  history: { num: '09', title: 'HOW IT GOT HERE' },
}
