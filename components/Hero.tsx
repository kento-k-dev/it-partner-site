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
      viewBox="0 0 720 416"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      aria-hidden="true"
    >
      {/* Laptop body */}
      <rect x="132" y="26" width="456" height="356" rx="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(8,18,42,0.95)"/>
      <circle cx="158" cy="46" r="5.5" fill="rgba(255,255,255,0.22)"/>
      <circle cx="175" cy="46" r="5.5" fill="rgba(255,255,255,0.13)"/>
      <circle cx="192" cy="46" r="5.5" fill="rgba(255,255,255,0.08)"/>
      <line x1="144" y1="68" x2="576" y2="68" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="144" y="70" width="432" height="300" rx="4" fill="rgba(4,10,28,0.97)"/>

      {/* Card 1: 課題を整理 (blue) */}
      <rect x="169" y="78" width="118" height="284" rx="10" stroke="rgba(96,165,250,0.8)" strokeWidth="2" fill="rgba(96,165,250,0.07)"/>
      <circle cx="228" cy="174" r="36" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" fill="rgba(96,165,250,0.13)"/>
      <circle cx="225" cy="171" r="13" stroke="rgba(96,165,250,1)" strokeWidth="2.2" fill="none"/>
      <line x1="235.5" y1="181.5" x2="245" y2="191" stroke="rgba(96,165,250,1)" strokeWidth="2.8" strokeLinecap="round"/>
      <text x="228" y="284" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="17" fontFamily="system-ui,sans-serif" fontWeight="700">課題を整理</text>

      {/* Arrow 1→2 */}
      <line x1="289" y1="170" x2="299" y2="170" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M295 165 L303 170 L295 175" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 2: 進め方を設計 (green) */}
      <rect x="301" y="78" width="118" height="284" rx="10" stroke="rgba(52,211,153,0.8)" strokeWidth="2" fill="rgba(52,211,153,0.07)"/>
      <circle cx="360" cy="174" r="36" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" fill="rgba(52,211,153,0.13)"/>
      <rect x="349" y="158" width="22" height="29" rx="3" stroke="rgba(52,211,153,1)" strokeWidth="2" fill="none"/>
      <rect x="353" y="154" width="14" height="7" rx="2" stroke="rgba(52,211,153,0.8)" strokeWidth="1.6" fill="rgba(52,211,153,0.3)"/>
      <line x1="354" y1="167" x2="367" y2="167" stroke="rgba(52,211,153,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="354" y1="173" x2="367" y2="173" stroke="rgba(52,211,153,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="354" y1="179" x2="362" y2="179" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="360" y="284" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="17" fontFamily="system-ui,sans-serif" fontWeight="700">進め方を設計</text>

      {/* Arrow 2→3 */}
      <line x1="421" y1="170" x2="431" y2="170" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M427 165 L435 170 L427 175" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Card 3: 実行を伴走 (gold) */}
      <rect x="433" y="78" width="118" height="284" rx="10" stroke="rgba(212,170,74,0.8)" strokeWidth="2" fill="rgba(212,170,74,0.07)"/>
      <circle cx="492" cy="174" r="36" stroke="rgba(212,170,74,0.4)" strokeWidth="1.5" fill="rgba(212,170,74,0.13)"/>
      <circle cx="492" cy="162" r="9" stroke="rgba(212,170,74,1)" strokeWidth="2" fill="none"/>
      <path d="M480 189 C480 181 486 177 492 177 C498 177 504 181 504 189" stroke="rgba(212,170,74,1)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <text x="492" y="284" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="17" fontFamily="system-ui,sans-serif" fontWeight="700">実行を伴走</text>

      {/* Laptop base */}
      <path d="M82 384 Q82 396 96 396 L624 396 Q638 396 638 384 L588 384 L132 384 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <rect x="300" y="382" width="120" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>

      {/* Circle TL: Web制作 (blue) */}
      <circle cx="65" cy="162" r="55" stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" fill="rgba(96,165,250,0.03)"/>
      <circle cx="65" cy="162" r="42" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" fill="rgba(96,165,250,0.08)"/>
      <rect x="46" y="144" width="38" height="28" rx="5" stroke="rgba(96,165,250,0.9)" strokeWidth="1.8" fill="none"/>
      <line x1="46" y1="153" x2="84" y2="153" stroke="rgba(96,165,250,0.55)" strokeWidth="1.4"/>
      <circle cx="52" cy="149" r="2.5" fill="rgba(96,165,250,0.7)"/>
      <circle cx="59" cy="149" r="2.5" fill="rgba(96,165,250,0.5)"/>
      <text x="65" y="188" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">Web制作</text>
      <line x1="119" y1="150" x2="132" y2="64" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle BL: 外注相談 (blue) */}
      <circle cx="65" cy="318" r="55" stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" fill="rgba(96,165,250,0.03)"/>
      <circle cx="65" cy="318" r="42" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" fill="rgba(96,165,250,0.08)"/>
      <path d="M44 310 L52 303 L65 308 L78 303 L86 310" stroke="rgba(96,165,250,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M45 317 L65 326 L85 317" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="65" y="344" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">外注相談</text>
      <line x1="119" y1="314" x2="132" y2="378" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle TR: IT活用 (teal) */}
      <circle cx="655" cy="162" r="55" stroke="rgba(20,184,166,0.2)" strokeWidth="1.5" fill="rgba(20,184,166,0.03)"/>
      <circle cx="655" cy="162" r="42" stroke="rgba(20,184,166,0.6)" strokeWidth="1.5" fill="rgba(20,184,166,0.08)"/>
      <rect x="636" y="150" width="8" height="22" rx="2" fill="rgba(20,184,166,0.5)"/>
      <rect x="648" y="143" width="8" height="29" rx="2" fill="rgba(20,184,166,0.65)"/>
      <rect x="660" y="136" width="8" height="36" rx="2" fill="rgba(20,184,166,0.8)"/>
      <line x1="634" y1="173" x2="670" y2="173" stroke="rgba(20,184,166,0.35)" strokeWidth="1.2"/>
      <path d="M639 168 L646 159 L652 162 L660 152" stroke="rgba(212,170,74,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="660" cy="152" r="3" fill="rgba(212,170,74,0.9)"/>
      <text x="655" y="188" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">IT活用</text>
      <line x1="601" y1="150" x2="588" y2="64" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Circle BR: AI活用 (violet) */}
      <circle cx="655" cy="318" r="55" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" fill="rgba(139,92,246,0.03)"/>
      <circle cx="655" cy="318" r="42" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" fill="rgba(139,92,246,0.08)"/>
      <rect x="637" y="298" width="36" height="36" rx="5" stroke="rgba(139,92,246,0.85)" strokeWidth="1.8" fill="none"/>
      <rect x="643" y="304" width="24" height="24" rx="3" stroke="rgba(139,92,246,0.35)" strokeWidth="1.2" fill="rgba(139,92,246,0.1)"/>
      <line x1="644" y1="298" x2="644" y2="294" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="652" y1="298" x2="652" y2="294" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="660" y1="298" x2="660" y2="294" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="668" y1="298" x2="668" y2="294" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="644" y1="334" x2="644" y2="338" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="652" y1="334" x2="652" y2="338" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="660" y1="334" x2="660" y2="338" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="668" y1="334" x2="668" y2="338" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="637" y1="307" x2="633" y2="307" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="637" y1="316" x2="633" y2="316" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="637" y1="325" x2="633" y2="325" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="673" y1="307" x2="677" y2="307" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="673" y1="316" x2="677" y2="316" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <line x1="673" y1="325" x2="677" y2="325" stroke="rgba(139,92,246,0.65)" strokeWidth="1.4"/>
      <text x="655" y="320" textAnchor="middle" fill="rgba(139,92,246,0.95)" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="800">AI</text>
      <text x="655" y="348" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">AI活用</text>
      <line x1="601" y1="314" x2="588" y2="378" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3"/>
    </svg>
  )
}
