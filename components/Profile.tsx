const TIMELINE = [
  {
    period: '総合コンサル時代',
    label: 'コンサルティング会社',
    body: '要件定義〜リリース、開発リーダー、チームリーダーとして複数プロジェクトに従事。',
  },
  {
    period: '大手SIer時代',
    label: 'プロジェクトマネージャー',
    body: '最大50〜60名規模のWebサイト開発プロジェクトを推進。要件整理、進行・品質管理、関係者調整を担当。',
  },
  {
    period: '現在',
    label: '独立・個人支援',
    body: '中小企業・個人事業主・フリーランス向けに、IT・Web・AI活用の相談・整理・実行支援を行っています。',
    current: true,
  },
]

import Image from 'next/image'

export default function Profile() {
  return (
    <section id="profile" className="bg-linear-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14" data-animate>
          <p className="text-xs font-semibold text-blue-300/70 tracking-widest uppercase mb-3">Profile</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">プロフィール</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Illustration + bio */}
          <div className="lg:col-span-2 flex flex-col items-center gap-6" data-animate>
            <ProfileIllustration />
            <div className="text-center">
              <p className="text-white font-semibold text-lg">ITビジネスパートナー</p>
              <p className="text-blue-300/70 text-sm mt-1">IT / Web / AI 活用支援</p>
            </div>
          </div>

          {/* Bio text + timeline */}
          <div className="lg:col-span-3 space-y-8" data-animate data-delay="1">
            <div className="space-y-4 text-blue-100/85 leading-relaxed text-sm sm:text-base">
              <p>
                総合コンサルティング会社にて、システム開発の要件定義からリリースまでを担当。
                開発リーダー、チームリーダーとして、プロジェクト推進や関係者調整にも携わってきました。
              </p>
              <p>
                その後、大手SIerにてプロジェクトマネージャーとして、最大50〜60名規模のWebサイト開発プロジェクトを推進。
                要件整理、進行管理、品質管理、関係者調整を行い、リリースまで導いてきました。
              </p>
              <p>
                現在はこれまでの経験を活かし、中小企業・個人事業主・フリーランスの方に向けて、
                IT・Web・AI活用の相談・整理・実行支援を行っています。
              </p>
              <p className="text-blue-200/60 text-sm">
                専門用語をできるだけ使わず、現状や目的を整理しながら進めることを大切にしています。
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div key={item.period} className="flex gap-4">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 border-2 ${
                      item.current ? 'bg-gold-400 border-gold-400' : 'bg-transparent border-blue-400/50'
                    }`} />
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-blue-400/20 my-1" style={{ minHeight: '2rem' }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs text-blue-300/60 mb-0.5">{item.period}</p>
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileIllustration() {
  return (
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-2 ring-white/15 shadow-xl">
      <Image
        src="/profile.png"
        alt="プロフィール写真"
        fill
        className="object-cover"
        style={{ objectPosition: '65% 5%' }}
        sizes="(max-width: 640px) 176px, 208px"
        priority
      />
    </div>
  )
}
