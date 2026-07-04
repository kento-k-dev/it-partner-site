const TOPICS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="22" height="18" rx="3" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <line x1="3" y1="9" x2="25" y2="9" stroke="#1a3558" strokeWidth="1.5"/>
        <rect x="7" y="13" width="8" height="5" rx="1" fill="#1a3558" opacity="0.3"/>
        <line x1="17" y1="14" x2="21" y2="14" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <line x1="17" y1="17" x2="20" y2="17" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <rect x="9" y="22" width="10" height="3" rx="1" fill="#1a3558" opacity="0.2"/>
      </svg>
    ),
    title: 'Webサイト・LPを作る前の整理',
    body: '何を載せるべきか、どういう構成にするか、目的は何かを整理します。制作に入る前に方向性を決めておきたい方に。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <path d="M10 14 C10 10 14 8 18 11" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M10 14 C10 18 14 20 18 17" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <circle cx="14" cy="14" r="2.5" fill="#1a3558" opacity="0.4"/>
      </svg>
    ),
    title: 'AI活用の最初のテーマ整理',
    body: 'どの業務にAIを取り入れるか、何から始めるべきかを整理します。AIは気になるが、どこから手をつけるべきか分からない方に。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="8" height="8" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="7" width="8" height="8" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <rect x="10" y="16" width="8" height="6" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <line x1="8" y1="15" x2="14" y2="19" stroke="#1a3558" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        <line x1="20" y1="15" x2="14" y2="19" stroke="#1a3558" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: 'アプリ・Webサービスの企画整理',
    body: 'アイデアを形にする前に、機能・ターゲット・実現方法・開発の進め方を整理します。開発会社に相談する前の段階に。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="11" x2="24" y2="11" stroke="#1a3558" strokeWidth="1.5"/>
        <line x1="8" y1="15" x2="16" y2="15" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <line x1="8" y1="18" x2="13" y2="18" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="20" cy="16.5" r="3" stroke="#1a3558" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <line x1="22" y1="18.5" x2="24" y2="20.5" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: '制作会社・開発会社に依頼する前の整理',
    body: '提案内容・見積もりの妥当性確認、依頼範囲の整理、外注前の要件整理をサポートします。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="6" height="6" rx="1.5" fill="#1a3558" opacity="0.6"/>
        <rect x="4" y="17" width="6" height="6" rx="1.5" fill="#1a3558" opacity="0.3"/>
        <line x1="10" y1="11" x2="14" y2="11" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="11" x2="14" y2="20" stroke="#1a3558" strokeWidth="1.2"/>
        <line x1="10" y1="20" x2="14" y2="20" stroke="#1a3558" strokeWidth="1.2" strokeLinecap="round"/>
        <rect x="15" y="8" width="9" height="4" rx="1" stroke="#1a3558" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <rect x="15" y="16" width="9" height="4" rx="1" stroke="#1a3558" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <rect x="15" y="22" width="6" height="3" rx="1" stroke="#1a3558" strokeWidth="1.2" fill="none" opacity="0.3"/>
      </svg>
    ),
    title: '業務改善やツール導入の方向整理',
    body: '何から着手すべきか、どのツールが事業に合うか、優先順位を整理します。導入前に方向性を確認したい方に。',
  },
]

export default function ConsultationTopics() {
  return (
    <section id="consultation-topics" className="bg-surface py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">こういう局面でご相談いただいています</h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            ITや制作の機能を提供するというより、今まさに判断が必要な局面を整理するための支援です。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((item, i) => (
            <div
              key={item.title}
              data-animate
              data-delay={String(Math.min(i + 1, 5))}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md hover:border-navy-100 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-navy-900 mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
