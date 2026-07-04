const PROBLEMS = [
  'Webサイトを作りたいが、何を載せるべきかわからない',
  '制作会社に相談する前に、方向性を整理したい',
  'AIを使ってみたいが、仕事にどう活かせるかわからない',
  'アプリやWebサービスのアイデアを形にしたい',
  '開発会社の見積もりや提案内容が妥当か判断できない',
  '社内にITの相談相手がいない',
  'ツール導入や業務効率化を進めたいが、優先順位が決められない',
]

export default function PainPoints() {
  return (
    <section id="pain-points" className="bg-surface py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
            ITやWebのこと、<br className="sm:hidden" />
            ひとりで判断しづらくありませんか。
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
          {PROBLEMS.map((text, i) => (
            <div
              key={text}
              data-animate
              data-delay={String(Math.min(i + 1, 6))}
              className="flex items-start gap-3 bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-slate-100"
            >
              <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5.5L4 7.5L8 3" stroke="#1a3558" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto" data-animate>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            こうした曖昧な状態をそのまま相談できる、<br className="hidden sm:inline" />
            <span className="font-semibold text-navy-800">事業に必要なIT活用を整理するパートナー</span>として伴走します。
          </p>
        </div>
      </div>
    </section>
  )
}
