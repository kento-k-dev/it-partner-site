const VALUES = [
  {
    step: '01',
    title: '整理する',
    body: '何に困っているのか、何を実現したいのかを言語化します。',
    color: 'from-blue-50 to-slate-50',
    border: 'border-blue-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="4" rx="2" fill="#1a3558" opacity="0.8"/>
        <rect x="4" y="14" width="18" height="4" rx="2" fill="#1a3558" opacity="0.5"/>
        <rect x="4" y="22" width="12" height="4" rx="2" fill="#1a3558" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: '設計する',
    body: 'Web制作、AI活用、業務改善、外注依頼など、目的に合った進め方を整理します。',
    color: 'from-navy-50 to-blue-50',
    border: 'border-navy-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <line x1="14" y1="9" x2="18" y2="9" stroke="#1a3558" strokeWidth="1.5"/>
        <line x1="9" y1="14" x2="9" y2="18" stroke="#1a3558" strokeWidth="1.5"/>
        <line x1="23" y1="14" x2="23" y2="18" stroke="#1a3558" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: '伴走する',
    body: '必要に応じて、制作、要件整理、外注先とのやり取り、改善提案まで支援します。',
    color: 'from-slate-50 to-navy-50',
    border: 'border-slate-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 24 C8 20 12 16 16 20 C20 24 24 14 28 10" stroke="#1a3558" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7"/>
        <circle cx="28" cy="10" r="3" fill="#1a3558" opacity="0.6"/>
        <circle cx="4" cy="24" r="3" stroke="#1a3558" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </svg>
    ),
  },
]

export default function ValueProposition() {
  return (
    <section id="value" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
            作る前に、まず整理する。
            <br />
            <span className="text-navy-700">事業に合ったIT活用を、実行できる形に整えます。</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {VALUES.map((item, i) => (
            <div
              key={item.step}
              data-animate
              data-delay={String(i + 1)}
              className={`relative rounded-2xl p-6 sm:p-8 bg-linear-to-br ${item.color} border ${item.border}`}
            >
              <div className="absolute top-5 right-5 text-4xl font-bold text-slate-100 select-none leading-none">
                {item.step}
              </div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
