import { FadeIn } from "@/components/fadein"

export function About() {
  return (
    <section id="sobre" className="bg-rose-soft py-24 md:py-32">
      <FadeIn>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-marsala/30 hidden md:block" />
            <img
              src="/foto-sobre.jpg"
              alt="Estúdio de maquiagem da Amanda Alves"
              className="foto-sobre"
            />
          </div>
          <div className="md:pl-6">
            <p className="text-[11px] tracking-[0.4em] uppercase font-light text-marsala/70">
              Sobre Mim
            </p>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl text-marsala leading-tight">
              Quem é <span className="italic">Amanda Alves?</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed font-light text-muted-text">
              <p>
                Prazer, eu sou Amanda Alves.
                Tenho 32 anos e há mais de 7 anos atuo como maquiadora profissional, transformando autoestima em beleza através de atendimentos personalizados e experiências pensadas nos mínimos detalhes.
              </p>
              <p>
                Buscando oferecer um cuidado ainda mais completo às minhas clientes, me formei em Estética e Cosmética pelo UNIPÊ, ampliando meus conhecimentos para unir beleza, saúde e bem-estar em cada atendimento.
              </p>
              <p>
                Acredito que excelência exige evolução constante. Por isso, estou sempre em busca de aperfeiçoamento, novas técnicas e tendências do universo da beleza e estética, garantindo resultados modernos, seguros e de alta qualidade.
              </p>
              <p>
                Atualmente, conto com dois espaços de beleza e estética nas cidades de Mari e João Pessoa, preparados para proporcionar conforto, aconchego e uma experiência única, em ambientes climatizados e cuidadosamente planejados para que cada cliente se sinta especial.
              </p>
            </div>

            <p className="mt-8 font-serif italic text-2xl text-marsala">
              Amanda Alves
            </p>
          </div>
      </div>
         </FadeIn>
    </section>
  )
}