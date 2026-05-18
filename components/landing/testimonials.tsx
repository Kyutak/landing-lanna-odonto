"use client"

import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const WHATSAPP_URL =
  "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

const testimonials = [
  {
    name: "Nathália Leite",
    treatment: "Clareamento Dental",
    text: "Uma dentista muito humana e gentil que faz seu trabalho com excelência. Uma alegria imensa conhecê-la!",
    rating: 5,
  },
  {
    name: "Isadora Rolim",
    treatment: "Odontopediatria",
    text: "Quero agradecer de coração pelo atendimento tão humanizado com o meu filho ontem. Foi uma situação urgente com o dente dele, e a rapidez com que você me respondeu e nos atendeu fez toda a diferença. Muito obrigada pelo carinho, atenção e profissionalismo. Ficamos muito gratos!",
    rating: 5,
  },
  {
    name: "Lima Leds",
    treatment: "Clareamento Dental",
    text: "Excelente profissional! Atendimento pontual, ambiente agradável e um serviço maravilhoso. Muito cuidado, atenção aos detalhes e resultado impecável. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Emerson Morais",
    treatment: "Tratamento de Canal",
    text: "Gostei muito do atendimento da Dra. Lanna! Solícita, atenciosa e, o principal, bastante profissional! Fui atendido rapidamente e sem complicações, de modo que a Dra. resolveu meu problema sem me causar dor. Muito bom, recomendo!",
    rating: 5,
  },
  {
    name: "Daniel Guedes Campos",
    treatment: "Limpeza e Profilaxia",
    text: "Eu agradeço muito por ter ajudado a desconstruir o meu medo de ir no dentista. Se você é uma pessoa que feito eu morria de medo de ir em dentista, eu aconselho demais ir nessa profissional. Para além dessa segurança e conforto que me passou, também um excelente trabalho, com o cuidado de me inteirar de tudo de forma muito clara. Muito obrigado por isso!",
    rating: 5,
  },
  {
    name: "Luan Santos",
    treatment: "tratamento de canal",
    text: "Ótima profissional! Muito educada e simpática, explicou o procedimento e foi muito atenciosa. Profissional maravilhosa",
    rating: 5,
  },
  {
    name: "Luana",
    treatment: "Urgências Dentária",
    text: "Profissional excelente! Muito atenciosa, cuidadosa em cada detalhe e sempre explica os procedimentos de forma clara, transmitindo segurança e confiança. O atendimento é humanizado e de ótima qualidade, recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Lucas Mendes",
    treatment: "Urgências Dentária",
    text: "Meu esposo precisou de um atendimento de emergência,pesquisei no Google onde tinha atendimento,achei a Dr.lanna Lídia,tentei marcar com ela no sábado msm mais como ela estava com bastante paciente,não foi possível atender no sábado,porém ela marcou no domingo pela a manhã,e fez um excelente trabalho amamos o atendimento.",
    rating: 5,
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [expandedComment, setExpandedComment] = useState<number | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
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

          <h2 className="font-(family-name:--font-poppins) text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
            O que nossos pacientes dizem
          </h2>
        </div>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]"
                />
              ))}
            </div>
          </div>

          <span className="text-[#3D2C29] font-semibold">5.0</span>
          <span className="text-[#7D6B65]">247 avaliações</span>
        </div>

        {/* Carousel */}
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
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedComment === index
              const shouldShowButton = testimonial.text.length > 120

              return (
                <div
                  key={index}
                  className="shrink-0 w-[320px] snap-start"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#C4A59A] text-[#C4A59A]"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p
                      className={`text-[#3D2C29] mb-2 leading-relaxed text-sm transition-all ${
                        !isExpanded ? "line-clamp-3" : ""
                      }`}
                    >
                      "{testimonial.text}"
                    </p>

                    {/* Ver mais / menos */}
                    {shouldShowButton && (
                      <button
                        onClick={() =>
                          setExpandedComment(
                            isExpanded ? null : index
                          )
                        }
                        className="text-[#C4A59A] text-sm font-medium hover:underline mb-4"
                      >
                        {isExpanded ? "Ver menos" : "Ver mais"}
                      </button>
                    )}

                    {/* Footer */}
                    <div className="border-t border-[#E8DDD8] pt-4">
                      <p className="font-semibold text-[#3D2C29] text-sm">
                        {testimonial.name}
                      </p>

                      <p className="text-xs text-[#7D6B65]">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-[#7D6B65] mb-4 text-sm">
            Junte-se aos nossos pacientes satisfeitos
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#ad7669] hover:bg-[#9f614a] text-white rounded-sm px-8 py-4 lg:px-14 lg:py-6 text-base lg:text-lg font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a Doutora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}