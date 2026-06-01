"use client";

import { useState } from "react";
import { Phone, WhatsappLogo, Envelope, Clock, CheckCircle } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

/**
 * Contacto section with contact form
 * GDPR-compliant: explicit consent checkbox, NOT pre-checked
 * Per HomeServe [5] and LSSI-CE requirements
 */
export default function ContactoSection() {
  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    electrodomestico: "",
    mensaje: "",
    consentimiento: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formState.consentimiento) {
      setError("Debes aceptar la Política de Privacidad para enviar el formulario.");
      return;
    }
    setLoading(true);

    // TODO: Replace with Formspree endpoint or backend handler
    // Example: await fetch("https://formspree.io/f/XXXXXXX", { method: "POST", body: JSON.stringify(formState) })
    await new Promise((res) => setTimeout(res, 800)); // simulate network
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-20 sm:py-24 bg-gm-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <div>
            <h2
              id="contacto-title"
              className="font-heading font-900 text-white mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Contacta con nosotros
            </h2>
            <p className="text-gm-muted text-lg leading-relaxed mb-8">
              Estamos a tu disposición de lunes a viernes en horario de oficina. Llámanos o escríbenos por WhatsApp y te atenderemos lo antes posible.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${SITE.phoneDial}`}
                className="flex items-center gap-4 p-4 bg-gm-card rounded-xl border border-gm-border hover:border-gm-orange/40 transition-colors group cursor-pointer"
                aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gm-orange/10 rounded-xl shrink-0">
                  <Phone size={22} weight="fill" className="text-gm-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gm-muted text-xs mb-0.5">Teléfono</p>
                  <p className="text-white font-700 text-lg group-hover:text-gm-orange transition-colors">
                    {SITE.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gm-card rounded-xl border border-gm-border hover:border-gm-cyan/40 transition-colors group cursor-pointer"
                aria-label="Contactar por WhatsApp"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gm-cyan/10 rounded-xl shrink-0">
                  <WhatsappLogo size={22} weight="fill" className="text-gm-cyan" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gm-muted text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white font-700 text-lg group-hover:text-gm-cyan transition-colors">
                    {SITE.whatsapp}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 p-4 bg-gm-card rounded-xl border border-gm-border hover:border-gm-border/80 transition-colors group cursor-pointer"
                aria-label={`Enviar email a ${SITE.email}`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gm-border/30 rounded-xl shrink-0">
                  <Envelope size={22} weight="fill" className="text-gm-muted" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gm-muted text-xs mb-0.5">Email</p>
                  <p className="text-white font-600 group-hover:text-gm-muted transition-colors">
                    {SITE.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gm-card rounded-xl border border-gm-border">
                <div className="flex items-center justify-center w-12 h-12 bg-gm-border/30 rounded-xl shrink-0">
                  <Clock size={22} weight="fill" className="text-gm-muted" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gm-muted text-xs mb-0.5">Horario de atención</p>
                  <p className="text-white font-600">{SITE.diasSemana}</p>
                  <p className="text-gm-muted text-sm">
                    {SITE.horaApertura} - {SITE.horaCierre}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gm-card rounded-2xl border border-gm-cyan/30">
                <CheckCircle
                  size={56}
                  weight="fill"
                  className="text-gm-cyan mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-700 text-white text-xl mb-3">
                  Mensaje enviado
                </h3>
                <p className="text-gm-muted leading-relaxed">
                  Hemos recibido tu consulta. Te contactaremos lo antes posible en horario de lunes a viernes de {SITE.horaApertura} a {SITE.horaCierre}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-gm-card rounded-2xl border border-gm-border p-6 sm:p-8"
                aria-label="Formulario de contacto"
              >
                <h3 className="font-heading font-700 text-white text-lg mb-6">
                  Solicitar presupuesto
                </h3>

                <div className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-gm-text text-sm font-600 mb-1.5"
                    >
                      Nombre <span aria-hidden="true" className="text-gm-orange">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={formState.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-gm-dark border border-gm-border rounded-lg px-4 py-3 text-white text-sm placeholder-gm-muted focus:outline-none focus:border-gm-cyan transition-colors"
                      aria-required="true"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-gm-text text-sm font-600 mb-1.5"
                    >
                      Teléfono <span aria-hidden="true" className="text-gm-orange">*</span>
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formState.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full bg-gm-dark border border-gm-border rounded-lg px-4 py-3 text-white text-sm placeholder-gm-muted focus:outline-none focus:border-gm-cyan transition-colors"
                      aria-required="true"
                    />
                  </div>

                  {/* Electrodomestico */}
                  <div>
                    <label
                      htmlFor="electrodomestico"
                      className="block text-gm-text text-sm font-600 mb-1.5"
                    >
                      Electrodoméstico a reparar
                    </label>
                    <select
                      id="electrodomestico"
                      name="electrodomestico"
                      value={formState.electrodomestico}
                      onChange={handleChange}
                      className="w-full bg-gm-dark border border-gm-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gm-cyan transition-colors cursor-pointer"
                    >
                      <option value="">Selecciona un electrodoméstico</option>
                      <option value="lavadora">Lavadora</option>
                      <option value="frigorifico">Frigorífico / Congelador</option>
                      <option value="horno">Horno</option>
                      <option value="lavavajillas">Lavavajillas</option>
                      <option value="vitroceramica">Vitrocerámica / Inducción</option>
                      <option value="campana">Campana extractora</option>
                      <option value="calentador">Calentador / Termo</option>
                      <option value="aire">Aire acondicionado</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-gm-text text-sm font-600 mb-1.5"
                    >
                      Describe la avería
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      value={formState.mensaje}
                      onChange={handleChange}
                      placeholder="Ej: La lavadora no centrifuga y hace un ruido extraño..."
                      className="w-full bg-gm-dark border border-gm-border rounded-lg px-4 py-3 text-white text-sm placeholder-gm-muted focus:outline-none focus:border-gm-cyan transition-colors resize-none"
                    />
                  </div>

                  {/* Consent checkbox — NOT pre-checked, GDPR mandatory */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="consentimiento"
                        id="consentimiento"
                        checked={formState.consentimiento}
                        onChange={handleChange}
                        required
                        className="mt-0.5 w-4 h-4 accent-gm-cyan cursor-pointer shrink-0"
                        aria-required="true"
                        aria-describedby="consent-desc"
                      />
                      <span
                        id="consent-desc"
                        className="text-gm-muted text-xs leading-relaxed group-hover:text-gm-text transition-colors"
                      >
                        He leído y acepto la{" "}
                        <a
                          href="/privacidad"
                          className="text-gm-cyan underline underline-offset-2 hover:text-white"
                          target="_blank"
                        >
                          Política de Privacidad
                        </a>{" "}
                        y consiento el tratamiento de mis datos para gestionar mi solicitud de información.
                      </span>
                    </label>
                    {error && (
                      <p role="alert" className="text-gm-red text-xs mt-2">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gm-orange text-gm-black font-700 text-sm rounded-xl hover:bg-gm-red transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Enviar solicitud de presupuesto"
                  >
                    {loading ? "Enviando..." : "Solicitar presupuesto gratuito"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
