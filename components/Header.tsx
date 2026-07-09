'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'できること',   href: '#consultation-topics' },
  { label: '選ばれる理由', href: '#why-us' },
  { label: 'プロフィール', href: '#profile' },
  { label: 'メニュー・料金', href: '#services' },
  { label: '相談する',     href: '#contact', cta: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            WebとITの相談パートナー
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.cta ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="ml-3 px-4 py-2 rounded-md bg-navy-800 text-white text-sm font-medium hover:bg-navy-700 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 ${
                    scrolled ? 'text-slate-700 hover:bg-slate-100 hover:text-navy-800' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-slate-700' : 'text-white'
            }`}
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-current transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  item.cta
                    ? 'bg-navy-800 text-white text-center hover:bg-navy-700'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-navy-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
