const SERVICES = [
  {
    name: 'スポット相談',
    tag: '単発',
    tagColor: 'bg-blue-50 text-blue-700',
    summary: 'Web制作、AI活用、外注相談、アプリ企画などについて、単発で相談できます。',
    fits: [
      'まず方向性を整理したい',
      '制作会社に依頼する前に相談したい',
      '見積もりや提案内容を確認したい',
      'AI活用の入口を知りたい',
    ],
    price: '11,000円〜 / 60分',
  },
  {
    name: 'Web・IT整理サポート',
    tag: 'スポット',
    tagColor: 'bg-navy-50 text-navy-700',
    summary: '課題や目的を整理し、Webサイト、LP、AI活用、業務改善などの進め方を具体化します。',
    fits: [
      '自社に必要なIT活用を整理したい',
      '何から着手すべきか優先順位を決めたい',
      'サイトやサービスの構成を一緒に考えたい',
    ],
    price: '33,000円〜',
    highlight: true,
  },
  {
    name: '継続ITパートナー',
    tag: '月額',
    tagColor: 'bg-slate-100 text-slate-700',
    summary: '月1〜数回の相談を通じて、IT・Web・AI活用を継続的に支援します。',
    fits: [
      '社内にIT担当がいない',
      '継続的に相談できる相手がほしい',
      '外注先とのやり取りも相談したい',
      '事業に合わせて少しずつ改善したい',
    ],
    price: '月額55,000円〜',
  },
]

export default function ServiceMenu() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Menu</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">支援メニュー</h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            まずは課題や方向性の整理から入り、必要に応じてWebサイトやLPの制作、公開後の改善まで一貫して支援します。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              data-animate
              data-delay={String(i + 1)}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                s.highlight
                  ? 'bg-navy-900 border-navy-700 text-white shadow-xl'
                  : 'bg-white border-slate-100 shadow-xs hover:shadow-md hover:border-navy-100'
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-400 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                  おすすめ
                </div>
              )}

              <div className="mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.highlight ? 'bg-white/10 text-blue-200' : s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              <h3 className={`font-bold text-lg mb-2 ${s.highlight ? 'text-white' : 'text-navy-900'}`}>
                {s.name}
              </h3>
              <p className={`text-sm mb-5 leading-relaxed ${s.highlight ? 'text-blue-200/80' : 'text-slate-600'}`}>
                {s.summary}
              </p>

              <div className="flex-1">
                <p className={`text-xs font-semibold mb-2 ${s.highlight ? 'text-blue-300/70' : 'text-slate-400'}`}>
                  向いている方
                </p>
                <ul className="space-y-1.5">
                  {s.fits.map((fit) => (
                    <li key={fit} className="flex items-start gap-2">
                      <svg className={`flex-shrink-0 mt-0.5 ${s.highlight ? 'text-gold-400' : 'text-navy-400'}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                        <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`text-xs leading-relaxed ${s.highlight ? 'text-blue-100/80' : 'text-slate-600'}`}>
                        {fit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-5 pt-5 border-t ${s.highlight ? 'border-white/10' : 'border-slate-100'}`}>
                <p className={`text-base font-bold ${s.highlight ? 'text-gold-400' : 'text-navy-800'}`}>
                  {s.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" data-animate>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-800 text-white px-7 py-3.5 rounded-md font-semibold hover:bg-navy-700 transition-colors shadow-md"
          >
            まずは相談内容を送る
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
