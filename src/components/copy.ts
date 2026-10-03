export type Lang = 'en' | 'ja'
export const LANGS: Lang[] = ['en', 'ja']

export const BOOT: Record<Lang, string[]> = {
  en: [
    'MAGI SYSTEM // handshake ......... OK',
    'loading personnel record 0x1A7 ... OK',
    'go1.26 runtime ................... OK',
    'node24 / python3.12 sidecars ..... OK',
    'observability bus ................ OK',
    'pattern recognition .............. BLUE',
    'ALL SYSTEMS NOMINAL — WELCOME, OPERATOR',
  ],
  ja: [
    'MAGIシステム // 接続確認 ......... 正常',
    '要員記録 0x1A7 読込中 ........... 正常',
    'go1.26 ランタイム ............... 正常',
    'node24 / python3.12 補助系 ...... 正常',
    '監視バス ........................ 正常',
    'パターン判定 .................... 青',
    '全システム正常 — 操作員、ようこそ',
  ],
}

export interface Stat {
  label: string
  value: string
}

export interface Fact {
  k: string
  v: string
}

export interface Job {
  period: string
  company: string
  place: string
  role: string
  bullets: string[]
  tags: string[]
}

export interface PortStates {
  on: string
  warm: string
  off: string
}

export interface TermHelpCopy {
  header: string
  whoami: string
  sections: string
  status: string
  hire: string
  lang: string
  sudo: string
  clear: string
}

export interface TermCopy {
  toggleCollapse: string
  toggleExpand: string
  whoami: string
  syncStatus: string
  hire: string
  sudo: string
  navigating: string
  notFound: string
  notFoundHint: string
}

export interface Copy {
  kicker: string
  role: string
  intro: string
  ctaContact: string
  ctaTerm: string
  ctaIdeia: string
  h2about: string
  h2exp: string
  h2stack: string
  h2repos: string
  h2contact: string
  about1: string
  about2: string
  about3: string
  contactLead: string
  footer: string
  magiTitle: string
  syncLabel: string
  harmonics: string
  umbilical: string
  connected: string
  powerNote: string
  rec: string
  sealedLabel: string
  scrollHint: string
  modes: string[]
  portStates: PortStates
  portMetrics: string[]
  termHint: string
  navLabels: string[]
  stats: Stat[]
  facts: Fact[]
  jobs: Job[]
  stackNames: string[]
  practice: string[]
  repoUnit: string
  repoDescs: string[]
  statuses: string[]
  channelLabels: string[]
  resumeValue: string
  alertPatternBlue: string
  alertStandby: string
  repoUnitSuffix: string
  term: TermCopy
}

export function repoUnitLabel(lang: Lang, i: number): string {
  const c = COPY[lang]
  return lang === 'ja' ? `${c.repoUnit}${i + 1}${c.repoUnitSuffix}` : `${c.repoUnit} 0${i + 1}`
}

