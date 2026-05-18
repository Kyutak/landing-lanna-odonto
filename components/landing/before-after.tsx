"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

// Before/After comparison slider component
function ComparisonSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false
    }
    window.addEventListener("mouseup", handleGlobalMouseUp)
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-4/3 md:aspect-16/10 rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="Depois do clareamento"
          fill
          className="object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 right-4 bg-[#3D2C29]/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-semibold text-white uppercase tracking-wide">Depois</span>
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Antes do clareamento"
          fill
          className="object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-semibold text-[#3D2C29] uppercase tracking-wide">Antes</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#C4A59A]">
          <ChevronLeft className="w-5 h-5 text-[#C4A59A]" />
          <ChevronRight className="w-5 h-5 text-[#C4A59A]" />
        </div>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:px-20">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
                Resultados Reais
              </p>
              <h2 className="font-(family-name:--font-poppins) text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
                Antes & Depois
              </h2>
            </div>

            <p className="text-[#7D6B65] text-base leading-relaxed hidden md:block">
              Cada caso reflete uma abordagem cuidadosamente planejada, 
              focada na saúde dental a longo prazo e na estética. 
              Veja a transformação que o clareamento dental pode proporcionar.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A59A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#3D2C29] text-sm">Resultados naturais e duradouros</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A59A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#3D2C29] text-sm">Procedimento seguro e confortável</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A59A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#3D2C29] text-sm">Acompanhamento personalizado</span>
              </li>
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-[#ad7669] hover:bg-[#9f614a] text-white rounded-sm px-8 py-4 lg:px-14 lg:py-6 text-base lg:text-lg font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero Clarear meus Dentes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Before/After Slider */}
          <div className="order-1 lg:order-2">
            <ComparisonSlider
              beforeImage="/sections/antes.webp"
              afterImage="/sections/depois.webp"
            />
            <p className="text-center text-sm text-[#7D6B65] mt-4">
              Arraste para comparar os resultados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
