import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { BeforeAfter } from "@/components/landing/before-after"
import { Testimonials } from "@/components/landing/testimonials"
import { Location } from "@/components/landing/location"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <About />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
