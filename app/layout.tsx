import type { Metadata } from 'next'
import { Poppins, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Lanna Lídia | Cirurgiã-Dentista em João Pessoa',
  description: 'Dra. Lanna Lídia - Cirurgiã-Dentista CRO-PB 11026. Especialista em clareamento dental, implantes, próteses, tratamento de canal e odontopediatria em João Pessoa.',
  keywords: 'dentista João Pessoa, clareamento dental, implante dentário, prótese dentária, tratamento de canal, odontopediatria, Dra. Lanna Lídia',
  openGraph: {
    title: 'Dra. Lanna Lídia | Cirurgiã-Dentista em João Pessoa',
    description: 'Transforme seu sorriso com a Dra. Lanna Lídia. Atendimento humanizado e resultados excepcionais.',
    type: 'website',
  },

  icons: {
    icon: '/icon-white.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