export const COPY: Record<Lang, Copy> = {
  en: {
    kicker: 'PERSONNEL RECORD / ENGINEERING DIVISION',
    role: 'Software Engineer',
    intro:
      "Hi, I'm Miguel, a software engineer focused on building high-throughput, scalable backend services in Go, Node, and Python. I've worked across microservices, APIs, gateways, queues, and cloud infrastructure, turning complex ideas into practical, maintainable solutions. Currently, I'm at iFood, Latin America's largest food delivery platform, working on systems that handle millions of requests per minute.",
    ctaContact: 'ESTABLISH CONTACT ▸',
    ctaTerm: 'OPEN TERMINAL',
    ctaIdeia: 'PORTFOLIO IDEIA',
    h2about: 'OPERATOR PROFILE',
    h2exp: 'SERVICE RECORD',
    h2stack: 'ARMAMENT',
    h2repos: 'DEPLOYED UNITS',
    h2contact: 'OPEN CHANNEL',
    about1:
      "Backend engineer focused on identity and authentication at scale. OAuth 2.1 and OpenID Connect providers, server-driven login journeys, and app-to-app authorization flows. Python, Go, Node.js, Java, Kotlin, and Rust, applied to systems where security, efficiency, and resilience aren't optional.",
    about2:
      'Equally at home below the application layer: containerized services on Kubernetes, infrastructure defined as code, and event-driven pipelines built on Kafka and message queues. Systems designed to scale horizontally, fail gracefully, and be rebuilt from scratch.',
    about3: 'Open to senior / staff backend and platform roles — remote-first, international.',
    contactLead: 'HIRING FOR HARD BACKEND PROBLEMS?',
    footer: 'END OF FILE // AUTHORIZED PERSONNEL ONLY',
    magiTitle: 'SYNC PORTS',
    syncLabel: 'SYNC RATIO',
    harmonics: 'HARMONICS NOMINAL',
    umbilical: 'UMBILICAL FEED',
    connected: 'CONNECTED',
    powerNote: 'EXT. POWER · 04:52 RESERVE',
    rec: 'ORBITAL FEED / LIVE',
    sealedLabel: 'SEALED UNITS / BULKHEAD 05',
    scrollHint: 'SCROLL TO RELEASE BULKHEAD',
    modes: ['STOP', 'SLOW', 'NORMAL', 'RACING'],
    portStates: { on: 'LINKED', warm: 'PARTIAL', off: 'IDLE' },
    portMetrics: ['THROUGHPUT', 'THROUGHPUT', 'THROUGHPUT', 'DEPTH'],
    termHint: '— type `help`',
    navLabels: ['HERO', 'PROFILE', 'RECORD', 'ARMAMENT', 'UNITS', 'CHANNEL'],
    stats: [
      { label: 'YEARS IN SERVICE', value: '6+' },
      { label: 'PRIMARY LANGUAGE', value: 'GO' },
      { label: 'PEAK RPM HANDLED', value: '1.23M' },
      { label: 'ON-CALL ROTATIONS', value: '24/7' },
    ],
    facts: [
      { k: 'STATUS', v: 'Employed · open to offers' },
      { k: 'BASE', v: 'São Paulo, Brazil (UTC−3)' },
      { k: 'LANGUAGES', v: 'PT-BR native · EN B2' },
      { k: 'FOCUS', v: 'Backend · platform · reliability' },
      { k: 'MOBILITY', v: 'Open to relocation / remote' },
    ],
    jobs: [
      {
        period: '2025 — PRESENT',
        company: 'iFood',
        place: 'SÃO PAULO - SP / REMOTE',
        role: 'Software Engineer · Backend',
        bullets: [
          'Built an OAuth 2.1 and OpenID Connect identity provider, enabling users to link their accounts securely and seamlessly.',
          'Developed a server-driven authentication solution, enabling personalized login journeys based on ACR (Authentication Context Class Reference) levels.',
          'Contributed to a low-friction app-to-app authorization flow between iFood and partner apps such as Uber and Decolar, reaching 94% user conversion.',
        ],
        tags: [
          'GO',
          'JAVA',
          'KAFKA',
          'POSTGRES',
          'KUBERNETES',
          'AWS',
          'OAUTH2',
          'OIDC',
          'IAM',
          'DATADOG',
        ],
      },
      {
        period: '2021 — 2025',
        company: '1DOC',
        place: 'FLORIANÓPOLIS - SC / REMOTE',
        role: 'Software Engineer · Backend',
        bullets: [
          'Built queue-based pipelines in Node.js/TypeScript and Python for scheduled and on-demand report processing.',
          'Implemented an Apache Druid data warehouse supporting both real-time analytics and batch data processing.',
          'Redesigned bulk PDF generation for municipal documents, significantly reducing processing time, cutting time from 7 hours to less then one hour.',
        ],
        tags: [
          'PYTHON',
          'GO',
          'AWS',
          'RDS',
          'APACHE DRUID',
          'POSTGRES',
          'DOCKER',
          'FLUTTER',
          'NEW RELIC',
        ],
      },
      {
        period: '2020 — 2021',
        company: 'ANVALI',
        place: 'MARÍLIA - SP',
        role: 'Developer',
        bullets: [
          'Built the backend of an in-house Kanban platform for STE-SIMEMP (under contract with DNIT), replacing Trello and its plugins.',
          'Implemented multi-board workflows, custom fields, team management, and reporting features.',
          'Enabled teams to accurately track and measure delivered work and identify bottlenecks.',
        ],
        tags: ['PYTHON', 'DJANGO', 'MYSQL', 'REACT', 'VUE'],
      },
    ],
    stackNames: ['LANGUAGES', 'DATA & MESSAGING', 'PLATFORM', 'TOOLS'],
    practice: ['Distributed systems', 'Observability', 'System design', 'Incident response'],
    repoUnit: 'UNIT',
    repoDescs: [
      "Partnership that turns every iFood order into Decolar Passaporte points, redeemable for flights, hotels, insurance, and tours. After a pilot with 370k engaged users, rolled out to iFood's full base of 60 million users. Work on the identity side, building an app-to-app OAuth 2.0 flow between the Decolar and iFood apps so users can link their accounts without leaving the native experience, reaching a 94% user conversion rate.",
      'Identity layer for the iFood and Uber partnership, which brought Uber rides into the iFood app (and iFood into Uber) along with a combined loyalty subscription. Work on the account-platform team, building an OAuth 2.0 identity provider that lets users link their iFood and Uber accounts securely, covering token exchange, session control, and consent between the two platforms. Part of a cross-company effort of 300+ people across five countries, delivered in about 180 days and rolled out nationwide in Brazil.',
      'I implemented a data warehouse on Apache Druid to centralize and process large volumes of analytical data for city administrations. This data is then visualized in BI dashboards with Apache Superset to support strategic decision-making. I also developed end-to-end Python pipelines to extract, transform, and load the data, ensuring accurate, timely, and structured information for reporting and analysis.',
      'To manage the NASA hackathon in my city, it was common to use WhatsApp to talk to teams and mentors, but this created numerous communication problems, so we thought about developing a platform that integrates with Discord and isolates teams and manages them through from an event manager bot created by us. So that we can create it, we used Golang with Gin for the Backend, Nuxt (Vue) for the Frontend, Python for the Email service and for the Bot, and the communication was done with RestAPI between the Backend and the Frontend and gRPC between the services and Bot.',
      'This project is the creation of a social network that aims to bring greater autonomy, customization and freedom to users, for that, tools are created that help you to have control of your network of friends and followers, in addition we give you the opportunity to customize it to let it to the closest to your personal taste.',
      'I developed a mobile app for iOS and Android using Flutter that allows users to submit and track requests online without needing to visit city hall in person. This streamlines communication and makes the entire process digital, transparent, and free for citizens. Users can register, open new requests, attach documents or photos, and monitor progress in real time. Integrated with the 1Doc platform, the app also provides request categories by subject and email notifications for each update, ensuring a smooth and accessible experience from start to finish.',
    ],
    statuses: ['ACTIVE', 'ACTIVE', 'STABLE', 'ARCHIVED', 'ARCHIVED', 'STABLE'],
    channelLabels: ['EMAIL', 'GITHUB', 'LINKEDIN', 'RESUME'],
    resumeValue: 'download PDF ▸',
    alertPatternBlue: 'PATTERN BLUE',
    alertStandby: 'STANDBY',
    repoUnitSuffix: '',
    term: {
      toggleCollapse: 'COLLAPSE ▾',
      toggleExpand: 'EXPAND ▴',
      whoami:
        'Miguel Colombo — software engineer @ iFood. Go / Java. Microservices systems, high-throughput services.',
      syncStatus: 'sync ratio 98.4% — harmonics nominal',
      hire: 'channel open: miguelcolombo3@gmail.com',
      sudo: 'operator is not in the sudoers file. this incident has been reported to Central Dogma.',
      navigating: 'navigating → section 0',
      notFound: 'command not found: ',
      notFoundHint: ' — try `help`',
    },
  },
  ja: {
    kicker: '要員記録 / 技術開発部',
    role: 'ソフトウェアエンジニア',
    intro:
      'はじめまして、Miguel です。Go・Node・Python で高スループットかつスケーラブルなバックエンドサービスを構築するソフトウェアエンジニアです。マイクロサービス、API、ゲートウェイ、キュー、クラウドインフラと幅広く携わり、複雑な要件を実用的で保守しやすい形に落とし込んできました。現在はラテンアメリカ最大のフードデリバリープラットフォーム iFood で、毎分数百万リクエストを処理するシステムを担当しています。',
    ctaContact: '通信を開く ▸',
    ctaTerm: '端末を起動',
    ctaIdeia: '制作記録',
    h2about: '要員プロフィール',
    h2exp: '勤務記録',
    h2stack: '技術装備',
    h2repos: '実戦配備ユニット',
    h2contact: '通信回線',
    about1:
      '大規模なアイデンティティ管理と認証を専門とするバックエンドエンジニアです。OAuth 2.1 と OpenID Connect のプロバイダ、サーバー駆動型のログイン体験、アプリ間認可フローなどを手がけてきました。Python、Go、Node.js、Java、Kotlin、Rust を、セキュリティ・効率性・耐障害性が必須条件となるシステムに適用しています。',
    about2:
      'アプリケーション層より下も同じく得意領域です。Kubernetes 上のコンテナ化されたサービス、コードとして定義するインフラ、Kafka とメッセージキューを基盤にしたイベント駆動パイプライン。水平にスケールし、障害時には全体を落とさず縮退し、ゼロから再構築できるシステムを設計しています。',
    about3:
      'シニア / スタッフ級のバックエンド・プラットフォーム職を検討中 — リモート優先、海外案件も歓迎。',
    contactLead: '難易度の高いバックエンド課題、ありますか？',
    footer: '記録終了 // 関係者以外閲覧禁止',
    magiTitle: '接続ポート',
    syncLabel: 'シンクロ率',
    harmonics: 'ハーモニクス正常',
    umbilical: 'アンビリカルケーブル',
    connected: '接続中',
    powerNote: '外部電源 · 予備 04:52',
    rec: '軌道回線 / 実況',
    sealedLabel: '封鎖ユニット / 隔壁 05',
    scrollHint: 'スクロールで隔壁解放',
    modes: ['停止', '低速', '通常', '戦闘'],
    portStates: { on: '接続', warm: '部分接続', off: '待機' },
    portMetrics: ['処理量', '処理量', '処理量', '深度'],
    termHint: '— `help` と入力',
    navLabels: ['表紙', '資料', '記録', '装備', '配備', '通信'],
    stats: [
      { label: '実務年数', value: '6+' },
      { label: '主言語', value: 'GO' },
      { label: '最大処理 RPM', value: '1.23M' },
      { label: 'オンコール体制', value: '24/7' },
    ],
    facts: [
      { k: '状態', v: '在職中・打診歓迎' },
      { k: '拠点', v: 'ブラジル サンパウロ (UTC−3)' },
      { k: '言語', v: 'ポルトガル語（母語）・英語 B2' },
      { k: '専門', v: 'バックエンド・基盤・信頼性' },
      { k: '移動可否', v: '移住 / リモート 可' },
    ],
    jobs: [
      {
        period: '2025 — 現在',
        company: 'iFood',
        place: 'サンパウロ - SP / リモート',
        role: 'ソフトウェアエンジニア・バックエンド',
        bullets: [
          'OAuth 2.1 と OpenID Connect に準拠したアイデンティティプロバイダを構築し、安全かつシームレスなアカウント連携を実現。',
          'サーバー駆動型の認証基盤を開発し、ACR (Authentication Context Class Reference) のレベルに応じたログイン体験の個別最適化を可能に。',
          'iFood と Uber・Decolar などの提携アプリ間で摩擦の少ないアプリ間認可フローの構築に貢献し、ユーザー転換率94%を達成。',
        ],
        tags: [
          'GO',
          'JAVA',
          'KAFKA',
          'POSTGRES',
          'KUBERNETES',
          'AWS',
          'OAUTH2',
          'OIDC',
          'IAM',
          'DATADOG',
        ],
      },
      {
        period: '2021 — 2025',
        company: '1DOC',
        place: 'フロリアノポリス - SC / リモート',
        role: 'ソフトウェアエンジニア・バックエンド',
        bullets: [
          'Node.js/TypeScript と Python でキューベースのパイプラインを構築し、定期実行とオンデマンドのレポート処理に対応。',
          'リアルタイム分析とバッチ処理の双方に対応する Apache Druid のデータウェアハウスを構築。',
          '自治体文書の PDF 一括生成を再設計し、処理時間を7時間から1時間未満へ大幅に短縮。',
        ],
        tags: [
          'PYTHON',
          'GO',
          'AWS',
          'RDS',
          'APACHE DRUID',
          'POSTGRES',
          'DOCKER',
          'FLUTTER',
          'NEW RELIC',
        ],
      },
      {
        period: '2020 — 2021',
        company: 'ANVALI',
        place: 'マリリア - SP',
        role: '開発者',
        bullets: [
          'STE-SIMEMP 向け（DNIT との契約案件）の社内カンバン基盤のバックエンドを構築し、Trello とその各種プラグインを置き換え。',
          '複数ボードにまたがるワークフロー、カスタムフィールド、チーム管理、レポート機能を実装。',
          '各チームが成果物を正確に追跡・計測し、ボトルネックを特定できる状態を実現。',
        ],
        tags: ['PYTHON', 'DJANGO', 'MYSQL', 'REACT', 'VUE'],
      },
    ],
    stackNames: ['言語', 'データ・メッセージング', '基盤', 'ツール'],
    practice: ['分散システム', '可観測性', 'システム設計', '障害対応'],
    repoUnit: '第',
    repoDescs: [
      'iFood の注文ごとに Decolar Passaporte のポイントが貯まり、航空券・ホテル・保険・ツアーに交換できる提携プロジェクト。37万人の利用者を対象としたパイロットを経て、iFood の全ユーザー6,000万人へ展開しました。担当は認証基盤側で、Decolar アプリと iFood アプリ間のアプリ間 OAuth 2.0 フローを構築し、ネイティブ体験から離脱せずにアカウント連携できるようにして、ユーザー転換率94%を達成しました。',
      'iFood と Uber の提携における認証基盤。iFood アプリから Uber の配車を利用でき（逆も同様）、両社共通のロイヤリティ購読も導入されました。担当はアカウント基盤チームで、iFood と Uber のアカウントを安全に連携させる OAuth 2.0 アイデンティティプロバイダを構築し、トークン交換、セッション制御、両プラットフォーム間の同意管理までを担いました。5か国300人以上が関わる企業横断プロジェクトの一部として約180日で完成させ、ブラジル全国に展開しました。',
      '自治体向けに大量の分析データを集約・処理するため、Apache Druid 上にデータウェアハウスを構築しました。そのデータは Apache Superset の BI ダッシュボードで可視化し、戦略的な意思決定を支えています。あわせてデータの抽出・変換・ロードを行う Python のパイプラインをエンドツーエンドで開発し、レポートと分析のために正確かつ適時で構造化された情報を提供できるようにしました。',
      '市内で開催される NASA ハッカソンの運営では、チームやメンターとの連絡に WhatsApp を使うのが通例でしたが、数々の連絡トラブルが発生していました。そこで Discord と連携し、チームを分離したうえで自作のイベント管理ボットから運営できるプラットフォームを開発することにしました。構成はバックエンドに Golang と Gin、フロントエンドに Nuxt (Vue)、メール配信サービスとボットに Python を採用し、バックエンドとフロントエンド間は RestAPI、各サービスとボット間は gRPC で通信させました。',
      '利用者により大きな自律性・カスタマイズ性・自由度をもたらすことを目指したソーシャルネットワークの開発プロジェクトです。そのために、友人やフォロワーのネットワークを自分で管理できるツールを用意し、さらに自分の好みに最も近い形へ作り変えられるようにしています。',
      'Flutter を用いて iOS と Android 向けのモバイルアプリを開発しました。市役所に出向かなくても、オンラインで申請の提出と追跡ができます。これにより連絡が円滑になり、手続き全体が住民にとってデジタルで透明かつ無料になりました。利用者は登録、新規申請の作成、書類や写真の添付、進捗のリアルタイム確認が可能です。1Doc プラットフォームと連携し、用件別の申請カテゴリと更新ごとのメール通知も提供することで、最初から最後まで滑らかでアクセスしやすい体験を実現しています。',
    ],
    statuses: ['ACTIVE', 'ACTIVE', 'STABLE', 'ARCHIVED', 'ARCHIVED', 'STABLE'],
    channelLabels: ['メール', 'GITHUB', 'LINKEDIN', '履歴書'],
    resumeValue: 'PDF をダウンロード ▸',
    alertPatternBlue: 'パターン青',
    alertStandby: '待機中',
    repoUnitSuffix: '号機',
    term: {
      toggleCollapse: '閉じる ▾',
      toggleExpand: '開く ▴',
      whoami:
        'ミゲル・コロンボ — iFood のソフトウェアエンジニア。Go / Java。マイクロサービス構成、高スループットサービス。',
      syncStatus: 'シンクロ率 98.4% — ハーモニクス正常',
      hire: '通信回線を開きました：miguelcolombo3@gmail.com',
      sudo: '操作員は sudoers に登録されていません。この件は中央ドグマへ報告されました。',
      navigating: '移動中 → 項目 0',
      notFound: 'コマンドが見つかりません: ',
      notFoundHint: ' — `help` を試してください',
    },
  },
}
