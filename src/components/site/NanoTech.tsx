import car from "@/assets/nano-blindex-car.jpg";
import capasHorizontal from "@/assets/nanoblindex-capas-horizontal.png";
import capasVertical from "@/assets/nanoblindex-capas-vertical.png";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";
import { ArrowRight } from "lucide-react";

export default function NanoTech() {
  return (
    <section
      id="tecnologia"
      className="relative section-padding overflow-hidden bg-gradient-to-b from-gold/20 via-surface-2 to-background"
    >
      <div
        aria-hidden
        className="ambient-glow bg-gold/30 -top-20 right-0 h-[420px] w-[420px]"
      />

      <div className="container-pro relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Tecnología de alto nivel</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            TECNOLOGÍA <span className="text-gold">NANO BLINDEX</span>{" "}
            <span className="text-white">AMERICANO</span>
          </h2>
          <div className="mt-6 space-y-1 text-muted-foreground text-lg">
            <p>Más que un polarizado…</p>
            <p>Es una capa de protección inteligente para tu vehículo.</p>
            <p className="text-foreground/90 font-medium">
              Seguridad real basada en tecnología de alto nivel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 relative rounded-3xl overflow-hidden border border-gold/30 shadow-[var(--shadow-elegant)]">
            <img
              src={car}
              alt="Vehículo premium con polarizado Nano Blindex"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[280px] md:h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14 max-w-xl">
                <p className="eyebrow">Premium</p>
                <h3 className="mt-3 font-display md:text-4xl font-bold text-left text-4xl my-px">
                  ¿POR QUÉ{" "}
                  <span className="text-gold">NANO BLINDEX AMERICANO</span> ES
                  DIFERENTE?
                </h3>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6 capas: imagen horizontal (PC) / vertical (celular) */}
        <Reveal delay={1}>
          <div className="mt-14">
            <div className="text-center mb-8">
              <span className="eyebrow">Composición del film</span>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-bold">
                6 CAPAS DE{" "}
                <span className="text-gold">PROTECCIÓN INTELIGENTE</span>
              </h3>
            </div>

            <div className="relative">
              {/* Desktop: horizontal */}
              <img
                src={capasHorizontal}
                alt="Capas del film Nano Blindex Expectrum: resina, poliéster, nanocerámica, policarbonato, carbono y membrana antirraya"
                loading="lazy"
                className="hidden md:block w-full h-auto rounded-xl"
              />
              {/* Mobile: vertical */}
              <img
                src={capasVertical}
                alt="Capas del film Nano Blindex Expectrum: resina, poliéster, nanocerámica, policarbonato, carbono y membrana antirraya"
                loading="lazy"
                className="block md:hidden w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
