import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import MiniModal from '@/components/common/MiniModal/MiniModal'
import type { Metadata } from 'next'
import './globals.scss'

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'Neduca',
  description: 'Платформа тренировок',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body>
        <Header /> <MiniModal />
        {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
