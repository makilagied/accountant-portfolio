import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Resume from "@/components/resume"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Resume />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}

