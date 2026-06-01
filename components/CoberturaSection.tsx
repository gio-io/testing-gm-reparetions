"use client";

import { MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { SITE, MUNICIPIOS } from "@/lib/constants";

/**
 * Zona de cobertura section
 * Lists Valladolid + provincia municipalities for local SEO
 * Each municipality is a named anchor for SEO crawlability
 */
export default function CoberturaSection() {
  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-title"
      className="py-20 sm:py-24 section-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={20} weight="fill" className="text-gm-orange" aria-hidden="true" />
              <span className="text-gm-orange text-xs font-600 tracking-widest uppercase">
                Zona de servicio
              </span>
            </div>

            <h2
              id="cobertura-title"
              className="font-heading font-900 text-gm-black mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Valladolid y toda la provincia
            </h2>

            <p className="text-gm-black/70 text-lg leading-relaxed mb-8">
              Nos desplazamos a cualquier punto de Valladolid capital y a los principales municipios de la provincia. Si tienes dudas sobre si llegamos a tu localidad, llámanos o escríbenos por WhatsApp.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Desplazamiento gratuito en Valladolid capital",
                "Cobertura en toda la provincia de Valladolid",
                "Horario Lun-Vie de 09:00 a 19:00",
                "Urgencias valoradas caso a caso",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gm-black/80 text-sm">
                  <span className="text-gm-orange font-700 shrink-0 mt-0.5" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phoneDial}`}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gm-orange text-gm-black font-700 text-sm rounded-xl hover:bg-gm-red transition-colors cursor-pointer"
                aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
              >
                <Phone size={17} weight="fill" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gm-cyan text-gm-black font-700 text-sm rounded-xl hover:bg-gm-cyan-dark transition-colors cursor-pointer"
              >
                <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — municipality grid */}
          <div>
            <h3 className="font-heading font-700 text-gm-black text-lg mb-4">
              Municipios donde prestamos servicio
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MUNICIPIOS.map((municipio) => (
                <div
                  key={municipio}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gm-black/10 hover:border-gm-orange/40 transition-colors"
                >
                  <MapPin
                    size={14}
                    weight="fill"
                    className="text-gm-orange shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gm-black text-sm font-500">{municipio}</span>
                </div>
              ))}
            </div>
            <p className="text-gm-black/50 text-xs mt-4">
              ¿Tu municipio no aparece en la lista? Consúltanos, es posible que también podamos atenderte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
