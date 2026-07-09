export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-base">WebとITの相談パートナー</p>
            <p className="text-blue-300/50 text-xs mt-1">中小企業・個人事業主向け IT・Web・AI活用支援</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: 'できること',   href: '#consultation-topics' },
              { label: '選ばれる理由', href: '#why-us' },
              { label: 'プロフィール', href: '#profile' },
              { label: '料金',         href: '#pricing' },
              { label: 'FAQ',          href: '#faq' },
              { label: 'お問い合わせ', href: '#contact' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-xs text-blue-300/50 hover:text-blue-300/80 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-blue-300/30 text-xs">
            &copy; {year} WebとITの相談パートナー. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
