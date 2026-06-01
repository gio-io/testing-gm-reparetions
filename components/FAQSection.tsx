"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { FAQ_ITEMS } from "@/lib/constants";

/**
 * FAQ Section — accordion UI only.
 * The FAQPage JSON-LD structured data is server-rendered via FAQSchemaScript
 * in app/layout.tsx <head>, sharing the same FAQ_ITEMS source of truth.
 * Per DueroElectro [3] and Oficial SAT [8] references.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 sm:py-24 section-light"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="faq-title"
            className="font-heading font-900 text-gm-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Preguntas frecuentes
          </h2>
          <p className="text-gm-black/60 text-lg max-w-2xl mx-auto">
            Respuestas a las dudas más habituales sobre nuestro servicio de reparación de electrodomésticos en Valladolid.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className="bg-white rounded-xl border border-gm-black/10 overflow-hidden"
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-gm-black/3 transition-colors"
                >
                  <span className="font-heading font-600 text-gm-black text-sm leading-snug pr-4">
                    {item.pregunta}
                  </span>
                  <span
                    className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-gm-orange/10 text-gm-orange"
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                  className={`px-5 transition-all duration-300 ${isOpen ? "pb-5" : "pb-0"}`}
                >
                  <p className="text-gm-black/70 text-sm leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
