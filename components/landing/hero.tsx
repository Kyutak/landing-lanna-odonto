"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Clock, MapPin, ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF9] via-[#F8F2EF] to-[#F5EBE6]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C4A59A]/8 to-transparent" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#C4A59A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#D4B5A9]/8 rounded-full blur-3xl" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233D2C29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative lines */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C4A59A]/20 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 left-16 w-px h-24 bg-gradient-to-b from-transparent via-[#C4A59A]/15 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C4A59A]/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-[#E8DDD8]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C4A59A] text-[#C4A59A]" />
                ))}
              </div>
              <span className="text-sm text-[#3D2C29] font-medium">5.0 - 238 avaliações no Google</span>
            </div>

            <h1 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl text-[#3D2C29] font-semibold leading-tight">
              Transforme seu sorriso com quem sabe de{" "}
              <span className="text-[#C4A59A]">cuidado e excelência</span>
            </h1>

            <p className="text-base text-[#7D6B65] max-w-lg leading-relaxed">
              Atendimento odontológico de alto padrão em João Pessoa.
              Da prevenção aos tratamentos mais avançados, cuido do seu sorriso
              com a atenção que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full px-8 text-base font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
              >
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agende sua Avaliação
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#C4A59A] text-[#C4A59A] hover:bg-[#C4A59A] hover:text-white rounded-full px-8 text-base font-medium transition-all"
              >
                <Link href="#servicos">
                  Conheça os Serviços
                </Link>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#C4A59A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7D6B65]">Horário</p>
                  <p className="text-sm text-[#3D2C29] font-medium">Seg - Sex, 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C4A59A]" />
                </div>
                <div>
                  <p className="text-xs text-[#7D6B65]">Localização</p>
                  <p className="text-sm text-[#3D2C29] font-medium">João Pessoa - PB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#C4A59A]/20 rounded-[40px]" />

              {/* Main image */}
              <div className="relative w-[280px] md:w-[350px] lg:w-[400px] aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6DNRYa6P5Xl07VGQqbKbtNQqe26aZ9.png"
                  alt="Dra. Lanna Lídia - Cirurgiã-Dentista"
                  fill
                  className="object-cover object-top"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
