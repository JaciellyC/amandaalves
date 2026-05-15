import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-background border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          
          <img className="logo-footer"
            src="/logo-footer.png"
            alt="Amanda Alves - Maquiadora e Penteadista"
            
          />
          <p className="mt-5 text-[13px] leading-relaxed font-light text-muted-text">
            Maquiagem & penteado autoral para mulheres que valorizam beleza,
            elegância e atendimento exclusivo.
          </p>
          <div className="mt-5 flex items-center gap-3 text-marsala">
            <a
              href="https://www.instagram.com/amandaa.makeup1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 border border-marsala/30 hover:bg-marsala hover:text-white transition-colors"
            >
              <Instagram size={16} strokeWidth={1.4} />
            </a>
            <a
              href="https://wa.me/558393742096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 border border-marsala/30 hover:bg-marsala hover:text-white transition-colors"
            >
              <MessageCircle size={16} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase font-light text-marsala/70">
            Horários
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px] font-light text-muted-text">
            <li>Seg a Sáb: 9h às 19h</li>
            <li>Domingo: sob agendamento</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase font-light text-marsala/70">
            Endereço
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px] font-light text-muted-text">
            <li>Estúdio próprio</li>
            <li>Atendimento a domicílio</li>
            <li>João Pessoa — PB</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase font-light text-marsala/70">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px] font-light text-muted-text">
           <li>Estúdio próprio</li>
            <li>Atendimento a domicílio</li>
            <li>João Pessoa — PB</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] font-light text-muted-text">
          <p>© 2026 Amanda Alves. Todos os direitos reservados.</p>
          <p>Feito com cuidado e atenção aos detalhes por Jacielly Carvalho.</p>
        </div>
      </div>
    </footer>
  )
}
