const GOOD_FIT = [
  '事業をよくするためにITやWebを活用したい方',
  '何から始めればよいか一緒に整理したい方',
  '長期的に相談できる相手を探している方',
  '制作や開発の前に、目的や要件を整理したい方',
  '必要な投資として、IT活用を考えたい方',
]

const DIFFICULT = [
  'とにかく安く作ることだけを目的としたご相談',
  '無料での詳細な調査・提案を前提としたご相談',
  '短期間で過度な成果を保証するようなご依頼',
  '目的や条件が大きく変わり続けるご依頼',
  '相互の信頼関係を築くことが難しいと判断されるご相談',
]

export default function Values() {
  return (
    <section id="values" className="bg-surface py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Our Values</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">大切にしていること</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Good fit */}
          <div data-animate data-delay="1" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9.5l3 3 7-7" stroke="#1a3558" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 text-lg">対応しやすい方</h3>
            </div>
            <ul className="space-y-3">
              {GOOD_FIT.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <svg className="flex-shrink-0 mt-1 text-navy-400" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="3" fill="currentColor" opacity="0.4"/>
                  </svg>
                  <span className="text-sm text-slate-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Difficult */}
          <div data-animate data-delay="2" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <line x1="5" y1="5" x2="13" y2="13" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="13" y1="5" x2="5" y2="13" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-slate-700 text-lg">対応が難しい相談</h3>
            </div>
            <ul className="space-y-3">
              {DIFFICULT.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <svg className="flex-shrink-0 mt-1 text-slate-300" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="3" fill="currentColor" opacity="0.6"/>
                  </svg>
                  <span className="text-sm text-slate-500 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center max-w-xl mx-auto" data-animate>
          <p className="text-sm text-slate-500 leading-relaxed">
            お互いに気持ちよく進めるため、ご相談内容や進め方によってはお受けできない場合があります。
            あらかじめご了承ください。
          </p>
        </div>
      </div>
    </section>
  )
}
