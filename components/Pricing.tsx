const PLANS = [
  {
    name: 'スポット相談',
    price: '11,000円〜',
    unit: '/ 60分',
    body: 'Web制作、AI活用、外注相談、アプリ企画など、単発でご相談いただけます。',
  },
  {
    name: 'Web・IT整理サポート',
    price: '33,000円〜',
    unit: '',
    body: '課題整理、方向性整理、サイト構成、ツール選定、外注前の要件整理などを行います。',
    highlight: true,
  },
  {
    name: '継続ITパートナー',
    price: '月額55,000円〜',
    unit: '',
    body: '月1〜数回の相談を通じて、IT・Web・AI活用を継続的に支援します。',
  },
  {
    name: 'Webサイト・LPの企画・制作支援',
    price: '個別見積もり',
    unit: '',
    body: '内容、ページ数、構成整理、文章作成支援、公開後の改善対応の有無に応じてお見積もりします。',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">料金目安</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              data-animate
              data-delay={String(i + 1)}
              className={`rounded-2xl p-6 sm:p-7 border ${
                plan.highlight
                  ? 'bg-navy-900 border-navy-700 text-white'
                  : 'bg-white border-slate-100 shadow-xs hover:shadow-md hover:border-navy-100'
              } transition-all duration-200`}
            >
              <h3 className={`font-bold text-lg mb-3 ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-2xl font-bold ${plan.highlight ? 'text-gold-400' : 'text-navy-800'}`}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-300/70' : 'text-slate-400'}`}>
                    {plan.unit}
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-blue-200/75' : 'text-slate-600'}`}>
                {plan.body}
              </p>
            </div>
          ))}
        </div>

        {/* Free consultation note */}
        <div className="max-w-xl mx-auto text-center bg-navy-50 rounded-xl p-5 sm:p-6 border border-navy-100" data-animate>
          <p className="text-sm text-navy-800 leading-relaxed">
            初回の事前確認は<span className="font-semibold">15〜30分無料</span>で行っています。
            <br className="hidden sm:inline" />
            具体的な調査、改善提案、資料作成を伴うご相談は有料にて承ります。
          </p>
        </div>

        <div className="mt-10 text-center" data-animate>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-800 text-white px-7 py-3.5 rounded-md font-semibold hover:bg-navy-700 transition-colors shadow-md"
          >
            相談内容を送る
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
