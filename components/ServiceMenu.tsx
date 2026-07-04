type Service = {
  name: string
  tag: string
  tagColor: string
  summary: string
  note?: string
  fits: string[]
  price: string
  highlight?: boolean
}

const SERVICES: Service[] = [
  {
    name: 'スポット相談',
    tag: '単発',
    tagColor: 'bg-blue-50 text-blue-600',
    summary:
      'Web制作、AI活用、外注相談、アプリ企画などについて、単発でご相談いただけます。まず一度話しながら状況を整理したい場合や、判断材料を得たい場合に向いています。',
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
    tag: '整理・完結',
    tagColor: 'bg-navy-50 text-navy-700',
    summary:
      '課題や目的を整理し、Webサイト、LP、AI活用、業務改善などの進め方を具体化します。何を優先すべきか、どこまで外注するか、どのように進めるかを明確にしたい方に向いています。',
    note: '必要に応じて、方向性・優先順位・構成案などを簡易メモとして整理し、一度区切りのある形でご提供します。',
    fits: [
      '自社に必要なIT活用を整理したい',
      '何から着手すべきか優先順位を決めたい',
      'サイトやサービスの構成を一緒に考えたい',
      '外注前に要件や方向性を整理したい',
    ],
    price: '33,000円〜',
    highlight: true,
  },
  {
    name: 'Webサイト・LPの企画・制作支援',
    tag: '制作支援',
    tagColor: 'bg-teal-50 text-teal-700',
    summary:
      '課題や目的の整理から、ページ構成、掲載内容、必要に応じた制作・公開支援まで一貫して対応します。紹介用LP、サービスサイト、小規模な事業紹介ページなど、事業に合った形で形にしたい方に向いています。',
    fits: [
      '紹介や営業で使えるページを作りたい',
      '構成や掲載内容から一緒に考えたい',
      '制作会社に丸投げする前に方向性を整えたい',
      '公開後の改善も見据えて進めたい',
    ],
    price: '個別見積もり',
  },
  {
    name: '継続ITパートナー',
    tag: '月額・継続',
    tagColor: 'bg-slate-100 text-slate-600',
    summary:
      '月1〜数回の相談を通じて、IT・Web・AI活用を継続的に支援します。単発の整理で終わらず、毎月の相談窓口として、改善や判断を一緒に進めたい方に向いています。',
    note: '制作後の改善、外注先とのやり取り、業務整理、AI活用の見直しなども含め、都度相談しながら進めていける形です。',
    fits: [
      '社内にIT担当がいない',
      '継続的に相談できる相手がほしい',
      '外注先とのやり取りも相談したい',
      '事業に合わせて少しずつ改善したい',
      '制作後の運用や改善も一緒に考えたい',
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
            事業の状況やご相談内容に応じて、まず1回整理するところから、要件整理、制作支援、継続的な伴走まで、必要な形でご一緒します。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
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
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    s.highlight ? 'bg-white/10 text-blue-200' : s.tagColor
                  }`}
                >
                  {s.tag}
                </span>
              </div>

              <h3 className={`font-bold text-lg mb-2 ${s.highlight ? 'text-white' : 'text-navy-900'}`}>
                {s.name}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${s.highlight ? 'text-blue-200/80' : 'text-slate-600'}`}>
                {s.summary}
              </p>

              {s.note && (
                <p
                  className={`text-xs leading-relaxed mb-4 px-3 py-2.5 rounded-lg ${
                    s.highlight ? 'bg-white/8 text-blue-200/70' : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  {s.note}
                </p>
              )}

              <div className="flex-1">
                <p className={`text-xs font-semibold mb-2 ${s.highlight ? 'text-blue-300/70' : 'text-slate-400'}`}>
                  向いている方
                </p>
                <ul className="space-y-1.5">
                  {s.fits.map((fit) => (
                    <li key={fit} className="flex items-start gap-2">
                      <svg
                        className={`flex-shrink-0 mt-0.5 ${s.highlight ? 'text-gold-400' : 'text-navy-400'}`}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
                        <path
                          d="M4.5 7l2 2 3-3"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
