import { FadeIn } from "@/components/fadein"

export function FinalCta() {
  return (
    <section className="bg-marsala-dark text-white py-24 md:py-32">
       <FadeIn>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase font-light text-white/60">
          Agende agora
        </p>
        <h2 className="mt-6 font-serif font-light text-4xl md:text-5xl leading-tight text-balance">
          Seu momento especial merece <br />
          <span className="italic">uma produção inesquecível.</span>
        </h2>
        <p className="mt-7 text-[14.5px] font-light text-white/75 leading-relaxed">
          Reserve sua data e viva uma experiência sob medida — do acolhimento
          inicial ao retoque final.
        </p>
        <a
          href="https://wa.me/558393742096"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-background text-marsala px-10 py-4 text-[11px] tracking-[0.28em] uppercase font-light hover:bg-rose-soft transition-colors"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
      </FadeIn>
    </section>
  )
}
