import { Quote } from "lucide-react"
import { FadeIn } from "@/components/fadein"

const items = [
  {
    text: "Amei minha make, amiga! Ficou simplesmente perfeita",
    name: "Rosimery Brito",
    role: "",
  },
  {
    text: "Make intacta até depois de dormir = perfeição absoluta",
    name: "Beatriz M.",
    role: "",
  },
  {
    text: "Ninguém me reconheceu de tão linda que eu fiquei. Já indiquei pra todo mundo onde fiz!",
    name: "Jessica R.",
    role: "",
  },
  {
    text: "Dancei MUITO e a make não escorreu nem um pouco",
    name: "Joelma Schmidt.",
    role: " ",
  },
  {
    text: "Oiii querida, obrigada por elevar minha autoestima, com suas mãos de fada minhas sobrancelhas ficaram perfeitas. Que Deus te abençoe sempre",
    name: "Simone C.",
    role: "",
  },
  {
    text: "Cabelo e make intactos até o fim da festa. E eu ainda tô aproveitando o penteado até agora kkkkk",
    name: "Ana Valeria P.",
    role: "",
  },
  {
    text: "Amei minha make, recebi muitos elogios a noite toda",
    name: "Elaine Raquel.",
    role: "",
  },
  {
    text: "AMulher, minha make ficou intacta. Muito boa mesmo!",
    name: "Patricia Araújo",
    role: "",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-rose-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase font-light text-marsala/70">
              Depoimentos
            </p>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl text-marsala leading-tight">
              O que minhas <span className="italic">clientes dizem</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <FadeIn key={t.name}>
              <article className="bg-background p-8 md:p-10 shadow-[0_8px_30px_-15px_rgba(90,46,37,0.18)] border border-border/60">
                <Quote size={28} strokeWidth={1} className="text-marsala/40" />
                <p className="mt-5 font-serif italic text-[17px] leading-relaxed text-foreground/85">
                  "{t.text}"
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span className="h-10 w-10 rounded-full bg-marsala/15 flex items-center justify-center font-serif text-marsala">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-marsala">{t.name}</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase font-light text-muted-text">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}