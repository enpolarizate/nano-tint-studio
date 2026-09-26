import {
  Award,
  Flag,
  Atom,
  Sun,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import car from "@/assets/nano-blindex-car.jpg";
import { Reveal } from "./motion";
import { WHATSAPP_URL } from "./FloatingWhatsApp";
import { motion } from "framer-motion";
import { useState, type CSSProperties } from "react";

type CardData = {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  visual: string;
};

const cards: CardData[] = [
  {
    n: 1,
    icon: Award,
    title: "DS-RESINA",
    desc: "Capa de resina de alta resistencia que brinda durabilidad y claridad al film.",
    visual: "resina",
  },
  {
    n: 2,
    icon: Flag,
    title: "POLIÉSTER PREMIUM AMERICANO",
    desc: "Película base de poliéster de alta calidad, con gran resistencia mecánica y estabilidad dimensional.",
    visual: "poliester",
  },
  {
    n: 3,
    icon: Atom,
    title: "NANOTECNOLOGÍA NANOCERÁMICA HD",
    desc: "Tecnología avanzada que bloquea el calor, reduce el deslumbramiento y mejora la visibilidad.",
    visual: "nano",
  },
  {
    n: 4,
    icon: Sun,
    title: "LUBRIZOL AMERICANO POLICARBONATO PREMIUM",
    desc: "Capa de policarbonato de alta resistencia, que protege contra impactos, rayaduras y rayos UV.",
    visual: "poli",
  },
  {
    n: 5,
    icon: ShieldCheck,
    title: "CARBONO HÍBRIDO HIGH DEFINICIÓN",
    desc: "Capa de carbono que refuerza la estructura del film y mejora la nitidez y la definición visual.",
    visual: "carbon",
  },
  {
    n: 6,
    icon: Sparkles,
    title: "MEMBRANA ANTIRRAYA EXPECTRUM",
    desc: "Capa final de protección contra rayones, abrasión y agentes externos.",
    visual: "membrane",
  },
];

const layerVisuals: Record<string, CSSProperties> = {
  resina: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.22), rgba(255,255,255,0.05))",
    backdropFilter: "blur(2px)",
  },
  poliester: {
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
    backgroundSize: "7px 7px",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  nano: {
    background:
      "linear-gradient(135deg, rgba(0,85,255,0.28), rgba(0,110,255,0.42), rgba(0,85,255,0.28))",
    boxShadow: "0 0 14px rgba(0,85,255,0.35)",
  },
  poli: {
    background:
      "linear-gradient(90deg, rgba(20,40,80,0.35), rgba(45,75,135,0.45), rgba(20,40,80,0.35))",
  },
  carbon: {
    background: "linear-gradient(135deg, #2a2a2a, #080808, #2a2a2a)",
  },
  membrane: {
    background: "rgba(255,255,255,0.03)",
    boxShadow:
      "0 0 10px hsl(39 70% 44% / 0.3), inset 0 0 6px hsl(39 70% 44% / 0.12)",
    border: "1px solid hsl(39 70% 44% / 0.4)",
  },
};

const layerNames: Record<number, string> = {
  1: "DS-RESINA",
  2: "POLIÉSTER PREMIUM",
  3: "NANOCERÁMICA HD",
  4: "POLICARBONATO",
  5: "CARBONO HÍBRIDO",
  6: "MEMBRANA ANTIRRAYA",
};

function LayerStrip({
  n,
  visual,
  active,
  onHover,
  index,
}: {
  n: number;
  visual: string;
  active: boolean;
  onHover: (n: number | null) => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(n)}
      onMouseLeave={() => onHover(null)}
      className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-500 cursor-pointer ${
        active ? "bg-gold/10 scale-[1.03] z-10" : "bg-surface-3/40"
      }`}
    >
      {/* glow on hover */}
      <div
        className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        } pointer-events-none`}
        style={{
          boxShadow: "0 0 20px hsl(39 70% 44% / 0.25)",
        }}
      />
      {/* number badge */}
      <span
        className={`relative flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
          active
            ? "bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))]"
            : "bg-surface-2 text-muted-foreground"
        }`}
      >
        {n}
      </span>
      {/* layer bar */}
      <div
        className="relative flex-1 h-7 rounded-md transition-all duration-500"
        style={{
          ...layerVisuals[visual],
          ...(active
            ? { transform: "scaleY(1.15)", filter: "brightness(1.2)" }
            : {}),
        }}
      />
      {/* layer name */}
      <span
        className={`relative flex-shrink-0 text-[11px] font-semibold tracking-wide transition-colors duration-300 ${
          active ? "text-gold" : "text-muted-foreground"
        }`}
      >
        {layerNames[n]}
      </span>
    </motion.div>
  );
}

