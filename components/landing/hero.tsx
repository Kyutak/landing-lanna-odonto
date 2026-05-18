"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0 bg-cover bg-top bg-no-repeat
          bg-[url('/sections/header-hero1.png')]
          lg:bg-[url('/sections/hero-1.png')]
        "
      />

      {/* Overlay for mobile */}
      <div className="absolute inset-0 bg-[#2a1f1d]/35 lg:hidden" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#B99388]/80 via-[#C4A59A]/15 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-linear-to-b from-transparent via-[#C4A59A]/20 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 left-16 w-px h-24 bg-linear-to-b from-transparent via-[#C4A59A]/15 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-linear-to-b from-transparent via-[#C4A59A]/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="w-full space-y-5 pt-40 text-center lg:space-y-6 lg:pl-20 lg:pt-0 lg:text-left lg:ml-15">
              {/* Rating */}
              <div className="hidden lg:inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-[#E8DDD8]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4A59A] text-[#C4A59A]" />
                  ))}
                </div>

                <span className="text-sm text-[#3D2C29] font-medium">
                  5.0 - 247 avaliações no Google
                </span>
              </div>

            <h1 className="font-(family-name:--font-poppins) text-3xl md:text-4xl lg:text-5xl text-[#ffe4e0] lg:text-[#3D2C29] font-semibold">
              Transforme seu sorriso no lugar certo. Com Dra. Lanna Lídia
            </h1>

            <p className="text-base text-[#6f5d56] max-w-lg leading-relaxed hidden md:block">
              Sou sua dentista em João Pessoa. Da prevenção aos tratamentos mais avançados, cuido do seu sorriso com a atenção que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#ad7669] hover:bg-[#9f614a] text-white rounded-sm px-8 py-6 lg:px-14 lg:py-6 text-base lg:text-lg font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
              >
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agendar minha consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              {/* Mobile rating (shown below button on small screens) */}
              <div className="inline-flex lg:hidden items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-[#E8DDD8]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#967164] text-[#8a685c]" />
                  ))}
                </div>

                <span className="text-sm text-[#3D2C29] font-medium">
                  5.0 - 238 avaliações no Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
