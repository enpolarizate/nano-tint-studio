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

function LayerPlate({
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
  // index 0 = top layer, 5 = bottom layer
  const z = (5 - index) * 34;
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
      <div
        onMouseEnter={() => onHover(n)}
        onMouseLeave={() => onHover(null)}
        className="absolute inset-0 cursor-pointer"
        style={{
          transform: `translateZ(${active ? z + 26 : z}px)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* plate face */}
        <div
          className="absolute inset-0 rounded-xl border transition-all duration-500"
          style={{
            ...layerVisuals[visual],
            border: active
              ? "1px solid hsl(39 70% 44% / 0.9)"
              : "1px solid rgba(140,180,255,0.28)",
            boxShadow: active
              ? "0 0 26px hsl(39 70% 44% / 0.5), inset 0 0 18px hsl(39 70% 44% / 0.15)"
              : "0 0 14px rgba(70,120,255,0.18), inset 0 0 10px rgba(140,180,255,0.08)",
            filter: active ? "brightness(1.25)" : undefined,
          }}
        />
        {/* glass sheen */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.07) 100%)",
          }}
        />
        {/* number badge */}
        <span
          className={`absolute -left-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
            active
              ? "bg-gradient-to-br from-gold to-gold-light text-[hsl(var(--gold-foreground))] scale-110"
              : "bg-surface-2 text-muted-foreground border border-border/60"
          }`}
        >
          {n}
        </span>
      </motion.div>
    </motion.div>
  );
}

function LayerStack3D({
  activeLayer,
  onHover,
  compact = false,
}: {
  activeLayer: number | null;
  onHover: (n: number | null) => void;
  compact?: boolean;
}) {
  const w = compact ? 240 : 300;
  const h = compact ? 150 : 190;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1100px", height: compact ? 340 : 400 }}
    >
      {/* breathing glow behind the stack */}
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: w * 1.2,
          height: w * 1.2,
          background:
            "radial-gradient(circle, hsl(39 70% 44% / 0.12), rgba(40,90,255,0.08) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* floor shadow */}
      <div
        aria-hidden
        className="absolute bottom-4 rounded-full pointer-events-none"
        style={{
          width: w * 0.9,
          height: 26,
          background:
            "radial-gradient(ellipse, rgba(0,0,0,0.55), transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        className="relative"
        style={{
          width: w,
          height: h,
          transformStyle: "preserve-3d",
          transform: "rotateX(58deg) rotateZ(-32deg)",
        }}
      >
        {cards.map((card, i) => (
          <LayerPlate
            key={card.n}
            n={card.n}
            visual={card.visual}
            active={activeLayer === card.n}
            onHover={onHover}
            index={i}
          />
        ))}
      </div>
      {/* active layer label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 pointer-events-none">
        <span
          className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-opacity duration-300 ${
            activeLayer ? "text-gold opacity-100" : "opacity-0"
          }`}
        >
          {activeLayer ? layerNames[activeLayer] : ""}
        </span>
      </div>
    </div>
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

              {/* Center: 3D layers stack */}
              <div className="relative rounded-2xl border border-gold/20 bg-gradient-to-b from-surface-3/60 to-surface/60 shadow-[var(--shadow-card)] overflow-hidden">
                <LayerStack3D activeLayer={activeLayer} onHover={setActiveLayer} />
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
              <div className="relative rounded-2xl border border-gold/20 bg-gradient-to-b from-surface-3/60 to-surface/60 shadow-[var(--shadow-card)] overflow-hidden">
                <LayerStack3D activeLayer={activeLayer} onHover={setActiveLayer} compact />
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
