"use client"

import { Instagram } from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/fadein"

const filters = ["Todos", "Noivas", "Social", "Debutantes", "Penteados", "Sobrancelha"] as const
type Filter = (typeof filters)[number]

type PortfolioItem = {
  src: string
  alt: string
  tag: Exclude<Filter, "Todos">
  type: "image" | "video"
  poster?: string
}

const items: PortfolioItem[] = [
  { src: "/noiva-1.mp4", alt: "", tag: "Noivas", type: "video" },
  { src: "/make-1.jpg", alt: "", tag: "Social", type: "image" },
  { src: "/penteado-1.mp4", alt: "", tag: "Penteados", type: "video" },
  { src: "/sobrancelha-1.jpg", alt: "", tag: "Sobrancelha", type: "image" },
  { src: "/make-2.jpg", alt: "", tag: "Social", type: "image" },
  { src: "/noiva-2.jpg", alt: "", tag: "Noivas", type: "image" },
  { src: "/debutante-1.jpg", alt: "", tag: "Debutantes", type: "image" },
  { src: "/penteado-2.jpg", alt: "", tag: "Penteados", type: "image" },
  { src: "/make-3.jpg", alt: "", tag: "Social", type: "image" },
  { src: "/noiva-3.mp4", alt: "", tag: "Noivas", type: "video" },
  { src: "/sobrancelha-2.mp4", alt: "", tag: "Sobrancelha", type: "video" },
  { src: "/penteado-3.mp4", alt: "", tag: "Penteados", type: "video" },
  { src: "/make-4.mp4", alt: "", tag: "Social", type: "video" },
  { src: "/noiva-4.jpg", alt: "", tag: "Noivas", type: "image" },
  { src: "/debutante-2.jpg", alt: "", tag: "Debutantes", type: "image" },
  { src: "/make-5.mp4", alt: "", tag: "Social", type: "video" },
  { src: "/penteado-4.mp4", alt: "", tag: "Penteados", type: "video" },
  { src: "/sobrancelha-3.jpg", alt: "", tag: "Sobrancelha", type: "image" },
  { src: "/noiva-5.jpg", alt: "", tag: "Noivas", type: "image" },
  { src: "/make-6.jpg", alt: "", tag: "Social", type: "image" },
  { src: "/penteado-5.mp4", alt: "", tag: "Penteados", type: "video" },
  { src: "/noiva-6.jpg", alt: "", tag: "Noivas", type: "image" },
  { src: "/sobrancelha-4.mp4", alt: "", tag: "Sobrancelha", type: "video" },
  { src: "/make-7.jpg", alt: "", tag: "Social", type: "image" },
  { src: "/penteado-7.jpg", alt: "", tag: "Penteados", type: "image" },
  { src: "/noiva-7.jpg", alt: "", tag: "Noivas", type: "image" },
  { src: "/debutante-3.jpg", alt: "", tag: "Debutantes", type: "image" },
  { src: "/noiva-8.jpg", alt: "", tag: "Noivas", type: "image" },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>("Todos")
  const filtered = active === "Todos" ? items : items.filter((i) => i.tag === active)

  return (
    <section id="portfolio" className="bg-background py-24 md:py-32">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase font-light text-marsala/70">
              Portfólio
            </p>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl text-marsala leading-tight text-balance">
              Trabalhos <span className="italic">Realizados</span>
            </h2>
            <p className="mt-5 text-[14.5px] font-light text-muted-text max-w-xl mx-auto leading-relaxed">
              Cada produção conta uma história. Conheça alguns dos meus trabalhos mais recentes.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-[11px] tracking-[0.22em] uppercase font-light border transition-colors ${
                  active === f
                    ? "bg-marsala text-white border-marsala"
                    : "border-marsala/30 text-marsala hover:bg-marsala/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((it, i) => (
              <div
                key={`${it.src}-${i}`}
                className="group relative overflow-hidden aspect-[3/4] bg-cream"
              >
                {it.type === "video" ? (
                  <video
                    src={it.src}
                    poster={it.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-marsala-dark/0 group-hover:bg-marsala-dark/30 transition-colors duration-500" />
              </div>
            ))}
          </div>

        <div className="mt-14 text-center">
              <a
              href="https://www.instagram.com/amandaa.makeup1/"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase font-light text-marsala border-b border-marsala/40 pb-1 hover:border-marsala"
            >
              <Instagram size={14} strokeWidth={1.4} />
              Veja mais no Instagram
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}