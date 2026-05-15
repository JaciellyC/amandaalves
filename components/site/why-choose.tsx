import { Circle } from "lucide-react"
import { FadeIn } from "@/components/fadein"

const reasons = [
  {
    title: "Atendimento exclusivo",
    desc: "Foco total em você.",
  },
  {
    title: "Personalização real",
    desc: "Cada produção é pensada de acordo com seu rosto, seu estilo e sua ocasião.",
  }, 
  {
    title: "Pontualidade e profissionalismo",
    desc: "Você pode confiar — do agendamento ao último retoque.",
  },
  {
    title: "Produtos de alta qualidade",
    desc: "Marcas para garantir durabilidade.",
  },
  {
    title: "Atendimento a domicílio",
    desc: "Vou até você, seja em casa, hotel ou salão de eventos.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-marsala-dark text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-28 md:grid-cols-2">

        <FadeIn>
          <div className="md:pr-6">
            <p className="text-[11px] tracking-[0.4em] uppercase font-light text-white/60">
              Diferenciais
            </p>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl leading-[1.05] text-balance">
              Por que escolher a <br />
              <span className="italic">Amanda Alves?</span>
            </h2>

            <ul className="mt-10 space-y-5">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <Circle size={14} className="mt-1 shrink-0 fill-white/60 text-white/60" />
                  <p className="text-[14.5px] leading-relaxed font-light text-white/85">
                    <span className="text-white">{r.title}:</span> {r.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative">
            <img src="/foto-diferenciais.jpg" />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}