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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight max-w-lg">
              Web制作やIT活用を、
              <br className="hidden sm:inline" />
              事業に合う形に整理します。
            </h1>

            {/* 3. Body */}
            <div className="text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-md space-y-3">
              <ul className="space-y-2">
                {[
                  '新しくWebサイトやLPを作りたい',
                  '制作会社への依頼内容を整理したい',
                  'AIを使いたいが、どこから始めるべきかわからない',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full bg-blue-300/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>そんなときに、必要な判断材料を整理し、進め方を明確にします。</p>
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
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      aria-hidden="true"
    >
      {/* Laptop body */}
      <rect x="60" y="40" width="320" height="220" rx="12" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)"/>
      {/* Laptop top bar */}
      <rect x="60" y="40" width="320" height="28" rx="12" fill="rgba(255,255,255,0.07)"/>
      <circle cx="82" cy="54" r="4" fill="rgba(255,255,255,0.15)"/>
      <circle cx="96" cy="54" r="4" fill="rgba(255,255,255,0.1)"/>
      <circle cx="110" cy="54" r="4" fill="rgba(255,255,255,0.07)"/>

      {/* Flowchart nodes */}
      {/* Node 1: 課題整理 */}
      <rect x="100" y="95" width="90" height="34" rx="7" stroke="rgba(147,197,253,0.65)" strokeWidth="1.5" fill="rgba(147,197,253,0.1)"/>
      <text x="145" y="117" textAnchor="middle" fill="rgba(147,197,253,0.9)" fontSize="10" fontFamily="system-ui">課題の整理</text>

      {/* Arrow 1→2 */}
      <line x1="190" y1="112" x2="218" y2="112" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <polygon points="218,107 228,112 218,117" fill="rgba(255,255,255,0.25)"/>

      {/* Node 2: 設計・整理 */}
      <rect x="228" y="95" width="90" height="34" rx="7" stroke="rgba(167,243,208,0.65)" strokeWidth="1.5" fill="rgba(167,243,208,0.09)"/>
      <text x="273" y="117" textAnchor="middle" fill="rgba(167,243,208,0.9)" fontSize="10" fontFamily="system-ui">設計・整理</text>

      {/* Arrow 2↓3 */}
      <line x1="273" y1="129" x2="273" y2="155" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <polygon points="268,155 273,165 278,155" fill="rgba(255,255,255,0.25)"/>

      {/* Node 3: 実行・伴走 */}
      <rect x="188" y="165" width="90" height="34" rx="7" stroke="rgba(253,230,138,0.65)" strokeWidth="1.5" fill="rgba(253,230,138,0.09)"/>
      <text x="233" y="187" textAnchor="middle" fill="rgba(253,230,138,0.9)" fontSize="10" fontFamily="system-ui">実行・伴走</text>

      {/* Laptop base */}
      <path d="M 30 262 Q 30 274 44 274 L 436 274 Q 450 274 450 262 L 380 262 L 100 262 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <rect x="190" y="260" width="100" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>

      {/* Floating badges */}
      <circle cx="410" cy="90" r="36" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="410" cy="90" r="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <text x="410" y="87" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="system-ui" fontWeight="500">IT</text>
      <text x="410" y="100" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="system-ui">活用</text>

      <circle cx="50" cy="195" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <circle cx="50" cy="195" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <text x="50" y="192" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="system-ui">Web</text>
      <text x="50" y="204" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="system-ui">制作</text>

      <circle cx="420" cy="310" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(255,255,255,0.03)"/>
      <text x="420" y="307" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="system-ui">AI</text>
      <text x="420" y="320" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui">活用</text>

      <circle cx="60" cy="330" r="20" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
      <text x="60" y="334" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="system-ui">PM</text>
    </svg>
  )
}
