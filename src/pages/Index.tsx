import { Helmet } from "react-helmet-async";

import Hero from "@/components/site/Hero";
import TintOptions from "@/components/site/TintOptions";
import NanoTech from "@/components/site/NanoTech";
import Benefits from "@/components/site/Benefits";
import Testimonials from "@/components/site/Testimonials";
import Coverage from "@/components/site/Coverage";
import WhatYouGet from "@/components/site/WhatYouGet";
import Warranty from "@/components/site/Warranty";
import Gallery from "@/components/site/Gallery";
import Wholesale from "@/components/site/Wholesale";
import Stats from "@/components/site/Stats";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";

import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>ENPOLARÍZATE | Polarizado Nanocerámico para Carros en Bogotá</title>
        <meta name="description" content="Polarizado nanocerámico americano para carros en Bogotá con protección UV, privacidad y seguridad. Instalación a domicilio gratis y 8 años de garantía." />
        <link rel="canonical" href="https://enpolarizate.com/" />
        <meta property="og:title" content="ENPOLARÍZATE | Polarizado Nanocerámico para Carros en Bogotá" />
        <meta property="og:description" content="Polarizado nanocerámico americano con protección UV, privacidad y seguridad. Instalación a domicilio gratis en Bogotá." />
        <meta property="og:url" content="https://enpolarizate.com/" />
      </Helmet>
      <Hero />
      
      
      <TintOptions />
      <NanoTech />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Warranty />
      <Wholesale />
      <Coverage />
      <WhatYouGet />
      <Stats />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
