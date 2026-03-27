import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Atendimento Humanizado",
    description: "Cada paciente é único e recebe toda atenção que merece"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Tecnologia Avançada",
    description: "Equipamentos modernos para tratamentos precisos"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pontualidade",
    description: "Respeito ao seu tempo com atendimentos organizados"
  }
]

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5EBE6]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background decorative elements */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-[#C4A59A] rounded-[30px]" />
              
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#F5EBE6]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6DNRYa6P5Xl07VGQqbKbtNQqe26aZ9.png"
                  alt="Dra. Lanna Lídia em seu consultório"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#C4A59A] text-white rounded-2xl p-5 shadow-lg">
                <p className="text-3xl font-[family-name:var(--font-poppins)] font-bold">+5</p>
                <p className="text-xs">Anos de<br />experiência</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
                Sobre a Profissional
              </p>
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
                Dra. Lanna Lídia
              </h2>
              <p className="text-[#8B7355] mt-2 text-sm">CRO-PB 11026</p>
            </div>

            <p className="text-[#7D6B65] text-base leading-relaxed">
              Cirurgiã-dentista apaixonada pela odontologia estética e funcional. 
              Minha missão é proporcionar saúde bucal com excelência, combinando 
              técnicas modernas com um atendimento acolhedor e personalizado. 
              Acredito que um sorriso saudável transforma vidas.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5EBE6] flex items-center justify-center flex-shrink-0 text-[#C4A59A]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2C29] mb-1">{feature.title}</h3>
                    <p className="text-[#7D6B65] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full px-8 font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agende sua Avaliação
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
