"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

const WHATSAPP_URL =
  "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Pres.+Epitácio+Pessoa,+1251+-+Estados,+João+Pessoa+-+PB,+58030-901"

const INSTAGRAM_POST =
  "https://www.instagram.com/p/DXlh3eXjMY1/"

export function Location() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }

    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true

    script.onload = () => {
      window.instgrm?.Embeds.process()
    }

    document.body.appendChild(script)
  }, [])

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#FFFBF9]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C4A59A] font-semibold mb-2 tracking-wider text-sm uppercase">
            Localização
          </p>

          <h2 className="font-(family-name:--font-poppins) text-2xl md:text-3xl lg:text-4xl text-[#3D2C29] font-semibold leading-tight">
            Venha nos visitar
          </h2>

          <p className="text-[#7D6B65] mt-4 text-base">
            Estamos localizados em uma região de fácil acesso em João Pessoa,
            com estacionamento próximo.
          </p>
        </div>

        {/* Maps + Instagram */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9694445847855!2d-34.86711892414894!3d-7.1073398927887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace8393c9aef09%3A0x8d26dd7c6d11c52d!2sAv.%20Pres.%20Epit%C3%A1cio%20Pessoa%2C%201251%20-%20Estados%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058030-901!5e0!3m2!1spt-BR!2sbr!4v1711000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>

          {/* Instagram */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-125 flex items-start justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={INSTAGRAM_POST}
              data-instgrm-version="14"
              style={{
                background: "#663838",
                border: 0,
                borderRadius: "12px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 0,
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href={INSTAGRAM_POST}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: 0,
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                    display: "block",
                  }}
                >
                  Ver esta publicação no Instagram
                </a>
              </div>
            </blockquote>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-[#F5EBE6] rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#C4A59A]" />
            </div>

            <div>
              <h3 className="font-semibold text-[#3D2C29] mb-1">
                Endereço
              </h3>

              <p className="text-[#7D6B65]">
                Av. Epitácio Pessoa, 1251, no Bairro dos Estados,
                João Pessoa - PB. Sala 1006, décimo andar.
              </p>

              <Link
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#C4A59A] hover:text-[#A68B7F] text-sm font-medium transition-colors"
              >
                Ver no Google Maps →
              </Link>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-[#F5EBE6] rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#C4A59A]" />
            </div>

            <div>
              <h3 className="font-semibold text-[#3D2C29] mb-1">
                Horário de Atendimento
              </h3>

              <p className="text-[#7D6B65]">
                Todos os dias
                <br />
                horário: Sob aviso
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#F5EBE6] rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#C4A59A]" />
            </div>

            <div>
              <h3 className="font-semibold text-[#3D2C29] mb-1">
                Contato
              </h3>

              <p className="text-[#7D6B65] mb-2">
                Agende sua consulta pelo WhatsApp
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
                  Enviar Mensagem
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}