import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Intro } from "@/components/site/intro"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { WhyChoose } from "@/components/site/why-choose"
import { Portfolio } from "@/components/site/portfolio"
import { Testimonials } from "@/components/site/testimonials"
import { Location } from "@/components/site/location"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Location />
      <FinalCta />
      <Footer />
    </main>
  )
}
