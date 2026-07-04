const PLANS = [
  {
    name: 'スポット相談',
    price: '11,000円〜',
    unit: '/ 60分',
    body: 'Web制作、AI活用、外注相談、アプリ企画などについて、単発でご相談いただけます。課題や方向性を整理したい場合や、制作・開発の前に一度話を整理したい場合におすすめです。',
  },
  {
    name: 'Web・IT整理サポート',
    price: '33,000円〜',
    unit: '',
    body: '課題整理、方向性整理、サイト構成、AI活用方針、外注前の要件整理などを行います。何から始めるべきかを整理し、実行しやすい形に整えたい方に向いています。',
    highlight: true,
  },
  {
    name: '継続ITパートナー',
    price: '月額55,000円〜',
    unit: '',
    body: '月1〜数回の相談を通じて、IT・Web・AI活用を継続的に支援します。社内にIT相談相手がいない場合や、単発ではなく継続的に整理・改善を進めたい場合に適しています。',
  },
  {
    name: 'Webサイト・LPの企画・制作支援',
    price: '個別見積もり',
    unit: '',
    body: '内容、ページ数、構成整理、文章作成支援、公開後の改善対応の有無に応じてお見積もりします。まずは課題や方向性の整理から入り、必要に応じて制作まで一貫して支援します。',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center mb-10" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">料金目安</h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            ご相談内容や支援範囲に応じて費用は変わりますが、目安として以下のような形でご案内しています。
            まずは現状や目的を整理したうえで、必要な進め方をご提案します。
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
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
        <div className="max-w-2xl mx-auto bg-navy-50 rounded-xl p-5 sm:p-6 border border-navy-100 mb-4" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">初回無料相談について</p>
          <p className="text-sm text-navy-800 leading-relaxed">
            ご紹介・既存のおつながりのある方に限り、<span className="font-semibold">初回30分のご相談は無料</span>で承っています。
            初回は、現状やご相談内容の確認、進め方の整理を中心に行います。
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">
            具体的な提案、調査、構成整理、資料作成を伴うご相談、また2回目以降のご相談は有料にて承ります。
          </p>
        </div>

        {/* Installment payment note */}
        <div className="max-w-2xl mx-auto mb-10" data-animate>
          <p className="text-xs text-slate-400 leading-relaxed text-center px-2">
            制作費については、内容や金額に応じて分割でのお支払いもご相談いただけます。
            なお、着手前に進め方とお支払い条件をご確認いただいたうえで、初回ご入金後に制作を開始します。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center" data-animate>
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
