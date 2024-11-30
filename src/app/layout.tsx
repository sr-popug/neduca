import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import MiniModal from '@/components/common/MiniModal/MiniModal'
import { H } from 'highlight.run'
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
H.init('<YOUR_PROJECT_ID>', {
  serviceName: 'frontend-app',
  tracingOrigins: true,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
    urlBlocklist: [
      // insert full or partial urls that you don't want to record here
      // Out of the box, Highlight will not record these URLs (they can be safely removed):
      'https://www.googleapis.com/identitytoolkit',
      'https://securetoken.googleapis.com',
    ],
  },
})
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
