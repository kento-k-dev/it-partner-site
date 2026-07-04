const STEPS = [
  {
    num: '01',
    title: 'お問い合わせ',
    body: '相談内容、事業内容、現在の課題を簡単にお送りください。',
  },
  {
    num: '02',
    title: '内容確認',
    body: 'ご相談内容を確認し、対応可能かどうかをご連絡します。',
  },
  {
    num: '03',
    title: '初回相談',
    body: '現状や目的を伺い、必要な進め方を整理します。',
  },
  {
    num: '04',
    title: 'ご提案',
    body: '単発相談、整理サポート、継続支援など、状況に合った形をご提案します。',
  },
  {
    num: '05',
    title: '支援開始',
    body: '合意した内容に沿って、相談・整理・制作・伴走支援を進めます。',
  },
]

export default function ConsultationFlow() {
  return (
    <section id="flow" className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Flow</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">ご相談の流れ</h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden sm:block" data-animate>
          <div className="flex items-start gap-0">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex-1 flex flex-col items-center">
                {/* Number + connector */}
                <div className="flex items-center w-full">
                  {i > 0 && <div className="flex-1 h-px bg-navy-100 mt-px" />}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && <div className="flex-1 h-px bg-navy-100 mt-px" />}
                  {i === STEPS.length - 1 && <div className="flex-1" />}
                </div>
                {/* Content */}
                <div className="text-center mt-4 px-2">
                  <p className="font-bold text-navy-900 text-sm mb-1.5">{step.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="sm:hidden space-y-0" data-animate>
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-navy-100 my-1" style={{ minHeight: '1.5rem' }} />
                )}
              </div>
              <div className="pb-6 pt-1.5">
                <p className="font-bold text-navy-900 mb-1">{step.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
