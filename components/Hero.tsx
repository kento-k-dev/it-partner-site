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
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      aria-hidden="true"
    >
      {/* Laptop body */}
      <rect x="128" y="28" width="264" height="212" rx="14" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="rgba(10,20,45,0.85)"/>
      {/* Title bar */}
      <rect x="128" y="28" width="264" height="34" rx="14" fill="rgba(255,255,255,0.06)"/>
      <rect x="128" y="48" width="264" height="14" fill="rgba(255,255,255,0.06)"/>
      <circle cx="150" cy="45" r="4.5" fill="rgba(255,255,255,0.2)"/>
      <circle cx="165" cy="45" r="4.5" fill="rgba(255,255,255,0.12)"/>
      <circle cx="180" cy="45" r="4.5" fill="rgba(255,255,255,0.07)"/>
      {/* Screen */}
      <rect x="136" y="66" width="248" height="166" rx="3" fill="rgba(5,12,30,0.95)"/>

      {/* Card 1: 課題を整理 (blue) */}
      <rect x="140" y="72" width="70" height="130" rx="7" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" fill="rgba(96,165,250,0.07)"/>
      <circle cx="175" cy="102" r="18" stroke="rgba(96,165,250,0.4)" strokeWidth="1.2" fill="rgba(96,165,250,0.12)"/>
      <circle cx="173" cy="100" r="7.5" stroke="rgba(96,165,250,0.9)" strokeWidth="1.5" fill="none"/>
      <line x1="179" y1="106" x2="185" y2="112" stroke="rgba(96,165,250,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="175" y="133" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="700">課題を整理</text>

      {/* Arrow 1→2 */}
      <line x1="212" y1="132" x2="222" y2="132" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M219 128 L225 132 L219 136" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 2: 進め方を設計 (green) */}
      <rect x="226" y="72" width="70" height="130" rx="7" stroke="rgba(52,211,153,0.7)" strokeWidth="1.5" fill="rgba(52,211,153,0.07)"/>
      <circle cx="261" cy="102" r="18" stroke="rgba(52,211,153,0.4)" strokeWidth="1.2" fill="rgba(52,211,153,0.12)"/>
      <rect x="254" y="91" width="14" height="19" rx="2" stroke="rgba(52,211,153,0.9)" strokeWidth="1.4" fill="none"/>
      <rect x="257" y="88" width="8" height="5" rx="1.5" stroke="rgba(52,211,153,0.7)" strokeWidth="1.2" fill="rgba(52,211,153,0.25)"/>
      <line x1="257" y1="97" x2="265" y2="97" stroke="rgba(52,211,153,0.7)" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="257" y1="101" x2="265" y2="101" stroke="rgba(52,211,153,0.6)" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="257" y1="105" x2="263" y2="105" stroke="rgba(52,211,153,0.5)" strokeWidth="1.1" strokeLinecap="round"/>
      <text x="261" y="133" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="700">進め方を設計</text>

      {/* Arrow 2→3 */}
      <line x1="298" y1="132" x2="308" y2="132" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M305 128 L311 132 L305 136" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 3: 実行を伴走 (gold) */}
      <rect x="312" y="72" width="70" height="130" rx="7" stroke="rgba(212,170,74,0.7)" strokeWidth="1.5" fill="rgba(212,170,74,0.07)"/>
      <circle cx="347" cy="102" r="18" stroke="rgba(212,170,74,0.4)" strokeWidth="1.2" fill="rgba(212,170,74,0.12)"/>
      <circle cx="347" cy="96" r="6" stroke="rgba(212,170,74,0.9)" strokeWidth="1.4" fill="none"/>
      <path d="M336 112 C336 106 341 103 347 103 C353 103 358 106 358 112" stroke="rgba(212,170,74,0.9)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <text x="347" y="133" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="700">実行を伴走</text>

      {/* Laptop base */}
      <path d="M82 242 Q82 254 96 254 L424 254 Q438 254 438 242 L392 242 L128 242 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <rect x="216" y="240" width="88" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>

      {/* Circle TL: Web制作 */}
      <circle cx="52" cy="110" r="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="52" cy="110" r="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <rect x="38" y="95" width="28" height="20" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" fill="none"/>
      <line x1="38" y1="101" x2="66" y2="101" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <circle cx="43" cy="98" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="48" cy="98" r="1.5" fill="rgba(255,255,255,0.28)"/>
      <text x="52" y="125" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="9.5" fontFamily="system-ui,sans-serif" fontWeight="700">Web制作</text>
      <line x1="97" y1="102" x2="127" y2="76" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* Circle BL: 外注相談 */}
      <circle cx="52" cy="298" r="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="52" cy="298" r="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <path d="M38 294 L44 289 L52 293 L60 289 L66 294" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M39 298 L52 305 L65 298" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="52" y="317" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="9.5" fontFamily="system-ui,sans-serif" fontWeight="700">外注相談</text>
      <line x1="97" y1="283" x2="127" y2="240" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* Circle TR: IT活用 */}
      <circle cx="468" cy="110" r="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="468" cy="110" r="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <rect x="454" y="98" width="6" height="14" rx="1.5" fill="rgba(255,255,255,0.38)"/>
      <rect x="462" y="93" width="6" height="19" rx="1.5" fill="rgba(255,255,255,0.48)"/>
      <rect x="470" y="87" width="6" height="25" rx="1.5" fill="rgba(255,255,255,0.58)"/>
      <line x1="452" y1="113" x2="478" y2="113" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <path d="M457 109 L462 104 L467 107 L472 99" stroke="rgba(212,170,74,0.85)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="472" cy="99" r="2" fill="rgba(212,170,74,0.85)"/>
      <text x="468" y="125" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="9.5" fontFamily="system-ui,sans-serif" fontWeight="700">IT活用</text>
      <line x1="423" y1="102" x2="393" y2="76" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* Circle BR: AI活用 */}
      <circle cx="468" cy="298" r="48" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="468" cy="298" r="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <rect x="455" y="283" width="26" height="26" rx="3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" fill="none"/>
      <rect x="459" y="287" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <line x1="461" y1="283" x2="461" y2="280" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="465" y1="283" x2="465" y2="280" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="469" y1="283" x2="469" y2="280" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="473" y1="283" x2="473" y2="280" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="461" y1="309" x2="461" y2="312" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="465" y1="309" x2="465" y2="312" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="469" y1="309" x2="469" y2="312" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="473" y1="309" x2="473" y2="312" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="455" y1="290" x2="452" y2="290" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="455" y1="295" x2="452" y2="295" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="455" y1="300" x2="452" y2="300" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="481" y1="290" x2="484" y2="290" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="481" y1="295" x2="484" y2="295" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <line x1="481" y1="300" x2="484" y2="300" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>
      <text x="468" y="300" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontFamily="system-ui,sans-serif" fontWeight="700">AI</text>
      <text x="468" y="319" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="9.5" fontFamily="system-ui,sans-serif" fontWeight="700">AI活用</text>
      <line x1="423" y1="283" x2="393" y2="240" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  )
}
