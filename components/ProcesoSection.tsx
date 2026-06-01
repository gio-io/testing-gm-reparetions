"use client";

import { useRef } from "react";
import { Phone, House, CurrencyEur, Wrench } from "@phosphor-icons/react";
import { PASOS_PROCESO } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEP_ICONS = [Phone, House, CurrencyEur, Wrench];

/**
 * 4-step process section — standard Spanish SAT funnel
 * Per SAT Carreras [6] and Oficial SAT [8] references
 * useGSAP() handles React 19 StrictMode double-mount correctly.
 */
export default function ProcesoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Set initial hidden state before trigger is created
        gsap.set(".proceso-step", { opacity: 0, y: 36 });

        gsap.to(".proceso-step", {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proceso-grid",
            start: "top 80%",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".proceso-step", { opacity: 1, y: 0, clearProps: "all" });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="proceso"
      aria-labelledby="proceso-title"
      className="py-20 sm:py-24 bg-gm-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="proceso-title"
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Como trabajamos
          </h2>
          <p className="text-gm-muted text-lg max-w-xl mx-auto">
            Un proceso sencillo y transparente. Sin complicaciones ni sorpresas.
          </p>
        </div>

        {/* Steps — 4 col on desktop, stacked on mobile with connecting line */}
        <div className="proceso-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, #29ABE2 0%, #1BA7DE 33%, #F7931E 66%, #E8431F 100%)",
            }}
          />

          {PASOS_PROCESO.map((paso, i) => {
            const StepIcon = STEP_ICONS[i];
            const isFrio = paso.temperatura === "frio";
            const bgClass = isFrio ? "bg-gm-cyan" : "bg-gm-orange";
            const borderClass = isFrio ? "border-gm-cyan/30" : "border-gm-orange/30";
            const textClass = isFrio ? "text-gm-cyan" : "text-gm-orange";

            return (
              <article
                key={paso.numero}
                className={`proceso-step relative bg-gm-card rounded-2xl border ${borderClass} p-6 flex flex-col items-start`}
              >
                {/* Step number bubble */}
                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 ${bgClass} text-gm-black font-900 font-heading text-xl rounded-full mb-5 shrink-0`}
                  aria-label={`Paso ${paso.numero}`}
                >
                  {paso.numero}
                </div>

                <div className="mb-3">
                  <StepIcon
                    size={20}
                    weight="fill"
                    className={`${textClass} mb-2`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading font-700 text-white text-base mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-gm-muted text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
