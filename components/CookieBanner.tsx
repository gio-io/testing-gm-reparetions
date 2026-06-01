"use client";

/**
 * GDPR / LSSI-CE Cookie Banner
 *
 * - No non-essential cookies/scripts fire before consent
 * - Three categories: necesarias (always on) / analíticas / marketing
 * - Granular opt-in, NOT pre-ticked
 * - "Rechazar" button equally prominent as "Aceptar todo"
 * - Honors Do-Not-Track and Global Privacy Control
 * - Consent stored in localStorage (necesario only = functional cookie, no consent needed)
 * - AEPD compliant: reject button on first layer
 */

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = {
  analiticas: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentState & { timestamp: number; version: string };

const CONSENT_KEY = "gm-cookie-consent";
const CONSENT_VERSION = "1.0";

function getDoNotTrack(): boolean {
  if (typeof navigator === "undefined") return false;
  const dnt =
    (navigator as Navigator & { doNotTrack?: string }).doNotTrack ||
    (window as Window & { doNotTrack?: string }).doNotTrack;
  return dnt === "1" || dnt === "yes";
}

function getGPC(): boolean {
  if (typeof navigator === "undefined") return false;
  return !!(navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analiticas: false,
    marketing: false,
  });

  useEffect(() => {
    // If DNT or GPC is set, auto-reject non-essential
    if (getDoNotTrack() || getGPC()) {
      storeConsent({ analiticas: false, marketing: false });
      return;
    }

    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    try {
      const parsed: StoredConsent = JSON.parse(stored);
      if (parsed.version !== CONSENT_VERSION) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function storeConsent(c: ConsentState) {
    const data: StoredConsent = {
      ...c,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    setVisible(false);

    // Fire approved scripts here
    if (c.analiticas) {
      // TODO: initialise analytics (e.g. GTM) here after consent
    }
    if (c.marketing) {
      // TODO: initialise marketing pixels here after consent
    }
  }

  function acceptAll() {
    setConsent({ analiticas: true, marketing: true });
    storeConsent({ analiticas: true, marketing: true });
  }

  function rejectAll() {
    storeConsent({ analiticas: false, marketing: false });
  }

  function savePreferences() {
    storeConsent(consent);
  }

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-0 left-0 right-0 bg-gm-card border-t border-gm-border shadow-2xl p-4 sm:p-6"
      style={{ zIndex: 9000 }}
    >
      <div className="max-w-5xl mx-auto">
        {!showDetails ? (
          /* First layer — simple accept/reject */
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p id="cookie-title" className="font-heading font-700 text-white text-sm mb-1">
                Usamos cookies
              </p>
              <p id="cookie-desc" className="text-gm-muted text-xs leading-relaxed">
                Usamos cookies necesarias para el funcionamiento del sitio. Con tu permiso también usamos cookies analíticas y de marketing para mejorar nuestra web.{" "}
                <Link href="/cookies" className="text-gm-cyan underline underline-offset-2 hover:text-white transition-colors">
                  Política de Cookies
                </Link>{" "}
                y{" "}
                <Link href="/privacidad" className="text-gm-cyan underline underline-offset-2 hover:text-white transition-colors">
                  Privacidad
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-xs font-600 text-gm-muted border border-gm-border rounded hover:border-gm-muted transition-colors cursor-pointer whitespace-nowrap"
                aria-label="Gestionar preferencias de cookies"
              >
                Gestionar
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-xs font-600 text-white bg-gm-border rounded hover:bg-gm-border/80 transition-colors cursor-pointer whitespace-nowrap"
                aria-label="Rechazar cookies no esenciales"
              >
                Rechazar todo
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs font-700 text-gm-black bg-gm-orange rounded hover:bg-gm-red transition-colors cursor-pointer whitespace-nowrap"
                aria-label="Aceptar todas las cookies"
              >
                Aceptar todo
              </button>
            </div>
          </div>
        ) : (
          /* Second layer — granular preferences */
          <div>
            <h2 id="cookie-title" className="font-heading font-700 text-white text-base mb-3">
              Gestionar preferencias de cookies
            </h2>
            <div className="space-y-3 mb-4">
              {/* Necesarias — always on */}
              <div className="flex items-start gap-3 p-3 bg-gm-dark rounded border border-gm-border">
                <div className="flex-1">
                  <p className="text-white text-sm font-600">Cookies necesarias</p>
                  <p className="text-gm-muted text-xs mt-0.5">
                    Imprescindibles para el funcionamiento del sitio web. No requieren consentimiento.
                  </p>
                </div>
                <span className="text-gm-cyan text-xs font-600 shrink-0 mt-0.5">Siempre activas</span>
              </div>

              {/* Analíticas */}
              <label className="flex items-start gap-3 p-3 bg-gm-dark rounded border border-gm-border cursor-pointer hover:border-gm-muted transition-colors">
                <input
                  type="checkbox"
                  checked={consent.analiticas}
                  onChange={(e) =>
                    setConsent((prev) => ({ ...prev, analiticas: e.target.checked }))
                  }
                  className="mt-0.5 w-4 h-4 accent-gm-cyan cursor-pointer"
                  aria-label="Cookies analíticas"
                />
                <div>
                  <p className="text-white text-sm font-600">Cookies analíticas</p>
                  <p className="text-gm-muted text-xs mt-0.5">
                    Nos ayudan a entender cómo se usa el sitio (visitas, páginas vistas). No contienen datos personales identificables.
                  </p>
                </div>
              </label>

              {/* Marketing */}
              <label className="flex items-start gap-3 p-3 bg-gm-dark rounded border border-gm-border cursor-pointer hover:border-gm-muted transition-colors">
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  className="mt-0.5 w-4 h-4 accent-gm-orange cursor-pointer"
                  aria-label="Cookies de marketing"
                />
                <div>
                  <p className="text-white text-sm font-600">Cookies de marketing</p>
                  <p className="text-gm-muted text-xs mt-0.5">
                    Permiten mostrar publicidad relevante en otras plataformas. Solo se activan con tu consentimiento explícito.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-xs text-gm-muted border border-gm-border rounded hover:border-gm-muted transition-colors cursor-pointer"
              >
                Volver
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-xs font-600 text-white bg-gm-border rounded hover:bg-gm-border/80 transition-colors cursor-pointer"
              >
                Rechazar todo
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-xs font-700 text-gm-black bg-gm-cyan rounded hover:bg-gm-cyan-dark transition-colors cursor-pointer"
              >
                Guardar preferencias
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs font-700 text-gm-black bg-gm-orange rounded hover:bg-gm-red transition-colors cursor-pointer"
              >
                Aceptar todo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
