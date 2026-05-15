import {
  Sparkles,
  Heart,
  Scissors,
  Gem,
  Users,
  Clock,
  Brush,
  Wand,
} from "lucide-react"

import { FadeIn } from "@/components/fadein"

const services = [
  {
    icon: Wand,
    title: "Maquiagem Social",
    desc: "Produções sofisticadas para festas, eventos e ocasiões especiais.",
  },
  {
    icon: Heart,
    title: "Maquiagem para Noivas",
    desc: "Beleza impecável e duradoura para o seu grande dia.",
  },
  {
    icon: Scissors,
    title: "Penteados",
    desc: "Penteados sob medida — do clássico ao romântico, alinhados ao seu estilo.",
  },
  {
    icon: Brush,
    title: "Design de Sobrancelhas",
    desc: "Harmonização do olhar com acabamento natural e preciso.",
  },
  {
    icon: Users,
    title: "Escova, Baby Liss e Trança Nagô",
    desc: "Finalizações modernas que valorizam sua beleza e personalidade.",
  },
  {
    icon: Clock,
    title: "Limpeza de Pele",
    desc: "Cuidado profundo para uma pele renovada, saudável e iluminada.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24 md:py-32">
      <FadeIn>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.4em] uppercase font-light text-marsala/70">
            Serviços
          </p>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl text-marsala leading-[1.05] text-balance">
            Produções pensadas <br />
            para cada <span className="italic">momento.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`group p-8 lg:p-10 border-border transition-colors hover:bg-rose-soft/40 ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i < 3 ? "lg:border-b" : ""} ${
                  i !== services.length - 1 ? "border-b md:border-b" : ""
                } ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <Icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-marsala"
                />
                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed font-light text-muted-text">
                  {s.desc}
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-block text-[11px] tracking-[0.28em] uppercase font-light text-marsala border-b border-marsala/40 pb-1 hover:border-marsala transition-colors"
                >
                  Solicitar
                </a>
              </div>
            )
          })}
        </div>
      </div>
      </FadeIn>
    </section>
  )
}
