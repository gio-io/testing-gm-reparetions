"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

/**
 * Floating persistent WhatsApp button — visible on all scroll positions.
 * Position: bottom-right on desktop, above mobile CTA bar.
 * Pulses gently on mobile to draw attention.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-40 flex items-center gap-2 bg-gm-cyan text-gm-black font-700 text-sm pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-gm-cyan-dark transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      aria-label="Contactar por WhatsApp con G&M Reparaciones"
    >
      <WhatsappLogo size={22} weight="fill" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
