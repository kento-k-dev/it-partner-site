'use client'

import { useState } from 'react'

const BUDGET_OPTIONS = [
  'まずは有料相談をしたい',
  '1万円〜3万円程度',
  '3万円〜10万円程度',
  '10万円〜30万円程度',
  '30万円以上',
  '未定だが、必要に応じて予算化できる',
]

const CONTACT_METHODS = [
  'オンライン（Google Meet / Zoom）',
  'メール',
  'どちらでも可',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [referral, setReferral] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: (document.getElementById('contact')?.offsetTop ?? 0) - 80, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="bg-linear-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12" data-animate>
          <p className="text-xs font-semibold text-blue-300/70 tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">ご相談について</h2>
          <p className="text-blue-200/75 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            現在は、ご紹介・既存のおつながりのある方を中心に、IT・Web・AI活用に関するご相談を承っています。
            新規でのお問い合わせも可能ですが、ご相談内容を確認したうえで、対応可否をご連絡いたします。
          </p>
          <p className="mt-3 text-sm text-blue-300/60 leading-relaxed">
            まだ発注内容が固まっていない段階でも問題ありません。まずは整理や方向性の確認からご相談いただけます。
          </p>
          <p className="mt-2 text-sm text-blue-300/60 leading-relaxed">
            ご紹介・既存のおつながりのある方は、初回30分の無料相談も可能です。具体的な提案や整理を伴うご相談は、有料にて承ります。
          </p>
          <ul className="mt-5 inline-flex flex-col items-start gap-2 text-sm text-blue-200/65 text-left">
            {[
              'サイトを作りたいが、何を載せるべきかわからない',
              '制作会社・開発会社の見積もりの妥当性を見てほしい',
              'AIをどこから使い始めるべきか整理したい',
              'まだ発注内容が固まっていない段階でも相談できます',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-[9px] w-1 h-1 rounded-full bg-blue-300/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center" data-animate>
            <div className="w-14 h-14 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M6 14.5l5.5 5.5 10.5-11" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">送信が完了しました</h3>
            <p className="text-blue-200/80 leading-relaxed">
              お問い合わせありがとうございます。
              <br />
              内容を確認のうえ、ご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/6 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
            data-animate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="お名前" id="name" required>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="山田 太郎" className={inputCls} />
              </Field>
              <Field label="会社名・屋号" id="company">
                <input id="company" name="company" type="text" autoComplete="organization" placeholder="株式会社〇〇 / 個人事業" className={inputCls} />
              </Field>
            </div>

            <Field label="メールアドレス" id="email" required>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" className={inputCls} />
            </Field>

            <Field label="事業内容" id="business">
              <input id="business" name="business" type="text" placeholder="例：飲食店経営、Webデザイン事務所、士業など" className={inputCls} />
            </Field>

            <Field label="相談したい内容" id="topic" required>
              <textarea id="topic" name="topic" required rows={3} placeholder="例：Webサイトを作りたい、AI活用の入り口を知りたい、など" className={`${inputCls} resize-none`} />
            </Field>

            <Field label="現在困っていること" id="problem">
              <textarea id="problem" name="problem" rows={3} placeholder="例：制作会社からの見積もりが妥当かわからない、など" className={`${inputCls} resize-none`} />
            </Field>

            <Field label="希望する支援内容" id="support">
              <input id="support" name="support" type="text" placeholder="例：スポット相談、継続的なサポートなど" className={inputCls} />
            </Field>

            <Field label="ご予算感" id="budget" required>
              <select id="budget" name="budget" required className={`${inputCls} appearance-none`}>
                <option value="">選択してください</option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="希望時期" id="timing">
                <input id="timing" name="timing" type="text" placeholder="例：なるべく早め、来月以降、未定" className={inputCls} />
              </Field>
              <Field label="ご相談方法の希望" id="contactMethod">
                <select id="contactMethod" name="contactMethod" className={`${inputCls} appearance-none`}>
                  <option value="">選択してください</option>
                  {CONTACT_METHODS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="紹介者の有無" id="referral">
              <div className="flex gap-5 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="referral"
                    value="yes"
                    className="w-4 h-4 accent-white"
                    onChange={() => setReferral('yes')}
                  />
                  <span className="text-white/80 text-sm">紹介あり</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="referral"
                    value="no"
                    className="w-4 h-4 accent-white"
                    onChange={() => setReferral('no')}
                  />
                  <span className="text-white/80 text-sm">紹介なし（新規）</span>
                </label>
              </div>
            </Field>

            {referral === 'yes' && (
              <Field label="紹介者名" id="referralName" required>
                <input
                  id="referralName"
                  name="referralName"
                  type="text"
                  required
                  placeholder="例：山田 太郎さん"
                  className={inputCls}
                />
              </Field>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy-900 font-semibold rounded-md hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                送信する
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-xs text-blue-300/50 mt-3">
                ※ 送信いただいた内容はフォームのUIデモです。実際のお問い合わせ機能は準備中です。
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

const inputCls =
  'w-full bg-white/8 border border-white/15 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-400/60 focus:bg-white/12 transition-colors'

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string
  id: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-blue-200/70 mb-1.5">
        {label}
        {required && <span className="text-blue-400 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  )
}
