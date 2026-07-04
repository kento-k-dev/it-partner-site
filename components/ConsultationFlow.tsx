import { Fragment } from 'react'

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

        {/*
          Single unified render for both mobile and desktop.
          Mobile  (default) : flex-col — steps stack vertically, connector = vertical 1px line
          Desktop (sm:)     : flex-row — steps sit side-by-side, connector = horizontal 1px line
        */}
        <div className="flex flex-col sm:flex-row sm:items-start" data-animate>
          {STEPS.map((step, i) => (
            <Fragment key={step.num}>
              {/* Connector between steps */}
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className={[
                    // Mobile: vertical line aligned under circle center (circle = w-12 = 3rem, half = 1.5rem = 24px ≈ ml-6)
                    'w-px h-5 ml-6 bg-navy-100',
                    // Desktop: horizontal line at mt-6 (= 1.5rem) to align with circle vertical center
                    'sm:flex-1 sm:h-px sm:w-auto sm:mt-6 sm:ml-0',
                  ].join(' ')}
                />
              )}

              {/* Step item */}
              <div className="flex flex-row items-start gap-3 sm:flex-col sm:flex-1 sm:items-center sm:gap-0">
                {/* Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>

                {/* Text */}
                <div className="pt-2 flex-1 sm:flex-none sm:text-center sm:mt-4 sm:px-2 sm:pt-0">
                  <p className="font-bold text-navy-900 text-sm mb-1">{step.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
