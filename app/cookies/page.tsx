import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Política de Cookies | ${SITE.name}`,
  description:
    "Política de Cookies de G&M Reparaciones conforme a la LSSI-CE Art. 22.2 y el RGPD.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gm-black text-gm-text">
      <div className="border-b border-gm-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-gm-cyan text-sm hover:text-white transition-colors"
            aria-label="Volver a la página de inicio"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-heading font-900 text-white text-3xl mb-2">
          Política de Cookies
        </h1>
        <p className="text-gm-muted text-sm mb-10">
          Conforme a la LSSI-CE Art. 22.2 y el RGPD. Última actualización:{" "}
          {new Date().toLocaleDateString("es-ES")}
        </p>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            1. Qué son las cookies
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Las cookies son pequeños archivos de texto que un sitio web almacena en el dispositivo del usuario cuando visita la página. Permiten que el sitio recuerde las preferencias del usuario y recopile información sobre cómo se navega por el sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            2. Tipos de cookies que utilizamos
          </h2>

          <div className="space-y-5">
            {/* Necesarias */}
            <div className="p-4 bg-gm-card rounded-xl border border-gm-cyan/20">
              <h3 className="font-700 text-gm-cyan text-sm mb-2">
                Cookies necesarias (siempre activas)
              </h3>
              <p className="text-gm-muted text-sm leading-relaxed mb-3">
                Estas cookies son imprescindibles para el funcionamiento del sitio web. No requieren consentimiento y no pueden desactivarse.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-gm-muted">
                  <thead>
                    <tr className="border-b border-gm-border">
                      <th className="text-left py-1.5 pr-4 text-gm-text font-600">Nombre</th>
                      <th className="text-left py-1.5 pr-4 text-gm-text font-600">Propósito</th>
                      <th className="text-left py-1.5 text-gm-text font-600">Duracion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1.5 pr-4">gm-cookie-consent</td>
                      <td className="py-1.5 pr-4">Almacena las preferencias de cookies del usuario</td>
                      <td className="py-1.5">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analiticas */}
            <div className="p-4 bg-gm-card rounded-xl border border-gm-border">
              <h3 className="font-700 text-gm-text text-sm mb-2">
                Cookies analíticas (requieren consentimiento)
              </h3>
              <p className="text-gm-muted text-sm leading-relaxed mb-3">
                Nos permiten entender cómo los usuarios interactúan con el sitio web. Solo se activan si das tu consentimiento.
              </p>
              <p className="text-gm-muted text-sm italic">
                <em className="text-gm-orange">[PLACEHOLDER: Si usas Google Analytics u otra herramienta, detalla aquí las cookies concretas que instala, su propósito y duración. Ejemplo: _ga (Google Analytics, duración 2 años), _gid (1 día), _gat (1 minuto)]</em>
              </p>
            </div>

            {/* Marketing */}
            <div className="p-4 bg-gm-card rounded-xl border border-gm-border">
              <h3 className="font-700 text-gm-text text-sm mb-2">
                Cookies de marketing (requieren consentimiento)
              </h3>
              <p className="text-gm-muted text-sm leading-relaxed">
                Se usan para mostrar publicidad relevante en plataformas de terceros. Solo se activan si das tu consentimiento expreso.
              </p>
              <p className="text-gm-muted text-sm italic mt-2">
                <em className="text-gm-orange">[PLACEHOLDER: Detalla las cookies de plataformas de publicidad que utilices, si las hay]</em>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            3. Cookies de WhatsApp
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            El sitio web incluye un enlace directo a WhatsApp. Al hacer clic en el botón de WhatsApp, el usuario es redirigido a los servidores de Meta Platforms. El tratamiento de datos en ese contexto se rige por la Política de Privacidad de WhatsApp / Meta. No instalamos cookies propias de WhatsApp en tu dispositivo a través de este sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            4. Cómo gestionar o retirar el consentimiento
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            Puedes gestionar tus preferencias de cookies en cualquier momento haciendo clic en el botón "Gestionar cookies" del banner de cookies o a través de los ajustes de tu navegador. Ten en cuenta que bloquear determinadas cookies puede afectar a la funcionalidad del sitio.
          </p>
          <p className="text-gm-muted text-sm leading-relaxed">
            También puedes configurar tu navegador para bloquear o eliminar cookies:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gm-muted ml-2 mt-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gm-cyan hover:text-white">Google Chrome</a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-gm-cyan hover:text-white">Mozilla Firefox</a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gm-cyan hover:text-white">Safari</a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            5. Do Not Track (DNT) y Global Privacy Control (GPC)
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Nuestro sitio web respeta las señales Do Not Track (DNT) y Global Privacy Control (GPC). Si tu navegador envía alguna de estas señales, no activaremos cookies no esenciales automáticamente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            6. Actualizaciones de esta política
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Esta política puede actualizarse para reflejar cambios en las cookies que utilizamos o en la legislación aplicable. Te recomendamos revisar esta página periódicamente.
          </p>
        </section>

        <div className="border-t border-gm-border pt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/aviso-legal" className="text-gm-cyan hover:text-white transition-colors">
            Aviso Legal
          </Link>
          <Link href="/privacidad" className="text-gm-cyan hover:text-white transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/" className="text-gm-muted hover:text-white transition-colors">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
