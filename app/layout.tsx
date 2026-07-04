import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: '事業のITパートナー｜中小企業・個人事業主向け IT・Web・AI活用支援',
  description:
    '中小企業・個人事業主のIT・Web・AI活用を、わかりやすく整理し、実行まで伴走します。Web制作、AI活用、アプリ企画、業務改善、外注・見積もり相談まで対応。',
  openGraph: {
    title: '事業のITパートナー｜中小企業・個人事業主向け IT・Web・AI活用支援',
    description:
      '中小企業・個人事業主のIT・Web・AI活用を、わかりやすく整理し、実行まで伴走します。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