function TechCard({
  card,
  active,
  onHover,
  side,
}: {
  card: CardData;
  active: boolean;
  onHover: (n: number | null) => void;
  side: "left" | "right";
}) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(card.n)}
      onMouseLeave={() => onHover(null)}
      className={`group relative p-4 rounded-xl border transition-all duration-500 cursor-pointer ${
        active
          ? "border-gold/60 bg-gold/8 shadow-[var(--shadow-gold)]"
          : "border-border/40 bg-surface-3/50 hover:border-gold/25"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-400 ${
            active
              ? "bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] scale-110"
              : "bg-surface-2 text-gold"
          }`}
        >
          <Icon className="h-4.5 w-4.5" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <h4
            className={`text-xs font-bold tracking-wide transition-colors duration-300 ${
              active ? "text-gold" : "text-foreground/90"
            }`}
          >
            <span className="text-gold/50 mr-1">{card.n}.</span>
            {card.title}
          </h4>
          <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function NanoTech() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section
      id="tecnologia"
      className="relative section-padding bg-surface-2 overflow-hidden"
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

        {/* Layers + Cards: horizontal layout, layers center, cards around */}
        <Reveal delay={1}>
          <div className="mt-14">
            <div className="text-center mb-8">
              <span className="eyebrow">Composición del film</span>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-bold">
                6 CAPAS DE{" "}
                <span className="text-gold">PROTECCIÓN INTELIGENTE</span>
              </h3>
            </div>

            {/* ── Desktop: 3-column horizontal ── */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-5xl mx-auto">
              {/* Left cards: 1-3 */}
              <div className="space-y-3">
                {cards.slice(0, 3).map((card) => (
                  <TechCard
                    key={card.n}
                    card={card}
                    active={activeLayer === card.n}
                    onHover={setActiveLayer}
                    side="left"
                  />
                ))}
              </div>

              {/* Center: layers stack */}
              <div className="relative px-4 py-6 rounded-2xl border border-gold/20 bg-gradient-to-b from-surface-3/60 to-surface/60 shadow-[var(--shadow-card)]">
                {/* subtle breathing glow */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, hsl(39 70% 44% / 0.08), transparent 70%)",
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative flex flex-col gap-1.5 w-[260px]">
                  {cards.map((card, i) => (
                    <LayerStrip
                      key={card.n}
                      n={card.n}
                      visual={card.visual}
                      active={activeLayer === card.n}
                      onHover={setActiveLayer}
                      index={i}
                    />
                  ))}
                </div>
              </div>

              {/* Right cards: 4-6 */}
              <div className="space-y-3">
                {cards.slice(3, 6).map((card) => (
                  <TechCard
                    key={card.n}
                    card={card}
                    active={activeLayer === card.n}
                    onHover={setActiveLayer}
                    side="right"
                  />
                ))}
              </div>
            </div>

            {/* ── Mobile: stacked, layers center, cards below ── */}
            <div className="md:hidden space-y-5">
              <div className="relative px-3 py-5 rounded-2xl border border-gold/20 bg-gradient-to-b from-surface-3/60 to-surface/60 shadow-[var(--shadow-card)]">
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, hsl(39 70% 44% / 0.08), transparent 70%)",
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative flex flex-col gap-1.5">
                  {cards.map((card, i) => (
                    <LayerStrip
                      key={card.n}
                      n={card.n}
                      visual={card.visual}
                      active={activeLayer === card.n}
                      onHover={setActiveLayer}
                      index={i}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {cards.map((card) => (
                  <TechCard
                    key={card.n}
                    card={card}
                    active={activeLayer === card.n}
                    onHover={setActiveLayer}
                    side="left"
                  />
                ))}
              </div>
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
