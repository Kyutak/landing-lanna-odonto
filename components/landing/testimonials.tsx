"use client"

import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

const testimonials = [
  {
    name: "Maria Clara S.",
    treatment: "Clareamento Dental",
    text: "Resultado incrível! A Dra. Lanna é extremamente profissional e atenciosa. Meu sorriso nunca esteve tão bonito.",
    rating: 5,
  },
  {
    name: "João Pedro M.",
    treatment: "Implante Dentário",
    text: "Tinha muito medo de fazer implante, mas a Dra. Lanna me deixou super tranquilo. O procedimento foi rápido e sem dor.",
    rating: 5,
  },
  {
    name: "Ana Beatriz L.",
    treatment: "Tratamento de Canal",
    text: "Finalmente encontrei uma dentista que entende minha ansiedade. Atendimento impecável do início ao fim.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo R.",
    treatment: "Prótese Dentária",
    text: "A prótese ficou perfeita e muito natural. Ninguém percebe que não são meus dentes originais. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    treatment: "Limpeza e Profilaxia",
    text: "Consultório lindo e bem equipado. A Dra. Lanna explica tudo com calma e carinho. Já indiquei para toda família.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    treatment: "Odontopediatria",
    text: "Minha filha tinha pavor de dentista, mas agora adora ir às consultas! A Dra. Lanna tem um jeito especial com crianças.",
    rating: 5,
  },
  {
    name: "Patricia Oliveira",
    treatment: "Clareamento Dental",
    text: "Super satisfeita com o resultado do clareamento. A Dra. Lanna é muito cuidadosa e profissional.",
    rating: 5,
  },
  {
    name: "Lucas Mendes",
    treatment: "Implante Dentário",
    text: "Excelente profissional! O implante ficou perfeito e o pós-operatório foi muito tranquilo.",
    rating: 5,
  }
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#F5EBE6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
            Depoimentos
          </p>
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
            O que nossos pacientes dizem
          </h2>
        </div>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <span className="text-[#3D2C29] font-semibold">5.0</span>
          <span className="text-[#7D6B65]">238 avaliações</span>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C4A59A] hover:bg-[#C4A59A] hover:text-white transition-colors"
            aria-label="Ver depoimentos anteriores"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C4A59A] hover:bg-[#C4A59A] hover:text-white transition-colors"
            aria-label="Ver próximos depoimentos"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-8 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] snap-start"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C4A59A] text-[#C4A59A]" />
                    ))}
                  </div>
                  <p className="text-[#3D2C29] mb-4 leading-relaxed text-sm">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-[#E8DDD8] pt-4">
                    <p className="font-semibold text-[#3D2C29] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#7D6B65]">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-[#7D6B65] mb-4 text-sm">Junte-se aos nossos pacientes satisfeitos</p>
          <Button
            asChild
            size="lg"
            className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full px-8 font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
