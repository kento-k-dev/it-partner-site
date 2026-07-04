import { Fragment } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'お問い合わせ',
    body: '事業内容、ご相談内容、現在困っていることを簡単にお送りください。ご紹介・既存のおつながりのある方は、初回30分の無料相談も可能です。',
  },
  {
    num: '02',
    title: '内容確認・初回相談',
    body: 'ご相談内容を確認し、初回相談にて現状や目的、進め方の方向性を整理します。初回無料相談は、ご紹介・既存のおつながりのある方を対象としています。',
  },
  {
    num: '03',
    title: '有料相談・整理サポートのご案内',
    body: '具体的な提案、調査、構成整理、要件整理などが必要な場合は、内容に応じて有料相談または整理サポートをご案内します。',
  },
  {
    num: '04',
    title: 'ご提案',
    body: 'スポット相談、整理サポート、継続支援、Webサイト・LP制作など、状況に合った進め方をご提案します。',
  },
  {
    num: '05',
    title: '支援開始',
    body: '合意した内容に沿って、相談、整理、企画、制作、改善支援を進めます。制作を伴う場合は、進め方とお支払い条件を確認のうえ着手します。',
  },
]

export default function ConsultationFlow() {
  return (
    <section id="flow" className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">Flow</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">ご相談の流れ</h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            いきなり制作や開発に進むのではなく、まずは現状や目的を整理し、必要な進め方を確認したうえでご提案します。
          </p>
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
