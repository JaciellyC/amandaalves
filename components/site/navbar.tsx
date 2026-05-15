"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
]

const WHATSAPP_URL = "https://wa.me/558393742096"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("inicio")
      if (!hero) return

      // Fica “marsala” assim que a Hero começar a sair da tela.
      // Como a Hero usa h-screen, o início da troca ocorre perto de scrollY >= hero.offsetHeight.
      const shouldBeScrolled = window.scrollY >= hero.offsetHeight
      setScrolled(shouldBeScrolled)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <header
      style={{
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s ease",
        background: scrolled ? "rgba(250, 250, 250, 0.16)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        padding: scrolled ? "12px 0" : "24px 0",
    }}
      className="fixed inset-x-0 top-0 z-50"
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          className={`font-serif text-2xl tracking-wide ${
            scrolled ? "text-marsala" : "text-white"
          }`}
        >
        <img
          key={scrolled ? "dark" : "light"}
          src={scrolled ? "/logo-navbar-dark.png" : "/logo-navbar.png"}
          className="logo-navbar transition-all duration-500"
          style={{ height: "60px" }}
        />
          
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-[0.12em] uppercase font-light transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-marsala"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center justify-center text-[12px] tracking-[0.18em] uppercase font-light px-5 py-2.5 border transition-all ${
            scrolled
              ? "border-marsala text-marsala hover:bg-marsala hover:text-white"
              : "border-white/70 text-white hover:bg-white hover:text-marsala"
          }`}
        >
          Agendar
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-marsala" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border/60">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.12em] uppercase font-light text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center text-[12px] tracking-[0.18em] uppercase font-light px-5 py-3 border border-marsala text-marsala"
            >
              Agendar
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
