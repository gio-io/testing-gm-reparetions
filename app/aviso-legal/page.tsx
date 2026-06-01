import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Aviso Legal | ${SITE.name}`,
  description: "Aviso Legal de G&M Reparaciones conforme a la LSSI-CE Art. 10.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gm-black text-gm-text">
      {/* Nav back */}
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
          Aviso Legal
        </h1>
        <p className="text-gm-muted text-sm mb-10">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>

        {/* ── LSSI-CE Art. 10 — mandatory data ── */}
        <section className="mb-8 p-5 bg-gm-card rounded-xl border border-gm-border">
          <h2 className="font-heading font-700 text-white text-lg mb-4">
            1. Datos identificativos del titular (LSSI-CE Art. 10)
          </h2>
          <div className="space-y-2 text-sm">
            <p><span className="text-gm-muted w-40 inline-block">Denominación social:</span> <span className="text-gm-text">{SITE.razonSocial} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
            <p><span className="text-gm-muted w-40 inline-block">NIF / CIF:</span> <span className="text-gm-text">{SITE.nif} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
            <p><span className="text-gm-muted w-40 inline-block">Domicilio:</span> <span className="text-gm-text">{SITE.direccion}, {SITE.codigoPostal} {SITE.localidad}, {SITE.provincia} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
            <p><span className="text-gm-muted w-40 inline-block">Teléfono:</span> <span className="text-gm-text">{SITE.phone} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
            <p><span className="text-gm-muted w-40 inline-block">Email:</span> <span className="text-gm-text">{SITE.email} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
            <p><span className="text-gm-muted w-40 inline-block">Registro:</span> <span className="text-gm-text">{SITE.registroMercantil} <em className="text-gm-orange">[PLACEHOLDER — actualizar]</em></span></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            2. Objeto y condiciones de uso
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            El presente Aviso Legal regula el acceso y uso del sitio web {SITE.url} (en adelante, "el Sitio") del que es titular {SITE.razonSocial}.
          </p>
          <p className="text-gm-muted text-sm leading-relaxed">
            El acceso al Sitio implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            3. Propiedad intelectual e industrial
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Todos los contenidos del Sitio (textos, fotografías, gráficos, imágenes, tecnología, software, logotipos y marcas) son propiedad de {SITE.razonSocial} o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución o modificación de los contenidos sin autorización expresa del titular.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            4. Responsabilidad
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            {SITE.razonSocial} no se hace responsable de los daños o perjuicios derivados del uso del Sitio, de la indisponibilidad del servicio o de la presencia de virus u otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos de los usuarios.
          </p>
          <p className="text-gm-muted text-sm leading-relaxed">
            Los enlaces a sitios web de terceros contenidos en el Sitio se ofrecen solo a efectos informativos. {SITE.razonSocial} no controla dichos sitios ni asume responsabilidad sobre sus contenidos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            5. Legislacion aplicable y jurisdiccion
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio, las partes se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales de Valladolid.
          </p>
        </section>

        <div className="border-t border-gm-border pt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/privacidad" className="text-gm-cyan hover:text-white transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/cookies" className="text-gm-cyan hover:text-white transition-colors">
            Política de Cookies
          </Link>
          <Link href="/" className="text-gm-muted hover:text-white transition-colors">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
