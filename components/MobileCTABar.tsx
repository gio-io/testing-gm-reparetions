"use client";

import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

/**
 * Sticky mobile CTA bar — visible only on mobile, sticks to bottom of screen.
 * Two equal CTAs: Llamar / WhatsApp
 */
export default function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden"
      aria-label="Contacto rápido"
      style={{ zIndex: 9001 }}
    >
      <a
        href={`tel:${SITE.phoneDial}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gm-orange text-gm-black font-700 text-sm cursor-pointer active:bg-gm-red transition-colors"
        aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
      >
        <Phone size={20} weight="fill" />
        <span>Llamar ahora</span>
      </a>
      <a
        href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gm-cyan text-gm-black font-700 text-sm cursor-pointer active:bg-gm-cyan-dark transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappLogo size={20} weight="fill" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
