'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'ITに詳しくなくても相談できますか？',
    a: 'はい。専門用語をできるだけ使わず、現状や目的を伺いながら整理します。「何がわからないのかわからない」という状態からでもお気軽にどうぞ。',
  },
  {
    q: 'Webサイト制作だけでも相談できますか？',
    a: 'はい。サイトの目的整理、構成、掲載内容、制作方針からご相談いただけます。まだ発注先が決まっていない段階でも問題ありません。',
  },
  {
    q: 'AI活用について、初心者でも相談できますか？',
    a: 'はい。ChatGPTなどのAIツールを、日々の業務にどう活かせるかから一緒に整理します。「AIは気になるけど何から始めれば」という方も歓迎です。',
  },
  {
    q: '制作会社の見積もりを見てもらえますか？',
    a: '可能です。金額の高い・安いだけでなく、作業範囲、前提条件、注意点を整理します。契約前の確認として活用いただけます。',
  },
  {
    q: '継続契約ではなく、単発でも相談できますか？',
    a: 'はい。まずはスポット相談からご利用いただけます。その後、継続が必要と感じれば、状況に合わせてご提案します。',
  },
  {
    q: '紹介がなくても相談できますか？',
    a: '新規のお問い合わせも可能ですが、ご紹介・既存のおつながりのある方を優先して対応しています。お問い合わせいただいた後、内容を確認のうえご連絡いたします。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-navy-500 tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">よくある質問</h2>
        </div>

        <div className="space-y-3" data-animate>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-xs"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-navy-900 text-sm sm:text-base leading-snug pr-2">
                    <span className="text-navy-400 mr-2 font-bold">Q.</span>
                    {faq.q}
                  </span>
                  <svg
                    className={`flex-shrink-0 text-navy-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-50">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        <span className="text-navy-300 font-bold mr-2">A.</span>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
