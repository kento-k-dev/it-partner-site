const REASONS = [
  {
    title: '要件定義からリリースまで経験',
    body: 'システム開発の上流からリリースまで経験しているため、アイデアを実行可能な形に落とし込むことができます。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4" stroke="#1a3558" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'PM経験がある',
    body: '大手SIerで、最大50〜60名規模のWebプロジェクトを推進してきた経験をもとに、進め方・優先順位・関係者との調整まで現実的に考えます。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="3" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <circle cx="17" cy="7" r="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M3 19c0-3.3 2.7-6 6-6h0c3.3 0 6 2.7 6 6" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M17 13c1.8.5 3 2.1 3 4" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: '開発も理解している',
    body: '開発経験があるため、単なる表面的な提案ではなく、実現性や運用面も踏まえて整理できます。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="8,9 4,12 8,15" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16,9 20,12 16,15" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <line x1="14" y1="7" x2="10" y2="17" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: '専門用語に寄りすぎない',
    body: 'ITに詳しくない方にも伝わるよう、難しい言葉をできるだけ使わずに整理します。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="8" y1="14" x2="13" y2="14" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: '作って終わりではない',
    body: 'Webサイトやツールは、作ること自体が目的ではありません。事業にどう活かすかを前提に考えます。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20 C4 16 8 12 12 16 C16 20 20 10 20 6" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="6" r="2.5" fill="#1a3558" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: '小さく始められる',
    body: 'いきなり大きな開発や高額な制作ではなく、今必要なことから段階的に進めます。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="4" height="6" rx="1" fill="#1a3558" opacity="0.3"/>
        <rect x="10" y="10" width="4" height="10" rx="1" fill="#1a3558" opacity="0.5"/>
        <rect x="16" y="6" width="4" height="14" rx="1" fill="#1a3558" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: '成果を約束する前に、判断材料を整える',
    body: 'いきなり制作や導入を進めるのではなく、何を優先すべきか、どこまで外注するか、どう進めるかを整理し、判断しやすい状態をつくります。',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L3 8v8l9 5 9-5V8z" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <path d="M12 3v13M3 8l9 5 9-5" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            開発現場と事業者目線の<br className="sm:hidden" />両方から考えます。
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((item, i) => (
            <div
              key={item.title}
              data-animate
              data-delay={String(Math.min(i + 1, 6))}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-slate-100 hover:border-navy-100 hover:bg-navy-50/30 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1.5 text-sm sm:text-base leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
