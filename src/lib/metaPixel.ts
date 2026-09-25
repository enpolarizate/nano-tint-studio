/**
 * Meta Pixel (Facebook) con puerta de consentimiento.
 * El píxel SOLO se activa si el visitante aceptó en el banner de cookies.
 * Si rechaza o revoca, se bloquea el envío de eventos (fbq consent revoke).
 */

export const META_PIXEL_ID = "1611555850751773";
/** Segundo píxel: SOLO se activa en la página de películas arquitectónicas. */
export const ARCH_PIXEL_ID = "1460815986109014";
export const ARCH_PIXEL_PATH = "/peliculas-arquitectonicas";
export const CONSENT_KEY = "cookieConsent";
export const CONSENT_CHANGED_EVENT = "cookie-consent-changed";
export const OPEN_SETTINGS_EVENT = "open-cookie-settings";

export type ConsentValue = "accepted" | "rejected" | null;

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; callMethod?: (...args: unknown[]) => void };
    _fbq?: unknown;
  }
}

export function readConsent(): ConsentValue {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    if (v === "true" || v === "accepted") return "accepted"; // "true" = valor legado del banner anterior
    if (v === "rejected") return "rejected";
    return null;
  } catch {
    return null;
  }
}

let scriptLoaded = false;

function loadPixelScript() {
  if (scriptLoaded) return;
  scriptLoaded = true;

  if (!window.fbq) {
    const n: NonNullable<Window["fbq"]> = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        (n.queue as unknown[]).push(args);
      }
    } as NonNullable<Window["fbq"]>;
    if (!window.fbq) window.fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [] as unknown[];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
}

const initedPixels = new Set<string>();

function isArchPage() {
  return window.location.pathname.startsWith(ARCH_PIXEL_PATH);
}

function activatePixel() {
  loadPixelScript();
  const fbq = window.fbq;
  if (!fbq) return;
  fbq("consent", "grant");

  if (!initedPixels.has(META_PIXEL_ID)) {
    initedPixels.add(META_PIXEL_ID);
    fbq("init", META_PIXEL_ID);
    fbq("trackSingle", META_PIXEL_ID, "PageView");
  }

  // Píxel exclusivo de la página de películas arquitectónicas
  if (isArchPage() && !initedPixels.has(ARCH_PIXEL_ID)) {
    initedPixels.add(ARCH_PIXEL_ID);
    fbq("init", ARCH_PIXEL_ID);
    fbq("trackSingle", ARCH_PIXEL_ID, "PageView");
  }
}

function deactivatePixel() {
  if (scriptLoaded && window.fbq) {
    window.fbq("consent", "revoke");
  }
}

/** Aplica la decisión actual de consentimiento al píxel. */
export function applyConsentToPixel() {
  if (readConsent() === "accepted") {
    activatePixel();
  } else {
    deactivatePixel();
  }
}

/** Inicializa el píxel respetando el consentimiento guardado. */
export function initMetaPixel() {
  applyConsentToPixel();

  // Reacciona a cambios de elección en el banner (aceptar / rechazar / revocar)
  window.addEventListener(CONSENT_CHANGED_EVENT, applyConsentToPixel);

  // Conversión: clic en cualquier enlace de WhatsApp → evento "Contact"
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (/wa\.link|wa\.me|api\.whatsapp\.com|whatsapp/i.test(href)) {
        if (readConsent() === "accepted" && window.fbq) {
          for (const id of initedPixels) {
            window.fbq("trackSingle", id, "Contact");
          }
        }
      }
    },
    true
  );
}
