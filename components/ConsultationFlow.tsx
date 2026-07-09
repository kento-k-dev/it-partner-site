import { Fragment } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'お問い合わせ',
    body: '相談内容をフォームから簡単にお送りください。',
  },
  {
    num: '02',
    title: '内容確認・初回相談',
    body: '現状や目的を整理し、進め方の方向性を確認します。',
  },
  {
    num: '03',
    title: 'プランのご案内',
    body: '内容に応じた有料相談・整理サポートをご案内します。',
  },
  {
    num: '04',
    title: 'ご提案',
    body: '状況に合った支援内容と進め方をご提案します。',
  },
  {
    num: '05',
    title: '支援開始',
    body: '合意した内容で相談・制作・支援を進めます。',
  },
]

export default function ConsultationFlow() {
  return (
    <section id="flow" className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Flow</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">ご相談の流れ</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            まず現状を整理し、必要な進め方を確認したうえでご提案します。
          </p>
        </div>

        {/* Mobile: compact vertical list */}
        <div className="sm:hidden" data-animate>
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-navy-100 my-1.5" />
                )}
              </div>
              <div className="pb-5 pt-1.5">
                <p className="font-bold text-navy-900 text-sm">{step.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden sm:flex items-start" data-animate>
          {STEPS.map((step, i) => (
            <Fragment key={step.num}>
              {i > 0 && (
                <div className="flex-1 h-px bg-navy-100 mt-[18px] mx-2" aria-hidden="true" />
              )}
              <div className="flex flex-col items-center text-center w-32">
                <div className="w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-xs mb-3">
                  {step.num}
                </div>
                <p className="font-bold text-navy-900 text-xs mb-1.5 leading-snug">{step.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
