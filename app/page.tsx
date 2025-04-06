import About from "@/components/about"
import CTA from "@/components/cta"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import Resume from "@/components/resume"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      {/* <About /> */}
      <Resume />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}

