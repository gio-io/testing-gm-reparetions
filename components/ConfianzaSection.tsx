"use client";

import { useRef } from "react";
import { ShieldCheck, Wrench, Clock, MapPin, CurrencyEur, Star } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TRUST_STATS = [
  { value: "+500", label: "Reparaciones realizadas", color: "text-gm-orange" },
  { value: "12", label: "Meses de garantía", color: "text-gm-cyan" },
  { value: "+15", label: "Marcas reparadas", color: "text-gm-orange" },
  { value: "100%", label: "Presupuesto sin compromiso", color: "text-gm-cyan" },
];

const REASONS = [
  {
    Icon: ShieldCheck,
    titulo: "Garantía por escrito",
    texto:
      "Cada reparación incluye garantía documental sobre piezas y mano de obra. Si falla, volvemos sin coste adicional.",
    color: "cyan" as const,
  },
  {
    Icon: Wrench,
    titulo: "Técnicos cualificados",
    texto:
      "Nuestro equipo cuenta con formación técnica específica en electrodomésticos de las principales marcas del mercado.",
    color: "orange" as const,
  },
  {
    Icon: Clock,
    titulo: "Atención el mismo día",
    texto:
      "Cuando la agenda lo permite, acudimos a tu domicilio el mismo día de tu llamada. Sabemos que sin lavadora o frigorífico cada hora cuenta.",
    color: "cyan" as const,
  },
  {
    Icon: MapPin,
    titulo: "Desplazamiento gratuito",
    texto:
      "Sin costes ocultos de desplazamiento dentro de Valladolid capital. En municipios de la provincia, tarifa mínima según distancia.",
    color: "orange" as const,
  },
  {
    Icon: CurrencyEur,
    titulo: "Precios transparentes",
    texto:
      "Recibirás el presupuesto detallado antes de empezar. Sin sorpresas en la factura final. Tú decides si continuar.",
    color: "cyan" as const,
  },
  {
    Icon: Star,
    titulo: "Recambios originales",
    texto:
      "Utilizamos piezas de recambio originales o de primera calidad equivalente para garantizar la durabilidad de la reparación.",
    color: "orange" as const,
  },
];

export default function ConfianzaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Set initial hidden state before triggers are created
        gsap.set(".confianza-stat", { opacity: 0, y: 24 });
        gsap.set(".confianza-reason", { opacity: 0, y: 32 });

        // Stats counter animation
        gsap.to(".confianza-stat", {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".confianza-stats",
            start: "top 80%",
            once: true,
          },
        });

        // Reason cards
        gsap.to(".confianza-reason", {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".confianza-reasons",
            start: "top 80%",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".confianza-stat", ".confianza-reason"], {
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
      id="confianza"
      aria-labelledby="confianza-title"
      className="py-20 sm:py-24 bg-gm-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="confianza-title"
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Por qué elegir{" "}
            <span className="text-gm-cyan">G&amp;M Reparaciones</span>
          </h2>
          <p className="text-gm-muted text-lg max-w-2xl mx-auto">
            Rápido, fiable y honesto. Los mismos valores que esperarías de un buen profesional de confianza en Valladolid.
          </p>
        </div>

        {/* Stats strip */}
        <div className="confianza-stats grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {TRUST_STATS.map((stat) => (
            <div
              key={stat.label}
              className="confianza-stat text-center p-6 bg-gm-card rounded-2xl border border-gm-border"
            >
              <p className={`font-heading font-900 text-4xl mb-1 ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-gm-muted text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid — 2 cols tablet, 3 cols desktop */}
        <div className="confianza-reasons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ Icon, titulo, texto, color }) => (
            <article
              key={titulo}
              className="confianza-reason p-6 bg-gm-card rounded-2xl border border-gm-border hover:border-gm-border/80 transition-colors"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  color === "cyan"
                    ? "bg-gm-cyan/10"
                    : "bg-gm-orange/10"
                }`}
              >
                <Icon
                  size={24}
                  weight="fill"
                  className={color === "cyan" ? "text-gm-cyan" : "text-gm-orange"}
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-heading font-700 text-white text-base mb-2">
                {titulo}
              </h3>
              <p className="text-gm-muted text-sm leading-relaxed">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
