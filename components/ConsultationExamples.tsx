const EXAMPLES = [
  {
    tag: '相談例 01',
    title: 'パーソナルトレーナーの紹介用LP企画・制作支援',
    body: '強みの整理、掲載内容の構成、問い合わせ導線の設計を行い、紹介やSNSから見てもらうためのLPづくりを支援。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="20" height="18" rx="3" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="10" x2="24" y2="10" stroke="#1a3558" strokeWidth="1.5"/>
        <rect x="8" y="14" width="6" height="5" rx="1" fill="#1a3558" opacity="0.3"/>
        <line x1="16" y1="15" x2="20" y2="15" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <line x1="16" y1="18" x2="19" y2="18" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    tag: '相談例 02',
    title: '制作会社に依頼する前の要件整理サポート',
    body: 'Webサイトを作りたいが、何をどこまで依頼すべきか分からない方向けに、目的・必要ページ・掲載内容・進め方を整理。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14 L5 23 L23 23 L23 14" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M11 14 L14 11 L17 14" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="14" y1="5" x2="14" y2="17" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="9" y1="18" x2="19" y2="18" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    tag: '相談例 03',
    title: '個人事業主向けのAI活用・業務整理支援',
    body: '日々の情報整理、文章作成、問い合わせ対応などにAIをどう活かせるかを整理し、無理なく取り入れられる形を一緒に検討。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="4" stroke="#1a3558" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <line x1="14" y1="5" x2="14" y2="10" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <line x1="14" y1="18" x2="14" y2="23" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <line x1="5" y1="14" x2="10" y2="14" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <line x1="18" y1="14" x2="23" y2="14" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
  },
]

export default function ConsultationExamples() {
  return (
    <section id="examples" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Case Examples</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            こんなご相談に対応しています
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            事業の状況や課題に合わせて、整理・企画・制作・改善まで必要な形で支援します。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {EXAMPLES.map((ex, i) => (
            <div
              key={ex.title}
              data-animate
              data-delay={String(i + 1)}
              className="flex flex-col bg-white rounded-2xl border border-slate-100 p-6 shadow-xs hover:shadow-md hover:border-navy-100 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                  {ex.icon}
                </div>
                <span className="text-xs font-semibold text-navy-400 tracking-wide">{ex.tag}</span>
              </div>
              <h3 className="font-bold text-navy-900 leading-snug mb-3 text-sm sm:text-base">
                {ex.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{ex.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8" data-animate>
          ※ 上記はご相談の一例です。実名・社名は使用していません。
        </p>
      </div>
    </section>
  )
}
