import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, DM_Sans } from 'next/font/google'

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">

      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M6RR7C5D');
        `}
      </Script>

      <body className={`${poppins.variable} ${dmSans.variable} font-sans antialiased`}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6RR7C5D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

      </body>
    </html>
  )
}