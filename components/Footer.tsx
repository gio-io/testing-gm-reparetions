"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, WhatsappLogo, Envelope, Clock, MapPin } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

/**
 * Footer — dark, accessible, legal links required for Spain LSSI-CE
 * Phone appears here as final CTA repetition (6th+ appearance on page)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gm-black border-t border-gm-border" aria-label="Pie de página">
      {/* Pre-footer CTA strip */}
      <div className="bg-gm-card border-b border-gm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-heading font-700 text-white text-lg mb-1">
                ¿Avería urgente? Llámanos ahora.
              </p>
              <p className="text-gm-muted text-sm">
                Atención personalizada de lunes a viernes, {SITE.horaApertura}-{SITE.horaCierre}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phoneDial}`}
                className="flex items-center gap-2 px-5 py-3 bg-gm-orange text-gm-black font-700 text-sm rounded-xl hover:bg-gm-red transition-colors cursor-pointer"
                aria-label={`Llamar a G&M Reparaciones: ${SITE.phone}`}
              >
                <Phone size={17} weight="fill" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappDial}?text=${SITE.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gm-cyan text-gm-black font-700 text-sm rounded-xl hover:bg-gm-cyan-dark transition-colors cursor-pointer"
              >
                <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="G&M Reparaciones">
              <Image
                src="/assets/logo.jpg"
                alt="Logo G&M Reparaciones"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-heading font-800 text-white">G&amp;M Reparaciones</p>
                <p className="text-gm-muted text-xs">Servicio técnico de electrodomésticos</p>
              </div>
            </Link>
            <p className="text-gm-muted text-sm leading-relaxed max-w-sm mb-5">
              Técnicos cualificados para la reparación de electrodomésticos en Valladolid y provincia. Presupuesto sin compromiso y garantía por escrito.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gm-muted">
                <Clock size={14} aria-hidden="true" />
                <span>Lun-Vie {SITE.horaApertura}-{SITE.horaCierre}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gm-muted">
                <MapPin size={14} aria-hidden="true" />
                <span>Valladolid y provincia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gm-muted">
                <Envelope size={14} aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-700 text-white text-sm mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                ["Lavadoras", "#lavadoras"],
                ["Frigoríficos", "#frigorifico"],
                ["Hornos", "#hornos"],
                ["Lavavajillas", "#lavavajillas"],
                ["Vitrocerámica", "#vitroceramica"],
                ["Campanas", "#campanas"],
                ["Calentadores", "#calentadores"],
                ["Aires acondicionados", "#aires"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gm-muted text-sm hover:text-gm-orange transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-700 text-white text-sm mb-4">Información legal</h3>
            <ul className="space-y-2">
              {[
                ["Aviso Legal", "/aviso-legal"],
                ["Política de Privacidad", "/privacidad"],
                ["Política de Cookies", "/cookies"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gm-muted text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-heading font-700 text-white text-sm mb-3">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`tel:${SITE.phoneDial}`}
                    className="flex items-center gap-2 text-gm-muted text-sm hover:text-gm-orange transition-colors"
                  >
                    <Phone size={13} aria-hidden="true" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE.whatsappDial}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gm-muted text-sm hover:text-gm-cyan transition-colors"
                  >
                    <WhatsappLogo size={13} aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gm-muted text-xs">
            &copy; {currentYear} {SITE.razonSocial}. NIF: {SITE.nif}. Todos los derechos reservados.
          </p>
          <p className="text-gm-muted text-xs">
            Valladolid, {SITE.provincia}, España
          </p>
        </div>
      </div>
    </footer>
  );
}
