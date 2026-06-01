"use client";

import { useRef } from "react";
import Image from "next/image";
import { Phone, WhatsappLogo, CheckCircle } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * Hero section — split cold/hot panel design
 * Left side: cyan cold treatment
 * Right side: orange hot treatment
 * Strong H1 with pain-state hook per Oficial SAT [8] reference
 * Dual phone + WhatsApp CTA atomic unit
 * GSAP entrance animation via useGSAP() — handles React 19 StrictMode correctly.
 * Honors reduced-motion via gsap.matchMedia().
 * All hero content is visible by default (no CSS opacity:0); GSAP sets the
 * from-state via gsap.set() inside the animation scope so that if JS fails
 * or the animation is reverted, content stays fully visible.
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Set initial hidden state inside the animation scope so that
        // without JS (or when reverted by StrictMode cleanup) elements
        // revert to their natural CSS state — fully visible.
        gsap.set(".hero-eyebrow", { opacity: 0, y: 16 });
        gsap.set(".hero-headline", { opacity: 0, y: 24 });
        gsap.set(".hero-sub", { opacity: 0, y: 20 });
        gsap.set(".hero-cta", { opacity: 0, y: 16 });
        gsap.set(".hero-trust", { opacity: 0, y: 12 });
        gsap.set(".hero-image-wrap", { opacity: 0, scale: 0.96 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
          .to(".hero-headline", { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
          .to(".hero-sub", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .to(".hero-cta", { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.3")
          .to(".hero-trust", { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, "-=0.2")
          .to(".hero-image-wrap", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");
      });

      // prefers-reduced-motion: ensure everything is immediately visible
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-eyebrow",
            ".hero-headline",
            ".hero-sub",
            ".hero-cta",
            ".hero-trust",
            ".hero-image-wrap",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" }
        );
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="inicio"
      aria-label="Servicio técnico de reparación de electrodomésticos en Valladolid"
      className="relative min-h-[100dvh] flex items-center pt-[72px] overflow-hidden hero-split-bg"
    >
      {/* Background decoration — cold left glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(41,171,226,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Background decoration — hot right glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 60%, rgba(247,147,30,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gm-cyan" aria-hidden="true" />
              <span className="text-gm-cyan text-xs font-600 tracking-widest uppercase">
                Valladolid y Provincia
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-headline font-heading font-900 leading-tight text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Tu electrodoméstico averiado{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #29ABE2, #F7931E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                interrumpe tu día.
              </span>{" "}
              Nosotros lo solucionamos.
            </h1>

            {/* Sub */}
            <p className="hero-sub text-gm-text text-lg leading-relaxed mb-8 max-w-lg">
              Técnicos cualificados para lavadoras, frigoríficos, hornos, lavavajillas y más.
              Presupuesto sin compromiso, desplazamiento gratuito en Valladolid.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`tel:${SITE.phoneDial}`}
                className="hero-cta flex items-center justify-center gap-3 px-6 py-4 bg-gm-orange text-gm-black font-700 text-base rounded-xl hover:bg-gm-red transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
              >
                <Phone size={22} weight="fill" />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta flex items-center justify-center gap-3 px-6 py-4 bg-gm-cyan text-gm-black font-700 text-base rounded-xl hover:bg-gm-cyan-dark transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsappLogo size={22} weight="fill" />
                <span>Pedir presupuesto por WhatsApp</span>
              </a>
            </div>

            {/* Trust micro-items */}
            <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
              {[
                "Presupuesto sin compromiso",
                "Garantía por escrito",
                "Técnicos cualificados",
                "Lunes a viernes 09:00-19:00",
              ].map((item) => (
                <li key={item} className="hero-trust flex items-center gap-2 text-sm text-gm-muted">
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-gm-cyan shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — logo + image */}
          <div className="hero-image-wrap flex flex-col items-center justify-center gap-6">
            {/* Logo large */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(41,171,226,0.15) 0%, rgba(247,147,30,0.15) 50%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: "scale(1.3)",
                }}
              />
              <Image
                src="/assets/logo.jpg"
                alt="G&M Reparaciones — técnico de electrodomésticos Valladolid"
                width={280}
                height={280}
                className="relative z-10 rounded-full border-2 border-gm-border"
                priority
              />
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: "+500", label: "Reparaciones" },
                { value: "12m", label: "Garantía" },
                { value: "2h", label: "Respuesta media" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-gm-card rounded-xl border border-gm-border"
                >
                  <p className="font-heading font-900 text-gm-orange text-xl">{stat.value}</p>
                  <p className="text-gm-muted text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Hours display */}
            <div className="flex items-center gap-2 text-sm text-gm-muted bg-gm-card rounded-lg px-4 py-2 border border-gm-border">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 6px rgba(74,222,128,0.5)" }}
              />
              <span>
                <span className="text-white font-600">Lun-Vie</span>{" "}
                {SITE.horaApertura}-{SITE.horaCierre}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient divider at bottom */}
      <div className="gradient-divider absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
