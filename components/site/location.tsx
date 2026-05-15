import { Home, MapPin, Building2 } from "lucide-react"
import { FadeIn } from "../fadein"

const places = [
  {
    icon: Home,
    title: "Estúdio",
    desc: "Ambiente exclusivo em João Pessoa/PB",
  },
  {
    icon: Building2,
    title: "A Domicílio",
    desc: "Em casa, hotel ou espaços de evento",
  },
  {
    icon: MapPin,
    title: "João Pessoa e Região",
    desc: "Atendimento em toda a região metropolitana",
  },
]

export function Location() {
  return (
    <section id="atendimento" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div>
          <FadeIn>
            <p className="text-[11px] tracking-[0.4em] uppercase font-light text-marsala/70">
              Atendimento
            </p>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl text-marsala leading-tight">
              Onde e como <span className="italic">eu atendo</span>
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed font-light text-muted-text text-justify">
              Atualmente conto com dois espaços de beleza e estética nas cidades de Mari e João Pessoa, ambientes acolhedores e cuidadosamente preparados para proporcionar uma experiência única de beleza, conforto e bem-estar. Além dos atendimentos em estúdio, também realizo atendimentos a domicílio, levando praticidade e exclusividade até você — em residências, apartamentos, hotéis e espaços de eventos.
            </p>
          </FadeIn>

          <div className="mt-10 space-y-4">
            {places.map((p) => {
              const Icon = p.icon
              return (
                <FadeIn key={p.title}>
                  <div className="flex items-start gap-5 border border-border/70 bg-cream/50 px-6 py-5">
                    <Icon
                      size={22}
                      strokeWidth={1.2}
                      className="text-marsala mt-1 shrink-0"
                    />
                    <div>
                      <p className="font-serif text-xl text-foreground">
                        {p.title}
                      </p>
                      <p className="text-[13px] font-light text-muted-text mt-1">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        <FadeIn>
          <div className="relative">
            <img
              src="/foto-location.jpg"
              className="w-full h-[640px] object-cover shadow-md"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}