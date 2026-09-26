import { Helmet } from "react-helmet-async";
import { Shield, Lock, MessageCircle, Cookie, UserCheck, Award, FileText, HelpCircle } from "lucide-react";
import Footer from "@/components/site/Footer";

const sections = [
  {
    id: "privacidad",
    title: "POLÍTICA DE PRIVACIDAD — ENPOLARÍZATE",
    icon: Shield,
    content: [
      {
        subtitle: "1. INTRODUCCIÓN",
        text: "Enpolarízate respeta y protege la privacidad de sus clientes, usuarios y visitantes. Esta Política de Privacidad tiene como finalidad informar cómo recopilamos, usamos, almacenamos y protegemos la información personal suministrada a través de nuestro sitio web, formularios, campañas publicitarias y canales de atención como WhatsApp.\n\nAl utilizar nuestros servicios, solicitar una cotización o interactuar con nuestra marca, el usuario acepta los términos descritos en esta política."
      },
      {
        subtitle: "2. FINALIDAD DEL TRATAMIENTO DE DATOS",
        text: "La información recopilada será utilizada para:\n• Realizar cotizaciones\n• Agendar instalaciones\n• Brindar asesoría comercial y técnica\n• Gestionar garantías\n• Realizar seguimiento al servicio\n• Enviar información comercial o promocional\n• Mejorar la experiencia del usuario\n• Dar cumplimiento a obligaciones legales"
      },
      {
        subtitle: "3. PROTECCIÓN DE LA INFORMACIÓN",
        text: "Enpolarízate adopta medidas razonables de seguridad para proteger la información personal contra pérdida, uso indebido, acceso no autorizado o alteración.\n\nLa información suministrada no será vendida, cedida ni compartida con terceros no autorizados."
      },
      {
        subtitle: "4. USO DE WHATSAPP Y CANALES DIGITALES",
        text: "Al contactarnos mediante WhatsApp, formularios o redes sociales, el usuario autoriza a Enpolarízate a responder solicitudes, enviar cotizaciones, información comercial y realizar seguimiento relacionado con nuestros servicios."
      },
      {
        subtitle: "5. COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO",
        text: "Nuestro sitio web puede utilizar cookies y herramientas de análisis para:\n• Mejorar la navegación\n• Medir campañas publicitarias\n• Optimizar experiencia de usuario\n• Analizar comportamiento de navegación\n\nEl usuario puede desactivar cookies desde su navegador."
      },
      {
        subtitle: "6. DERECHOS DEL TITULAR",
        text: "De acuerdo con la legislación colombiana sobre protección de datos personales, el usuario podrá:\n• Conocer sus datos almacenados\n• Solicitar corrección o actualización\n• Solicitar eliminación de datos\n• Revocar autorización de tratamiento\n\nLas solicitudes podrán realizarse vía WhatsApp o correo electrónico oficial de la empresa."
      },
      {
        subtitle: "7. VIGENCIA",
        text: "Esta Política de Privacidad podrá ser modificada en cualquier momento para adaptarse a cambios legales, operativos o comerciales."
      }
    ]
  },
  {
    id: "garantias",
    title: "POLÍTICA DE GARANTÍAS — ENPOLARÍZATE",
    icon: Award,
    content: [
      {
        subtitle: "1. COBERTURA GENERAL",
        text: "Enpolarízate ofrece garantía sobre sus materiales e instalaciones profesionales realizadas con:\n• Nano Blindex Americano (Automotriz)\n• Nanocerámico Americano (Arquitectónico)"
      },
      {
        subtitle: "2. GARANTÍA CON INSTALACIÓN",
        text: "Los servicios instalados directamente por Enpolarízate cuentan con garantía de hasta 8 años dependiendo del tipo de material, espacio y aplicación.\n\nLa garantía cubre:\n• Craquelado\n• Soplado\n• Cristalización\n• Desprendimiento en esquinas\n• Decoloración prematura"
      },
      {
        subtitle: "3. GARANTÍA SOLO MATERIAL",
        text: "Cuando el cliente adquiere únicamente el material sin instalación por parte de Enpolarízate, la garantía será de 4 años únicamente sobre defectos del material.\n\nNo cubre errores de instalación realizados por terceros."
      },
      {
        subtitle: "4. CONDICIONES PARA APLICAR LA GARANTÍA",
        text: "La garantía será válida siempre que:\n• El producto haya sido utilizado correctamente\n• No existan manipulaciones posteriores no autorizadas\n• No existan daños ocasionados por terceros\n• Se presente evidencia del servicio o compra"
      },
      {
        subtitle: "5. EXCLUSIONES DE GARANTÍA",
        text: "La garantía NO cubre:\n• Rayones o daños causados por objetos externos\n• Mal uso o limpieza inadecuada\n• Manipulación indebida\n• Accidentes\n• Daños causados por terceros\n• Vidrios defectuosos o deteriorados previamente\n• Instalaciones realizadas por terceros"
      },
      {
        subtitle: "6. TIEMPOS DE REVISIÓN",
        text: "Toda solicitud de garantía será evaluada por el equipo técnico de Enpolarízate para validar procedencia y cobertura."
      },
      {
        subtitle: "7. COBERTURA GEOGRÁFICA",
        text: "La garantía aplica para servicios y materiales comercializados dentro del territorio colombiano."
      }
    ]
  },
  {
    id: "terminos",
    title: "TÉRMINOS Y CONDICIONES — ENPOLARÍZATE",
    icon: FileText,
    content: [
      {
        subtitle: "1. ACEPTACIÓN",
        text: "Al acceder a este sitio web, solicitar una cotización o contratar nuestros servicios, el usuario acepta los presentes Términos y Condiciones."
      },
      {
        subtitle: "2. SERVICIOS",
        text: "Enpolarízate presta servicios relacionados con:\n• Polarizado automotriz\n• Película arquitectónica\n• Control solar\n• Seguridad y privacidad\n• Venta e instalación de películas profesionales\n• Distribución de material a nivel nacional"
      },
      {
        subtitle: "3. COTIZACIONES",
        text: "Las cotizaciones realizadas por WhatsApp, redes sociales o formularios:\n• Están sujetas a validación técnica\n• Pueden variar según medidas o condiciones del proyecto\n• No constituyen obligación contractual hasta confirmación formal"
      },
      {
        subtitle: "4. INSTALACIONES",
        text: "Las instalaciones se realizan:\n• En puntos autorizados\n• A domicilio en Bogotá bajo agendamiento previo\n• A nivel nacional según disponibilidad logística"
      },
      {
        subtitle: "5. RESPONSABILIDAD DEL CLIENTE",
        text: "El cliente deberá:\n• Suministrar información veraz\n• Facilitar acceso al lugar de instalación\n• Validar medidas y condiciones del espacio\n• Seguir recomendaciones posteriores a la instalación"
      },
      {
        subtitle: "6. TONALIDADES Y ELECCIÓN DE MATERIAL",
        text: "Los porcentajes y tonalidades pueden variar según:\n• Tipo de vidrio\n• Luz exterior\n• Condiciones del espacio\n• Necesidad del cliente\n\nEnpolarízate brinda asesoría profesional, pero la decisión final corresponde al cliente."
      },
      {
        subtitle: "7. LIMITACIÓN DE RESPONSABILIDAD",
        text: "Enpolarízate no será responsable por:\n• Daños preexistentes en vidrios\n• Problemas estructurales del inmueble\n• Instalaciones manipuladas posteriormente\n• Daños ocasionados por terceros\n• Uso indebido del material"
      },
      {
        subtitle: "8. PROPIEDAD INTELECTUAL",
        text: "Todo el contenido del sitio web, imágenes, diseños, textos y elementos visuales pertenecen a Enpolarízate y no podrán ser utilizados sin autorización previa."
      },
      {
        subtitle: "9. DISPONIBILIDAD DE PRODUCTOS",
        text: "La disponibilidad de materiales, tonalidades o referencias puede variar según inventario y logística."
      },
      {
        subtitle: "10. MODIFICACIONES",
        text: "Enpolarízate podrá modificar estos términos en cualquier momento sin previo aviso."
      },
      {
        subtitle: "11. CONTACTO",
        text: "Para soporte, garantías, cotizaciones o atención comercial:\n👉 Atención vía WhatsApp y canales oficiales de Enpolarízate."
      }
    ]
  }
];

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Política de Privacidad — ENPOLARÍZATE</title>
        <meta name="description" content="Política de privacidad, garantías y términos y condiciones de ENPOLARÍZATE." />
        <link rel="canonical" href="https://enpolarizate.com/politica-privacidad" />
      </Helmet>
      <div className="border-b border-border/60 bg-black/40">
        <div className="container-pro py-6 px-6 flex items-center justify-between">
          <a href="/#/" className="text-sm font-semibold text-gold-light hover:text-gold transition-colors">
            ← Volver al inicio
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="container-pro section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
              <span className="text-gold">Políticas</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Información sobre privacidad, garantías y condiciones de uso de nuestros servicios.
            </p>

            <nav className="flex flex-wrap justify-center gap-3 mb-14">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-border bg-surface-2 text-muted-foreground hover:border-gold hover:text-gold-light transition-all"
                >
                  <s.icon className="w-4 h-4" />
                  {s.title.split(" — ")[0]}
                </a>
              ))}
            </nav>

            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-16 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold-light" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((block, bIdx) => (
                      <div
                        key={bIdx}
                        className="premium-card p-6 md:p-8"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gold-light mb-4">
                          {block.subtitle}
                        </h3>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {block.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {idx < sections.length - 1 && (
                    <div className="divider-gold mt-16" />
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
