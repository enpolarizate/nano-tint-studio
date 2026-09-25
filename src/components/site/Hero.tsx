import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { WHATSAPP_URL } from "./FloatingWhatsApp";
import AttentionBar from "./AttentionBar";
import Navbar from "./Navbar";

import logo from "@/assets/logo.png";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex flex-col items-center pt-2 pb-12 overflow-hidden">
      <AttentionBar />
      <Navbar />
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_10%),hsl(0_0%_4%))]" />
      <motion.div
        aria-hidden
        className="ambient-glow bg-gold/40 -top-32 -left-32 h-[500px] w-[500px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="ambient-glow bg-[hsl(0_0%_60%/0.25)] top-1/3 -right-40 h-[420px] w-[420px]"
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-pro grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 relative">
        <div>
          <motion.img
            src={logo}
            alt="ENPOLARÍZATE"
            className="h-20 md:h-24 w-auto mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          />
          
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Polarizado Nano Blindex
          </motion.span>

          <motion.h1
            className="mt-5 font-display font-bold leading-[1.08] tracking-tight border-slate-50 text-slate-50 text-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-amber-500">Convierte los vidrios de tu carro</span> en una barrera de privacidad y protección. <span className="text-amber-500">Nano Blindex Americano</span> con protección UV y mayor seguridad en una sola película
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Pregunta por una asesoría gratuita con instalación en tu ubicación.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Cotizar mi Polarizado! <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#tecnologia" className="btn-outline-gold">Conoce la tecnología</a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.8 }}
          >
            <span>Instalación profesional</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Asesoría gratuita</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Instalación en tu ubicación</span>
          </motion.div>
        </div>

        {/* VSL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-[hsl(0_0%_60%/0.3)] blur-2xl opacity-70" />
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-gold-lg)]">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/cyPBKoHdJyU?rel=0"
                title="VSL ENPOLARÍZATE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur border border-gold/40 text-xs font-semibold text-gold-light">
              <Play className="h-3 w-3 fill-current" /> Video presentación
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
