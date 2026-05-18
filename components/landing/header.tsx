"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
]

const WHATSAPP_URL = "https://api.whatsapp.com/message/BYTP27AD572NL1?autoload=1&app_absent=0&utm_source=ig"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <Image
              src="/icon-dark-only.jpeg"
              alt=""
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="font-(family-name:--font-poppins) text-lg md:text-xl text-[#3D2C29] font-semibold">
                Dra. Lanna Lídia
              </span>

              <span className="text-xs text-[#8B7355] tracking-wider">
                CRO-PB 11026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#3D2C29] hover:text-[#C4A59A] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block mr-20">
            <Button
              asChild
              className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full px-6 font-medium shadow-lg shadow-[#3D2C29]/20 transition-all hover:scale-105"
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Entre em contato
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#3D2C29]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8DDD8] py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#3D2C29] hover:text-[#C4A59A] transition-colors text-sm font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="bg-[#3D2C29] hover:bg-[#2a1f1d] text-white rounded-full w-full font-medium"
                >
                  <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Entre em contato
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
