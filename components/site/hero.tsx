import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[680px] w-full overflow-hidden"
    >
      {/* Background image */}
      <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      >
      <source src="/video-hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-marsala-dark/30 via-marsala-dark/20 to-marsala-dark/50" />
      <div className="absolute inset-0 bg-marsala-dark/10" />
      
      <br></br>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-6 text-[11px] tracking-[0.45em] uppercase font-light text-white/85">
          Beleza que Transforma
        </p>

      <br></br>

      <img
        src="/logo-hero.png"
        alt="Logo Hero"
        className="logo-hero"
      />

      <br></br>

        <div className="mt-3 flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-light text-white/80">
          <span>Especialista em Noivas</span>
          <span className="h-px w-4 bg-white/50" />
          <span>Maquiagem Social</span>
          <span className="h-px w-4 bg-white/50" />
          <span>Produção Completa de Beleza</span>
        </div>

        <a
          href="https://wa.me/5583993742096"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center justify-center bg-marsala px-9 py-4 text-[11px] tracking-[0.28em] uppercase font-light text-white shadow-lg hover:bg-marsala-dark transition-colors"
        >
          Agende sua produção
        </a>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
      >
        <ChevronDown size={26} strokeWidth={1.2} />
      </a>
    </section>
  )
}
