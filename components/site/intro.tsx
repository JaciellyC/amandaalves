import { FadeIn } from "@/components/fadein"

export function Intro() {
  return (
    <section className="bg-background py-24 md:py-32">
      <FadeIn>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif font-light text-3xl md:text-5xl text-marsala leading-tight text-balance">
          Sua melhor versão,
          <span className="italic"> para cada momento especial.</span>
        </h2>
        <p className="mt-8 text-[15px] leading-relaxed font-light text-muted-text">
          Seja para o dia mais importante da sua vida ou para aquela ocasião que
          merece um cuidado especial, estou aqui para realçar sua beleza de
          forma única, elegante e personalizada.
        </p>
      </div>
      </FadeIn>
    </section>
  )
}
