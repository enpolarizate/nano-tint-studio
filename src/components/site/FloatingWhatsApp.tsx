import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.link/nppfvy";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(142_70%_45%)] to-[hsl(142_70%_35%)] text-white shadow-[0_10px_40px_-10px_hsl(142_70%_45%/0.7)] animate-pulse-glow md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.2} />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
