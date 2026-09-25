import { Home, MapPin, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";

export default function Coverage() {
  return (
    <section className="relative section-padding bg-surface-2">
      <div className="container-pro">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Cobertura</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            INSTALACIÓN <span className="text-gold">A TU MEDIDA</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <div className="silver-card p-8 md:p-10 h-full">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-black text-gold-light shadow-md">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-bold text-[hsl(var(--silver-foreground))]">
                🏠 DOMICILIO GRATIS EN BOGOTÁ
              </h3>
              <ul className="mt-6 space-y-3">
                {["Instalación en tu casa o trabajo", "Sin costo adicional", "Mismo estándar profesional", "Con agendamiento previo"].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[hsl(var(--silver-foreground))]/90">
                    <Check className="h-5 w-5 text-[hsl(var(--gold-deep))] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[hsl(var(--silver-foreground))]/70 italic">
                Agenda tu horario y nosotros nos encargamos del resto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="premium-card p-8 md:p-10 h-full">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] shadow-[var(--shadow-gold)]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-bold">📍 PUNTO DE INSTALACIÓN PRINCIPAL</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/90">
                    <span className="font-semibold">DIRECCIÓN SEDE PRINCIPAL BOGOTÁ: </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=carrera+16c+161-50+Bogot%C3%A1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-gold/60 hover:decoration-gold hover:text-gold transition-colors"
                    >
                      carrera 16 c # 161-50
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/90">
                    <span className="font-semibold">CONTACTO SEDE PRINCIPAL: </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-gold/60 hover:decoration-gold hover:text-gold transition-colors"
                    >
                      3115589646
                    </a>
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Elige si lo quiere a domicilio o en punto fisico.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
