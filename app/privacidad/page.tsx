import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${SITE.name}`,
  description:
    "Política de Privacidad de G&M Reparaciones conforme al RGPD y LOPDGDD.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-gm-muted text-sm mb-10">
          Conforme al RGPD (UE) 2016/679 y la LOPDGDD (LO 3/2018). Última actualización:{" "}
          {new Date().toLocaleDateString("es-ES")}
        </p>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            1. Responsable del tratamiento (Art. 13 RGPD)
          </h2>
          <div className="space-y-1 text-sm text-gm-muted">
            <p>
              <strong className="text-gm-text">Denominación:</strong> {SITE.razonSocial}{" "}
              <em className="text-gm-orange">[PLACEHOLDER]</em>
            </p>
            <p>
              <strong className="text-gm-text">NIF:</strong> {SITE.nif}{" "}
              <em className="text-gm-orange">[PLACEHOLDER]</em>
            </p>
            <p>
              <strong className="text-gm-text">Dirección:</strong> {SITE.direccion},{" "}
              {SITE.codigoPostal} {SITE.localidad} <em className="text-gm-orange">[PLACEHOLDER]</em>
            </p>
            <p>
              <strong className="text-gm-text">Email de contacto:</strong> {SITE.email}{" "}
              <em className="text-gm-orange">[PLACEHOLDER]</em>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            2. Datos personales que tratamos
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            Tratamos los datos personales que nos proporcionas a través del formulario de contacto del sitio web. Concretamente:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gm-muted ml-2">
            <li>Nombre y apellidos</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico (si se facilita)</li>
            <li>Descripción de la avería y tipo de electrodoméstico</li>
            <li>Datos de navegación (si se aceptan cookies analíticas)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            3. Finalidad y base jurídica del tratamiento
          </h2>
          <div className="space-y-4 text-sm text-gm-muted">
            <div>
              <p className="font-600 text-gm-text mb-1">Gestión de consultas y solicitudes de presupuesto</p>
              <p>Base jurídica: Ejecución de un precontrato o contrato (Art. 6.1.b RGPD). Los datos se usarán para responder a tu consulta y, si procede, formalizar un contrato de prestación de servicios.</p>
            </div>
            <div>
              <p className="font-600 text-gm-text mb-1">Comunicaciones comerciales (con consentimiento)</p>
              <p>Base jurídica: Consentimiento del interesado (Art. 6.1.a RGPD). Solo si otorgas consentimiento expreso para comunicaciones de marketing.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            4. Plazo de conservacion de los datos
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Los datos de contacto se conservarán durante el tiempo necesario para atender tu solicitud y, en caso de formalizarse un contrato, durante el plazo legalmente establecido para el ejercicio de acciones derivadas del mismo (mínimo 5 años según legislación civil y mercantil). Los datos de analítica se conservarán según los períodos establecidos por el proveedor de herramienta analítica.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            5. Destinatarios y transferencias internacionales
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            Los datos no se cederán a terceros, salvo obligación legal. Si utilizamos proveedores de servicios (por ejemplo, plataforma de correo electrónico o formularios), actuarán como encargados del tratamiento bajo contrato conforme al Art. 28 RGPD.
          </p>
          <p className="text-gm-muted text-sm leading-relaxed">
            <em className="text-gm-orange">[PLACEHOLDER: Si usas Google Analytics, Formspree u otro proveedor externo que realice transferencias internacionales, descríbelo aquí con las garantías aplicables]</em>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            6. Derechos del interesado (RGPD Arts. 15-22)
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed mb-3">
            Puedes ejercitar en cualquier momento los siguientes derechos:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gm-muted ml-2 mb-4">
            <li>Acceso a tus datos personales</li>
            <li>Rectificacion de datos inexactos o incompletos</li>
            <li>Supresión ("derecho al olvido")</li>
            <li>Limitación del tratamiento</li>
            <li>Portabilidad de los datos</li>
            <li>Oposición al tratamiento</li>
            <li>Retirada del consentimiento en cualquier momento</li>
          </ul>
          <p className="text-gm-muted text-sm leading-relaxed">
            Para ejercitar estos derechos, envia un correo a <a href={`mailto:${SITE.email}`} className="text-gm-cyan hover:text-white">{SITE.email}</a> indicando el derecho que deseas ejercitar y adjuntando una copia de tu documento de identidad.
          </p>
          <p className="text-gm-muted text-sm leading-relaxed mt-3">
            Si consideras que el tratamiento no es conforme al RGPD, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-gm-cyan hover:text-white">www.aepd.es</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading font-700 text-white text-lg mb-3">
            7. Uso de cookies
          </h2>
          <p className="text-gm-muted text-sm leading-relaxed">
            Este sitio web utiliza cookies. Para información detallada, consulta nuestra{" "}
            <Link href="/cookies" className="text-gm-cyan hover:text-white transition-colors">
              Política de Cookies
            </Link>.
          </p>
        </section>

        <div className="border-t border-gm-border pt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/aviso-legal" className="text-gm-cyan hover:text-white transition-colors">
            Aviso Legal
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
