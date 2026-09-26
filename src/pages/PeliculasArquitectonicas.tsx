import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { applyConsentToPixel } from "@/lib/metaPixel";
import {
  Sun, Shield, Eye, Snowflake, Sparkles, Building2, Home, Hotel,
  Briefcase, Store, Stethoscope, Layers, CheckCircle2, ChevronDown,
  MessageCircle, Award, Ruler, FileText,
  CalendarCheck, ShieldCheck, Zap, Palette, MonitorSmartphone, PaintBucket,
  Droplets, CloudRain, Wind, Users, Quote, MapPin, Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import logo from "@/assets/arquitectonico/logo.png";
import heroImg from "@/assets/arquitectonico/hero.jpg";
import installImg from "@/assets/arquitectonico/install.jpg";
import buildingImg from "@/assets/arquitectonico/building.jpg";
import houseImg from "@/assets/arquitectonico/house.jpg";
import techViews from "@/assets/tech/views.jpg";
import techEnergy from "@/assets/tech/energy.jpg";
import techPrivacy from "@/assets/tech/privacy.jpg";
import techDamage from "@/assets/tech/damage.jpg";
import techUv from "@/assets/tech/uv.jpg";
import techHeat from "@/assets/tech/heat.jpg";
import techFurniture from "@/assets/tech/furniture.jpg";
import techGlare from "@/assets/tech/glare.jpg";
import techVandalism from "@/assets/tech/vandalism.jpg";
import protectionSun from "@/assets/protection-sun.jpg";
import protectionBeach from "@/assets/protection-beach.jpg";
import protectionRain from "@/assets/protection-rain.jpg";
import protectionWind from "@/assets/protection-wind.jpg";
import protectionKids from "@/assets/protection-kids.jpg";
import expCasa from "@/assets/tech/casa.jpg";
import expApartamento from "@/assets/tech/apartamento.jpg";
import expOficina from "@/assets/tech/oficina.jpg";
import expLocal from "@/assets/tech/local.jpg";
import expEdificio from "@/assets/tech/edificio.jpg";
import expHotel from "@/assets/tech/hotel.jpg";
import expConsultorio from "@/assets/tech/consultorio.jpg";
import expFachada from "@/assets/tech/fachada.jpg";
import expProyecto from "@/assets/tech/proyecto.jpg";
import covMeasures from "@/assets/coverage-measures.jpg";
import covQuote from "@/assets/coverage-quote.jpg";
import covInstall from "@/assets/coverage-install.jpg";

const WHATSAPP_URL = "https://wa.link/xak722";
const WA_DEFAULT = WHATSAPP_URL;
const WA_WHOLESALE = WHATSAPP_URL;

/* ---------------- Reveal on scroll ---------------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- Buttons ---------------- */
function CtaButton({ href = WA_DEFAULT, children, variant = "gold", className = "" }: { href?: string; children: ReactNode; variant?: "gold" | "outline"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-10 py-4 text-sm md:text-base font-bold tracking-wide uppercase transition-all duration-300 will-change-transform";
  const styles =
    variant === "gold"
      ? "btn-gold btn-gold-hover hover:-translate-y-0.5"
      : "border border-[oklch(0.82_0.14_85/0.5)] text-foreground hover:bg-[oklch(0.82_0.14_85/0.1)] hover:border-[var(--gold)]";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

function SupportLine({ text = "Instalación a nivel nacional", className = "" }: { text?: string; className?: string }) {
  return (
    <p className={`mt-3 flex items-center gap-2 text-xs md:text-sm text-muted-foreground ${className}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
      {text}
    </p>
  );
}

/* ============================================================== */

export default function PeliculasArquitectonicas() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ENPOLARÍZATE — Películas de seguridad y control solar premium";
    // Activa el píxel exclusivo de esta página si el visitante ya aceptó cookies
    applyConsentToPixel();
    return () => { document.title = prevTitle; };
  }, []);
  return (
    <div className="arq-page min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyWhatsApp />
      <AlertBar />
      <Hero />
      <Tints />
      <Testimonials />
      <Tech />
      <Protection />
      <InstallSection />
      <Warranty />
      <Experience />
      <Coverage />
      <Wholesale />
      <Distribucion />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- Sticky WhatsApp ---------------- */
function StickyWhatsApp() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="arq-glow fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_10px_40px_-5px_oklch(0.65_0.16_150/0.6)] transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--gold)]" />
      </span>
    </a>
  );
}

/* ---------------- 1. Alert bar ---------------- */
function AlertBar() {
  return (
    <div className="relative overflow-hidden border-b border-[oklch(0.82_0.14_85/0.25)] bg-[linear-gradient(90deg,oklch(0.13_0.012_50),oklch(0.18_0.02_50),oklch(0.13_0.012_50))]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center">
        <p className="text-[11px] md:text-sm font-medium tracking-wide text-[var(--gold-soft)]">
          🚨 <span className="font-bold">Atención:</span> Dueños de Inmuebles residenciales o establecimientos comerciales <span className="text-white font-bold">SIN PELÍCULA DE SEGURIDAD</span>… Esto es para ti! 🚨
        </p>
      </div>
    </div>
  );
}

/* ---------------- 2. Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-6 pb-14 md:pt-10 md:pb-20">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-medium text-[var(--gold-soft)]">
            <Sparkles className="h-3.5 w-3.5" /> Tecnología Nanocerámica Americana
          </span>
        </Reveal>

        <Reveal delay={100} className="w-full">
          <h1 className="mx-auto mt-5 max-w-5xl text-center text-2xl font-extrabold leading-[1.15] md:text-3xl lg:text-4xl">
            Protege tus inmuebles con <span className="text-gradient-gold">Películas Arquitectónicas</span> en tus cristales reduciendo calor, mejorando la privacidad y manteniendo luz interna.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-5 max-w-2xl text-center text-base md:text-lg text-muted-foreground">
            Estética moderna, seguridad, lugar fresco y control de rayos UV — sin remodelaciones costosas.
          </p>
        </Reveal>

        <Reveal delay={200} className="w-full max-w-4xl">
          <div className="mt-10 w-full md:mt-12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-gold)] opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[oklch(1_0_0/0.1)] shadow-[var(--shadow-card)]">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/-d3vPN_bm6o"
                    title="ENPOLARÍZATE — Película de seguridad arquitectónica"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine className="justify-center" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ---------------- 3. Tints ---------------- */
function Tints() {
  const opts = [
    { p: "Black out", title: "Black out", desc: "Privacidad total. Cero visibilidad desde afuera y bloqueo completo de la luz.", overlay: "bg-background" },
    { p: "5%", title: "Máxima privacidad", desc: "Muy poca luz entra. Privacidad casi total.", overlay: "bg-background/95" },
    { p: "15%", title: "Alta privacidad", desc: "Privacidad alta con luz tenue.", overlay: "bg-background/85" },
    { p: "20%", title: "Privacidad alta", desc: "Ideal para dormitorios y espacios íntimos.", overlay: "bg-background/80" },
    { p: "35%", title: "El más oscuro", desc: "Privacidad y protección balanceadas, poca visibilidad desde afuera.", overlay: "bg-background/65" },
    { p: "50%", title: "Equilibrio perfecto", desc: "Entre visibilidad y protección. (La más elegida)", overlay: "bg-background/58", badge: "Más elegida" },
    { p: "70%", title: "El más claro", desc: "Mantiene el espacio iluminado con protección UV y seguridad.", overlay: "bg-background/42" },
    { p: "No Tint", title: "Sin película", desc: "Máxima luz, sin privacidad ni protección. Referencia.", overlay: "bg-transparent" },
  ];
  const n = opts.length;
  const [selectedTint, setSelectedTint] = useState<number | null>(null);
  const activeTint = opts[selectedTint ?? 0];

  return (
    <section className="relative bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-20 md:pt-28 pb-10 md:pb-14">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Privacidad e iluminación</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Tonalidades y niveles de privacidad</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tú eliges qué tan claro u oscuro quieres tu espacio. Las películas arquitectónicas se manejan por porcentajes de visibilidad:
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="relative flex aspect-[16/9] w-full overflow-hidden md:aspect-[16/6]">
              {opts.map((o, i) => (
                <Button
                  key={o.p}
                  type="button"
                  variant="ghost"
                  onClick={() => setSelectedTint(i)}
                  aria-label={`Ver tonalidad ${o.p}: ${o.title}`}
                  title={`Ver ${o.title} en imagen completa`}
                  className="group relative h-full min-w-0 flex-1 overflow-hidden rounded-none p-0 transition-transform duration-200 hover:scale-[1.02] hover:bg-transparent focus-visible:z-20 focus-visible:ring-inset"
                  style={{
                    backgroundImage: `url(${houseImg})`,
                    backgroundPosition: `${(i / (n - 1)) * 100}% center`,
                    backgroundSize: `${n * 100}% 100%`,
                  }}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center bg-gradient-to-t from-background/95 to-transparent px-1 pb-2 pt-10 text-foreground md:pb-3 md:pt-14">
                    <span className="text-sm font-extrabold leading-none md:text-2xl">{o.p}</span>
                    <span className="mt-0.5 hidden whitespace-normal text-center text-[8px] font-bold uppercase md:block md:text-[10px]">{o.title}</span>
                  </span>
                </Button>
              ))}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(to right,
                    hsl(var(--background) / 1) 0%,
                    hsl(var(--background) / 0.95) 12.5%,
                    hsl(var(--background) / 0.85) 25%,
                    hsl(var(--background) / 0.80) 37.5%,
                    hsl(var(--background) / 0.65) 50%,
                    hsl(var(--background) / 0.58) 62.5%,
                    hsl(var(--background) / 0.42) 75%,
                    transparent 87.5%,
                    transparent 100%)`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(to right,
                    transparent 0,
                    transparent calc(${100 / n}% - 1px),
                    hsl(var(--foreground) / 0.35) calc(${100 / n}% - 1px),
                    hsl(var(--foreground) / 0.35) ${100 / n}%)`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-[var(--gold)]/20 text-[var(--gold)] shadow-[0_0_18px_var(--gold)] transition-opacity duration-150"
                style={{
                  left: cursorPos.x - 24,
                  top: cursorPos.y - 24,
                  opacity: cursorActive ? 1 : 0,
                }}
              >
                <Maximize2 className="h-5 w-5" strokeWidth={2.5} />
              </div>
            </div>

          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Toca una tonalidad para verla en imagen completa.</p>
        </Reveal>

        <Dialog open={selectedTint !== null} onOpenChange={(open) => { if (!open) setSelectedTint(null); }}>
          <DialogContent className="w-[calc(100%-2rem)] max-w-5xl overflow-hidden border-border bg-card p-0">
            <DialogTitle className="sr-only">Tonalidad {activeTint.p}: {activeTint.title}</DialogTitle>
            <DialogDescription className="sr-only">Vista completa de la fachada con la tonalidad seleccionada.</DialogDescription>
            <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-video">
              <img
                src={houseImg}
                alt={`Fachada con película arquitectónica en tonalidad ${activeTint.p}`}
                className="h-full w-full object-cover"
              />
              <div className={`absolute inset-0 ${activeTint.p === "Black out" ? "bg-background/95" : activeTint.p === "50%" ? "bg-background/[0.68]" : activeTint.p === "70%" ? "bg-background/[0.52]" : activeTint.overlay}`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent px-5 pb-6 pt-20 text-foreground md:px-8 md:pb-8">
                <p className="text-3xl font-extrabold md:text-5xl">{activeTint.p}</p>
                <p className="mt-1 text-lg font-bold md:text-2xl">{activeTint.title}</p>
                <p className="mt-2 max-w-2xl text-sm opacity-85 md:text-base">{activeTint.desc}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>


        <Reveal delay={100}>
          <div className="mt-12 max-w-3xl mx-auto text-center space-y-2 text-muted-foreground">
            <p className="text-lg italic">"No se trata de elegir el más oscuro…"</p>
            <p className="text-base">Se trata de encontrar el equilibrio ideal entre <span className="font-bold text-foreground">privacidad, iluminación y protección.</span></p>
            <p className="text-base">Y para eso te asesoramos según tu espacio y exposición al sol.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 rounded-2xl bg-[var(--ink)] p-8 md:p-10 text-center">
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Descubre cuál es la película ideal para tu espacio y recibe asesoría profesional según tu necesidad.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
              <SupportLine />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4. Tech ---------------- */
function Tech() {
  const benefits = [
    { i: Eye, t: "Mantén tus vistas sin sacrificar la comodidad", img: techViews },
    { i: Zap, t: "Ahorro energético del 5 al 15 % con láminas para ventanas", img: techEnergy },
    { i: Palette, t: "Añade privacidad o diseño sin reemplazar tus ventanas", img: techPrivacy },
    { i: Shield, t: "Reduce daños accidentales", img: techDamage },
    { i: Sun, t: "Protege tu piel contra rayos UV", img: techUv },
    { i: Snowflake, t: "Rechazo avanzado de calor", img: techHeat },
    { i: PaintBucket, t: "Rechaza rayos que deterioran muebles, pisos y objetos", img: techFurniture },
    { i: MonitorSmartphone, t: "Reduce deslumbramiento en pantallas y equipos", img: techGlare },
    { i: ShieldCheck, t: "Evita daños costosos como grafitis y vandalismo", img: techVandalism },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.14_85/0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Premium</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
                Tecnología <span className="text-gradient-gold">Nanocerámica Americana</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                La película Nanocerámica Americana te permite pasar la mayor parte del tiempo cómodo, seguro y relajado, tanto si prefieres una película casi transparente que conserva el aspecto natural de tu ventana, como si optas por opciones reflectantes, tintadas o decorativas que aportan privacidad y un estilo moderno.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-[var(--gradient-gold)] opacity-15 blur-3xl" />
              <img src={buildingImg} alt="Fachada arquitectónica con películas de control solar" width={1920} height={1080} loading="lazy" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Interactive infinite carousel of benefits */}
      <BenefitsMarquee benefits={benefits} />
    </section>
  );
}

function BenefitsMarquee({ benefits }: { benefits: Array<{ i: any; t: string; img: string }> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(60); // px/s, positive = move left (content scrolls right-to-left)
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => { halfWidthRef.current = track.scrollWidth / 2; };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      offsetRef.current += speedRef.current * dt;
      const hw = halfWidthRef.current || 1;
      if (offsetRef.current >= hw) offsetRef.current -= hw;
      if (offsetRef.current < 0) offsetRef.current += hw;
      track.style.transform = `translateX(${-offsetRef.current}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    // Map: left edge -> -240 (reverse fast), center (~0.5) -> small dead zone, right edge -> +240
    const centered = (x - 0.5) * 2; // -1..1
    const dead = 0.08;
    const adj = Math.abs(centered) < dead ? 0 : centered - Math.sign(centered) * dead;
    speedRef.current = 60 + adj * 320;
  };

  const onLeave = () => { speedRef.current = 60; };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative pb-16 md:pb-24 overflow-hidden cursor-ew-resize select-none"
    >
      <div ref={trackRef} className="flex will-change-transform">
        <div className="flex gap-5 md:gap-6 shrink-0 pr-5 md:pr-6">
          {benefits.map((b, i) => (
            <BenefitCard key={`a-${i}`} b={b} />
          ))}
        </div>
        <div className="flex gap-5 md:gap-6 shrink-0 pr-5 md:pr-6">
          {benefits.map((b, i) => (
            <BenefitCard key={`b-${i}`} b={b} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground/70">Mueve el mouse a la derecha o izquierda para acelerar · al centro para frenar</p>
    </div>
  );
}

function BenefitCard({ b }: { b: { i: any; t: string; img: string } }) {
  const Icon = b.i;
  return (
    <div className="relative shrink-0 w-[78vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw] xl:w-[22vw] rounded-2xl overflow-hidden border border-[oklch(0.82_0.14_85/0.35)] bg-black/40 shadow-[var(--shadow-card)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={b.img} alt={b.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--gradient-gold)] text-[var(--ink)] shadow-lg">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm md:text-[15px] leading-snug text-foreground/90 font-medium">{b.t}</p>
      </div>
    </div>
  );
}

/* ---------------- 5. Protection ---------------- */
function Protection() {
  const items = [
    {
      icon: Sun,
      title: "Sol intenso durante el día",
      desc: "Reduce el calor y el deslumbramiento en espacios con alta exposición solar.",
      img: protectionSun,
    },
    {
      icon: Droplets,
      title: "Ambientes cercanos a playa o alta humedad",
      desc: "Película diseñada para resistir corrosión y humedad extrema sin degradarse.",
      img: protectionBeach,
    },
    {
      icon: CloudRain,
      title: "Lluvias constantes",
      desc: "Mayor adhesión y durabilidad frente a climas húmedos y lluvia persistente.",
      img: protectionRain,
    },
    {
      icon: Wind,
      title: "Viento y cambios climáticos",
      desc: "Mantiene su rendimiento térmico y estructural ante variaciones extremas.",
      img: protectionWind,
    },
    {
      icon: Users,
      title: "Niños y alto tráfico en interiores",
      desc: "Protección adicional contra impactos accidentales en zonas de alto movimiento.",
      img: protectionKids,
    },
  ];
  return (
    <section className="bg-background text-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Protección integral</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
              Protección <span className="text-gradient-gold">real</span> para tu espacio
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Diseñada para espacios expuestos a condiciones extremas.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 100} className="h-full">
                <article className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.title}
                      loading="lazy"
                      width={1024}
                      height={704}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg text-[var(--ink)] shadow-[var(--shadow-gold)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'var(--gradient-gold)' }}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-sm md:text-base leading-snug">{it.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 6. Install ---------------- */
function InstallSection() {
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-gold)] opacity-15 blur-2xl" />
              <img src={installImg} alt="Instalación profesional de película arquitectónica" width={1920} height={1280} loading="lazy" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Versatilidad</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Instalación en <span className="text-gradient-gold">interiores y exteriores</span></h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground">La Película Nanocerámica Americana puede instalarse:</p>
              <ul className="mt-5 space-y-3">
                {["Por dentro del vidrio", "O por fuera del inmueble", "Dependiendo del tipo de espacio y exposición solar."].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" /> <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-foreground/80">Esto permite:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Mayor durabilidad", "Mejor rendimiento térmico", "Protección más eficiente según el proyecto"].map((t, i) => (
                  <Reveal key={t} delay={i * 100} className="h-full">
                    <div className="glass-card rounded-xl p-4 text-sm font-semibold h-full flex items-center justify-center text-center">{t}</div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8">
                <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
                <SupportLine />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Testimonials ---------------- */
const textTestimonialsArq = [
  { name: "Laura G.", role: "Oficina en Bogotá", text: "Desde que instalamos la película en la oficina, la temperatura bajó notablemente y el equipo de aire acondicionado trabaja mucho menos." },
  { name: "Miguel R.", role: "Apartamento en Medellín", text: "La privacidad es total. Desde afuera no se ve nada, pero desde adentro conservamos la vista y la luz natural perfectamente." },
];

function Testimonials() {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-6 md:pt-8 pb-4 md:pb-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Testimonios reales</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Esto es lo que dicen nuestros clientes</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left text testimonial */}
          <Reveal className="order-2 lg:order-1">
            <article className="glass-card h-full flex flex-col p-6 rounded-2xl border border-[oklch(1_0_0/0.08)]">
              <Quote className="h-7 w-7 text-[var(--gold)] mb-3" />
              <p className="text-base text-foreground/85 leading-relaxed flex-1">{textTestimonialsArq[0].text}</p>
              <div className="mt-5 pt-4 border-t border-[oklch(1_0_0/0.08)]">
                <div className="text-foreground font-bold">{textTestimonialsArq[0].name}</div>
                <div className="text-xs text-[var(--gold-soft)]">{textTestimonialsArq[0].role}</div>
              </div>
            </article>
          </Reveal>

          {/* Center video testimonial */}
          <Reveal className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--gold)]/40 via-transparent to-white/10 blur-2xl opacity-70" />
              <div className="relative overflow-hidden glass-card rounded-2xl border border-[var(--gold)]/30 bg-black">
                <div className="aspect-[9/16] w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ACAfc8BCjQM?rel=0"
                    title="Testimonio cliente ENPOLARÍZATE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right text testimonial */}
          <Reveal className="order-3">
            <article className="glass-card h-full flex flex-col p-6 rounded-2xl border border-[oklch(1_0_0/0.08)]">
              <Quote className="h-7 w-7 text-[var(--gold)] mb-3" />
              <p className="text-base text-foreground/85 leading-relaxed flex-1">{textTestimonialsArq[1].text}</p>
              <div className="mt-5 pt-4 border-t border-[oklch(1_0_0/0.08)]">
                <div className="text-foreground font-bold">{textTestimonialsArq[1].name}</div>
                <div className="text-xs text-[var(--gold-soft)]">{textTestimonialsArq[1].role}</div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. Warranty ---------------- */
function Warranty() {
  const covers = ["Craquelado", "Soplado", "Cristalización", "Desprendimiento en esquinas", "Decoloración prematura"];
  return (
    <section className="relative overflow-hidden bg-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.82_0.14_85/0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-10 md:pt-14 pb-20 md:pb-28">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[var(--ink)] shadow-[var(--shadow-gold)]">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold">Garantía profesional</h2>
            <p className="mt-4 text-xl md:text-2xl text-gradient-gold font-bold">Garantía de 4 a 8 años</p>
            <p className="mt-1 text-muted-foreground">según el espacio y aplicación</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 glass-card rounded-2xl p-6 md:p-10">
            <p className="text-center text-lg font-semibold">Nuestra garantía cubre:</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
              {covers.map((c, i) => (
                <Reveal key={c} delay={i * 80} className="h-full">
                  <div className="flex h-full items-center gap-3 rounded-xl border border-[oklch(1_0_0/0.08)] bg-[oklch(1_0_0/0.03)] p-4">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0" />
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center italic text-muted-foreground">
              Porque un trabajo profesional debe durar y mantenerse en el tiempo.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 9. Experience ---------------- */
function Experience() {
  const cats = [
    { i: Home, t: "Casas", img: expCasa },
    { i: Building2, t: "Apartamentos", img: expApartamento },
    { i: Briefcase, t: "Oficinas", img: expOficina },
    { i: Store, t: "Locales comerciales", img: expLocal },
    { i: Building2, t: "Edificios", img: expEdificio },
    { i: Hotel, t: "Hoteles", img: expHotel },
    { i: Stethoscope, t: "Consultorios", img: expConsultorio },
    { i: Layers, t: "Fachadas en vidrio", img: expFachada },
    { i: Sparkles, t: "Proyectos especiales", img: expProyecto },
  ];
  return (
    <section className="bg-background text-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Trayectoria</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold">
              <span className="text-gradient-gold">16 años</span> de experiencia
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Instalación profesional de control solar, privacidad y protección para:
            </p>
          </div>
        </Reveal>
      </div>
      <BenefitsMarquee benefits={cats} />
    </section>
  );
}

/* ---------------- 10. Coverage ---------------- */
function Coverage() {
  const steps = [
    { i: Ruler, t: "Toma de medidas", d: "El cliente envía las medidas del espacio para un presupuesto preciso y sin sorpresas.", img: covMeasures },
    { i: FileText, t: "Cotización personalizada", d: "Realizamos la cotización detallada según tus necesidades y el tipo de película ideal.", img: covQuote },
    { i: CalendarCheck, t: "Instalación profesional", d: "Se agenda la instalación con técnicos certificados y garantía incluida.", img: covInstall },
  ];
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Cobertura</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Suministro e instalación <span className="text-gradient-gold">a nivel nacional</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Instalamos en toda Colombia</p>
            <p className="mt-2 text-xl font-bold">¿Cómo funciona?</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 150} className="h-full">
              <div className="group relative overflow-hidden rounded-2xl border border-[oklch(1_0_0/0.06)] bg-[oklch(0.14_0.01_50)] transition-all hover:-translate-y-1 hover:border-[oklch(0.82_0.14_85/0.3)] h-full flex flex-col">
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img src={s.img} alt={s.t} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.14_0.01_50/0.8)]" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-gold)] text-[var(--ink)] shadow-[var(--shadow-gold)]">
                    <s.i className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-center text-muted-foreground">Servicio disponible a nivel nacional.</p>
          <div className="mt-6 flex flex-col items-center">
            <CtaButton>Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 11. Wholesale ---------------- */
function Wholesale() {
  const items = [
    "Películas de seguridad arquitectónica",
    "Control solar y privacidad",
    "Venta al por mayor con o sin instalación",
    "Cobertura nacional",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--ink)] to-[oklch(0.11_0.012_50)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_85/0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 md:pt-28 pb-8 md:pb-10">
        <Reveal>
          <div className="rounded-3xl border border-[oklch(0.82_0.14_85/0.25)] bg-[oklch(0.13_0.012_50/0.6)] p-8 md:p-14 backdrop-blur-xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)]">
                B2B · Proyectos
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Películas arquitectónicas <span className="text-gradient-gold">al por mayor</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Películas arquitectónicas premium para proyectos y distribuidores</p>
              <p className="mt-6 max-w-3xl mx-auto text-foreground/85">
                Ofrecemos suministro e instalación de películas arquitectónicas de alto rendimiento para oficinas, edificios, hogares y proyectos comerciales.
              </p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it} delay={i * 100}>
                  <div className="flex items-center gap-3 rounded-xl border border-[oklch(1_0_0/0.08)] bg-[oklch(1_0_0/0.03)] px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0" />
                    <span className="font-medium">{it}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton href={WA_WHOLESALE}>Cotizar proyecto al por mayor</CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 11b. Distribución ---------- */
const DISTRIBUCION = [
  {
    region: "BOGOTÁ",
    points: [
      {
        nombre: "SEDE PRINCIPAL DE DISTRIBUCIÓN",
        direccion: "Cl. 185 #56 - 14",
        maps: "https://www.google.com/maps/search/?api=1&query=Cl+185+56-14+Bogot%C3%A1",
        contactos: [
          { label: "CONTACTO DIRECCIÓN 2", numero: "3132023631", wa: "https://wa.link/04nhvs" },
          { label: "CONTACTO", numero: "3184487807", wa: "https://wa.link/34hhy4" },
        ],
      },
      {
        nombre: "PUERTO NORTE",
        contactos: [
          { label: "CONTACTO", numero: "3114040755", wa: "https://wa.link/8hqecw" },
        ],
      },
      {
        nombre: "PRADO VERANIEGO",
        direccion: "Cra 45b #140-44",
        maps: "https://www.google.com/maps/search/?api=1&query=Cra+45b+140-44+Bogot%C3%A1",
        contactos: [
          { label: "CONTACTO", numero: "3173471726", wa: "https://wa.link/hlgvyq" },
        ],
      },
      {
        nombre: "DIRECCIÓN 3 (SUR DE BOGOTÁ)",
        direccion: "Cra 39a 9 55 sur",
        maps: "https://www.google.com/maps/search/?api=1&query=Cra+39a+9+55+sur+Bogot%C3%A1",
        contactos: [
          { label: "CONTACTO SUR DE BOGOTÁ", numero: "3013875499", wa: "https://wa.link/mrowqx" },
        ],
      },
    ],
  },
  {
    region: "ANTIOQUIA & META",
    points: [
      {
        nombre: "ANTIOQUIA — PUNTO DE DISTRIBUCIÓN",
        contactos: [
          { label: "CONTACTO", numero: "3126649953", wa: "https://wa.link/z3ghdj" },
        ],
      },
      {
        nombre: "META — PUNTO DE DISTRIBUCIÓN",
        contactos: [
          { label: "CONTACTO", numero: "3013875499", wa: "https://wa.link/hap0bu" },
        ],
      },
    ],
  },
];

function Distribucion() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.11_0.012_50)] to-[var(--ink)]">
      <div className="relative mx-auto max-w-6xl px-4 pt-8 md:pt-10 pb-20 md:pb-28">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)]">
            Distribución
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            PUNTOS DE <span className="text-gradient-gold">DISTRIBUCIÓN</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Encuentra tu sede más cercana y contáctanos directo por WhatsApp.
          </p>
        </Reveal>

        {DISTRIBUCION.map((region) => (
          <Reveal key={region.region} className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-[oklch(0.82_0.14_85/0.4)] to-transparent" />
              <h3 className="text-xl md:text-2xl font-bold text-[var(--gold)] uppercase tracking-wider">
                {region.region}
              </h3>
              <span className="h-px flex-1 bg-gradient-to-l from-[oklch(0.82_0.14_85/0.4)] to-transparent" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {region.points.map((p) => (
                <div key={p.nombre} className="rounded-3xl border border-[oklch(0.82_0.14_85/0.18)] bg-[oklch(0.13_0.012_50/0.6)] p-6 md:p-8 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[var(--gradient-gold)] text-[var(--ink)] shadow-lg shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold">{p.nombre}</h4>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {p.direccion && (
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--gold)] shrink-0" />
                        <span className="text-foreground/90">
                          <span className="font-semibold">DIRECCIÓN: </span>
                          {p.maps ? (
                            <a href={p.maps} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[oklch(0.82_0.14_85/0.6)] hover:decoration-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                              {p.direccion}
                            </a>
                          ) : (
                            p.direccion
                          )}
                        </span>
                      </li>
                    )}
                    {p.contactos.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--gold)] shrink-0" />
                        <span className="text-foreground/90">
                          {c.label && <span className="font-semibold">{c.label}: </span>}
                          <a href={c.wa} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[oklch(0.82_0.14_85/0.6)] hover:decoration-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                            {c.numero}
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Offer() {
  const items = [
    { i: MessageCircle, t: "Asesoría personalizada gratuita" },
    { i: ShieldCheck, t: "Instalación profesional de Nano Cerámica" },
    { i: Building2, t: "Domicilio gratis en Bogotá o instalación a nivel nacional" },
    { i: Award, t: "Garantía de hasta 8 años" },
  ];
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Tu servicio incluye</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">¿Qué obtendrás con nuestro servicio de polarizado?</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 100}>
              <div className="group relative overflow-hidden glass-card rounded-2xl p-6 md:p-7 transition-all hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-gold)] opacity-10 blur-2xl group-hover:opacity-25 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[oklch(1_0_0/0.06)] text-[var(--gold)]">
                    <it.i className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold leading-snug">{it.t}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 13. FAQ ---------------- */
function Faq() {
  const items = [
    { q: "¿Necesito hacer remodelaciones o cambiar los vidrios?", a: "No. La película se instala directamente sobre el vidrio existente, evitando obras, cambios estructurales o remodelaciones costosas." },
    { q: "¿La película arquitectónica realmente reduce el calor?", a: "Sí. La Película Nanocerámica Americana está diseñada para reducir significativamente la sensación térmica causada por la exposición solar directa, ayudando a mantener espacios más frescos y cómodos." },
    { q: "¿La película arquitectónica ayuda con la privacidad?", a: "Sí. Dependiendo del porcentaje elegido, ayuda a reducir significativamente la visibilidad desde el exterior durante el día, generando mayor privacidad en casas, oficinas y espacios comerciales." },
    { q: "¿Voy a perder iluminación natural?", a: "No. La idea no es \"encerrar\" el espacio, sino reducir calor, reflejos y exposición sin perder la sensación de amplitud e iluminación." },
    { q: "¿La película oscurece completamente el espacio?", a: "No necesariamente. Manejamos diferentes niveles de tonalidad como 35%, 50% y 70%, dependiendo del nivel de privacidad y claridad que quieras mantener. Tú eliges qué tan claro u oscuro quieres tu espacio." },
    { q: "¿Cuánto dura el efecto de reducción de calor?", a: "La Película Nanocerámica Americana mantiene su rendimiento térmico durante toda su vida útil, respaldada por nuestra garantía de hasta 8 años." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--ink)]">
      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Resolvemos tus dudas</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Preguntas frecuentes</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <Reveal key={it.q} delay={i * 60}>
                <div className={`glass-card overflow-hidden rounded-xl transition-colors ${active ? "border-[oklch(0.82_0.14_85/0.4)]" : ""}`}>
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 md:px-7 py-5 text-left"
                  >
                    <span className="text-base md:text-lg font-semibold pr-4">{it.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform duration-300 ${active ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-7 pb-6 text-muted-foreground leading-relaxed">{it.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 14. Final CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_85/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.14_85/0.3)] bg-[oklch(0.82_0.14_85/0.08)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)]">
            <Sparkles className="h-3.5 w-3.5" /> Da el siguiente paso
          </span>
          <h2 className="mt-5 text-3xl md:text-6xl font-extrabold leading-[1.05]">
            Solicita tu cotización personalizada <span className="text-gradient-gold">por WhatsApp</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cuál es la película ideal para tu espacio y recibe asesoría profesional según tu necesidad.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <CtaButton className="!px-9 !py-5 !text-base">Recibir asesoría por WhatsApp</CtaButton>
            <SupportLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}



/* ---------------- 15. Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[oklch(1_0_0/0.06)] bg-[oklch(0.09_0.012_50)]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <img src={logo} alt="ENPOLARÍZATE" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Protege tu camino y Enpolarízate. Películas arquitectónicas premium para hogares, oficinas y comercios.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Tonalidades", "#"],
                ["Tecnología Nanocerámica", "#"],
                ["Garantía", "#"],
                ["Al por mayor", "#"],
                ["Preguntas frecuentes", "#"],
              ].map(([t, h]) => (
                <li key={t}>
                  <a href={h} className="text-muted-foreground transition-colors hover:text-[var(--gold)]">{t}</a>
                </li>
              ))}
              <li>
                <Link to="/politica-privacidad" className="text-muted-foreground transition-colors hover:text-[var(--gold)]">
                  política de privacidad — enpolarízate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Contacto</p>
            <div className="mt-4">
              <CtaButton className="!px-5 !py-3 !text-xs">WhatsApp</CtaButton>
              <p className="mt-3 text-xs text-muted-foreground">Instalación a nivel nacional · Colombia</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[oklch(1_0_0/0.06)] pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ENPOLARÍZATE. Todos los derechos reservados.</p>
          <p>Protege tu camino y Enpolarízate.</p>
        </div>
      </div>
    </footer>
  );
}
