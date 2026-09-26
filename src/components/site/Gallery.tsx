import { Reveal } from "./motion";

import corvette from "@/assets/gallery/car-corvette.jpg";
import maserati from "@/assets/gallery/car-maserati.jpg";
import jaguar from "@/assets/gallery/car-jaguar.jpg";
import jetour from "@/assets/gallery/car-jetour.jpg";
import byd from "@/assets/gallery/car-byd.jpg";

const images = [
  { src: corvette, label: "Chevrolet Corvette", tint: "Nano Blindex 5%" },
  { src: maserati, label: "Maserati Ghibli", tint: "Nano Blindex 20%" },
  { src: jaguar, label: "Jaguar F-Pace", tint: "Nano Blindex 20%" },
  { src: jetour, label: "Jetour SUV", tint: "Nano Blindex 15%" },
  { src: byd, label: "BYD Yuan Plus", tint: "Nano Blindex 20%" },
];

export default function Gallery() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Header */}
      <div className="container-pro pt-14 md:pt-20 pb-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Galería</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            TRABAJOS <span className="text-gold">REALES EN LA CALLE</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Mira algunos de nuestros polarizados Nano Blindex Americano instalados en carros de nuestros clientes.
          </p>
        </Reveal>
      </div>

      {/* Infinite auto-scroll carousel */}
      <div className="relative py-6 md:py-10 overflow-hidden">
        <div className="flex animate-scroll-right will-change-transform">
          {/* Group A */}
          <div className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
            {images.map((img, i) => (
              <GalleryCard key={`a-${i}`} img={img} />
            ))}
          </div>
          {/* Group B (identical loop) */}
          <div className="flex gap-6 md:gap-8 shrink-0">
            {images.map((img, i) => (
              <GalleryCard key={`b-${i}`} img={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ img }: { img: typeof images[0] }) {
  return (
    <div className="relative shrink-0 w-[65vw] md:w-[38vw] lg:w-[30vw] xl:w-[26vw] aspect-[16/10] rounded-2xl overflow-hidden border border-gold/30 bg-black shadow-[var(--shadow-elegant)]">
      <img
        src={img.src}
        alt={`Polarizado ${img.label}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-base md:text-xl font-bold text-foreground">{img.label}</span>
          <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold bg-gold/15 border border-gold/40 text-gold-light">
            {img.tint}
          </span>
        </div>
      </div>
    </div>
  );
}
