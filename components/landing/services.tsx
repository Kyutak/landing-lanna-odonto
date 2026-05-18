"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "Urgências e limpeza dental",
    description:
      "Procedimento de canais e dor nos dentes, Limpeza de tártaro e placa, Aplicação de flúor, Avaliação preventiva.",
    image: "/services/canal-1.webp",
  },
  {
    title: "Ortodontia - aparelhos dentários",
    description:
      "Soluções para dentes tortos, aparelhos ortodônticos, contenção e manutenção.",
    image: "/services/aparelho-4.webp",
  },
  {
    title: "Clareamento e Restauração",
    description:
      "Facetas em resina, Recontorno estético, Restauração em resina, Fechamento de diastema e Clareamento dental.",
    image: "/services/clareamento-5.webp",
  },
    {
    title: "Odontopediatria",
    description:
      "Atendimento especializado para crianças em ambiente acolhedor e divertido.",
    image: "/services/odontopediatra-6.webp",
  },
  {
    title: "Periodontia",
    description:
      "Cuidados para gengivas saudáveis, Tratamento de sangramento gengival, Raspagem gengival e tratamentos",
    image: "/services/gengiva-2.webp",
  },
  {
    title: "Próteses e cirurgias",
    description:
      "Implante dentário, Próteses fixas e removíveis personalizadas, extração de dentes e sisos.",
    image: "/services/protese-3.webp",
  },
]

export function Services() {
  const [showAllMobile, setShowAllMobile] = useState(false)

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
            Nossos Serviços
          </p>

          <h2 className="font-(family-name:--font-poppins) text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
            Soluções para você
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const hiddenOnMobile = !showAllMobile && index >= 2

            return (
              <div
                key={index}
                className={`
                  group bg-white rounded-3xl overflow-hidden shadow-sm
                  hover:shadow-xl transition-all duration-300
                  ${hiddenOnMobile ? "hidden md:block" : "block"}
                `}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-[#3D2C29]/20 group-hover:bg-[#3D2C29]/10 transition-colors" />
                </div>

                <div className="p-5">
                  <h3 className="font-(family-name:--font-poppins) text-lg text-[#3D2C29] font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-[#7D6B65] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Ver mais - somente mobile */}
        <div className="mt-6 flex justify-end md:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="text-[#C4A59A] underline text-sm font-medium hover:text-[#A68B7F] transition-colors"
          >
            {showAllMobile ? "Ver menos" : "Ver mais"}
          </button>
        </div>
      </div>
    </section>
  )
}