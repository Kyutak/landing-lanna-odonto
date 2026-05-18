"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { services } from "./services-data"

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(3)
      } else {
        setVisibleCount(6)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleShowMore = () => {
    if (window.innerWidth < 768) {
      if (visibleCount === 3) {
        setVisibleCount(6)
      } else if (visibleCount === 6) {
        setVisibleCount(9)
      }
    } else {
      setVisibleCount(9)
    }
  }

  const visibleServices = services.slice(0, visibleCount)

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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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

                {/* VER MAIS DO CARD */}
                <div className="mt-4">
                  {expandedService === index && (
                    <ul className="space-y-4">
                      {service.details.map((item, idx) => (
                        <li key={idx}>
                          <p className="text-sm font-semibold text-[#3D2C29]">
                            • {item.title}
                          </p>

                          <p className="text-sm text-[#7D6B65] leading-relaxed">
                            {item.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() =>
                      setExpandedService(
                        expandedService === index ? null : index
                      )
                    }
                    className="mt-4 text-[#C4A59A] text-sm font-medium hover:text-[#A68B7F] transition-colors flex items-center gap-1"
                  >
                    {expandedService === index ? "Ver menos" : "Ver mais"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VER MAIS GERAL */}
        {visibleCount < 9 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 rounded-full border border-[#C4A59A] text-[#C4A59A] hover:bg-[#C4A59A] hover:text-white transition-all duration-300 text-sm font-medium"
            >
              Ver mais
            </button>
          </div>
        )}
      </div>
    </section>
  )
}