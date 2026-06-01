"use client";

import { Star, GoogleLogo } from "@phosphor-icons/react";
import { SITE, TESTIMONIOS } from "@/lib/constants";

/**
 * Testimonios section — named testimonials citing specific neighborhoods.
 * The Review JSON-LD structured data is server-rendered via ReviewSchemaScript
 * in app/layout.tsx <head>, sharing the same TESTIMONIOS source of truth.
 * Per SAT Carreras [6] and DueroElectro [3] references.
 * Stars rendered with accessible aria-label.
 */
export default function TestimoniosSection() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="py-20 sm:py-24 bg-gm-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="testimonios-title"
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gm-muted text-lg max-w-2xl mx-auto">
            Clientes de Valladolid y provincia que confiaron en G&amp;M Reparaciones.
          </p>
        </div>

        {/* Testimonial cards — 2 col on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {TESTIMONIOS.map((t) => (
            <article
              key={t.nombre}
              className="bg-gm-card rounded-2xl border border-gm-border p-5 flex flex-col"
              aria-label={`Opinión de ${t.nombre} de ${t.localidad}`}
            >
              {/* Stars */}
              <div
                className="flex gap-0.5 mb-3"
                aria-label={`Valoración: ${t.valoracion} de 5 estrellas`}
              >
                {Array.from({ length: t.valoracion }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    weight="fill"
                    className="text-gm-orange"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gm-text text-sm leading-relaxed mb-4 flex-1">
                <p>"{t.texto}"</p>
              </blockquote>

              {/* Attribution */}
              <footer className="border-t border-gm-border pt-3">
                <p className="font-600 text-white text-sm">{t.nombre}</p>
                <p className="text-gm-muted text-xs">
                  {t.localidad} - {t.servicio}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* Google Reviews CTA */}
        {/* NOTE: The link is rendered disabled until the client provides a real
            Google Business Profile URL. Set SITE.googleReviewsUrl in lib/constants.ts
            to re-enable it (one-line swap). */}
        <div className="text-center">
          <p className="text-gm-muted text-sm mb-4">
            Todos nuestros trabajos son reales. Puedes verificar nuestras opiniones en Google.
          </p>
          <span
            role="button"
            aria-disabled="true"
            tabIndex={-1}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gm-border/40 rounded-xl text-gm-muted/50 text-sm font-600 cursor-not-allowed select-none"
            title="Enlace disponible próximamente"
          >
            <GoogleLogo size={18} weight="fill" aria-hidden="true" />
            Ver opiniones en Google
            <span className="text-xs text-gm-muted/40 ml-1">(próximamente)</span>
          </span>
        </div>
      </div>
    </section>
  );
}
