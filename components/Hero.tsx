export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-linear-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-100 pointer-events-none" />

      {/* Subtle gradient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-navy-600/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text */}
          <div className="text-white space-y-6">

            {/* 1. Label */}
            <span className="inline-flex items-center text-xs font-semibold tracking-[0.14em] text-blue-300/75 border border-blue-400/25 rounded-full px-3.5 py-1.5">
              事業のITパートナー
            </span>

            {/* 2. Main headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight max-w-lg">
              Web制作やIT活用の進め方を、
              <br className="hidden sm:inline" />
              事業に合わせて整理します。
            </h1>

            {/* 3. Body */}
            <div className="text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-md space-y-3">
              <ul className="space-y-1.5">
                {[
                  'Webサイト・LPを新しく作りたい',
                  '制作会社への依頼内容を整理したい',
                  'AIを何から使い始めるべきか知りたい',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full bg-blue-300/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>そんな局面を、一緒に整理します。</p>
            </div>

            {/* 4. CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                相談内容を送る
                <ArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-6 py-3 rounded-md font-medium text-sm sm:text-base hover:bg-white/10 transition-colors"
              >
                支援内容を見る
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <HeroIllustration />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="8" cy="8" r="2.5" fill="currentColor">
              <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 720 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      aria-hidden="true"
    >
      {/* Laptop body — 456×290 ≈ 1.57:1, close to 16:10 MacBook ratio */}
      <rect x="132" y="24" width="456" height="290" rx="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(8,18,42,0.95)"/>
      <circle cx="158" cy="42" r="5" fill="rgba(255,255,255,0.22)"/>
      <circle cx="174" cy="42" r="5" fill="rgba(255,255,255,0.13)"/>
      <circle cx="190" cy="42" r="5" fill="rgba(255,255,255,0.08)"/>
      <line x1="144" y1="62" x2="576" y2="62" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="144" y="64" width="432" height="238" rx="4" fill="rgba(4,10,28,0.97)"/>

      {/* Card 1: 課題を整理 — square (blue) */}
      <rect x="169" y="124" width="118" height="118" rx="10" stroke="rgba(96,165,250,0.8)" strokeWidth="2" fill="rgba(96,165,250,0.07)"/>
      <circle cx="228" cy="162" r="26" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" fill="rgba(96,165,250,0.13)"/>
      <circle cx="225" cy="159" r="10" stroke="rgba(96,165,250,1)" strokeWidth="2" fill="none"/>
      <line x1="233.5" y1="167.5" x2="241" y2="175" stroke="rgba(96,165,250,1)" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="228" y="215" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">課題を整理</text>

      {/* Arrow 1→2 */}
      <line x1="289" y1="162" x2="299" y2="162" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M295 157 L303 162 L295 167" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 2: 進め方を設計 — square (green) */}
      <rect x="301" y="124" width="118" height="118" rx="10" stroke="rgba(52,211,153,0.8)" strokeWidth="2" fill="rgba(52,211,153,0.07)"/>
      <circle cx="360" cy="162" r="26" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" fill="rgba(52,211,153,0.13)"/>
      <rect x="351" y="151" width="18" height="23" rx="2.5" stroke="rgba(52,211,153,1)" strokeWidth="1.8" fill="none"/>
      <rect x="354" y="148" width="12" height="6" rx="1.5" stroke="rgba(52,211,153,0.8)" strokeWidth="1.5" fill="rgba(52,211,153,0.3)"/>
      <line x1="354" y1="159" x2="365" y2="159" stroke="rgba(52,211,153,0.8)" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="354" y1="164" x2="365" y2="164" stroke="rgba(52,211,153,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="354" y1="169" x2="361" y2="169" stroke="rgba(52,211,153,0.5)" strokeWidth="1.4" strokeLinecap="round"/>
      <text x="360" y="215" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">進め方を設計</text>

      {/* Arrow 2→3 */}
      <line x1="421" y1="162" x2="431" y2="162" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M427 157 L435 162 L427 167" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 3: 実行を伴走 — square (gold) */}
      <rect x="433" y="124" width="118" height="118" rx="10" stroke="rgba(212,170,74,0.8)" strokeWidth="2" fill="rgba(212,170,74,0.07)"/>
      <circle cx="492" cy="162" r="26" stroke="rgba(212,170,74,0.4)" strokeWidth="1.5" fill="rgba(212,170,74,0.13)"/>
      <circle cx="492" cy="156" r="7.5" stroke="rgba(212,170,74,1)" strokeWidth="1.8" fill="none"/>
      <path d="M481 174 C481 167 486 164 492 164 C498 164 503 167 503 174" stroke="rgba(212,170,74,1)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <text x="492" y="215" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">実行を伴走</text>

      {/* Laptop base */}
      <path d="M84 314 Q84 326 98 326 L622 326 Q636 326 636 314 L588 314 L132 314 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <rect x="298" y="312" width="124" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>

      {/* Circle TL: Web制作 (blue) */}
      <circle cx="65" cy="90" r="52" stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" fill="rgba(96,165,250,0.03)"/>
      <circle cx="65" cy="90" r="39" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" fill="rgba(96,165,250,0.08)"/>
      <rect x="47" y="74" width="36" height="24" rx="4.5" stroke="rgba(96,165,250,0.9)" strokeWidth="1.7" fill="none"/>
      <line x1="47" y1="81" x2="83" y2="81" stroke="rgba(96,165,250,0.5)" strokeWidth="1.3"/>
      <circle cx="53" cy="78" r="2.2" fill="rgba(96,165,250,0.7)"/>
      <circle cx="59.5" cy="78" r="2.2" fill="rgba(96,165,250,0.5)"/>
      <text x="65" y="109" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">Web制作</text>
      <line x1="102" y1="53" x2="155" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle BL: 外注相談 (blue) */}
      <circle cx="65" cy="240" r="52" stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" fill="rgba(96,165,250,0.03)"/>
      <circle cx="65" cy="240" r="39" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" fill="rgba(96,165,250,0.08)"/>
      <path d="M45 232 L53 225 L65 230 L77 225 L85 232" stroke="rgba(96,165,250,0.9)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M46 238 L65 246 L84 238" stroke="rgba(96,165,250,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="65" y="259" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">外注相談</text>
      <line x1="100" y1="278" x2="155" y2="311" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle TR: IT活用 (teal) */}
      <circle cx="655" cy="90" r="52" stroke="rgba(20,184,166,0.2)" strokeWidth="1.5" fill="rgba(20,184,166,0.03)"/>
      <circle cx="655" cy="90" r="39" stroke="rgba(20,184,166,0.6)" strokeWidth="1.5" fill="rgba(20,184,166,0.08)"/>
      <rect x="638" y="76" width="7" height="18" rx="2" fill="rgba(20,184,166,0.5)"/>
      <rect x="648" y="70" width="7" height="24" rx="2" fill="rgba(20,184,166,0.65)"/>
      <rect x="658" y="63" width="7" height="31" rx="2" fill="rgba(20,184,166,0.8)"/>
      <line x1="636" y1="95" x2="667" y2="95" stroke="rgba(20,184,166,0.35)" strokeWidth="1.2"/>
      <path d="M640 91 L647 82 L653 85 L660 75" stroke="rgba(212,170,74,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="660" cy="75" r="2.5" fill="rgba(212,170,74,0.9)"/>
      <text x="655" y="109" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">IT活用</text>
      <line x1="618" y1="53" x2="565" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle BR: AI活用 (violet) */}
      <circle cx="655" cy="240" r="52" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" fill="rgba(139,92,246,0.03)"/>
      <circle cx="655" cy="240" r="39" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" fill="rgba(139,92,246,0.08)"/>
      <rect x="641" y="223" width="28" height="28" rx="4" stroke="rgba(139,92,246,0.85)" strokeWidth="1.7" fill="none"/>
      <rect x="646" y="228" width="18" height="18" rx="2.5" stroke="rgba(139,92,246,0.35)" strokeWidth="1.2" fill="rgba(139,92,246,0.1)"/>
      <line x1="646" y1="223" x2="646" y2="219" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="653" y1="223" x2="653" y2="219" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="660" y1="223" x2="660" y2="219" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="666" y1="223" x2="666" y2="219" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="646" y1="251" x2="646" y2="255" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="653" y1="251" x2="653" y2="255" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="660" y1="251" x2="660" y2="255" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="666" y1="251" x2="666" y2="255" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="641" y1="231" x2="637" y2="231" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="641" y1="240" x2="637" y2="240" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="641" y1="244" x2="637" y2="244" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="669" y1="231" x2="673" y2="231" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="669" y1="240" x2="673" y2="240" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <line x1="669" y1="244" x2="673" y2="244" stroke="rgba(139,92,246,0.6)" strokeWidth="1.3"/>
      <text x="655" y="242" textAnchor="middle" fill="rgba(139,92,246,0.95)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="800">AI</text>
      <text x="655" y="261" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">AI活用</text>
      <line x1="620" y1="278" x2="565" y2="311" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}
