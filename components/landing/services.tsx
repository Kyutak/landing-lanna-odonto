import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

const services = [
  {
    title: "Tratamento de Canal",
    description: "Procedimento indolor para eliminar infecções e preservar o dente natural com técnicas modernas.",
    image: "/images/servico-canal.jpg"
  },
  {
    title: "Limpeza Dental",
    description: "Profilaxia completa para remoção de tártaro e placa bacteriana, garantindo saúde bucal.",
    image: "/images/servico-limpeza.jpg"
  },
  {
    title: "Próteses Dentárias",
    description: "Próteses fixas e removíveis personalizadas para devolver função e estética ao seu sorriso.",
    image: "/images/servico-protese.jpg"
  },
  {
    title: "Implantes Dentários",
    description: "Solução definitiva para substituição de dentes perdidos com naturalidade e conforto.",
    image: "/images/servico-implante.jpg"
  },
  {
    title: "Clareamento Dental",
    description: "Técnicas avançadas de clareamento para um sorriso mais branco e radiante.",
    image: "/images/servico-clareamento.jpg"
  },
  {
    title: "Odontopediatria",
    description: "Atendimento especializado para crianças em ambiente acolhedor e divertido.",
    image: "/images/servico-pediatria.jpg"
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
            Nossos Serviços
          </p>
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="text-[#7D6B65] mt-4 text-base">
            Oferecemos uma gama completa de tratamentos odontológicos 
            com tecnologia de ponta e atendimento personalizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                <h3 className="font-[family-name:var(--font-poppins)] text-lg text-[#3D2C29] font-semibold mb-2">{service.title}</h3>
                <p className="text-[#7D6B65] text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full px-8 font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
