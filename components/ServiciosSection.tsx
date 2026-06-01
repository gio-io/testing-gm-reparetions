"use client";

import { useRef } from "react";
import {
  Snowflake,
  Fire,
  Drop,
  Lightning,
  Wind,
  Flame,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { SITE, SERVICIOS } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * GSAP ScrollTrigger.batch() for scroll-reveal of service cards.
 * Cold cards: cyan border. Hot cards: orange border. Neutral: gray.
 * Each card includes problem-specific micro-copy per BIG Reparaciones [4] reference.
 * useGSAP() handles React 19 StrictMode double-mount correctly.
 */

const ICON_MAP: Record<string, React.ElementType> = {
  WashingMachine: Drop,
  Thermometer: Snowflake,
  Fire: Fire,
  Drop: Drop,
  Lightning: Lightning,
  Wind: Wind,
  Flame: Flame,
  Snowflake: Snowflake,
};

function getCardStyle(temperatura: string) {
  if (temperatura === "frio") {
    return {
      border: "border-gm-cyan/40",
      iconBg: "bg-gm-cyan/10",
      iconColor: "text-gm-cyan",
      badge: "bg-gm-cyan/10 text-gm-cyan",
      badgeLabel: "Frio",
      ctaBorder: "border-gm-cyan text-gm-cyan hover:bg-gm-cyan hover:text-gm-black",
    };
  }
  if (temperatura === "calor") {
    return {
      border: "border-gm-orange/40",
      iconBg: "bg-gm-orange/10",
      iconColor: "text-gm-orange",
      badge: "bg-gm-orange/10 text-gm-orange",
      badgeLabel: "Calor",
      ctaBorder: "border-gm-orange text-gm-orange hover:bg-gm-orange hover:text-gm-black",
    };
  }
  return {
    border: "border-gm-border",
    iconBg: "bg-gm-border/30",
    iconColor: "text-gm-muted",
    badge: "bg-gm-border/30 text-gm-muted",
    badgeLabel: "Universal",
    ctaBorder: "border-gm-border text-gm-muted hover:border-white hover:text-white",
  };
}

export default function ServiciosSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Set initial state BEFORE creating ScrollTrigger so elements are
        // hidden before the trigger starts watching — avoids a flash on
        // the second StrictMode mount.
        gsap.set(".servicio-card", { opacity: 0, y: 32 });

        // Heading reveal
        gsap.set(".servicios-heading", { opacity: 0, y: 24 });
        gsap.to(".servicios-heading", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".servicios-heading",
            start: "top 85%",
            once: true,
          },
        });

        // Cards batch reveal
        ScrollTrigger.batch(".servicio-card", {
          start: "top 88%",
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power3.out",
            });
          },
          once: true,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".servicios-heading", ".servicio-card"], {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      aria-labelledby="servicios-title"
      className="py-20 sm:py-24 bg-gm-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="servicios-heading text-center mb-14">
          <h2
            id="servicios-title"
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Reparamos todos tus{" "}
            <span className="text-gm-orange">electrodomésticos</span>
          </h2>
          <p className="text-gm-muted text-lg max-w-2xl mx-auto">
            Servicio técnico multimarca a domicilio en Valladolid y provincia. Presupuesto gratuito y sin compromiso antes de cualquier reparación.
          </p>
        </div>

        {/* Cards grid — 2 cols on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICIOS.map((servicio) => {
            const style = getCardStyle(servicio.temperatura);
            const IconComponent = ICON_MAP[servicio.icon] || Drop;

            return (
              <article
                key={servicio.id}
                id={servicio.id}
                className={`servicio-card bg-gm-card rounded-2xl border ${style.border} p-5 flex flex-col hover:border-opacity-80 transition-all duration-300 hover:-translate-y-1 cursor-default group`}
                aria-label={`Reparación de ${servicio.nombre} en Valladolid`}
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${style.iconBg} rounded-xl p-3`}>
                    <IconComponent
                      size={28}
                      weight="fill"
                      className={style.iconColor}
                      aria-hidden="true"
                    />
                  </div>
                  <span className={`text-xs font-600 px-2 py-0.5 rounded-full ${style.badge}`}>
                    {style.badgeLabel}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-heading font-700 text-white text-base mb-2">
                  {servicio.nombre}
                </h3>

                {/* Description */}
                <p className="text-gm-muted text-sm leading-relaxed mb-4 flex-1">
                  {servicio.descripcion}
                </p>

                {/* Problem tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {servicio.problemas.slice(0, 3).map((prob) => (
                    <span
                      key={prob}
                      className="text-xs text-gm-muted bg-gm-dark rounded px-2 py-0.5 border border-gm-border"
                    >
                      {prob}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${SITE.whatsappDial}?text=${encodeURIComponent(`Hola, necesito reparar mi ${servicio.nombre}. ¿Me pueden ayudar?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-2.5 border rounded-lg text-sm font-600 transition-all duration-200 cursor-pointer ${style.ctaBorder}`}
                  aria-label={`Pedir presupuesto para reparación de ${servicio.nombre}`}
                >
                  <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
                  Pedir presupuesto
                </a>
              </article>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <p className="text-gm-muted mb-5">
            ¿No ves tu electrodoméstico? Llámanos y te ayudamos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`tel:${SITE.phoneDial}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gm-orange text-gm-black font-700 text-sm rounded-xl hover:bg-gm-red transition-colors cursor-pointer"
              aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
            >
              <Phone size={18} weight="fill" aria-hidden="true" />
              {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gm-cyan text-gm-black font-700 text-sm rounded-xl hover:bg-gm-cyan-dark transition-colors cursor-pointer"
            >
              <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
